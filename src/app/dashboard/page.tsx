import { auth } from "@/auth";
import { redirect } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { SignOutButton } from "./sign-out-button";

export default async function DashboardPage() {
  const session = await auth();
  if (!session?.user) redirect("/login");

  return (
    <div className="flex min-h-screen flex-col">
      <header className="flex items-center justify-between px-6 py-4 border-b">
        <h1 className="text-xl font-bold">LiveInPlace</h1>
        <div className="flex items-center gap-4">
          <span className="text-sm text-muted-foreground">
            {session.user.name || session.user.email}
          </span>
          <SignOutButton />
        </div>
      </header>

      <main className="flex flex-1 items-center justify-center px-6">
        <div className="text-center">
          <h2 className="text-2xl font-semibold">Welcome, {session.user.name || "there"}!</h2>
          <p className="mt-2 text-muted-foreground">
            Start a new patient assessment or review existing ones.
          </p>
          <div className="mt-6">
            <Link href="/dashboard/assessments/new">
              <Button size="lg">New Assessment</Button>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
