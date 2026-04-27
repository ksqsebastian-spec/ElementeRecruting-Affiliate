export default function HeroSection() {
  return (
    <section className="fade-in pb-10">
      <h1
        className="font-black leading-none tracking-tight text-[#0a0a0a]"
        style={{ fontSize: "clamp(42px, 10vw, 72px)" }}
      >
        Kennst du
        <br />
        jemanden?
      </h1>
      <p
        className="mt-2 font-black leading-none tracking-tight text-[#e63329]"
        style={{ fontSize: "clamp(20px, 5vw, 32px)" }}
      >
        1.000 € Prämie.
      </p>
      <p className="mt-5 max-w-[360px] text-[#6b6b6b]" style={{ fontSize: "14px" }}>
        Du kennst jemanden, der als Tischler, Monteur oder Helfer richtig gut
        wäre? Empfiehl die Person — wenn sie eingestellt wird und die Probezeit
        besteht, zahlen wir dir 1.000 € Prämie.
      </p>
    </section>
  );
}
