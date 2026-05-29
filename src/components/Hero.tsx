import React from 'react';
import { motion } from 'motion/react';
import { Calendar, Shield, Cpu, Users, ArrowRight, Star } from 'lucide-react';

interface HeroProps {
  onBookClick: () => void;
}

export default function Hero({ onBookClick }: HeroProps) {
  const highlights = [
    { icon: Shield, text: "Gentle & Painless Care" },
    { icon: Cpu, text: "Modern Technology" },
    { icon: Users, text: "Experienced Dentists" },
    { icon: Star, text: "Family Friendly" }
  ];

  return (
    <section id="home" className="relative bg-linear-to-b from-slate-50 to-white pt-8 pb-16 overflow-hidden">
      {/* Decorative colored blobs in the background */}
      <div className="absolute top-0 right-0 w-1/2 h-[600px] bg-dental-blue-50/40 rounded-full blur-3xl -z-10 translate-x-1/4 -translate-y-1/4" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-emerald-50/20 rounded-full blur-3xl -z-10 -translate-x-1/3" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column Content */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-dental-blue-50 rounded-full border border-dental-blue-100"
            >
              <div className="w-2 h-2 rounded-full bg-dental-blue-500 animate-pulse" />
              <span className="font-sans text-xs font-bold text-dental-blue-700 uppercase tracking-wider">
                Trusted Dental Care in San Diego, CA
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-dental-blue-900 leading-[1.08] tracking-tight"
            >
              Your Healthiest, <br />
              <span className="text-dental-blue-500 relative inline-block">
                Brightest Smile
                <span className="absolute bottom-1.5 left-0 w-full h-1 bg-dental-blue-200/60 -z-10 rounded-full" />
              </span> <br />
              Starts Here
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-4"
            >
              <h2 className="font-display font-semibold text-2xl text-slate-700">
                Gentle Care You Can Trust.
              </h2>
              <p className="font-sans text-base text-slate-500 max-w-xl leading-relaxed">
                We make every visit comfortable, stress-free, and focused on your long-term smile and health. Enjoy expert solutions tailored directly for your absolute convenience.
              </p>
            </motion.div>

            {/* highlights list */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="grid grid-cols-2 gap-4 w-full max-w-lg pt-2"
            >
              {highlights.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div key={index} className="flex items-center gap-3 bg-white p-3 rounded-xl shadow-xs border border-slate-100">
                    <div className="flex items-center justify-center w-8 h-8 bg-dental-blue-50 text-dental-blue-500 rounded-lg shrink-0">
                      <Icon className="w-4.5 h-4.5" />
                    </div>
                    <span className="font-sans font-medium text-xs text-slate-700 leading-tight">
                      {item.text}
                    </span>
                  </div>
                );
              })}
            </motion.div>

            {/* Live Booking CTA */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4 w-full"
            >
              <button
                onClick={onBookClick}
                className="group flex items-center justify-center gap-2 px-8 py-4 bg-dental-blue-500 hover:bg-dental-blue-600 text-white font-sans font-bold rounded-xl text-base shadow-lg shadow-dental-blue-500/20 transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
              >
                <Calendar className="w-5 h-5" />
                Book My Dental Consultation
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="font-sans text-xs text-slate-400 font-medium"
            >
              Limited-Time Offer: New Patient Consultation for <span className="text-dental-blue-600 font-bold">$49!</span>
            </motion.p>
          </div>

          {/* Right Column Visual (Dental woman patient + float promo badge) */}
          <div className="lg:col-span-5 relative mt-6 lg:mt-0 flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative w-full max-w-md lg:max-w-none"
            >
              {/* Outer decorative glowing ring */}
              <div className="absolute -inset-2 bg-gradient-to-tr from-dental-blue-500/20 to-emerald-500/10 rounded-2xl blur-lg" />

              {/* Main portrait wrapper */}
              <div className="relative aspect-[4/3] lg:aspect-square bg-slate-100 rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                <img
                  src="/src/assets/images/hero_patient_smile_1779979571341.png"
                  alt="Beautiful healthy smile patient at GentleCare Dental Studio"
                  className="w-full h-full object-cover object-center"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Float Badge: New Patient Special $49 */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="absolute right-[-10px] bottom-[-20px] md:right-[-20px] md:bottom-[-10px] w-52 bg-white rounded-2xl overflow-hidden shadow-2xl border border-slate-100/80 hover:scale-103 transition-transform duration-300"
              >
                <div className="p-4 flex flex-col items-center">
                  <span className="font-sans text-xs font-bold text-slate-400 uppercase tracking-widest text-center">
                    New Patient
                  </span>
                  <span className="font-display text-xs font-semibold text-slate-600 text-center leading-none mt-1">
                    Special Package
                  </span>
                  <div className="flex items-start justify-center gap-1 my-2">
                    <span className="text-2xl font-bold font-display text-dental-blue-500 leading-none mt-1">$</span>
                    <span className="text-5xl font-extrabold font-display text-dental-blue-600 tracking-tighter leading-none">49</span>
                  </div>
                  <span className="font-sans text-xs font-bold text-slate-700 tracking-wide">
                    Full Consultation
                  </span>
                </div>
                <div className="bg-dental-blue-500 py-2.5 px-3 text-center">
                  <span className="font-sans text-[11px] font-bold text-white tracking-widest uppercase">
                    For a Limited Time
                  </span>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
