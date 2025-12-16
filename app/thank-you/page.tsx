import Link from "next/link";

export default function ThankYou() {
  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-[#030712] px-4 text-[#e4ebff]">
      <div className="pointer-events-none absolute inset-0 opacity-50">
        <div className="absolute -top-24 left-1/4 h-80 w-80 rounded-full bg-[#1f8f63] blur-[220px]"></div>
        <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-[#15487a] blur-[240px]"></div>
      </div>

      <div className="relative w-full max-w-md text-center">
        <div className="mb-6 inline-flex items-center justify-center rounded-2xl border border-[#1f2b3f] bg-[#0b1425] p-6 shadow-[0_20px_120px_rgba(3,7,18,0.55)]">
          <span className="text-6xl">✉️</span>
        </div>

        <h1 className="mb-4 text-4xl font-bold text-white">Thank You!</h1>

        <p className="mb-8 text-lg text-[#c0c9e5]">
          You&apos;ve successfully subscribed to our newsletter. We&apos;ll keep you updated on new
          features and releases.
        </p>

        <Link
          href="/"
          className="inline-flex items-center justify-center rounded-full bg-[#3fb366] px-8 py-4 text-base font-semibold text-[#030712] shadow-[0_20px_80px_rgba(63,179,102,0.35)] transition-all hover:scale-105 hover:bg-[#6dffbd]"
        >
          ← Back to Home
        </Link>
      </div>
    </div>
  );
}
