"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Search } from "lucide-react";

export function AssessmentFilters() {
  const router = useRouter();
  const searchParams = useSearchParams();

  function updateParams(key: string, value: string) {
    const params = new URLSearchParams(searchParams.toString());
    if (value) {
      params.set(key, value);
    } else {
      params.delete(key);
    }
    router.push(`/dashboard?${params.toString()}`);
  }

  return (
    <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
      <div className="relative flex-1 max-w-sm">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <Input
          placeholder="Search by patient name..."
          defaultValue={searchParams.get("search") ?? ""}
          onChange={(e) => updateParams("search", e.target.value)}
          className="pl-9"
        />
      </div>
      <Select
        value={searchParams.get("insurance") ?? "all"}
        onValueChange={(v) => updateParams("insurance", v === "all" ? "" : (v ?? ""))}
      >
        <SelectTrigger className="w-[200px]">
          <SelectValue placeholder="All insurance types" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All insurance types</SelectItem>
          <SelectItem value="Medicare Advantage">Medicare Advantage</SelectItem>
          <SelectItem value="Traditional Medicare">Traditional Medicare</SelectItem>
          <SelectItem value="Medicaid">Medicaid</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}
