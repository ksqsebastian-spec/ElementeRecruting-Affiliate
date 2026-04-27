"use client";

import { useState } from "react";
import {
  validateAffiliateForm,
  type AffiliateFormData,
} from "@/types/affiliate";
import { generateAffiliateRefCode } from "@/lib/affiliate/generateRefCode";
import {
  generateAffiliateMailtoLink,
  generateAffiliateGmailLink,
} from "@/lib/affiliate/generateMailtoLink";
import { generateAffiliatePDF } from "@/lib/affiliate/generatePDF";
import { getAffiliateBlockText } from "@/lib/affiliate/referralBlock";

export default function AffiliateReferralForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [noPaypal, setNoPaypal] = useState(false);
  const [iban, setIban] = useState("");
  const [kontoinhaber, setKontoinhaber] = useState("");
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [refCode] = useState(generateAffiliateRefCode);
  const [copied, setCopied] = useState(false);

  const form: AffiliateFormData = { name, email, noPaypal, iban, kontoinhaber };
  const errors = validateAffiliateForm(form);
  const isReady =
    Object.keys(errors).length === 0 && name.length > 0 && email.length > 0;

  const referralData = { ...form, refCode };

  const handleBlur = (field: string) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
  };

  const handleCopy = async () => {
    const text = getAffiliateBlockText(referralData);
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
    `w-full rounded-lg border px-4 py-3 text-sm transition-colors outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-200 ${
      touched[field] && errors[field as keyof typeof errors]
        ? "border-red-400"
        : "border-gray-200"
    }`;

  return (
    <section className="pb-8">
      <div
        className="rounded-2xl bg-white p-5 sm:p-8"
        style={{ boxShadow: "0 1px 4px rgba(0,0,0,0.06)" }}
      >
        <div className="flex flex-col gap-5">
          <div>
            <label
              htmlFor="aff-name"
              className="mb-1.5 block text-xs font-semibold tracking-widest text-gray-500 uppercase"
            >
              Name
            </label>
            <input
              id="aff-name"
              type="text"
              placeholder="Vorname Nachname"
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
              htmlFor="aff-email"
              className="mb-1.5 block text-xs font-semibold tracking-widest text-gray-500 uppercase"
            >
              E-Mail / PayPal-Adresse
            </label>
            <input
              id="aff-email"
              type="email"
              placeholder="name@beispiel.de"
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
            <label className="flex cursor-pointer items-center gap-2.5">
              <input
                type="checkbox"
                checked={noPaypal}
                onChange={(e) => setNoPaypal(e.target.checked)}
                className="h-4 w-4 rounded border-gray-300"
              />
              <span className="text-sm text-gray-800">
                {noPaypal ? "▲" : "▼"} Kein PayPal — stattdessen Bankverbindung
              </span>
            </label>

            {noPaypal && (
              <div className="mt-4 space-y-4 rounded-lg border border-gray-200 bg-gray-50 p-4">
                <p className="text-xs text-gray-500">
                  Bankverbindung eingeben, damit die Provision per Überweisung
                  ausgezahlt werden kann.
                </p>
                <div>
                  <label
                    htmlFor="aff-kontoinhaber"
                    className="mb-1.5 block text-xs font-semibold tracking-widest text-gray-500 uppercase"
                  >
                    Kontoinhaber
                  </label>
                  <input
                    id="aff-kontoinhaber"
                    type="text"
                    placeholder="Vorname Nachname"
                    value={kontoinhaber}
                    onChange={(e) => setKontoinhaber(e.target.value)}
                    onBlur={() => handleBlur("kontoinhaber")}
                    className={inputClass("kontoinhaber")}
                  />
                  {touched.kontoinhaber && errors.kontoinhaber && (
                    <p className="mt-1 text-xs text-red-500">
                      {errors.kontoinhaber}
                    </p>
                  )}
                </div>
                <div>
                  <label
                    htmlFor="aff-iban"
                    className="mb-1.5 block text-xs font-semibold tracking-widest text-gray-500 uppercase"
                  >
                    IBAN
                  </label>
                  <input
                    id="aff-iban"
                    type="text"
                    placeholder="DE89 3704 0044 0532 0130 00"
                    value={iban}
                    onChange={(e) => setIban(e.target.value)}
                    onBlur={() => handleBlur("iban")}
                    className={inputClass("iban")}
                  />
                  {touched.iban && errors.iban && (
                    <p className="mt-1 text-xs text-red-500">{errors.iban}</p>
                  )}
                </div>
              </div>
            )}
          </div>

          {isReady && (
            <div className="fade-in rounded-lg bg-orange-50 p-4">
              <p className="mb-2 text-xs font-semibold tracking-widest text-gray-500 uppercase">
                Empfehlungsblock (Vorschau)
              </p>
              <div className="space-y-1 text-sm text-gray-800">
                <p className="text-gray-400">———————————</p>
                <p className="font-bold">Empfehlung</p>
                <p>Dieser Auftrag wurde</p>
                <p>empfohlen von:</p>
                <p className="font-semibold">{name}</p>
                <p>{email}</p>
                {noPaypal && kontoinhaber && (
                  <>
                    <p className="mt-2 text-xs font-semibold text-gray-500">
                      Bankverbindung:
                    </p>
                    <p>Kontoinhaber: {kontoinhaber}</p>
                    <p>IBAN: {iban}</p>
                  </>
                )}
                <p>Ref: {refCode}</p>
                <p className="text-gray-400">———————————</p>
              </div>
            </div>
          )}

          <div className="flex flex-col gap-2.5">
            <button
              type="button"
              onClick={handleCopy}
              disabled={!isReady}
              className={`inline-flex w-full items-center justify-center gap-2 rounded-lg px-5 py-3 text-sm font-semibold text-white transition-all ${
                !isReady
                  ? "cursor-not-allowed bg-orange-300 opacity-50"
                  : copied
                    ? "bg-green-600"
                    : "bg-orange-500 hover:-translate-y-px hover:bg-orange-600 hover:shadow-md"
              }`}
            >
              {copied ? "Kopiert!" : "In Zwischenablage kopieren"}
            </button>

            <div className="flex gap-2.5">
              <a
                href={isReady ? generateAffiliateMailtoLink(referralData) : undefined}
                className={`inline-flex flex-1 items-center justify-center gap-1.5 rounded-lg border border-gray-200 bg-white px-3 py-2.5 text-xs font-semibold text-gray-800 transition-all ${
                  isReady
                    ? "hover:-translate-y-px hover:shadow-md"
                    : "pointer-events-none opacity-50"
                }`}
                aria-disabled={!isReady}
              >
                E-Mail
              </a>
              <a
                href={isReady ? generateAffiliateGmailLink(referralData) : undefined}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex flex-1 items-center justify-center gap-1.5 rounded-lg border border-gray-200 bg-white px-3 py-2.5 text-xs font-semibold text-gray-800 transition-all ${
                  isReady
                    ? "hover:-translate-y-px hover:shadow-md"
                    : "pointer-events-none opacity-50"
                }`}
                aria-disabled={!isReady}
              >
                Gmail
              </a>
              <button
                type="button"
                onClick={() => generateAffiliatePDF(referralData)}
                disabled={!isReady}
                className={`inline-flex flex-1 items-center justify-center gap-1.5 rounded-lg border border-gray-200 bg-white px-3 py-2.5 text-xs font-semibold text-gray-800 transition-all ${
                  isReady
                    ? "hover:-translate-y-px hover:shadow-md"
                    : "pointer-events-none opacity-50"
                }`}
              >
                PDF
              </button>
            </div>
          </div>

          <p className="flex items-center gap-1.5 text-xs text-gray-500">
            Daten werden nur zur Provisions-Auszahlung verwendet.
          </p>
        </div>
      </div>
    </section>
  );
}
