import { useState } from 'react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import StickyButtons from '@/components/StickyButtons';
import SectionHeading from '@/components/SectionHeading';
import { Slider } from '@/components/ui/slider';
import { formatCurrencyFull } from '@/utils';

function EMICalculatorBlock() {
  const [amount, setAmount] = useState(3e6);
  const [rate, setRate] = useState(8.5);
  const [tenure, setTenure] = useState(20);

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

  return (
    <div className="grid lg:grid-cols-2 gap-10">
      <div className="space-y-8">
        <div>
          <div className="flex justify-between items-center mb-3">
            <label className="text-sm font-medium text-navy-700">Loan Amount</label>
            <div className="flex items-center gap-1 bg-white border border-navy-200 rounded-lg px-2 py-1">
              <span className="text-sm text-navy-400">₹</span>
              <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(Number(e.target.value) || 0)}
                className="w-32 text-right text-sm font-bold text-navy-900 outline-none bg-transparent"
              />
            </div>
          </div>
          <Slider
            value={[Math.min(amount, 1e8)]}
            onValueChange={(val) => setAmount(val[0])}
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
                onChange={(e) => setRate(Number(e.target.value) || 0)}
                className="w-16 text-right text-sm font-bold text-navy-900 outline-none bg-transparent"
              />
              <span className="text-sm text-navy-400">%</span>
            </div>
          </div>
          <Slider
            value={[Math.min(rate, 30)]}
            onValueChange={(val) => setRate(val[0])}
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
                onChange={(e) => setTenure(Number(e.target.value) || 0)}
                className="w-16 text-right text-sm font-bold text-navy-900 outline-none bg-transparent"
              />
              <span className="text-sm text-navy-400">Yrs</span>
            </div>
          </div>
          <Slider
            value={[Math.min(tenure, 40)]}
            onValueChange={(val) => setTenure(val[0])}
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
  );
}

import { useMemo } from 'react';

