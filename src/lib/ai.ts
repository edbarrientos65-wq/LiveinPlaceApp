import { anthropic } from "@ai-sdk/anthropic";
import { generateText } from "ai";
import type { Assessment } from "@/db/schema";

export async function generateClaimContent(assessment: Assessment): Promise<string> {
  const modifications = assessment.modifications as string[];

  const { text } = await generateText({
    model: anthropic("claude-sonnet-4-20250514"),
    system:
      "You are a healthcare claims specialist. Generate professional insurance claim documents for home modifications.",
    prompt: `Generate a home modification insurance claim document based on the following patient assessment:

Patient: ${assessment.firstName} ${assessment.lastName}
Date of Birth: ${assessment.dateOfBirth}
Insurance Type: ${assessment.insuranceType}
Mobility Challenges: ${assessment.mobilityChallenges || "Not specified"}
Recommended Modifications: ${modifications.join(", ")}

Generate a professional insurance claim document that includes:
1. Patient information summary
2. Clinical justification for each recommended modification
3. Description of mobility challenges and how modifications address them
4. Requested modifications with estimated necessity level

Format as a clean, professional document suitable for insurance submission.`,
    maxRetries: 2,
    abortSignal: AbortSignal.timeout(60_000),
  });

  if (!text.trim()) {
    throw new Error("AI generation returned empty content");
  }

  return text;
}
