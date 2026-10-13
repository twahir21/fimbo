export default function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-3 ${className}`}>
      <svg width="34" height="34" viewBox="0 0 34 34" fill="none" aria-hidden="true">
        <path d="M2 11V2h9M23 2h9v9M32 23v9h-9M11 32H2v-9" stroke="#fff" strokeWidth="2.5" />
        <rect x="10" y="10" width="14" height="14" fill="#d7000f" />
      </svg>
      <span className="flex flex-col leading-none">
        <span className="font-display text-xl font-extrabold tracking-tight">Fimbo</span>
        <span className="mt-0.5 text-[11px] font-medium text-white/60">Consultants Company</span>
      </span>
    </span>
  );
}
