import { auth } from "@/auth";
import { redirect } from "next/navigation";
import { db } from "@/db";
import { assessments } from "@/db/schema";
import { eq, desc, count, and, or, ilike } from "drizzle-orm";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ClipboardPlus, ClipboardList, Users, ArrowRight } from "lucide-react";
import { AssessmentFilters } from "@/components/assessment-filters";

export default async function DashboardPage({
  searchParams,
}: {
  searchParams: Promise<{ search?: string; insurance?: string }>;
}) {
  const session = await auth();
  if (!session?.user) redirect("/login");

  const params = await searchParams;
  const search = params.search ?? "";
  const insurance = params.insurance ?? "";

  // Build filter conditions
  const conditions = [eq(assessments.userId, session.user.id!)];

  if (insurance) {
    conditions.push(eq(assessments.insuranceType, insurance));
  }

  if (search) {
    conditions.push(
      or(
        ilike(assessments.firstName, `%${search}%`),
        ilike(assessments.lastName, `%${search}%`)
      )!
    );
  }

  const whereClause = and(...conditions);

  const [rows, [countResult]] = await Promise.all([
    db
      .select()
      .from(assessments)
      .where(whereClause)
      .orderBy(desc(assessments.createdAt))
      .limit(10),
    db
      .select({ value: count() })
      .from(assessments)
      .where(eq(assessments.userId, session.user.id!)),
  ]);

  const totalAssessments = countResult?.value ?? 0;
  const uniquePatients = new Set(
    rows.map((r) => `${r.firstName} ${r.lastName}`)
  ).size;

  const isFiltering = !!search || !!insurance;

  return (
    <div className="space-y-8">
      {/* Page header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Dashboard</h1>
          <p className="text-muted-foreground">
            Welcome back, {session.user.name?.split(" ")[0] || "there"}.
          </p>
        </div>
        <Link href="/dashboard/assessments/new">
          <Button className="gap-2">
            <ClipboardPlus className="h-4 w-4" />
            New Assessment
          </Button>
        </Link>
      </div>

      {/* Stats */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Total Assessments
            </CardTitle>
            <ClipboardList className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">{totalAssessments}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Unique Patients
            </CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">{uniquePatients}</div>
          </CardContent>
        </Card>
        <Card className="sm:col-span-2 lg:col-span-1">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Quick Actions
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Link href="/dashboard/assessments/new">
              <Button variant="outline" className="w-full gap-2 justify-between">
                Start a new assessment
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>

      {/* Assessments table */}
      <Card>
        <CardHeader>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <CardTitle>Recent Assessments</CardTitle>
          </div>
          <AssessmentFilters />
        </CardHeader>
        <CardContent>
          {rows.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-12 text-center">
              <ClipboardList className="mb-3 h-10 w-10 text-muted-foreground/40" />
              <p className="text-muted-foreground">
                {isFiltering
                  ? "No assessments match your filters."
                  : "No assessments yet."}
              </p>
              {!isFiltering && (
                <Link href="/dashboard/assessments/new" className="mt-4">
                  <Button variant="outline" size="sm" className="gap-2">
                    <ClipboardPlus className="h-4 w-4" />
                    Create your first assessment
                  </Button>
                </Link>
              )}
            </div>
          ) : (
            <div className="overflow-x-auto -mx-6 sm:mx-0">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Patient</TableHead>
                    <TableHead className="hidden sm:table-cell">DOB</TableHead>
                    <TableHead className="hidden md:table-cell">Insurance</TableHead>
                    <TableHead>Modifications</TableHead>
                    <TableHead className="hidden sm:table-cell">Status</TableHead>
                    <TableHead className="hidden sm:table-cell">Date</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {rows.map((row) => (
                    <TableRow key={row.id} className="cursor-pointer hover:bg-muted/50">
                      <TableCell className="font-medium">
                        <Link href={`/dashboard/assessments/${row.id}`} className="block">
                          {row.firstName} {row.lastName}
                        </Link>
                      </TableCell>
                      <TableCell className="hidden sm:table-cell text-muted-foreground">
                        <Link href={`/dashboard/assessments/${row.id}`} className="block">
                          {row.dateOfBirth}
                        </Link>
                      </TableCell>
                      <TableCell className="hidden md:table-cell">
                        <Link href={`/dashboard/assessments/${row.id}`} className="block">
                          <Badge variant="secondary">{row.insuranceType}</Badge>
                        </Link>
                      </TableCell>
                      <TableCell>
                        <Link href={`/dashboard/assessments/${row.id}`} className="block">
                          <div className="flex flex-wrap gap-1">
                            {(row.modifications as string[]).slice(0, 2).map((m) => (
                              <Badge key={m} variant="outline" className="text-xs">
                                {m}
                              </Badge>
                            ))}
                            {(row.modifications as string[]).length > 2 && (
                              <Badge variant="outline" className="text-xs">
                                +{(row.modifications as string[]).length - 2}
                              </Badge>
                            )}
                          </div>
                        </Link>
                      </TableCell>
                      <TableCell className="hidden sm:table-cell">
                        <Link href={`/dashboard/assessments/${row.id}`} className="block">
                          <Badge variant="outline" className="text-yellow-700 border-yellow-300 bg-yellow-50">
                            Pending
                          </Badge>
                        </Link>
                      </TableCell>
                      <TableCell className="hidden sm:table-cell text-muted-foreground">
                        <Link href={`/dashboard/assessments/${row.id}`} className="block">
                          {new Date(row.createdAt).toLocaleDateString()}
                        </Link>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
