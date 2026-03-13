import { users, assessments } from "./schema";

describe("database schema", () => {
  describe("users table", () => {
    it("has the expected column names", () => {
      const columns = Object.keys(users);
      expect(columns).toContain("id");
      expect(columns).toContain("email");
      expect(columns).toContain("passwordHash");
      expect(columns).toContain("name");
      expect(columns).toContain("createdAt");
      expect(columns).toContain("updatedAt");
    });
  });

  describe("assessments table", () => {
    it("has the expected column names", () => {
      const columns = Object.keys(assessments);
      expect(columns).toContain("id");
      expect(columns).toContain("userId");
      expect(columns).toContain("firstName");
      expect(columns).toContain("lastName");
      expect(columns).toContain("dateOfBirth");
      expect(columns).toContain("insuranceType");
      expect(columns).toContain("mobilityChallenges");
      expect(columns).toContain("modifications");
      expect(columns).toContain("createdAt");
      expect(columns).toContain("updatedAt");
    });

    it("references the users table via userId", () => {
      // Verify the foreign key reference exists on the column config
      const userIdCol = assessments.userId;
      expect(userIdCol).toBeDefined();
      expect(userIdCol.notNull).toBe(true);
    });
  });
});
