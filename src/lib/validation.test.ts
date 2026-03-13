import { validateAssessmentInput, validateRegistrationInput } from "./validation";

describe("validateAssessmentInput", () => {
  const validInput = {
    firstName: "John",
    lastName: "Doe",
    dateOfBirth: "1945-03-15",
    insuranceType: "Medicare Advantage",
    modifications: ["24-inch Grab Bar"],
    mobilityChallenges: "Uses a walker",
  };

  it("passes with valid input", () => {
    const result = validateAssessmentInput(validInput);
    expect(result.valid).toBe(true);
    expect(result.errors).toHaveLength(0);
  });

  it("fails when firstName is missing", () => {
    const result = validateAssessmentInput({ ...validInput, firstName: "" });
    expect(result.valid).toBe(false);
    expect(result.errors).toContain("First name is required");
  });

  it("fails when lastName is missing", () => {
    const result = validateAssessmentInput({ ...validInput, lastName: undefined });
    expect(result.valid).toBe(false);
    expect(result.errors).toContain("Last name is required");
  });

  it("fails when dateOfBirth is missing", () => {
    const result = validateAssessmentInput({ ...validInput, dateOfBirth: "" });
    expect(result.valid).toBe(false);
    expect(result.errors).toContain("Date of birth is required");
  });

  it("fails with invalid insurance type", () => {
    const result = validateAssessmentInput({ ...validInput, insuranceType: "Private" });
    expect(result.valid).toBe(false);
    expect(result.errors).toContain("Invalid insurance type");
  });

  it("accepts all valid insurance types", () => {
    for (const type of ["Medicare Advantage", "Traditional Medicare", "Medicaid"]) {
      const result = validateAssessmentInput({ ...validInput, insuranceType: type });
      expect(result.valid).toBe(true);
    }
  });

  it("fails when modifications is empty", () => {
    const result = validateAssessmentInput({ ...validInput, modifications: [] });
    expect(result.valid).toBe(false);
    expect(result.errors).toContain("At least one modification is required");
  });

  it("collects multiple errors at once", () => {
    const result = validateAssessmentInput({});
    expect(result.valid).toBe(false);
    expect(result.errors.length).toBeGreaterThanOrEqual(4);
  });
});

describe("validateRegistrationInput", () => {
  const validInput = {
    name: "Jane Smith",
    email: "jane@example.com",
    password: "securepass",
  };

  it("passes with valid input", () => {
    const result = validateRegistrationInput(validInput);
    expect(result.valid).toBe(true);
    expect(result.errors).toHaveLength(0);
  });

  it("fails when email is missing", () => {
    const result = validateRegistrationInput({ ...validInput, email: "" });
    expect(result.valid).toBe(false);
    expect(result.errors).toContain("Email is required");
  });

  it("fails with invalid email format", () => {
    const result = validateRegistrationInput({ ...validInput, email: "notanemail" });
    expect(result.valid).toBe(false);
    expect(result.errors).toContain("Invalid email format");
  });

  it("fails when password is too short", () => {
    const result = validateRegistrationInput({ ...validInput, password: "short" });
    expect(result.valid).toBe(false);
    expect(result.errors).toContain("Password must be at least 8 characters");
  });

  it("fails when password is missing", () => {
    const result = validateRegistrationInput({ ...validInput, password: undefined });
    expect(result.valid).toBe(false);
    expect(result.errors).toContain("Password is required");
  });
});
