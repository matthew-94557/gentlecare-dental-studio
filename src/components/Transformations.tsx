import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';
import { TestimonialItem } from '../types';
import transformationsImgSrc from "../assets/images/teeth_transform_1779979646140.png";


export default function Transformations() {
  const [sliderVal, setSliderVal] = useState<number>(50);
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const testimonialsLeft: TestimonialItem[] = [
    {
      id: "left-1",
      name: "Sarah M.",
      role: "Patient since 2024",
      location: "San Diego, CA",
      text: "I used to feel nervous about dentists, but the team at GentleCare made me feel so comfortable. My smile has never looked better!",
      rating: 5,
      avatarUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150&h=150"
    },
    {
      id: "left-2",
      name: "Jessica K.",
      role: "Braces Patient",
      location: "Chula Vista, CA",
      text: "The Invisalign process was super easy. They mapped out everything for me. Now I can't stop smiling at work!",
      rating: 5,
      avatarUrl: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150&h=150"
    }
  ];

  const testimonialsRight: TestimonialItem[] = [
    {
      id: "right-1",
      name: "Mark R.",
      role: "Implant Patient",
      location: "San Diego, CA",
      text: "The implant treatment changed my life. I can eat, smile, and speak with total confidence again!",
      rating: 5,
      avatarUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150&h=150"
    },
    {
      id: "right-2",
      name: "David T.",
      role: "Cosmetic Restoration",
      location: "La Jolla, CA",
      text: "Absolutely stunning clinic! They fixed my chipped front teeth, color-matched them perfectly. Outstanding work.",
      rating: 5,
      avatarUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150&h=150"
    }
  ];

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonialsLeft.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonialsLeft.length) % testimonialsLeft.length);
  };

  return (
    <section id="testimonials" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-sans text-xs font-bold text-dental-blue-500 uppercase tracking-widest bg-dental-blue-50 px-3 py-1.5 rounded-full">
            Patient Transformations & Stories
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-dental-blue-900 mt-4 tracking-tight leading-tight">
            Real Smiles. Real Stories. Real Confidence.
          </h2>
          <p className="font-sans text-sm text-slate-500 mt-2">
            Interact with the slider below to see the results of our professional teeth restoration treatment.
          </p>
        </div>

        {/* Carousel & Transformation Grid Wrapper */}
        <div className="relative flex flex-col md:flex-row items-center justify-between gap-8 lg:gap-14">
          
          {/* Navigation Controls: Floating on desktop */}
          <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 hidden lg:flex items-center justify-between pointer-events-none z-10 px-2">
            <button
              onClick={handlePrev}
              className="p-3 bg-white hover:bg-dental-blue-50 text-slate-600 hover:text-dental-blue-500 rounded-full shadow-lg border border-slate-100 transition-all pointer-events-auto cursor-pointer"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={handleNext}
              className="p-3 bg-white hover:bg-dental-blue-50 text-slate-600 hover:text-dental-blue-500 rounded-full shadow-lg border border-slate-100 transition-all pointer-events-auto cursor-pointer"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Left Testimonial Card */}
          <div className="w-full md:w-1/4 max-w-sm">
            <AnimatePresence mode="wait">
              <motion.div
                key={testimonialsLeft[currentIndex].id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm relative"
              >
                <div className="absolute top-4 right-4 text-dental-blue-100">
                  <Quote className="w-10 h-10 transform -scale-y-100" />
                </div>
                <div className="flex items-center gap-1.5 mb-4">
                  {[...Array(testimonialsLeft[currentIndex].rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-amber-450 fill-amber-450" />
                  ))}
                </div>
                <p className="font-sans text-slate-600 text-xs sm:text-sm leading-relaxed mb-6 italic relative z-10">
                  "{testimonialsLeft[currentIndex].text}"
                </p>
                <div className="flex items-center gap-3">
                  <img
                    src={testimonialsLeft[currentIndex].avatarUrl}
                    alt={testimonialsLeft[currentIndex].name}
                    className="w-11 h-11 rounded-full object-cover border border-slate-100"
                    referrerPolicy="no-referrer"
                  />
                  <div>
                    <h5 className="font-display font-bold text-sm text-dental-blue-900 leading-none">
                      {testimonialsLeft[currentIndex].name}
                    </h5>
                    <span className="font-sans text-[11px] text-slate-400 mt-1 block">
                      {testimonialsLeft[currentIndex].location}
                    </span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Center Before-After Drag Slider */}
          <div className="w-full md:w-2/4 max-w-md flex flex-col items-center">
            <div className="relative aspect-4/3 w-full bg-slate-200 rounded-3xl overflow-hidden shadow-xl border-4 border-white select-none">
              
              {/* BEFORE LAYER (Fully visible on drag, styled with realistic dental tint) */}
              <div className="absolute inset-0 w-full h-full">
                <img
                  src={transformationsImgSrc}
                  alt="Standard teeth status"
                  className="w-full h-full object-cover filter saturate-40 sepia-30 brightness-95"
                  referrerPolicy="no-referrer"
                />
                {/* BEFORE Label */}
                <div className="absolute bottom-4 left-4 bg-slate-900/70 backdrop-blur-xs px-3 py-1 rounded-md text-[10px] font-bold text-white tracking-widest uppercase">
                  Before
                </div>
              </div>

              {/* AFTER LAYER (Clipped based on slider position, glowing pristine) */}
              <div 
                className="absolute inset-0 w-full h-full pointer-events-none"
                style={{
                  clipPath: `polygon(0 0, ${sliderVal}% 0, ${sliderVal}% 100%, 0 100%)`
                }}
              >
                <img
                  src={transformationsImgSrc}
                  alt="After GentleCare Dental Whitening Treatment"
                  className="w-full h-full object-cover filter saturate-105 contrast-102 brightness-103"
                  referrerPolicy="no-referrer"
                />
                {/* AFTER Label */}
                <div className="absolute bottom-4 right-4 bg-dental-blue-500 px-3 py-1 rounded-md text-[10px] font-bold text-white tracking-widest uppercase">
                  After
                </div>
              </div>

              {/* Slider Drag Bar/Handle Interface Overlay */}
              <div 
                className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize z-20 shadow-lg"
                style={{ left: `${sliderVal}%` }}
              >
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white border-2 border-dental-blue-500 rounded-full flex items-center justify-center shadow-md">
                  <div className="flex gap-0.5">
                    <ChevronLeft className="w-3.5 h-3.5 text-dental-blue-500 shrink-0" />
                    <ChevronRight className="w-3.5 h-3.5 text-dental-blue-500 shrink-0" />
                  </div>
                </div>
              </div>

              {/* Real HTML Range Slider overlaying for precise touchscreen dragging */}
              <input 
                type="range" 
                min="0" 
                max="100" 
                value={sliderVal} 
                onChange={(e) => setSliderVal(Number(e.target.value))}
                className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-30"
              />
            </div>
            
            <span className="font-sans text-xs font-semibold text-slate-400 mt-4 tracking-wide text-center">
              Drag the center slider to inspect the restoration details
            </span>
          </div>

          {/* Right Testimonial Card */}
          <div className="w-full md:w-1/4 max-w-sm">
            <AnimatePresence mode="wait">
              <motion.div
                key={testimonialsRight[currentIndex].id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.3 }}
                className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm relative"
              >
                <div className="absolute top-4 right-4 text-dental-blue-100">
                  <Quote className="w-10 h-10" />
                </div>
                <div className="flex items-center gap-1.5 mb-4">
                  {[...Array(testimonialsRight[currentIndex].rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-amber-450 fill-amber-450" />
                  ))}
                </div>
                <p className="font-sans text-slate-600 text-xs sm:text-sm leading-relaxed mb-6 italic relative z-10">
                  "{testimonialsRight[currentIndex].text}"
                </p>
                <div className="flex items-center gap-3">
                  <img
                    src={testimonialsRight[currentIndex].avatarUrl}
                    alt={testimonialsRight[currentIndex].name}
                    className="w-11 h-11 rounded-full object-cover border border-slate-100"
                    referrerPolicy="no-referrer"
                  />
                  <div>
                    <h5 className="font-display font-bold text-sm text-dental-blue-900 leading-none">
                      {testimonialsRight[currentIndex].name}
                    </h5>
                    <span className="font-sans text-[11px] text-slate-400 mt-1 block">
                      {testimonialsRight[currentIndex].location}
                    </span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Mobile Navigation arrows beneath components for perfect touch compliance */}
          <div className="flex items-center justify-center gap-4 mt-2 lg:hidden w-full">
            <button
              onClick={handlePrev}
              className="p-2 bg-white hover:bg-slate-50 text-slate-600 rounded-lg shadow-xs border border-slate-150 cursor-pointer"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <span className="font-sans text-xs text-slate-500">
              {currentIndex + 1} / {testimonialsLeft.length}
            </span>
            <button
              onClick={handleNext}
              className="p-2 bg-white hover:bg-slate-50 text-slate-600 rounded-lg shadow-xs border border-slate-150 cursor-pointer"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
