import { auth } from "@/auth";
import { redirect } from "next/navigation";
import { db } from "@/db";
import { claims, assessments } from "@/db/schema";
import { eq, desc } from "drizzle-orm";
import Link from "next/link";
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
import { FileText } from "lucide-react";

const statusVariant: Record<string, "default" | "secondary" | "outline" | "destructive"> = {
  draft: "secondary",
  submitted: "default",
  approved: "outline",
  denied: "destructive",
};

export default async function ClaimsPage() {
  const session = await auth();
  if (!session?.user) redirect("/login");

  const rows = await db
    .select({
      id: claims.id,
      status: claims.status,
      createdAt: claims.createdAt,
      patientFirstName: assessments.firstName,
      patientLastName: assessments.lastName,
    })
    .from(claims)
    .innerJoin(assessments, eq(claims.assessmentId, assessments.id))
    .where(eq(claims.userId, session.user.id!))
    .orderBy(desc(claims.createdAt));

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Claims</h1>
        <p className="text-muted-foreground">
          Manage your insurance claims for patient assessments.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>All Claims</CardTitle>
        </CardHeader>
        <CardContent>
          {rows.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-12 text-center">
              <FileText className="mb-3 h-10 w-10 text-muted-foreground/40" />
              <p className="text-muted-foreground">No claims yet.</p>
              <p className="text-sm text-muted-foreground mt-1">
                Generate a claim from an assessment to get started.
              </p>
            </div>
          ) : (
            <div className="overflow-x-auto -mx-6 sm:mx-0">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Patient</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="hidden sm:table-cell">Created</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {rows.map((row) => (
                    <TableRow key={row.id} className="cursor-pointer hover:bg-muted/50">
                      <TableCell className="font-medium">
                        <Link href={`/dashboard/claims/${row.id}`} className="block">
                          {row.patientFirstName} {row.patientLastName}
                        </Link>
                      </TableCell>
                      <TableCell>
                        <Link href={`/dashboard/claims/${row.id}`} className="block">
                          <Badge variant={statusVariant[row.status] ?? "secondary"}>
                            {row.status}
                          </Badge>
                        </Link>
                      </TableCell>
                      <TableCell className="hidden sm:table-cell text-muted-foreground">
                        <Link href={`/dashboard/claims/${row.id}`} className="block">
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
