import { auth } from "@/auth";
import { db } from "@/db";
import { claims, claimStatusEnum } from "@/db/schema";
import { eq, and } from "drizzle-orm";
import { NextResponse } from "next/server";
import { revalidatePath } from "next/cache";
import { z } from "zod";
import { isValidTransition } from "@/lib/claims/status-machine";

const updateClaimSchema = z.object({
  content: z.string().min(1).max(50000).optional(),
  status: z.enum(claimStatusEnum.enumValues).optional(),
});

export async function GET(
  _req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const session = await auth();
  if (!session?.user?.id) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { id } = await params;

  const claim = await db.query.claims.findFirst({
    where: (claims, { and, eq }) =>
      and(eq(claims.id, id), eq(claims.userId, session.user!.id!)),
    with: {
      assessment: true,
    },
  });

  if (!claim) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }

  return NextResponse.json(claim);
}

export async function PATCH(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const session = await auth();
  if (!session?.user?.id) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { id } = await params;
  const body = await req.json();
  const parsed = updateClaimSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { error: "Invalid input", details: parsed.error.flatten() },
      { status: 400 }
    );
  }

  const [existing] = await db
    .select()
    .from(claims)
    .where(and(eq(claims.id, id), eq(claims.userId, session.user.id)))
    .limit(1);

  if (!existing) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }

  if (parsed.data.content && existing.status !== "draft") {
    return NextResponse.json(
      { error: "Only draft claims can be edited" },
      { status: 400 }
    );
  }

  if (parsed.data.status) {
    if (!isValidTransition(existing.status, parsed.data.status)) {
      return NextResponse.json(
        { error: `Cannot transition from ${existing.status} to ${parsed.data.status}` },
        { status: 400 }
      );
    }

    // Optimistic locking: only update if status hasn't changed
    const [updated] = await db
      .update(claims)
      .set({
        ...(parsed.data.content ? { content: parsed.data.content } : {}),
        status: parsed.data.status,
      })
      .where(
        and(
          eq(claims.id, id),
          eq(claims.userId, session.user.id),
          eq(claims.status, existing.status)
        )
      )
      .returning();

    if (!updated) {
      return NextResponse.json(
        { error: "Claim was modified by another request. Please refresh." },
        { status: 409 }
      );
    }

    revalidatePath("/dashboard");
    revalidatePath("/dashboard/claims");
    revalidatePath(`/dashboard/claims/${id}`);

    return NextResponse.json(updated);
  }

  if (parsed.data.content) {
    const [updated] = await db
      .update(claims)
      .set({ content: parsed.data.content })
      .where(and(eq(claims.id, id), eq(claims.userId, session.user.id)))
      .returning();

    revalidatePath(`/dashboard/claims/${id}`);

    return NextResponse.json(updated);
  }

  return NextResponse.json({ error: "No changes provided" }, { status: 400 });
}

export async function DELETE(
  _req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const session = await auth();
  if (!session?.user?.id) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { id } = await params;

  const [existing] = await db
    .select()
    .from(claims)
    .where(and(eq(claims.id, id), eq(claims.userId, session.user.id)))
    .limit(1);

  if (!existing) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }

  if (existing.status !== "draft") {
    return NextResponse.json(
      { error: "Only draft claims can be deleted" },
      { status: 400 }
    );
  }

  await db
    .delete(claims)
    .where(and(eq(claims.id, id), eq(claims.userId, session.user.id)));

  revalidatePath("/dashboard");
  revalidatePath("/dashboard/claims");

  return NextResponse.json({ success: true });
}
