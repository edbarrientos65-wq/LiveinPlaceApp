import { auth } from "@/auth";
import { redirect } from "next/navigation";
import { AssessmentForm } from "./assessment-form";

export default async function NewAssessmentPage() {
  const session = await auth();
  if (!session?.user) redirect("/login");

  return (
    <div className="flex min-h-screen flex-col">
      <header className="flex items-center justify-between px-6 py-4 border-b">
        <h1 className="text-xl font-bold">LiveInPlace</h1>
        <span className="text-sm text-muted-foreground">
          {session.user.name || session.user.email}
        </span>
      </header>

      <main className="flex-1 px-4 py-6 sm:px-6 lg:px-8 max-w-2xl mx-auto w-full">
        <h2 className="text-2xl font-semibold mb-6">New Patient Assessment</h2>
        <AssessmentForm />
      </main>
    </div>
  );
}
