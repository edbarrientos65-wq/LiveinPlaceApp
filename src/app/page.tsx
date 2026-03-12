import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="flex items-center justify-between px-6 py-4 border-b">
        <h1 className="text-xl font-bold">LiveInPlace</h1>
        <div className="flex gap-3">
          <Link href="/login">
            <Button variant="outline">Log in</Button>
          </Link>
          <Link href="/register">
            <Button>Get Started</Button>
          </Link>
        </div>
      </header>

      <main className="flex flex-1 flex-col items-center justify-center px-6 text-center">
        <h2 className="max-w-2xl text-4xl font-bold tracking-tight sm:text-5xl">
          Home modifications made simple
        </h2>
        <p className="mt-4 max-w-lg text-lg text-muted-foreground">
          LiveInPlace helps healthcare professionals assess, plan, and manage
          home modifications so patients can safely age in place.
        </p>
        <div className="mt-8 flex gap-4">
          <Link href="/register">
            <Button size="lg">Create an Account</Button>
          </Link>
          <Link href="/login">
            <Button size="lg" variant="outline">
              Sign In
            </Button>
          </Link>
        </div>
      </main>

      <footer className="border-t py-6 text-center text-sm text-muted-foreground">
        &copy; {new Date().getFullYear()} LiveInPlace. All rights reserved.
      </footer>
    </div>
  );
}
