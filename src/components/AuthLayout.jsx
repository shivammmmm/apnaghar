import * as React from "react"

export default function AuthLayout({ children, title, subtitle }) {
  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-slate-50">
      <div className="hidden md:flex md:w-1/2 bg-navy-900 text-white p-12 flex-col justify-between relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
        <div className="relative z-10">
          <img src="https://media.base44.com/images/public/6a3cd351d9831a39cb1b5904/010004434_ApnaGHarProfile.png" alt="Apna Ghar Loans" className="h-12 w-auto object-contain brightness-0 invert mb-8" />
          <h2 className="font-heading text-4xl lg:text-5xl leading-tight text-white mb-6">Your Journey to Homeownership Starts Here</h2>
          <p className="text-white/70 max-w-md">Compare multiple banking partners, calculate EMIs, and secure tailored home loan solutions with expert guidance.</p>
        </div>
        <div className="relative z-10 text-xs text-white/40">
          © {new Date().getFullYear()} Apna Ghar Loans. All rights reserved.
        </div>
      </div>
      <div className="flex-1 flex items-center justify-center p-8 bg-white md:bg-transparent">
        <div className="w-full max-w-md space-y-8 bg-white p-8 md:p-10 rounded-2xl md:shadow-xl md:border md:border-slate-100">
          <div className="text-center md:text-left">
            <h1 className="font-heading text-3xl text-navy-900 mb-2">{title}</h1>
            <p className="text-sm text-navy-500">{subtitle}</p>
          </div>
          {children}
        </div>
      </div>
    </div>
  );
}
