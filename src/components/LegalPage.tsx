import { Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import type { ReactNode } from "react";

export function LegalPage({
  title,
  updated = "Last updated: August 2026",
  children,
}: {
  title: string;
  updated?: string;
  children: ReactNode;
}) {
  return (
    <main className="mx-auto max-w-3xl px-5 py-20">
      <Link
        to="/"
        className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to home
      </Link>
      <h1 className="mt-8 text-4xl font-bold">{title}</h1>
      <p className="mt-3 text-sm text-muted-foreground">{updated}</p>
      <div className="mt-10 space-y-6 text-sm leading-relaxed text-muted-foreground">{children}</div>
    </main>
  );
}
