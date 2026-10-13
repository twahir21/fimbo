"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { FiAlertTriangle } from "react-icons/fi";

const pad = (n: number) => String(n).padStart(2, "0");
const stamp = (d: Date) =>
  `${d.getFullYear()}/${pad(d.getMonth() + 1)}/${pad(d.getDate())} ${pad(d.getHours())}:${pad(d.getMinutes())}:${pad(d.getSeconds())}`;

export default function CctvMonitor() {
  const root = useRef<HTMLDivElement>(null);
  const [time, setTime] = useState("");

  useEffect(() => {
    setTime(stamp(new Date()));
    const id = setInterval(() => setTime(stamp(new Date())), 1000);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const ctx = gsap.context(() => {
      gsap.set(".det", { opacity: 0, scale: 0.9 });
      gsap.set(".alert", { yPercent: 100 });
      gsap
        .timeline({ delay: 1.2 })
        .to(".det-person", { opacity: 1, scale: 1, duration: 0.5, ease: "back.out(2)" })
        .to(".det-slot", { opacity: 1, scale: 1, duration: 0.5, ease: "back.out(2)" }, "+=0.7")
        .to(".alert", { yPercent: 0, duration: 0.5, ease: "power3.out" }, "+=0.25");
      gsap.fromTo(".scan", { top: "0%" }, { top: "100%", duration: 4.5, repeat: -1, ease: "none" });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={root}
      role="img"
      aria-label="Illustration of a CCTV feed at an ATM. A tampered card slot is flagged by the monitoring system."
      className="relative aspect-[4/3] w-full overflow-hidden border border-white/20 bg-black shadow-[0_0_0_6px_#0d0d0d,0_0_0_7px_rgba(255,255,255,0.15)]"
    >
      <svg viewBox="0 0 640 480" className="absolute inset-0 h-full w-full" aria-hidden="true">
        <defs>
          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M40 0H0V40" fill="none" stroke="#fff" strokeOpacity=".05" />
          </pattern>
          <linearGradient id="wall" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#202020" />
            <stop offset="1" stopColor="#090909" />
          </linearGradient>
        </defs>
        <rect width="640" height="480" fill="url(#wall)" />
        <rect width="640" height="480" fill="url(#grid)" />
        <rect y="420" width="640" height="60" fill="#0b0b0b" />
        <path d="M0 420H640" stroke="#fff" strokeOpacity=".15" />
        {/* ATM */}
        <rect x="90" y="80" width="200" height="340" fill="#171717" stroke="#fff" strokeOpacity=".25" />
        <rect x="115" y="105" width="150" height="95" fill="#050505" stroke="#fff" strokeOpacity=".3" />
        <path d="M125 125H255M125 145H220M125 165H240" stroke="#fff" strokeOpacity=".16" />
        <rect x="140" y="222" width="110" height="24" fill="#0a0a0a" stroke="#ff4048" strokeOpacity=".9" />
        <path d="M150 234H240" stroke="#fff" strokeOpacity=".4" />
        {[0, 1, 2].map((r) =>
          [0, 1, 2].map((c) => (
            <rect key={`${r}${c}`} x={150 + c * 38} y={262 + r * 22} width="28" height="14" fill="#222" stroke="#fff" strokeOpacity=".2" />
          )),
        )}
        <rect x="125" y="350" width="140" height="30" fill="#0a0a0a" stroke="#fff" strokeOpacity=".25" />
        {/* person */}
        <circle cx="395" cy="152" r="30" fill="#2c2c2c" />
        <path d="M335 440V240q0-48 60-48t60 48V440z" fill="#242424" stroke="#fff" strokeOpacity=".18" />
        <path d="M345 250L262 236" stroke="#2c2c2c" strokeWidth="22" strokeLinecap="round" />
      </svg>

      <div className="scanlines pointer-events-none absolute inset-0" />
      <div className="scan pointer-events-none absolute left-0 right-0 h-px bg-signal-bright/60 shadow-[0_0_14px_2px_rgba(255,64,72,0.5)]" />

      {/* detections */}
      <div className="det det-person absolute border-2 border-white/85" style={{ left: "50%", top: "24%", width: "24%", height: "68%" }}>
        <span className="absolute -top-6 left-[-2px] bg-white px-1.5 py-0.5 font-mono text-[10px] font-medium text-black">Person</span>
      </div>
      <div className="det det-slot absolute border-2 border-signal-bright" style={{ left: "20%", top: "43%", width: "20%", height: "11%" }}>
        <span className="absolute -top-6 left-[-2px] whitespace-nowrap bg-signal px-1.5 py-0.5 font-mono text-[10px] font-medium text-white">Foreign device</span>
      </div>

      {/* on-screen display */}
      <div className="absolute left-3 top-3 font-mono text-[11px] leading-tight text-white/90 sm:text-xs">
        <p>Camera 03</p>
        <p className="text-white/60">ATM lobby</p>
      </div>
      <div className="absolute right-3 top-3 flex items-center gap-2 font-mono text-[11px] text-white sm:text-xs">
        <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-signal-bright" />
        Rec
      </div>
      <div className="absolute bottom-3 left-3 font-mono text-[11px] text-white/80 sm:text-xs" suppressHydrationWarning>
        {time || "----/--/-- --:--:--"}
      </div>

      <div className="alert absolute inset-x-0 bottom-0 flex items-center gap-3 bg-signal px-4 py-3 text-sm font-semibold text-white">
        <FiAlertTriangle className="shrink-0" />
        <span>Card slot tampering flagged. Review footage.</span>
      </div>
    </div>
  );
}
