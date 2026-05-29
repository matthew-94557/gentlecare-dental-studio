import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Smile, ShieldCheck, Zap, X, Check, ArrowRight } from 'lucide-react';
import { ServiceItem } from '../types';

interface ServicesProps {
  onBookClick: () => void;
}

export default function Services({ onBookClick }: ServicesProps) {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  const services: ServiceItem[] = [
    {
      id: "cosmetic",
      title: "Cosmetic Dentistry",
      description: "Transform your smile with premium porcelain veneers, bonding, and total tooth makeovers.",
      detailedDescription: "Cosmetic dentistry focuses on improving the look, posture, and wellness of your smile. Using industry-grade porcelain, custom veneers can mask discoloration, repair minor fractures, and close undesired gaps, leaving you with movie-star results.",
      priceEstimate: "$150+ / teeth consultation",
      benefits: [
        "Porcelain veneers customized to your facial features",
        "Painless custom-tinted cosmetic bonding",
        "Expert gum contouring and visual symmetry",
        "Stain-resistant high-quality durable materials"
      ]
    },
    {
      id: "invisalign",
      title: "Invisalign & Braces",
      description: "Straighten your teeth comfortably, invisibly, and confidently without traditional dark braces.",
      detailedDescription: "Orthodontics reinvented. Invisalign uses a calibrated sequence of custom-molded clear plastic tray aligners to gently guide teeth into optimal alignments. Correct alignment not only improves aesthetics, but simplifies cleaning and prevents joint fatigue.",
      priceEstimate: "Free initial layout scan",
      benefits: [
        "100% removable clear trays for daily cooking & eating",
        "Virtually invisible orthodontic correction",
        "Accelerated treatment plans monitored by certified experts",
        "Includes a complimentary medical retention wire"
      ]
    },
    {
      id: "implants",
      title: "Dental Implants",
      description: "Permanent, medically natural-looking premium titanium solutions to restore missing teeth.",
      detailedDescription: "A permanent structural solution. Dental implants replicate natural tooth anatomy by inserting a biocompatible medical-grade titanium screw directly into the jaw bone, capped with structural ceramic crowns. They prevent bone resorption and preserve standard bite force.",
      priceEstimate: "Custom estimates with 0% financing",
      benefits: [
        "Matches the exact bite strength of natural teeth",
        "Prevents facial contour sagging and bone loss",
        "Doesn't compromise or shave adjacent teeth",
        "Provides a lifetime solution with correct dental care"
      ]
    },
    {
      id: "whitening",
      title: "Teeth Whitening",
      description: "Brighten your teeth safely, comfortably, and effectively by up to 8 shades in a single hour.",
      detailedDescription: "In-office teeth whitening features high-intensity dental light activation coupled with medical-grade whitening gels to lift deep enamel stains from coffee, wine, or natural aging safely, quickly, and uniformly.",
      priceEstimate: "Now $199 (Regular $350)",
      benefits: [
        "Up to 8 shades whiter in just 45-60 minutes",
        "De-sensitized modern chemical formula for low ache",
        "Professionally applied barrier for maximum gum protection",
        "Complimentary home maintenance touch-up pen included"
      ]
    }
  ];

  const iconMap: Record<string, any> = {
    cosmetic: Sparkles,
    invisalign: Smile,
    implants: ShieldCheck,
    whitening: Zap
  };

  return (
    <section id="services" className="py-20 bg-slate-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-sans text-xs font-bold text-dental-blue-500 uppercase tracking-widest bg-dental-blue-50 px-3 py-1.5 rounded-full">
            Our Services
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-dental-blue-900 mt-4 tracking-tight leading-tight">
            Complete Dental Care for a Healthy, Beautiful Smile
          </h2>
          <p className="font-sans text-base text-slate-500 mt-3">
            From routine checkups to advanced cosmetic restorations, we have your family's needs covered.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, idx) => {
            const Icon = iconMap[service.id];
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                onClick={() => setSelectedService(service)}
                className="group bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl hover:border-dental-blue-100 transition-all duration-300 cursor-pointer flex flex-col justify-between"
              >
                <div>
                  {/* Icon Visual */}
                  <div className="relative w-14 h-14 bg-dental-blue-50 text-dental-blue-500 rounded-xl flex items-center justify-center mb-6 group-hover:bg-dental-blue-500 group-hover:text-white transition-all duration-300">
                    <Icon className="w-6 h-6 transform group-hover:scale-110 transition-transform" />
                  </div>

                  <h3 className="font-display font-bold text-lg text-dental-blue-850 mb-3 group-hover:text-dental-blue-500 transition-colors">
                    {service.title}
                  </h3>
                  <p className="font-sans text-slate-500 text-sm leading-relaxed mb-6">
                    {service.description}
                  </p>
                </div>

                <div className="flex items-center gap-1.5 text-dental-blue-500 font-bold text-xs uppercase tracking-wider mt-auto group-hover:translate-x-1 transition-transform">
                  <span>Learn More</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Service Details Overlay Modal */}
      <AnimatePresence>
        {selectedService && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedService(null)}
              className="absolute inset-0 bg-slate-900/60 backdrop-blur-xs"
            />

            {/* Modal Body */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              transition={{ type: 'spring', damping: 25, stiffness: 350 }}
              className="relative w-full max-w-xl bg-white rounded-3xl overflow-hidden shadow-2xl z-10 border border-slate-100"
            >
              {/* Header colored bar */}
              <div className="h-2 bg-dental-blue-500" />

              <button
                onClick={() => setSelectedService(null)}
                className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-50 rounded-full transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="p-6 sm:p-8">
                <span className="font-sans text-[11px] font-bold text-dental-blue-500 uppercase tracking-widest bg-dental-blue-50 px-2.5 py-1 rounded-md">
                  Treatment Overview
                </span>

                <h3 className="font-display font-bold text-2xl text-dental-blue-900 mt-3">
                  {selectedService.title}
                </h3>

                <p className="font-sans text-slate-600 text-sm leading-relaxed mt-4">
                  {selectedService.detailedDescription}
                </p>

                {/* Estimate price if present */}
                {selectedService.priceEstimate && (
                  <div className="mt-5 p-3 px-4 bg-emerald-50/50 border border-emerald-100/60 rounded-xl flex items-center justify-between">
                    <span className="text-xs font-semibold text-slate-500 uppercase">Estimated Pricing:</span>
                    <span className="text-sm font-bold text-emerald-700">{selectedService.priceEstimate}</span>
                  </div>
                )}

                <div className="mt-6">
                  <h4 className="font-display font-bold text-xs text-slate-400 uppercase tracking-wider mb-3">
                    Key Highlights & Benefits
                  </h4>
                  <ul className="space-y-3">
                    {selectedService.benefits.map((benefit, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-2.5 text-sm text-slate-700">
                        <div className="w-5 h-5 bg-dental-blue-50 text-dental-blue-500 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-3 h-3 text-dental-blue-500" />
                        </div>
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8 flex items-center gap-3">
                  <button
                    onClick={() => {
                      setSelectedService(null);
                      onBookClick();
                    }}
                    className="flex-1 py-3 bg-dental-blue-500 hover:bg-dental-blue-600 text-white font-sans font-bold text-sm rounded-xl transition-all cursor-pointer text-center"
                  >
                    Request Free Consultation
                  </button>
                  <button
                    onClick={() => setSelectedService(null)}
                    className="px-5 py-3 bg-slate-50 hover:bg-slate-100 text-slate-600 font-sans font-bold text-sm rounded-xl transition-all cursor-pointer border border-slate-250"
                  >
                    Back
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
