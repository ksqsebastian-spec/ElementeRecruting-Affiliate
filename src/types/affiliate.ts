export interface AffiliateFormData {
  name: string;
  email: string;
  noPaypal: boolean;
  iban: string;
  kontoinhaber: string;
}

export interface AffiliateData extends AffiliateFormData {
  refCode: string;
}

const nameRegex = /^[a-zA-ZäöüÄÖÜßéèêàáâ\s\-]+$/;
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const ibanRegex = /^[A-Z]{2}\d{2}[A-Z0-9]{4}\d{7}([A-Z0-9]?){0,16}$/;

export interface AffiliateValidationErrors {
  name?: string;
  email?: string;
  iban?: string;
  kontoinhaber?: string;
}

export function validateAffiliateForm(
  data: AffiliateFormData,
): AffiliateValidationErrors {
  const errors: AffiliateValidationErrors = {};

  if (!data.name) {
    errors.name = "Bitte gib deinen Namen ein.";
  } else if (data.name.length > 80) {
    errors.name = "Name darf maximal 80 Zeichen haben.";
  } else if (!nameRegex.test(data.name)) {
    errors.name = "Nur Buchstaben, Leerzeichen und Bindestriche erlaubt.";
  }

  if (!data.email) {
    errors.email = "Bitte gib deine E-Mail ein.";
  } else if (data.email.length > 120) {
    errors.email = "E-Mail darf maximal 120 Zeichen haben.";
  } else if (!emailRegex.test(data.email)) {
    errors.email = "Bitte gib eine gültige E-Mail-Adresse ein.";
  }

  if (data.noPaypal) {
    if (!data.kontoinhaber) {
      errors.kontoinhaber = "Bitte gib den Kontoinhaber ein.";
    } else if (!nameRegex.test(data.kontoinhaber)) {
      errors.kontoinhaber =
        "Nur Buchstaben, Leerzeichen und Bindestriche erlaubt.";
    }

    if (!data.iban) {
      errors.iban = "Bitte gib deine IBAN ein.";
    } else if (!ibanRegex.test(data.iban.replace(/\s/g, "").toUpperCase())) {
      errors.iban = "Bitte gib eine gültige IBAN ein.";
    }
  }

  return errors;
}
