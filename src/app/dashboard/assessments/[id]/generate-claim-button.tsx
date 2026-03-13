"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { FileText, Loader2 } from "lucide-react";

export function GenerateClaimButton({ id }: { id: string }) {
  const [claim, setClaim] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleGenerate() {
    setLoading(true);
    setError(null);

    try {
      const res = await fetch(`/api/assessments/${id}/generate-claim`, {
        method: "POST",
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Failed to generate claim");
      }

      const data = await res.json();
      setClaim(data.claim);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="space-y-6">
      <Button
        onClick={handleGenerate}
        disabled={loading}
        className="gap-2"
      >
        {loading ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" />
            Generating Claim...
          </>
        ) : (
          <>
            <FileText className="h-4 w-4" />
            Generate Claim
          </>
        )}
      </Button>

      {error && (
        <p className="text-sm text-destructive">{error}</p>
      )}

      {claim && (
        <Card>
          <CardHeader>
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10">
                <FileText className="h-4 w-4 text-primary" />
              </div>
              <CardTitle>Generated Insurance Claim</CardTitle>
            </div>
          </CardHeader>
          <Separator />
          <CardContent className="prose prose-sm max-w-none pt-6">
            <div
              dangerouslySetInnerHTML={{
                __html: formatMarkdown(claim),
              }}
            />
          </CardContent>
        </Card>
      )}
    </div>
  );
}

function formatMarkdown(text: string): string {
  return text
    .replace(/^### (.+)$/gm, '<h3 class="text-base font-semibold mt-4 mb-2">$1</h3>')
    .replace(/^## (.+)$/gm, '<h2 class="text-lg font-semibold mt-6 mb-2">$1</h2>')
    .replace(/^# (.+)$/gm, '<h1 class="text-xl font-bold mt-6 mb-3">$1</h1>')
    .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
    .replace(/\*(.+?)\*/g, "<em>$1</em>")
    .replace(/^- (.+)$/gm, '<li class="ml-4 list-disc">$1</li>')
    .replace(/(<li[^>]*>.*<\/li>\n?)+/g, '<ul class="my-2">$&</ul>')
    .replace(/\n{2,}/g, '<div class="my-3"></div>')
    .replace(/\n/g, "<br />");
}
