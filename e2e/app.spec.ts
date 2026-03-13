import { test, expect } from "@playwright/test";

test.describe("Landing Page", () => {
  test("renders hero section and navigation", async ({ page }) => {
    await page.goto("/");

    await expect(page.locator("text=LiveInPlace").first()).toBeVisible();
    await expect(
      page.getByRole("heading", { name: "Home modifications made simple" })
    ).toBeVisible();
    await expect(page.getByRole("link", { name: "Log in" })).toBeVisible();
    await expect(page.getByRole("link", { name: "Get Started" })).toBeVisible();
  });

  test("shows benefit cards", async ({ page }) => {
    await page.goto("/");

    await expect(page.locator("text=Streamlined Assessments")).toBeVisible();
    await expect(page.locator("text=Modification Tracking")).toBeVisible();
    await expect(page.locator("text=Insurance-Ready Documentation")).toBeVisible();
  });

  test("CTA links navigate to register", async ({ page }) => {
    await page.goto("/");

    await page.getByRole("link", { name: "Start Free Trial" }).click();
    await expect(page).toHaveURL("/register");
  });
});

test.describe("Auth Pages", () => {
  test("login page renders form", async ({ page }) => {
    await page.goto("/login");

    await expect(page.locator("text=Welcome back")).toBeVisible();
    await expect(page.getByLabel("Email")).toBeVisible();
    await expect(page.getByLabel("Password")).toBeVisible();
    await expect(page.getByRole("button", { name: "Sign In" })).toBeVisible();
    await expect(page.getByRole("link", { name: "Create one" })).toBeVisible();
  });

  test("register page renders form", async ({ page }) => {
    await page.goto("/register");

    await expect(page.locator("text=Create an account")).toBeVisible();
    await expect(page.getByLabel("Full Name")).toBeVisible();
    await expect(page.getByLabel("Email")).toBeVisible();
    await expect(page.getByLabel("Password")).toBeVisible();
    await expect(page.getByRole("button", { name: "Create Account" })).toBeVisible();
    await expect(page.getByRole("link", { name: "Sign in" })).toBeVisible();
  });

  test("login page links to register", async ({ page }) => {
    await page.goto("/login");

    await page.getByRole("link", { name: "Create one" }).click();
    await expect(page).toHaveURL("/register");
  });

  test("register page links to login", async ({ page }) => {
    await page.goto("/register");

    await page.getByRole("link", { name: "Sign in" }).click();
    await expect(page).toHaveURL("/login");
  });

  test("shows error on invalid login", async ({ page }) => {
    await page.goto("/login");

    await page.getByLabel("Email").fill("bad@example.com");
    await page.getByLabel("Password").fill("wrongpassword");
    await page.getByRole("button", { name: "Sign In" }).click();

    await expect(page.locator("text=Invalid email or password")).toBeVisible();
  });
});

test.describe("Protected Routes", () => {
  test("dashboard redirects to login when not authenticated", async ({ page }) => {
    await page.goto("/dashboard");
    await expect(page).toHaveURL(/\/login/);
  });

  test("new assessment redirects to login when not authenticated", async ({ page }) => {
    await page.goto("/dashboard/assessments/new");
    await expect(page).toHaveURL(/\/login/);
  });
});
