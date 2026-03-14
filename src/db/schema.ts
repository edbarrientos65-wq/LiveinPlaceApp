import { pgTable, text, timestamp, uuid, date, jsonb, index, pgEnum } from "drizzle-orm/pg-core";
import { relations, type InferSelectModel, type InferInsertModel } from "drizzle-orm";

export const users = pgTable("users", {
  id: uuid("id").defaultRandom().primaryKey(),
  name: text("name"),
  email: text("email").notNull().unique(),
  passwordHash: text("password_hash"),
  image: text("image"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull().$onUpdate(() => new Date()),
});

export const assessments = pgTable("assessments", {
  id: uuid("id").defaultRandom().primaryKey(),
  userId: uuid("user_id").notNull().references(() => users.id),
  firstName: text("first_name").notNull(),
  lastName: text("last_name").notNull(),
  dateOfBirth: date("date_of_birth").notNull(),
  insuranceType: text("insurance_type").notNull(),
  mobilityChallenges: text("mobility_challenges"),
  modifications: jsonb("modifications").$type<string[]>().notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull().$onUpdate(() => new Date()),
});

export const claimStatusEnum = pgEnum("claim_status", [
  "draft",
  "submitted",
  "approved",
  "denied",
]);

export const claims = pgTable("claims", {
  id: uuid("id").defaultRandom().primaryKey(),
  userId: uuid("user_id").notNull().references(() => users.id, { onDelete: "restrict" }),
  assessmentId: uuid("assessment_id").notNull().references(() => assessments.id, { onDelete: "cascade" }),
  status: claimStatusEnum("status").notNull().default("draft"),
  content: text("content").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull().$onUpdate(() => new Date()),
}, (t) => [
  index("claims_assessment_id_idx").on(t.assessmentId),
  index("claims_user_status_idx").on(t.userId, t.status),
]);

export const usersRelations = relations(users, ({ many }) => ({
  assessments: many(assessments),
  claims: many(claims),
}));

export const assessmentsRelations = relations(assessments, ({ one, many }) => ({
  user: one(users, {
    fields: [assessments.userId],
    references: [users.id],
  }),
  claims: many(claims),
}));

export const claimsRelations = relations(claims, ({ one }) => ({
  assessment: one(assessments, {
    fields: [claims.assessmentId],
    references: [assessments.id],
  }),
  user: one(users, {
    fields: [claims.userId],
    references: [users.id],
  }),
}));

export type Claim = InferSelectModel<typeof claims>;
export type NewClaim = InferInsertModel<typeof claims>;
export type Assessment = InferSelectModel<typeof assessments>;
export type User = InferSelectModel<typeof users>;
