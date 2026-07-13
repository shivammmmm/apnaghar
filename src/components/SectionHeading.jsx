import * as React from "react"

export default function SectionHeading({ label, title, subtitle, center = true, light = false }) {
  return (
    <div className={`mb-12 md:mb-16 ${center ? "text-center" : ""}`}>
      {label && (
        <span className={`inline-block text-xs font-semibold uppercase tracking-[0.2em] mb-3 ${light ? "text-white/50" : "text-navy-400"}`}>
          {label}
        </span>
      )}
      <h2 className={`font-heading text-3xl sm:text-4xl md:text-5xl tracking-tight text-balance ${light ? "text-white" : "text-navy-900"}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-4 text-base sm:text-lg max-w-2xl leading-relaxed ${center ? "mx-auto" : ""} ${light ? "text-white/60" : "text-navy-500"}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
