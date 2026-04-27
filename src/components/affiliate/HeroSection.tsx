export default function AffiliateHeroSection() {
  return (
    <section className="fade-in pb-10">
      <h1
        className="font-black leading-none tracking-tight text-[#0a0a0a]"
        style={{ fontSize: "clamp(42px, 10vw, 72px)" }}
      >
        Empfiehl uns.
        <br />
        Verdiene mit.
      </h1>
      <p
        className="mt-2 font-black leading-none tracking-tight text-[#e63329]"
        style={{ fontSize: "clamp(20px, 5vw, 32px)" }}
      >
        Provision sichern.
      </p>
      <p className="mt-5 max-w-[360px] text-[#6b6b6b]" style={{ fontSize: "14px" }}>
        Jemand aus deinem Umfeld braucht Tischlerarbeiten? Sag Bescheid — und
        verdiene eine Provision, wenn ein Auftrag zustande kommt.
      </p>
    </section>
  );
}
