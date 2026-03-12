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
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const MODIFICATIONS = [
  "24-inch Grab Bar",
  "18-inch Grab Bar",
  "Entry Ramp",
  "Shower Bench",
];

export function AssessmentForm() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [selectedMods, setSelectedMods] = useState<string[]>([]);
  const [insuranceType, setInsuranceType] = useState("");

  function toggleMod(mod: string) {
    setSelectedMods((prev) =>
      prev.includes(mod) ? prev.filter((m) => m !== mod) : [...prev, mod]
    );
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError("");

    if (!insuranceType) {
      setError("Please select an insurance type");
      return;
    }
    if (selectedMods.length === 0) {
      setError("Please select at least one modification");
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
      setError(data.error || "Something went wrong");
      return;
    }

    router.push("/dashboard");
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {error && (
        <p className="text-sm text-destructive text-center">{error}</p>
      )}

      <Card>
        <CardHeader>
          <CardTitle>Patient Information</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="firstName">First Name</Label>
              <Input id="firstName" name="firstName" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="lastName">Last Name</Label>
              <Input id="lastName" name="lastName" required />
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="dateOfBirth">Date of Birth</Label>
              <Input id="dateOfBirth" name="dateOfBirth" type="date" required />
            </div>
            <div className="space-y-2">
              <Label>Insurance Type</Label>
              <Select value={insuranceType} onValueChange={(v) => setInsuranceType(v ?? "")}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select insurance" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Medicare Advantage">Medicare Advantage</SelectItem>
                  <SelectItem value="Traditional Medicare">Traditional Medicare</SelectItem>
                  <SelectItem value="Medicaid">Medicaid</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Mobility Challenges</CardTitle>
        </CardHeader>
        <CardContent>
          <Textarea
            id="mobilityChallenges"
            name="mobilityChallenges"
            placeholder="Describe the patient's mobility challenges, fall risks, and current living situation..."
            rows={4}
          />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Recommended Modifications</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {MODIFICATIONS.map((mod) => (
            <div key={mod} className="flex items-center space-x-3">
              <Checkbox
                id={mod}
                checked={selectedMods.includes(mod)}
                onCheckedChange={() => toggleMod(mod)}
              />
              <Label htmlFor={mod} className="text-base font-normal cursor-pointer">
                {mod}
              </Label>
            </div>
          ))}
        </CardContent>
      </Card>

      <Button type="submit" className="w-full" size="lg" disabled={loading}>
        {loading ? "Saving..." : "Submit Assessment"}
      </Button>
    </form>
  );
}
