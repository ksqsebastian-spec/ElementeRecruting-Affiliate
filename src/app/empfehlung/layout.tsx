import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fachkräfte-Empfehlung | Seehafer Elemente",
  description:
    "Empfiehl potenzielle Mitarbeiter an Seehafer Elemente und verdiene 1.000 € Prämie nach bestandener Probezeit.",
  robots: "noindex, nofollow",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="mx-auto max-w-[480px] px-4 py-6 sm:px-6">{children}</main>
  );
}
