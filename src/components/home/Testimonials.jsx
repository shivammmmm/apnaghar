import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';
import SectionHeading from '../SectionHeading';

const testimonials = [
  {
    name: "Rajesh Kumar",
    city: "Mumbai",
    loanType: "Home Loan",
    rating: 5,
    review: "Apna Ghar Loans made my home buying journey seamless. They compared options from multiple banks and helped me get a competitive interest rate. Highly recommend their services!",
    photo: "https://i.pravatar.cc/160?img=12"
  },
  {
    name: "Priya Sharma",
    city: "Delhi",
    loanType: "Balance Transfer",
    rating: 5,
    review: "I was paying a higher EMI on my existing loan. Their team helped me transfer to a better rate, saving me lakhs over the tenure. Professional and transparent throughout.",
    photo: "https://i.pravatar.cc/160?img=5"
  },
  {
    name: "Vikram Patel",
    city: "Bangalore",
    loanType: "Plot Loan",
    rating: 4,
    review: "The team was incredibly helpful in securing a plot loan. They guided me through the entire documentation process and kept me updated at every step. Great experience overall.",
    photo: "https://i.pravatar.cc/160?img=13"
  },
  {
    name: "Anita Desai",
    city: "Pune",
    loanType: "Home Loan",
    rating: 5,
    review: "First-time home buyer here. Apna Ghar Loans simplified everything — from eligibility check to disbursement. Their personalized approach made all the difference.",
    photo: "https://i.pravatar.cc/160?img=45"
  }
];

export default function Testimonials() {
  return (
    <section className="py-20 md:py-28 bg-navy-900 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <img
          src="https://media.base44.com/images/public/6a3cd351d9831a39cb1b5904/764d363c5_generated_c139a498.png"
          alt=""
          className="w-full h-full object-cover"
          aria-hidden="true"
        />
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Testimonials"
          title="What Our Customers Say"
          subtitle="Real experiences from real customers who trusted us with their home loan journey."
          light={true}
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((e, idx) => (
            <motion.div
              key={e.name}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
            >
              <Quote className="w-8 h-8 text-white/20 mb-4" />
              <p className="text-sm text-white/70 leading-relaxed mb-6">
                {e.review}
              </p>
              <div className="flex items-center gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, r) => (
                  <Star
                    key={r}
                    className={`w-3.5 h-3.5 ${r < e.rating ? "fill-amber-400 text-amber-400" : "text-white/20"}`}
                  />
                ))}
              </div>
              <div className="flex items-center gap-3">
                <img
                  src={e.photo}
                  alt={e.name}
                  loading="lazy"
                  className="w-11 h-11 rounded-full object-cover ring-2 ring-white/20"
                />
                <div>
                  <p className="text-sm font-semibold text-white">{e.name}</p>
                  <p className="text-xs text-white/50">{e.city} • {e.loanType}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
