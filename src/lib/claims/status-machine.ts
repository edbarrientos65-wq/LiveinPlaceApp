import { claimStatusEnum } from "@/db/schema";

export type ClaimStatus = (typeof claimStatusEnum.enumValues)[number];

const VALID_TRANSITIONS: Record<ClaimStatus, readonly ClaimStatus[]> = {
  draft: ["submitted"],
  submitted: ["approved", "denied"],
  denied: ["draft"],
  approved: [],
} as const;

export function isValidTransition(from: ClaimStatus, to: ClaimStatus): boolean {
  return VALID_TRANSITIONS[from].includes(to);
}

export function getValidTransitions(status: ClaimStatus): readonly ClaimStatus[] {
  return VALID_TRANSITIONS[status];
}
