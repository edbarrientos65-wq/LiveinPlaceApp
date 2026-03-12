import { auth } from "@/auth";
import { db } from "@/db";
import { assessments } from "@/db/schema";
import { eq, desc } from "drizzle-orm";
import { NextResponse } from "next/server";

export async function GET() {
  const session = await auth();
  if (!session?.user?.id) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const rows = await db
    .select()
    .from(assessments)
    .where(eq(assessments.userId, session.user.id))
    .orderBy(desc(assessments.createdAt));

  return NextResponse.json(rows);
}

export async function POST(req: Request) {
  const session = await auth();
  if (!session?.user?.id) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const body = await req.json();
  const { firstName, lastName, dateOfBirth, insuranceType, mobilityChallenges, modifications } = body;

  if (!firstName || !lastName || !dateOfBirth || !insuranceType || !modifications?.length) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  const [assessment] = await db
    .insert(assessments)
    .values({
      userId: session.user.id,
      firstName,
      lastName,
      dateOfBirth,
      insuranceType,
      mobilityChallenges: mobilityChallenges || null,
      modifications,
    })
    .returning();

  return NextResponse.json(assessment, { status: 201 });
}
