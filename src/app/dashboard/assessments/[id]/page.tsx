import { auth } from "@/auth";
import { redirect, notFound } from "next/navigation";
import { db } from "@/db";
import { assessments } from "@/db/schema";
import { eq, and } from "drizzle-orm";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  ArrowLeft,
  User,
  ShieldCheck,
  Activity,
  Wrench,
  Calendar,
} from "lucide-react";
import { DeleteAssessmentButton } from "./delete-button";
import { GenerateClaimButton } from "./generate-claim-button";

export default async function AssessmentDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const session = await auth();
  if (!session?.user) redirect("/login");

  const { id } = await params;

  const [assessment] = await db
    .select()
    .from(assessments)
    .where(and(eq(assessments.id, id), eq(assessments.userId, session.user.id!)));

  if (!assessment) notFound();

  const modifications = assessment.modifications as string[];

  return (
    <div className="mx-auto max-w-2xl space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link href="/dashboard">
            <Button variant="ghost" size="sm" className="gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back
            </Button>
          </Link>
          <div>
            <h1 className="text-2xl font-bold tracking-tight">
              {assessment.firstName} {assessment.lastName}
            </h1>
            <p className="text-sm text-muted-foreground">
              Assessment recorded {new Date(assessment.createdAt).toLocaleDateString()}
            </p>
          </div>
        </div>
        <DeleteAssessmentButton id={assessment.id} />
      </div>

      {/* Patient Information */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10">
              <User className="h-4 w-4 text-primary" />
            </div>
            <CardTitle>Patient Information</CardTitle>
          </div>
        </CardHeader>
        <Separator />
        <CardContent className="pt-6">
          <dl className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <dt className="text-sm font-medium text-muted-foreground">Full Name</dt>
              <dd className="mt-1 text-sm">{assessment.firstName} {assessment.lastName}</dd>
            </div>
            <div>
              <dt className="text-sm font-medium text-muted-foreground">Date of Birth</dt>
              <dd className="mt-1 text-sm">{assessment.dateOfBirth}</dd>
            </div>
          </dl>
        </CardContent>
      </Card>

      {/* Insurance */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10">
              <ShieldCheck className="h-4 w-4 text-primary" />
            </div>
            <CardTitle>Insurance Coverage</CardTitle>
          </div>
        </CardHeader>
        <Separator />
        <CardContent className="pt-6">
          <Badge variant="secondary" className="text-sm">{assessment.insuranceType}</Badge>
        </CardContent>
      </Card>

      {/* Mobility Challenges */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10">
              <Activity className="h-4 w-4 text-primary" />
            </div>
            <CardTitle>Mobility Challenges</CardTitle>
          </div>
        </CardHeader>
        <Separator />
        <CardContent className="pt-6">
          {assessment.mobilityChallenges ? (
            <p className="text-sm leading-relaxed">{assessment.mobilityChallenges}</p>
          ) : (
            <p className="text-sm text-muted-foreground italic">No mobility challenges recorded.</p>
          )}
        </CardContent>
      </Card>

      {/* Modifications */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10">
              <Wrench className="h-4 w-4 text-primary" />
            </div>
            <CardTitle>Recommended Modifications</CardTitle>
          </div>
        </CardHeader>
        <Separator />
        <CardContent className="pt-6">
          <div className="flex flex-wrap gap-2">
            {modifications.map((mod) => (
              <Badge key={mod} variant="outline" className="text-sm">
                {mod}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Date */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10">
              <Calendar className="h-4 w-4 text-primary" />
            </div>
            <CardTitle>Assessment Date</CardTitle>
          </div>
        </CardHeader>
        <Separator />
        <CardContent className="pt-6">
          <p className="text-sm">
            {new Date(assessment.createdAt).toLocaleDateString("en-US", {
              weekday: "long",
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
        </CardContent>
      </Card>

      {/* Generate Claim */}
      <Card>
        <CardHeader>
          <CardTitle>Insurance Claim</CardTitle>
        </CardHeader>
        <Separator />
        <CardContent className="pt-6">
          <p className="text-sm text-muted-foreground mb-4">
            Generate an AI-powered insurance claim document based on this assessment.
          </p>
          <GenerateClaimButton assessmentId={assessment.id} />
        </CardContent>
      </Card>
    </div>
  );
}
