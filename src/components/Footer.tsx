import React from 'react';
import { Phone, MapPin, Clock, Facebook, Instagram, Youtube, Heart, Smile } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const officeHours = [
    { day: "Monday - Friday", hours: "8:00 AM - 5:00 PM" },
    { day: "Saturday", hours: "9:00 AM - 1:00 PM" },
    { day: "Sunday", hours: "Emergency Only" }
  ];

  return (
    <footer className="bg-dental-blue-900 text-slate-300">
      
      {/* Upper Content Frame */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          
          {/* Logo & Slogan Column */}
          <div className="md:col-span-4 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="flex items-center justify-center w-10 h-10 bg-dental-blue-500 rounded-lg text-white">
                <Smile className="w-5 h-5 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="font-display font-bold text-lg text-white leading-tight">
                  GentleCare
                </span>
                <span className="font-sans text-[10px] font-bold tracking-widest text-dental-blue-200 uppercase leading-none">
                  Dental Studio
                </span>
              </div>
            </div>
            
            <p className="font-sans text-xs text-slate-400 leading-relaxed max-w-xs">
              Providing compassionate, high-quality cosmetic, preventative, and restorative family dentistry solutions in a relaxing, luxury environment.
            </p>

            <div className="flex items-center gap-4 pt-2">
              <a href="#" className="w-8 h-8 rounded-full bg-slate-800 hover:bg-dental-blue-500 text-slate-400 hover:text-white flex items-center justify-center transition-all cursor-pointer">
                <Facebook className="w-4.5 h-4.5" />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-slate-800 hover:bg-dental-blue-500 text-slate-400 hover:text-white flex items-center justify-center transition-all cursor-pointer">
                <Instagram className="w-4.5 h-4.5" />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-slate-800 hover:bg-dental-blue-500 text-slate-400 hover:text-white flex items-center justify-center transition-all cursor-pointer">
                <Youtube className="w-4.5 h-4.5" />
              </a>
            </div>
          </div>

          {/* Business Hours Column */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="font-display font-bold text-sm text-white uppercase tracking-wider">
              Operating Hours
            </h4>
            <div className="space-y-2.5">
              {officeHours.map((h, idx) => (
                <div key={idx} className="flex justify-between items-center text-xs pb-1 border-b border-white/5">
                  <span className="text-slate-400 font-medium">{h.day}</span>
                  <span className="text-white font-semibold">{h.hours}</span>
                </div>
              ))}
            </div>
            <div className="flex gap-2 p-3 bg-slate-800/60 rounded-xl border border-white/5 items-center">
              <Clock className="w-4 h-4 text-dental-blue-300 shrink-0" />
              <p className="font-sans text-[11px] text-slate-400 leading-relaxed">
                Need emergency dental care? Call our hotline directly after hours for emergency diagnostics.
              </p>
            </div>
          </div>

          {/* Map Location Details Column */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="font-display font-bold text-sm text-white uppercase tracking-wider">
              Our Location
            </h4>
            
            <div className="space-y-4">
              <a 
                href="https://maps.google.com" 
                target="_blank" 
                rel="noreferrer" 
                className="flex items-start gap-3 group"
              >
                <div className="w-8 h-8 rounded-lg bg-slate-800 group-hover:bg-dental-blue-500 text-dental-blue-300 group-hover:text-white flex items-center justify-center shrink-0 transition-colors">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <h5 className="font-sans font-semibold text-xs text-white leading-none">GentleCare Dental Studio San Diego</h5>
                  <p className="font-sans text-xs text-slate-450 mt-1.5 leading-relaxed">
                    123 Smile Way, <br />San Diego, CA 92101
                  </p>
                </div>
              </a>

              <a href="tel:6195550187" className="flex items-start gap-3 group">
                <div className="w-8 h-8 rounded-lg bg-slate-800 group-hover:bg-dental-blue-500 text-dental-blue-300 group-hover:text-white flex items-center justify-center shrink-0 transition-colors">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <h5 className="font-sans font-semibold text-xs text-white leading-none">Phone Consultation</h5>
                  <p className="font-sans text-xs font-bold text-dental-blue-300 mt-1.5 hover:underline">
                    (619) 555-0187
                  </p>
                </div>
              </a>
            </div>
          </div>

        </div>
      </div>

      {/* Footer Bottom copyright Row */}
      <div className="border-t border-white/5 bg-slate-950/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="font-sans text-xs text-slate-500 text-center">
              © {currentYear} GentleCare Dental Studio. All Rights Reserved. Fully USDA/HIPAA complaint.
            </p>
            <div className="flex gap-6 text-xs text-slate-500">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>

    </footer>
  );
}
