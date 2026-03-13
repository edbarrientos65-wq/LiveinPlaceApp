import { auth } from "@/auth";
import { db } from "@/db";
import { assessments } from "@/db/schema";
import { eq, and } from "drizzle-orm";
import { NextResponse } from "next/server";
import Anthropic from "@anthropic-ai/sdk";

export async function POST(
  _req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const session = await auth();
  if (!session?.user?.id) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { id } = await params;

  const [assessment] = await db
    .select()
    .from(assessments)
    .where(and(eq(assessments.id, id), eq(assessments.userId, session.user.id)));

  if (!assessment) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }

  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) {
    return NextResponse.json(
      { error: "ANTHROPIC_API_KEY is not configured" },
      { status: 500 }
    );
  }

  const client = new Anthropic({ apiKey });
  const modifications = assessment.modifications as string[];

  const message = await client.messages.create({
    model: "claude-sonnet-4-20250514",
    max_tokens: 1024,
    messages: [
      {
        role: "user",
        content: `You are an insurance claims specialist. Generate a professional insurance claim document for a home modification assessment.

Patient: ${assessment.firstName} ${assessment.lastName}
Date of Birth: ${assessment.dateOfBirth}
Insurance Type: ${assessment.insuranceType}
Mobility Challenges: ${assessment.mobilityChallenges || "None reported"}
Recommended Modifications: ${modifications.join(", ")}
Assessment Date: ${new Date(assessment.createdAt).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}

Generate the claim document with the following sections:
1. Claim Summary - brief overview
2. Medical Necessity Justification - why these modifications are needed based on the patient's mobility challenges
3. Itemized Modifications - list each modification with a brief clinical justification
4. Coverage Details - relevant coverage information based on the insurance type (${assessment.insuranceType})
5. Recommended Next Steps - what the patient/provider should do next

Use a professional but clear tone. Format with markdown headings and bullet points.`,
      },
    ],
  });

  const claimText =
    message.content[0].type === "text" ? message.content[0].text : "";

  return NextResponse.json({ claim: claimText });
}
