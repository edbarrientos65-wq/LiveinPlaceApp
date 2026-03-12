import { AssessmentForm } from "./assessment-form";

export default function NewAssessmentPage() {
  return (
    <div className="mx-auto max-w-2xl space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">New Patient Assessment</h1>
        <p className="text-muted-foreground">
          Complete the form below to document a home modification assessment.
        </p>
      </div>
      <AssessmentForm />
    </div>
  );
}
