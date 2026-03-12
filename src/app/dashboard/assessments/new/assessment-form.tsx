"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  User,
  ShieldCheck,
  Activity,
  Wrench,
  CheckCircle2,
} from "lucide-react";

const MODIFICATIONS = [
  { id: "grab-bar-24", label: '24-inch Grab Bar', description: "For bathrooms and hallways" },
  { id: "grab-bar-18", label: '18-inch Grab Bar', description: "For toilets and smaller spaces" },
  { id: "entry-ramp", label: "Entry Ramp", description: "For wheelchair or walker access" },
  { id: "shower-bench", label: "Shower Bench", description: "For seated bathing support" },
];

export function AssessmentForm() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [selectedMods, setSelectedMods] = useState<string[]>([]);
  const [insuranceType, setInsuranceType] = useState("");

  function toggleMod(label: string) {
    setSelectedMods((prev) =>
      prev.includes(label) ? prev.filter((m) => m !== label) : [...prev, label]
    );
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError("");

    if (!insuranceType) {
      setError("Please select an insurance type.");
      return;
    }
    if (selectedMods.length === 0) {
      setError("Please select at least one modification.");
      return;
    }

    setLoading(true);

    const formData = new FormData(e.currentTarget);
    const body = {
      firstName: formData.get("firstName"),
      lastName: formData.get("lastName"),
      dateOfBirth: formData.get("dateOfBirth"),
      insuranceType,
      mobilityChallenges: formData.get("mobilityChallenges"),
      modifications: selectedMods,
    };

    const res = await fetch("/api/assessments", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    setLoading(false);

    if (!res.ok) {
      const data = await res.json();
      setError(data.error || "Something went wrong. Please try again.");
      return;
    }

    setSuccess(true);
    setTimeout(() => router.push("/dashboard"), 1500);
  }

  if (success) {
    return (
      <Card className="border-secondary">
        <CardContent className="flex flex-col items-center justify-center py-16 text-center">
          <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-secondary">
            <CheckCircle2 className="h-7 w-7 text-secondary-foreground" />
          </div>
          <h3 className="text-xl font-semibold">Assessment Saved</h3>
          <p className="mt-1 text-muted-foreground">Redirecting to dashboard...</p>
        </CardContent>
      </Card>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {error && (
        <div className="rounded-lg border border-destructive/30 bg-destructive/5 px-4 py-3 text-sm text-destructive">
          {error}
        </div>
      )}

      {/* Patient Information */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10">
              <User className="h-4 w-4 text-primary" />
            </div>
            <div>
              <CardTitle>Patient Information</CardTitle>
              <CardDescription>Basic demographic details for the patient.</CardDescription>
            </div>
          </div>
        </CardHeader>
        <Separator />
        <CardContent className="pt-6 space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="firstName">First Name</Label>
              <Input id="firstName" name="firstName" placeholder="John" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="lastName">Last Name</Label>
              <Input id="lastName" name="lastName" placeholder="Doe" required />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="dateOfBirth">Date of Birth</Label>
            <Input
              id="dateOfBirth"
              name="dateOfBirth"
              type="date"
              className="max-w-xs"
              required
            />
          </div>
        </CardContent>
      </Card>

      {/* Insurance */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10">
              <ShieldCheck className="h-4 w-4 text-primary" />
            </div>
            <div>
              <CardTitle>Insurance Coverage</CardTitle>
              <CardDescription>Select the patient&apos;s primary insurance type.</CardDescription>
            </div>
          </div>
        </CardHeader>
        <Separator />
        <CardContent className="pt-6">
          <div className="space-y-2">
            <Label>Insurance Type</Label>
            <Select value={insuranceType} onValueChange={(v) => setInsuranceType(v ?? "")}>
              <SelectTrigger className="max-w-sm">
                <SelectValue placeholder="Select insurance type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Medicare Advantage">Medicare Advantage</SelectItem>
                <SelectItem value="Traditional Medicare">Traditional Medicare</SelectItem>
                <SelectItem value="Medicaid">Medicaid</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Mobility Challenges */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10">
              <Activity className="h-4 w-4 text-primary" />
            </div>
            <div>
              <CardTitle>Mobility Challenges</CardTitle>
              <CardDescription>
                Describe the patient&apos;s current mobility issues and fall risks.
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        <Separator />
        <CardContent className="pt-6">
          <Textarea
            id="mobilityChallenges"
            name="mobilityChallenges"
            placeholder="e.g., Patient uses a walker, has difficulty entering the shower, history of falls in the bathroom..."
            rows={4}
          />
        </CardContent>
      </Card>

      {/* Modifications */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10">
              <Wrench className="h-4 w-4 text-primary" />
            </div>
            <div>
              <CardTitle>Recommended Modifications</CardTitle>
              <CardDescription>
                Select all modifications needed for this patient&apos;s home.
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        <Separator />
        <CardContent className="pt-6 space-y-1">
          {MODIFICATIONS.map((mod) => (
            <label
              key={mod.id}
              className="flex cursor-pointer items-start gap-3 rounded-lg p-3 transition-colors hover:bg-muted"
            >
              <Checkbox
                id={mod.id}
                checked={selectedMods.includes(mod.label)}
                onCheckedChange={() => toggleMod(mod.label)}
                className="mt-0.5"
              />
              <div>
                <div className="text-sm font-medium">{mod.label}</div>
                <div className="text-xs text-muted-foreground">{mod.description}</div>
              </div>
            </label>
          ))}
        </CardContent>
      </Card>

      <Button type="submit" className="w-full gap-2" size="lg" disabled={loading}>
        {loading ? "Saving Assessment..." : "Submit Assessment"}
      </Button>
    </form>
  );
}
