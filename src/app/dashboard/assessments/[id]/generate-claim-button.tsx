"use client";

import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { FileText, Loader2 } from "lucide-react";

export function GenerateClaimButton({ assessmentId }: { assessmentId: string }) {
  const router = useRouter();
  const [state, setState] = useState<"idle" | "generating" | "done" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const inFlightRef = useRef(false);
  const abortRef = useRef<AbortController | null>(null);

  useEffect(() => {
    return () => {
      abortRef.current?.abort();
    };
  }, []);

  async function handleGenerate() {
    if (inFlightRef.current) return;
    inFlightRef.current = true;
    setState("generating");
    setErrorMsg("");

    const controller = new AbortController();
    abortRef.current = controller;

    try {
      const res = await fetch("/api/claims", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ assessmentId }),
        signal: controller.signal,
      });

      if (controller.signal.aborted) return;

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        setState("error");
        setErrorMsg(data.error || "Failed to generate claim.");
        inFlightRef.current = false;
        return;
      }

      const claim = await res.json();
      setState("done");
      router.push(`/dashboard/claims/${claim.id}`);
    } catch (err) {
      if ((err as Error).name === "AbortError") return;
      setState("error");
      setErrorMsg("Network error. Please try again.");
      inFlightRef.current = false;
    }
  }

  return (
    <div className="space-y-2">
      <Button
        onClick={handleGenerate}
        disabled={state === "generating" || state === "done"}
        className="gap-2"
      >
        {state === "generating" ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" />
            Generating Claim...
          </>
        ) : state === "done" ? (
          <>
            <FileText className="h-4 w-4" />
            Redirecting...
          </>
        ) : (
          <>
            <FileText className="h-4 w-4" />
            Generate AI Claim
          </>
        )}
      </Button>
      {state === "error" && (
        <p className="text-sm text-destructive">{errorMsg}</p>
      )}
    </div>
  );
}
