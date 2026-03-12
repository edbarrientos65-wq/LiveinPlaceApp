import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Shield,
  ClipboardCheck,
  Home as HomeIcon,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

const benefits = [
  {
    icon: ClipboardCheck,
    title: "Streamlined Assessments",
    description:
      "Conduct thorough patient home assessments on any device. Capture mobility challenges, required modifications, and insurance details in minutes.",
  },
  {
    icon: HomeIcon,
    title: "Modification Tracking",
    description:
      "Track every recommended modification from grab bars to entry ramps. Keep a complete record tied to each patient for easy reference.",
  },
  {
    icon: Shield,
    title: "Insurance-Ready Documentation",
    description:
      "Generate documentation aligned with Medicare Advantage, Traditional Medicare, and Medicaid requirements to support claims and approvals.",
  },
];

const checklist = [
  "HIPAA-conscious data handling",
  "Works on tablets in the field",
  "Supports multiple insurance types",
  "Instant cloud sync with Neon PostgreSQL",
];

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      {/* Nav */}
      <header className="sticky top-0 z-50 border-b bg-white/80 backdrop-blur-sm">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
              <HomeIcon className="h-4 w-4 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold text-foreground">LiveInPlace</span>
          </div>
          <div className="flex gap-3">
            <Link href="/login">
              <Button variant="ghost">Log in</Button>
            </Link>
            <Link href="/register">
              <Button>Get Started</Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/20" />
        <div className="relative mx-auto max-w-6xl px-6 py-24 sm:py-32 lg:py-40">
          <div className="max-w-2xl">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary">
              <Shield className="h-3.5 w-3.5" />
              Trusted by healthcare professionals
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Home modifications{" "}
              <span className="text-primary">made simple</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground sm:text-xl">
              LiveInPlace helps field technicians assess, document, and manage
              home modifications so patients can safely age in place. From intake
              to insurance — all in one platform.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/register">
                <Button size="lg" className="w-full sm:w-auto gap-2">
                  Start Free Trial
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <Link href="/login">
                <Button size="lg" variant="outline" className="w-full sm:w-auto">
                  Sign In to Dashboard
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="border-t bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Everything you need in the field
            </h2>
            <p className="mt-3 text-lg text-muted-foreground">
              Purpose-built tools for home modification professionals.
            </p>
          </div>
          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {benefits.map((b) => (
              <div
                key={b.title}
                className="rounded-xl border bg-card p-6 shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10">
                  <b.icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">{b.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {b.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Checklist CTA */}
      <section className="border-t py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="rounded-2xl bg-gradient-to-br from-primary to-primary/80 p-8 sm:p-12 lg:flex lg:items-center lg:gap-12">
            <div className="lg:flex-1">
              <h2 className="text-2xl font-bold text-primary-foreground sm:text-3xl">
                Ready to modernize your workflow?
              </h2>
              <p className="mt-3 text-primary-foreground/80">
                Join healthcare teams that trust LiveInPlace to manage patient
                home assessments and modifications.
              </p>
              <ul className="mt-6 space-y-3">
                {checklist.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-primary-foreground/90">
                    <CheckCircle2 className="h-4 w-4 flex-shrink-0 text-secondary" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-8 lg:mt-0 lg:flex-shrink-0">
              <Link href="/register">
                <Button
                  size="lg"
                  variant="secondary"
                  className="w-full gap-2 lg:w-auto"
                >
                  Create Your Account
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-white py-8">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 sm:flex-row">
          <div className="flex items-center gap-2">
            <div className="flex h-6 w-6 items-center justify-center rounded bg-primary">
              <HomeIcon className="h-3 w-3 text-primary-foreground" />
            </div>
            <span className="text-sm font-semibold text-foreground">LiveInPlace</span>
          </div>
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} LiveInPlace. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
