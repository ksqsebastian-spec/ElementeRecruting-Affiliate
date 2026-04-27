const steps = [
  {
    num: "01",
    title: "Ausfüllen",
    desc: "Deine Daten und den Namen der Person eingeben, die du empfiehlst.",
    accent: false,
  },
  {
    num: "02",
    title: "Weiterleiten",
    desc: "Den Empfehlungs-Text weiterleiten — per WhatsApp, SMS oder E-Mail.",
    accent: false,
  },
  {
    num: "03",
    title: "1.000 € kassieren",
    desc: "Prämie nach bestandener Probezeit der empfohlenen Person.",
    accent: true,
  },
];

export default function StepCards() {
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
