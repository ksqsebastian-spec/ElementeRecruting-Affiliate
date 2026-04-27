"use client";

import { useState } from "react";
import { validateForm, type ReferralFormData } from "@/types";
import { generateRefCode } from "@/lib/generateRefCode";
import {
  generateMailtoLink,
  generateGmailLink,
} from "@/lib/generateMailtoLink";
import { generatePDF } from "@/lib/generatePDF";
import { getReferralBlockText } from "@/lib/referralBlock";

export default function ReferralForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [candidateName, setCandidateName] = useState("");
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [refCode] = useState(generateRefCode);
  const [copied, setCopied] = useState(false);

  const form: ReferralFormData = { name, email, candidateName };
  const errors = validateForm(form);
  const isReady =
    Object.keys(errors).length === 0 &&
    name.length > 0 &&
    email.length > 0 &&
    candidateName.length > 0;

  const referralData = { ...form, refCode };

  const handleBlur = (field: string) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
  };

  const handleCopy = async () => {
    const text = getReferralBlockText(referralData);
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      const textarea = document.createElement("textarea");
      textarea.value = text;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const inputClass = (field: string) =>
    `w-full border px-4 py-3 text-sm transition-colors outline-none bg-white focus:border-black focus:ring-2 focus:ring-gray-200 ${
      touched[field] && errors[field as keyof typeof errors]
        ? "border-red-400"
        : "border-[#e0e0e0]"
    }`;

  return (
    <section className="pb-8">
      <p className="section-label mb-6">Empfehlung ausfüllen</p>
      <div className="border border-[#e0e0e0] bg-white p-5 sm:p-8">
        <div className="flex flex-col gap-5">
          <div>
            <label
              htmlFor="name"
              className="mb-1.5 block text-[10px] font-semibold tracking-widest text-[#6b6b6b] uppercase"
            >
              Dein Name
            </label>
            <input
              id="name"
              type="text"
              placeholder="Lisa Schmidt"
              value={name}
              onChange={(e) => setName(e.target.value)}
              onBlur={() => handleBlur("name")}
              className={inputClass("name")}
            />
            {touched.name && errors.name && (
              <p className="mt-1 text-xs text-red-500">{errors.name}</p>
            )}
          </div>

          <div>
            <label
              htmlFor="email"
              className="mb-1.5 block text-[10px] font-semibold tracking-widest text-[#6b6b6b] uppercase"
            >
              Deine E-Mail
            </label>
            <input
              id="email"
              type="email"
              placeholder="lisa.schmidt@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onBlur={() => handleBlur("email")}
              className={inputClass("email")}
            />
            {touched.email && errors.email && (
              <p className="mt-1 text-xs text-red-500">{errors.email}</p>
            )}
          </div>

          <div>
            <label
              htmlFor="candidateName"
              className="mb-1.5 block text-[10px] font-semibold tracking-widest text-[#6b6b6b] uppercase"
            >
              Wen empfiehlst du?
            </label>
            <input
              id="candidateName"
              type="text"
              placeholder="Tim Wagner"
              value={candidateName}
              onChange={(e) => setCandidateName(e.target.value)}
              onBlur={() => handleBlur("candidateName")}
              className={inputClass("candidateName")}
            />
            {touched.candidateName && errors.candidateName && (
              <p className="mt-1 text-xs text-red-500">
                {errors.candidateName}
              </p>
            )}
          </div>

          {isReady && (
            <div className="fade-in border border-[#e0e0e0] bg-[#f5f5f5] p-4">
              <p className="mb-2 text-[10px] font-semibold tracking-widest text-[#6b6b6b] uppercase">
                Dein Empfehlungs-Text
              </p>
              <div className="space-y-1 text-sm text-[#1a1a1a]">
                <p className="text-[#6b6b6b]">———————————</p>
                <p className="font-bold">📌 Fachkräfte-Empfehlung</p>
                <p>
                  Empfohlen von: <span className="font-semibold">{name}</span>
                </p>
                <p>Kontakt: {email}</p>
                <p>Ref: {refCode}</p>
                <p className="text-[#6b6b6b]">———————————</p>
              </div>
            </div>
          )}

          <div className="flex flex-col gap-2.5">
            <button
              type="button"
              onClick={handleCopy}
              disabled={!isReady}
              className={`inline-flex w-full items-center justify-center gap-2 px-5 py-3.5 text-sm font-bold text-white transition-all ${
                !isReady
                  ? "cursor-not-allowed bg-[#999] opacity-60"
                  : copied
                    ? "bg-[#16a34a]"
                    : "bg-[#0a0a0a] hover:bg-[#333]"
              }`}
            >
              {copied ? "✓ Kopiert!" : "In Zwischenablage kopieren →"}
            </button>

            <div className="flex gap-2">
              <a
                href={isReady ? generateMailtoLink(referralData) : undefined}
                className={`inline-flex flex-1 items-center justify-center border border-[#e0e0e0] px-3 py-2.5 text-xs font-semibold text-[#1a1a1a] transition-all ${
                  isReady ? "hover:border-black hover:bg-[#f5f5f5]" : "pointer-events-none opacity-40"
                }`}
                aria-disabled={!isReady}
              >
                E-Mail
              </a>
              <a
                href={isReady ? generateGmailLink(referralData) : undefined}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex flex-1 items-center justify-center border border-[#e0e0e0] px-3 py-2.5 text-xs font-semibold text-[#1a1a1a] transition-all ${
                  isReady ? "hover:border-black hover:bg-[#f5f5f5]" : "pointer-events-none opacity-40"
                }`}
                aria-disabled={!isReady}
              >
                Gmail
              </a>
              <button
                type="button"
                onClick={() => generatePDF(referralData)}
                disabled={!isReady}
                className={`inline-flex flex-1 items-center justify-center border border-[#e0e0e0] px-3 py-2.5 text-xs font-semibold text-[#1a1a1a] transition-all ${
                  isReady ? "hover:border-black hover:bg-[#f5f5f5]" : "pointer-events-none opacity-40"
                }`}
              >
                PDF
              </button>
            </div>
          </div>

          <p className="text-xs text-[#6b6b6b]">
            Daten werden nur zur Prämien-Auszahlung verwendet.
          </p>
        </div>
      </div>
    </section>
  );
}
