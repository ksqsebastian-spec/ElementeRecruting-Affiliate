export default function Footer() {
  return (
    <footer className="border-t border-[#e0e0e0] pt-5 pb-8">
      <div className="flex items-center justify-between">
        <p className="text-[11px] text-[#6b6b6b]">
          SEEHAFER ELEMENTE GMBH
        </p>
        <a
          href="https://seehafer-elemente.de/datenschutz"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[11px] text-[#6b6b6b] underline transition-colors hover:text-[#0a0a0a]"
        >
          Datenschutz
        </a>
      </div>
    </footer>
  );
}
