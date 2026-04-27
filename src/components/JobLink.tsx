export default function JobLink() {
  return (
    <section className="fade-in pb-8">
      <a
        href="https://seehafer-elemente.de/karriere"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-between border border-[#e0e0e0] bg-white p-5 transition-all hover:border-black hover:bg-[#f5f5f5]"
      >
        <div>
          <p className="text-sm font-bold text-[#0a0a0a]">
            Offene Stellen ansehen
          </p>
          <p className="mt-0.5 text-xs text-[#6b6b6b]">
            seehafer-elemente.de/karriere
          </p>
        </div>
        <span className="text-lg font-bold text-[#e63329]">→</span>
      </a>
    </section>
  );
}
