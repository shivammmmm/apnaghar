import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Slider } from '@/components/ui/slider';
import { formatCurrencyFull } from '@/utils';
import SectionHeading from '../SectionHeading';

const presets = [
  { label: "Home Loan", amount: 3e6 },
  { label: "Balance Transfer", amount: 25e5 },
  { label: "Plot Loan", amount: 15e5 },
  { label: "Construction", amount: 4e6 },
  { label: "Loan Against Property", amount: 5e6 },
  { label: "Top-Up Loan", amount: 10e5 }
];

export default function EMICalculatorSection() {
  const [amount, setAmount] = useState(3e6);
  const [rate, setRate] = useState(8.5);
  const [tenure, setTenure] = useState(20);
  const [activePreset, setActivePreset] = useState(0);

  const cal = useMemo(() => {
    const monthlyRate = rate / 12 / 100;
    const totalMonths = tenure * 12;
    if (monthlyRate === 0) {
      return { emi: amount / totalMonths, totalInterest: 0, totalAmount: amount };
    }
    const emi = amount * monthlyRate * Math.pow(1 + monthlyRate, totalMonths) / (Math.pow(1 + monthlyRate, totalMonths) - 1);
    const totalAmount = emi * totalMonths;
    return {
      emi: Math.round(emi),
      totalInterest: Math.round(totalAmount - amount),
      totalAmount: Math.round(totalAmount)
    };
  }, [amount, rate, tenure]);

  const progress = Math.max(5, Math.min(95, (amount / cal.totalAmount) * 100));

  const handlePresetClick = (preset, idx) => {
    setActivePreset(idx);
    setAmount(preset.amount);
  };

  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Calculator"
          title="EMI Calculator"
          subtitle="Plan your finances better. Adjust the loan parameters to see your estimated monthly payments."
        />

        <div className="max-w-4xl mx-auto mb-6 flex flex-wrap gap-2 justify-center">
          {presets.map((preset, idx) => (
            <button
              key={preset.label}
              onClick={() => handlePresetClick(preset, idx)}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold border transition-all duration-200 ${activePreset === idx ? "bg-navy-900 text-white border-navy-900 shadow-md" : "bg-white text-navy-600 border-navy-200 hover:border-navy-400 hover:text-navy-900"}`}
            >
              {preset.label}
            </button>
          ))}
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-slate-50 rounded-2xl border border-navy-100/50 p-6 md:p-10">
            <div className="grid md:grid-cols-2 gap-10">
              <div className="space-y-8">
                <div>
                  <div className="flex justify-between items-center mb-3">
                    <label className="text-sm font-medium text-navy-700">Loan Amount</label>
                    <div className="flex items-center gap-1 bg-white border border-navy-200 rounded-lg px-2 py-1">
                      <span className="text-sm text-navy-400">₹</span>
                      <input
                        type="number"
                        value={amount}
                        onChange={(e) => { setAmount(Number(e.target.value) || 0); setActivePreset(-1); }}
                        className="w-28 text-right text-sm font-bold text-navy-900 outline-none bg-transparent"
                      />
                    </div>
                  </div>
                  <Slider
                    value={[Math.min(amount, 1e8)]}
                    onValueChange={(val) => { setAmount(val[0]); setActivePreset(-1); }}
                    min={100000}
                    max={100000000}
                    step={100000}
                    className="[&_[role=slider]]:bg-navy-900 [&_[role=slider]]:border-navy-900"
                  />
                  <div className="flex justify-between mt-1.5 text-xs text-navy-400">
                    <span>₹1 L</span>
                    <span>₹10 Cr</span>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between items-center mb-3">
                    <label className="text-sm font-medium text-navy-700">Interest Rate (% p.a.)</label>
                    <div className="flex items-center gap-1 bg-white border border-navy-200 rounded-lg px-2 py-1">
                      <input
                        type="number"
                        step="0.1"
                        value={rate}
                        onChange={(e) => { setRate(Number(e.target.value) || 0); }}
                        className="w-16 text-right text-sm font-bold text-navy-900 outline-none bg-transparent"
                      />
                      <span className="text-sm text-navy-400">%</span>
                    </div>
                  </div>
                  <Slider
                    value={[Math.min(rate, 30)]}
                    onValueChange={(val) => { setRate(val[0]); }}
                    min={1}
                    max={30}
                    step={0.1}
                    className="[&_[role=slider]]:bg-navy-900 [&_[role=slider]]:border-navy-900"
                  />
                  <div className="flex justify-between mt-1.5 text-xs text-navy-400">
                    <span>1%</span>
                    <span>30%</span>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between items-center mb-3">
                    <label className="text-sm font-medium text-navy-700">Loan Tenure (Years)</label>
                    <div className="flex items-center gap-1 bg-white border border-navy-200 rounded-lg px-2 py-1">
                      <input
                        type="number"
                        value={tenure}
                        onChange={(e) => { setTenure(Number(e.target.value) || 0); }}
                        className="w-16 text-right text-sm font-bold text-navy-900 outline-none bg-transparent"
                      />
                      <span className="text-sm text-navy-400">Yrs</span>
                    </div>
                  </div>
                  <Slider
                    value={[Math.min(tenure, 40)]}
                    onValueChange={(val) => { setTenure(val[0]); }}
                    min={1}
                    max={40}
                    step={1}
                    className="[&_[role=slider]]:bg-navy-900 [&_[role=slider]]:border-navy-900"
                  />
                  <div className="flex justify-between mt-1.5 text-xs text-navy-400">
                    <span>1 Yr</span>
                    <span>40 Yrs</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col items-center justify-center">
                <div className="relative w-56 h-56 mb-8">
                  <svg viewBox="0 0 36 36" className="w-full h-full -rotate-90">
                    <circle cx="18" cy="18" r="15.9" fill="none" stroke="#E2E8F0" strokeWidth="2" />
                    <circle
                      cx="18"
                      cy="18"
                      r="15.9"
                      fill="none"
                      stroke="#0F172A"
                      strokeWidth="2"
                      strokeDasharray={`${progress} ${100 - progress}`}
                      strokeLinecap="round"
                    />
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <p className="text-xs text-navy-400 font-medium">Monthly EMI</p>
                    <p className="font-heading text-3xl text-navy-900">{formatCurrencyFull(cal.emi)}</p>
                  </div>
                </div>

                <div className="w-full max-w-sm space-y-3">
                  <div className="flex justify-between px-5 py-3 bg-slate-50 rounded-xl">
                    <span className="text-sm text-navy-500">Principal Amount</span>
                    <span className="text-sm font-bold text-navy-900">{formatCurrencyFull(amount)}</span>
                  </div>
                  <div className="flex justify-between px-5 py-3 bg-slate-50 rounded-xl">
                    <span className="text-sm text-navy-500">Total Interest Payable</span>
                    <span className="text-sm font-bold text-navy-900">{formatCurrencyFull(cal.totalInterest)}</span>
                  </div>
                  <div className="flex justify-between px-5 py-3 bg-navy-900 text-white rounded-xl">
                    <span className="text-sm">Total Amount Payable</span>
                    <span className="text-sm font-bold">{formatCurrencyFull(cal.totalAmount)}</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-center mt-8">
              <Link to="/emi-calculator" className="inline-flex items-center gap-2 text-sm font-semibold text-navy-700 hover:text-navy-900 transition-colors">
                Full Calculator
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
