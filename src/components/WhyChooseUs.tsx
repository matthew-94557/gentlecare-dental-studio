import React from 'react';
import { motion } from 'motion/react';
import { Shield, Sparkles, HeartIcon, BadgeDollarSign, Award, Star } from 'lucide-react';

export default function WhyChooseUs() {
  const values = [
    {
      icon: Award,
      title: "Experienced & Certified Dentists",
      description: "Highly trained clinical professionals with decades of combined specialized family dentistry experience."
    },
    {
      icon: Sparkles,
      title: "Advanced, Painless Technology",
      description: "State-of-the-art modern equipment to ensure maximum comfort, faster healing, and accurate diagnostics."
    },
    {
      icon: HeartIcon,
      title: "Gentle, Compassionate Care",
      description: "We actively listen, accommodate anxiety, and prioritize your tranquility above all else."
    },
    {
      icon: BadgeDollarSign,
      title: "Transparent Pricing & Plans",
      description: "Absolutely zero hidden charges, straightforward treatment plans, and flexible interest-free payment schemes."
    }
  ];

  return (
    <section id="why-us" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Title */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="font-sans text-xs font-bold text-dental-blue-500 uppercase tracking-widest bg-dental-blue-50 px-3 py-1.5 rounded-full">
            Why Choose Us
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-dental-blue-900 mt-4 tracking-tight leading-tight">
            Comprehensive Care Uniquely Tailored For Your Family
          </h2>
        </div>

        {/* 3-Column Immersive Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Column 1: Dentist Portrait Card */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-4 flex flex-col"
          >
            <div className="relative flex-1 bg-slate-50 border border-slate-100 rounded-3xl overflow-hidden p-4 pb-6 flex flex-col group shadow-sm hover:shadow-md transition-shadow">
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden mb-5">
                {/* Dentist Image */}
                <img
                  src="/src/assets/images/clinic_dentist_1779979598668.png"
                  alt="Board-certified dentist Dr. James Vance DDS"
                  className="w-full h-full object-cover object-center group-hover:scale-102 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-xs px-3 py-1 rounded-lg text-[10px] font-bold text-dental-blue-700 tracking-wider uppercase border border-white">
                  Lead Practitioner
                </div>
              </div>
              <div className="px-2">
                <h4 className="font-display font-bold text-xl text-dental-blue-800">
                  Dr. James Vance, DDS
                </h4>
                <p className="font-sans text-xs font-semibold text-slate-400 mt-0.5 uppercase tracking-wide">
                  Board-Certified Cosmetic Dentist
                </p>
                <p className="font-sans text-slate-500 text-xs leading-relaxed mt-3">
                  Graduated with honors from UCSD. Over 14 years of creating flawless smiles. He specializes in compassionate dental restoration.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Column 2: Value Propositions */}
          <div className="lg:col-span-4 flex flex-col justify-center space-y-6">
            {values.map((val, index) => {
              const Icon = val.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex gap-4 group"
                >
                  <div className="flex items-center justify-center w-11 h-11 bg-dental-blue-50 text-dental-blue-500 rounded-2xl group-hover:bg-dental-blue-500 group-hover:text-white transition-all shrink-0">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h5 className="font-display font-bold text-base text-dental-blue-800 mb-1 group-hover:text-dental-blue-500 transition-colors">
                      {val.title}
                    </h5>
                    <p className="font-sans text-xs text-slate-500 leading-relaxed">
                      {val.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Column 3: Beautiful Lobby & Rating Badge */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-4 flex flex-col justify-center"
          >
            <div className="relative group rounded-3xl overflow-hidden shadow-xl border border-slate-150 aspect-[4/3] lg:aspect-square flex flex-col justify-end bg-slate-900">
              {/* Clinic Reception Image */}
              <img
                src="/src/assets/images/clinic_reception_1779979622326.png"
                alt="GentleCare Dental Studio reception lounge"
                className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:scale-103 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/40 to-transparent pointer-events-none" />

              {/* Floating Content Badge */}
              <div className="relative p-6 z-10 m-4 bg-white/95 backdrop-blur-md rounded-2xl border border-white/20 shadow-lg">
                <div className="flex items-center gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
                  ))}
                </div>
                <h4 className="font-display font-bold text-base text-dental-blue-850 leading-snug">
                  5-Star Rated by Our Patients
                </h4>
                <p className="font-sans text-[11px] text-slate-500 leading-normal mt-1">
                  Our patients rank our service as the top clinic experience in San Diego for pain management and hospitality.
                </p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
