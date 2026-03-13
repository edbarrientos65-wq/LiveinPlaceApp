import { auth } from "@/auth";
import { db } from "@/db";
import { claims, assessments } from "@/db/schema";
import { eq, desc } from "drizzle-orm";
import { NextResponse } from "next/server";
import { revalidatePath } from "next/cache";
import { z } from "zod";
import { generateClaimContent } from "@/lib/ai";

export const maxDuration = 60;

const createClaimSchema = z.object({
  assessmentId: z.string().uuid(),
});

export async function GET() {
  const session = await auth();
  if (!session?.user?.id) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const rows = await db
    .select({
      id: claims.id,
      status: claims.status,
      createdAt: claims.createdAt,
      updatedAt: claims.updatedAt,
      patientFirstName: assessments.firstName,
      patientLastName: assessments.lastName,
    })
    .from(claims)
    .innerJoin(assessments, eq(claims.assessmentId, assessments.id))
    .where(eq(claims.userId, session.user.id))
    .orderBy(desc(claims.createdAt));

  return NextResponse.json(rows);
}

export async function POST(req: Request) {
  const session = await auth();
  if (!session?.user?.id) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const body = await req.json();
  const parsed = createClaimSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { error: "Invalid input", details: parsed.error.flatten() },
      { status: 400 }
    );
  }

  const [assessment] = await db
    .select()
    .from(assessments)
    .where(
      eq(assessments.id, parsed.data.assessmentId)
    )
    .limit(1);

  if (!assessment) {
    return NextResponse.json({ error: "Assessment not found" }, { status: 404 });
  }

  if (assessment.userId !== session.user.id) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  let content: string;
  try {
    content = await generateClaimContent(assessment);
  } catch (error) {
    console.error("AI generation failed:", error);
    return NextResponse.json(
      { error: "Failed to generate claim. Please try again." },
      { status: 500 }
    );
  }

  const [claim] = await db
    .insert(claims)
    .values({
      userId: session.user.id,
      assessmentId: parsed.data.assessmentId,
      content,
    })
    .returning();

  revalidatePath("/dashboard");
  revalidatePath("/dashboard/claims");

  return NextResponse.json(claim, { status: 201 });
}
