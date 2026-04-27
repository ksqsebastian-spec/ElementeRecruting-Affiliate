import type { ReferralData } from "@/types";

export function getReferralBlockText(data: ReferralData): string {
  return `Hey ${data.candidateName}!

Ich hab dich bei Seehafer Elemente empfohlen — die suchen aktuell Verstärkung im Team (Tischler, Monteure, Helfer und mehr).

Falls du Interesse hast, schau dir die offenen Stellen an:
👉 https://seehafer-elemente.de/karriere

Wenn du dich bewirbst, häng bitte diesen Block unten in deine Bewerbungsmail an info@seehafer-elemente.de mit rein — dann wissen die Bescheid, dass ich dich empfohlen hab.

———————————
📌 Fachkräfte-Empfehlung
Empfohlen von: ${data.name}
Kontakt: ${data.email}
Ref: ${data.refCode}
———————————

Viele Grüße!`;
}
