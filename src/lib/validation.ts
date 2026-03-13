export function validateAssessmentInput(body: {
  firstName?: string;
  lastName?: string;
  dateOfBirth?: string;
  insuranceType?: string;
  modifications?: string[];
  mobilityChallenges?: string;
}) {
  const errors: string[] = [];

  if (!body.firstName?.trim()) errors.push("First name is required");
  if (!body.lastName?.trim()) errors.push("Last name is required");
  if (!body.dateOfBirth) errors.push("Date of birth is required");

  if (!body.insuranceType) {
    errors.push("Insurance type is required");
  } else {
    const valid = ["Medicare Advantage", "Traditional Medicare", "Medicaid"];
    if (!valid.includes(body.insuranceType)) {
      errors.push("Invalid insurance type");
    }
  }

  if (!body.modifications?.length) {
    errors.push("At least one modification is required");
  }

  return { valid: errors.length === 0, errors };
}

export function validateRegistrationInput(body: {
  email?: string;
  password?: string;
  name?: string;
}) {
  const errors: string[] = [];

  if (!body.email?.trim()) {
    errors.push("Email is required");
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(body.email)) {
    errors.push("Invalid email format");
  }

  if (!body.password) {
    errors.push("Password is required");
  } else if (body.password.length < 8) {
    errors.push("Password must be at least 8 characters");
  }

  return { valid: errors.length === 0, errors };
}
