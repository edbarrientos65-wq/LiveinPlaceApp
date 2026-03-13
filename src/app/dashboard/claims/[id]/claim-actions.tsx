"use client";

import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import {
  Send,
  CheckCircle2,
  XCircle,
  RotateCcw,
  Save,
  Trash2,
  Loader2,
} from "lucide-react";

type ClaimStatus = "draft" | "submitted" | "approved" | "denied";

const TRANSITION_CONFIG: Record<ClaimStatus, { label: string; icon: typeof Send; variant: "default" | "destructive" | "outline"; targetStatus: ClaimStatus }[]> = {
  draft: [{ label: "Submit Claim", icon: Send, variant: "default", targetStatus: "submitted" }],
  submitted: [
    { label: "Approve", icon: CheckCircle2, variant: "default", targetStatus: "approved" },
    { label: "Deny", icon: XCircle, variant: "destructive", targetStatus: "denied" },
  ],
  denied: [{ label: "Revise (Back to Draft)", icon: RotateCcw, variant: "outline", targetStatus: "draft" }],
  approved: [],
};

export function ClaimActions({
  claimId,
  initialContent,
  initialStatus,
}: {
  claimId: string;
  initialContent: string;
  initialStatus: ClaimStatus;
}) {
  const router = useRouter();
  const [content, setContent] = useState(initialContent);
  const [status, setStatus] = useState<ClaimStatus>(initialStatus);
  const [saving, setSaving] = useState(false);
  const [transitioning, setTransitioning] = useState(false);
  const [deleting, setDeleting] = useState(false);
  const [confirmDelete, setConfirmDelete] = useState(false);
  const [error, setError] = useState("");
  const [saveSuccess, setSaveSuccess] = useState(false);

  const saveInFlightRef = useRef(false);
  const transitionInFlightRef = useRef(false);
  const deleteInFlightRef = useRef(false);
  const abortRef = useRef<AbortController | null>(null);

  useEffect(() => {
    return () => {
      abortRef.current?.abort();
    };
  }, []);

  async function handleSave() {
    if (saveInFlightRef.current) return;
    saveInFlightRef.current = true;
    setSaving(true);
    setError("");
    setSaveSuccess(false);

    const controller = new AbortController();
    abortRef.current = controller;

    try {
      const res = await fetch(`/api/claims/${claimId}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ content }),
        signal: controller.signal,
      });

      if (controller.signal.aborted) return;

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        setError(data.error || "Failed to save.");
      } else {
        setSaveSuccess(true);
        setTimeout(() => setSaveSuccess(false), 2000);
      }
    } catch (err) {
      if ((err as Error).name === "AbortError") return;
      setError("Network error. Please try again.");
    } finally {
      setSaving(false);
      saveInFlightRef.current = false;
    }
  }

  async function handleTransition(targetStatus: ClaimStatus) {
    if (transitionInFlightRef.current) return;
    transitionInFlightRef.current = true;
    setTransitioning(true);
    setError("");

    const controller = new AbortController();
    abortRef.current = controller;

    try {
      const res = await fetch(`/api/claims/${claimId}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status: targetStatus }),
        signal: controller.signal,
      });

      if (controller.signal.aborted) return;

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        setError(data.error || "Failed to update status.");
      } else {
        const updated = await res.json();
        setStatus(updated.status);
        router.refresh();
      }
    } catch (err) {
      if ((err as Error).name === "AbortError") return;
      setError("Network error. Please try again.");
    } finally {
      setTransitioning(false);
      transitionInFlightRef.current = false;
    }
  }

  async function handleDelete() {
    if (deleteInFlightRef.current) return;
    deleteInFlightRef.current = true;
    setDeleting(true);
    setError("");

    try {
      const res = await fetch(`/api/claims/${claimId}`, { method: "DELETE" });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        setError(data.error || "Failed to delete.");
        setDeleting(false);
        deleteInFlightRef.current = false;
        return;
      }

      router.push("/dashboard/claims");
    } catch {
      setError("Network error. Please try again.");
      setDeleting(false);
      deleteInFlightRef.current = false;
    }
  }

  const isDraft = status === "draft";
  const transitions = TRANSITION_CONFIG[status];

  return (
    <div className="space-y-4">
      {/* Content display/edit */}
      {isDraft ? (
        <div className="space-y-3">
          <Textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            rows={16}
            className="font-mono text-sm"
            disabled={saving}
          />
          <div className="flex items-center gap-2">
            <Button
              onClick={handleSave}
              disabled={saving || content === initialContent}
              size="sm"
              className="gap-2"
            >
              {saving ? (
                <Loader2 className="h-4 w-4 animate-spin" />
              ) : (
                <Save className="h-4 w-4" />
              )}
              {saving ? "Saving..." : "Save Changes"}
            </Button>
            {saveSuccess && (
              <Badge variant="outline" className="text-green-600 border-green-600">
                Saved
              </Badge>
            )}
          </div>
        </div>
      ) : (
        <div className="whitespace-pre-wrap rounded-lg border bg-muted/30 p-4 text-sm leading-relaxed">
          {content}
        </div>
      )}

      {/* Status transition buttons */}
      {transitions.length > 0 && (
        <div className="flex flex-wrap items-center gap-2 pt-2">
          {transitions.map((t) => (
            <Button
              key={t.targetStatus}
              onClick={() => handleTransition(t.targetStatus)}
              disabled={transitioning}
              variant={t.variant}
              size="sm"
              className="gap-2"
            >
              {transitioning ? (
                <Loader2 className="h-4 w-4 animate-spin" />
              ) : (
                <t.icon className="h-4 w-4" />
              )}
              {t.label}
            </Button>
          ))}
        </div>
      )}

      {/* Delete (draft only) */}
      {isDraft && (
        <div className="pt-2 border-t">
          {confirmDelete ? (
            <div className="flex items-center gap-2">
              <span className="text-sm text-muted-foreground">Delete this claim?</span>
              <Button
                onClick={handleDelete}
                disabled={deleting}
                variant="destructive"
                size="sm"
              >
                {deleting ? (
                  <Loader2 className="h-4 w-4 animate-spin" />
                ) : (
                  "Confirm Delete"
                )}
              </Button>
              <Button
                onClick={() => setConfirmDelete(false)}
                variant="ghost"
                size="sm"
                disabled={deleting}
              >
                Cancel
              </Button>
            </div>
          ) : (
            <Button
              onClick={() => setConfirmDelete(true)}
              variant="ghost"
              size="sm"
              className="gap-2 text-destructive hover:text-destructive"
            >
              <Trash2 className="h-4 w-4" />
              Delete Claim
            </Button>
          )}
        </div>
      )}

      {/* Error message */}
      {error && (
        <p className="text-sm text-destructive">{error}</p>
      )}
    </div>
  );
}
