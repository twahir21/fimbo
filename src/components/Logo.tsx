import Image from "next/image";

export default function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-3 ${className}`}>
      <span className="relative flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded bg-white p-1 shadow-sm">
        <Image
          src="/logo.png"
          alt="Fimbo Consultants emblem"
          width={40}
          height={40}
          className="h-full w-full object-contain"
          priority
        />
      </span>
      <span className="flex flex-col leading-none">
        <span className="font-display text-xl font-extrabold tracking-tight">Fimbo</span>
        <span className="mt-0.5 text-[11px] font-medium text-white/60">Consultants Company</span>
      </span>
    </span>
  );
}
