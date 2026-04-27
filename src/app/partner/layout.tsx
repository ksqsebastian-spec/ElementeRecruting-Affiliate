import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Empfehlungsprogramm | Seehafer Elemente",
  description:
    "Empfiehl Seehafer Elemente weiter und verdiene eine Provision, wenn ein Auftrag zustande kommt.",
  robots: "noindex, nofollow",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="mx-auto max-w-[480px] px-4 py-6 sm:px-6">{children}</main>
  );
}
