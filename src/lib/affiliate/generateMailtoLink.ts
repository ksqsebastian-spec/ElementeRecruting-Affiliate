import type { AffiliateData } from "@/types/affiliate";
import { getAffiliateBlockText } from "./referralBlock";

function getEmailBody(data: AffiliateData): string {
  return `Hey!

Ich hab Seehafer Elemente empfohlen — die machen richtig gute Tischlerarbeiten.

Falls Interesse besteht, einfach ne Mail an info@seehafer-elemente.de schreiben und den Block hier unten in die Anfrage mit reinpacken. Dann wissen die Bescheid.

${getAffiliateBlockText(data)}

Viele Gruesse!`;
}

export function generateAffiliateMailtoLink(data: AffiliateData): string {
  const subject = encodeURIComponent("Empfehlung – Seehafer Elemente");
  const body = encodeURIComponent(getEmailBody(data));
  return `mailto:?subject=${subject}&body=${body}`;
}

export function generateAffiliateGmailLink(data: AffiliateData): string {
  const subject = encodeURIComponent("Empfehlung – Seehafer Elemente");
  const body = encodeURIComponent(getEmailBody(data));
  return `https://mail.google.com/mail/?view=cm&su=${subject}&body=${body}`;
}
