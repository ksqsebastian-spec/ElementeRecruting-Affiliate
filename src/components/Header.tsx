export default function Header() {
  return (
    <header className="fade-in pt-6 pb-8">
      <div className="mb-5 flex items-start justify-between border-b border-[#e0e0e0] pb-4">
        <p
          className="font-bold tracking-[2px] uppercase text-[#0a0a0a]"
          style={{ fontSize: "10px" }}
        >
          <span className="text-[#e63329]">●</span> SEEHAFER ELEMENTE
        </p>
        <p
          className="text-right text-[#6b6b6b]"
          style={{ fontSize: "10px", letterSpacing: "0.5px" }}
        >
          FACHKRÄFTE-EMPFEHLUNG
        </p>
      </div>
    </header>
  );
}
