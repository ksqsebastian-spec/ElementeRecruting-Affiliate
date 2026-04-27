import QRCode from "qrcode";

export const metadata = {
  title: "QR Codes | Seehafer Elemente",
  robots: "noindex, nofollow",
};

export default async function QRPage() {
  const base = process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : (process.env.NEXT_PUBLIC_BASE_URL ?? "http://localhost:3000");

  const [empfehlungQR, partnerQR] = await Promise.all([
    QRCode.toDataURL(`${base}/empfehlung`, { width: 300, margin: 2 }),
    QRCode.toDataURL(`${base}/partner`, { width: 300, margin: 2 }),
  ]);

  return (
    <main className="min-h-screen bg-[#fbfaf5] px-8 py-12">
      <p
        className="mb-12 text-center font-extrabold tracking-[2px] uppercase text-[#050234]"
        style={{ fontSize: "11px" }}
      >
        SEEHAFER ELEMENTE — QR Codes
      </p>

      <div className="flex flex-col items-center justify-center gap-16 sm:flex-row sm:items-start">
        <div className="text-center">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={empfehlungQR}
            alt="QR Code Fachkräfte-Empfehlung"
            className="mx-auto h-56 w-56 rounded-xl"
          />
          <p className="mt-4 text-sm font-bold text-[#050234]">
            Mitarbeiter empfehlen
          </p>
          <p className="mt-1 text-xs text-[#8a8a9a]">1.000 € Prämie</p>
          <p className="mt-1 text-[10px] text-[#8a8a9a]">/empfehlung</p>
        </div>

        <div className="text-center">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={partnerQR}
            alt="QR Code Empfehlungsprogramm"
            className="mx-auto h-56 w-56 rounded-xl"
          />
          <p className="mt-4 text-sm font-bold text-[#050234]">
            Auftrag empfehlen
          </p>
          <p className="mt-1 text-xs text-[#8a8a9a]">Provision sichern</p>
          <p className="mt-1 text-[10px] text-[#8a8a9a]">/partner</p>
        </div>
      </div>

      <p className="mt-16 text-center text-[11px] text-[#8a8a9a]">
        Zum Drucken: Strg+P / Cmd+P
      </p>
    </main>
  );
}