function EligibilityCalculatorBlock() {
  const [income, setIncome] = useState(8e4);
  const [emi, setEmi] = useState(5e3);
  const [rate, setRate] = useState(8.5);
  const [tenure, setTenure] = useState(20);

  const cal = useMemo(() => {
    const maxEmi = income * 0.5 - emi;
    if (maxEmi <= 0) return { eligibleAmount: 0, estimatedEmi: 0 };
    const monthlyRate = rate / 12 / 100;
    const totalMonths = tenure * 12;
    if (monthlyRate === 0) return { eligibleAmount: maxEmi * totalMonths, estimatedEmi: maxEmi };
    const amount = maxEmi * (Math.pow(1 + monthlyRate, totalMonths) - 1) / (monthlyRate * Math.pow(1 + monthlyRate, totalMonths));
    return {
      eligibleAmount: Math.round(amount),
      estimatedEmi: Math.round(maxEmi)
    };
  }, [income, emi, rate, tenure]);

  return (
    <div className="space-y-8">
      <div className="grid lg:grid-cols-2 gap-10">
        <div className="space-y-8">
          <div>
            <div className="flex justify-between mb-3">
              <label className="text-sm font-medium text-navy-700">Monthly Income</label>
              <span className="text-sm font-bold text-navy-900">{formatCurrencyFull(income)}</span>
            </div>
            <Slider
              value={[income]}
              onValueChange={val => setIncome(val[0])}
              min={20000}
              max={500000}
              step={500}
              className="[&_[role=slider]]:bg-navy-900 [&_[role=slider]]:border-navy-900"
            />
            <div className="flex justify-between mt-1.5 text-xs text-navy-400">
              <span>₹20K</span>
              <span>₹5L</span>
            </div>
          </div>

          <div>
            <div className="flex justify-between mb-3">
              <label className="text-sm font-medium text-navy-700">Existing Monthly EMI</label>
              <span className="text-sm font-bold text-navy-900">{formatCurrencyFull(emi)}</span>
            </div>
            <Slider
              value={[emi]}
              onValueChange={val => setEmi(val[0])}
              min={0}
              max={200000}
              step={1000}
              className="[&_[role=slider]]:bg-navy-900 [&_[role=slider]]:border-navy-900"
            />
            <div className="flex justify-between mt-1.5 text-xs text-navy-400">
              <span>₹0</span>
              <span>₹2L</span>
            </div>
          </div>

          <div>
            <div className="flex justify-between mb-3">
              <label className="text-sm font-medium text-navy-700">Interest Rate (% p.a.)</label>
              <span className="text-sm font-bold text-navy-900">{rate}%</span>
            </div>
            <Slider
              value={[rate]}
              onValueChange={val => setRate(val[0])}
              min={6}
              max={16}
              step={0.1}
              className="[&_[role=slider]]:bg-navy-900 [&_[role=slider]]:border-navy-900"
            />
            <div className="flex justify-between mt-1.5 text-xs text-navy-400">
              <span>6%</span>
              <span>16%</span>
            </div>
          </div>

          <div>
            <div className="flex justify-between mb-3">
              <label className="text-sm font-medium text-navy-700">Loan Tenure (Years)</label>
              <span className="text-sm font-bold text-navy-900">{tenure} Years</span>
            </div>
            <Slider
              value={[tenure]}
              onValueChange={val => setTenure(val[0])}
              min={1}
              max={30}
              step={1}
              className="[&_[role=slider]]:bg-navy-900 [&_[role=slider]]:border-navy-900"
            />
            <div className="flex justify-between mt-1.5 text-xs text-navy-400">
              <span>1 Yr</span>
              <span>30 Yrs</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center">
          <div className="w-full max-w-sm space-y-4">
            <div className="bg-navy-900 text-white rounded-2xl p-8 text-center">
              <p className="text-xs font-medium text-white/60 uppercase tracking-wider mb-2">Estimated Loan Eligibility</p>
              <p className="font-heading text-4xl">{formatCurrencyFull(cal.eligibleAmount)}</p>
            </div>
            <div className="bg-slate-50 rounded-xl p-5 text-center">
              <p className="text-xs font-medium text-navy-400 mb-1">Estimated Maximum EMI</p>
              <p className="font-heading text-2xl text-navy-900">{formatCurrencyFull(cal.estimatedEmi)}</p>
            </div>
            <p className="text-xs text-navy-400 text-center leading-relaxed mt-4">
              This is only an estimate based on general banking guidelines. Actual eligibility may vary based on the lender's assessment, credit score, and other factors.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function EMICalculator() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="pt-24 pb-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="mb-8 text-sm text-navy-400" aria-label="Breadcrumb">
            <a href="/" className="hover:text-navy-600 transition-colors">Home</a>
            <span className="mx-2">›</span>
            <span className="text-navy-700">Calculators</span>
          </nav>

          <Tabs defaultValue="emi" className="space-y-10">
            <div className="text-center">
              <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl text-navy-900 mb-4">Home Loan Calculators</h1>
              <p className="text-navy-500 max-w-xl mx-auto mb-8">Plan your finances and check your eligibility with our interactive calculators.</p>
              <TabsList className="bg-slate-100 p-1 rounded-xl">
                <TabsTrigger value="emi" className="rounded-lg px-6 py-2.5 text-sm font-medium data-[state=active]:bg-navy-900 data-[state=active]:text-white">
                  EMI Calculator
                </TabsTrigger>
                <TabsTrigger value="eligibility" className="rounded-lg px-6 py-2.5 text-sm font-medium data-[state=active]:bg-navy-900 data-[state=active]:text-white">
                  Eligibility Calculator
                </TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="emi">
              <div className="bg-slate-50 rounded-2xl border border-navy-100/50 p-6 md:p-10">
                <EMICalculatorBlock />
              </div>
            </TabsContent>
            
            <TabsContent value="eligibility" id="eligibility">
              <div className="bg-slate-50 rounded-2xl border border-navy-100/50 p-6 md:p-10">
                <EligibilityCalculatorBlock />
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      <Footer />
      <StickyButtons />
    </div>
  );
}
