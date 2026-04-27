const steps = [
  {
    num: "01",
    title: "Formular ausfüllen",
    desc: "Name und PayPal-Adresse (oder Bankverbindung) eingeben.",
    accent: false,
  },
  {
    num: "02",
    title: "Empfehlungsblock weitergeben",
    desc: "Per E-Mail, Gmail, Zwischenablage oder PDF — an die Person, die Tischlerarbeiten braucht.",
    accent: false,
  },
  {
    num: "03",
    title: "Auftrag kommt zustande",
    desc: "Die Person schickt eine Anfrage an Seehafer Elemente mit dem Empfehlungsblock.",
    accent: false,
  },
  {
    num: "04",
    title: "Provision erhalten",
    desc: "Wenn ein Auftrag entsteht, kommt deine Provision auf PayPal oder per Überweisung.",
    accent: true,
  },
];

export default function AffiliateStepCards() {
  return (
    <section className="fade-in pb-10">
      <p className="section-label mb-6">So funktioniert es</p>
      <div>
        {steps.map((step) => (
          <div
            key={step.num}
            className="border-t border-[#e0e0e0] py-5 last:border-b"
          >
            <p
              className="mb-1 font-semibold text-[#6b6b6b]"
              style={{ fontSize: "10px", letterSpacing: "1px" }}
            >
              {step.num}
            </p>
            <p
              className={`font-black leading-tight ${step.accent ? "text-[#e63329]" : "text-[#0a0a0a]"}`}
              style={{ fontSize: "clamp(18px, 4vw, 22px)" }}
            >
              {step.title}
            </p>
            <p className="mt-1 text-[#6b6b6b]" style={{ fontSize: "13px" }}>
              {step.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
