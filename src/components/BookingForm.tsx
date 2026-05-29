import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Calendar, Phone, Mail, User, ShieldCheck, Heart, Clock, Sparkles, CheckCircle2, Ticket } from 'lucide-react';
import { BookingSubmission } from '../types';

export default function BookingForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    emailAddress: '',
    preferredDate: '',
    preferredTime: 'morning',
    notes: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submission, setSubmission] = useState<BookingSubmission | null>(null);

  const bullets = [
    { title: "Easy Online Booking", desc: "Select and lock your custom slot in under a single minute." },
    { title: "Flexible Scheduling", desc: "Convenient morning, late afternoon, or weekend availability." },
    { title: "Insurance Direct Filing", desc: "We accept and optimize claims for major national networks." },
    { title: "Safe & Relaxing Setting", desc: "Enjoy cozy recliners, noise-canceling headphones, and tea." }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.phoneNumber || !formData.emailAddress || !formData.preferredDate) {
      alert("Please fill in all required fields.");
      return;
    }

    setIsSubmitting(true);

    // Simulate clinical network registration
    setTimeout(() => {
      const newBooking: BookingSubmission = {
        fullName: formData.fullName,
        phoneNumber: formData.phoneNumber,
        emailAddress: formData.emailAddress,
        preferredTime: `${formData.preferredDate} (${formData.preferredTime === 'morning' ? 'Morning 8:00 AM - 12:00 PM' : 'Afternoon 1:00 PM - 5:00 PM'})`,
        notes: formData.notes,
        status: 'CONFIRMED',
        submittedAt: new Date().toLocaleString()
      };

      // Store locally for subsequent patient returns
      const previousBookings = JSON.parse(localStorage.getItem('gentlecare_bookings') || '[]');
      localStorage.setItem('gentlecare_bookings', JSON.stringify([...previousBookings, newBooking]));

      setSubmission(newBooking);
      setIsSubmitting(false);

      // Reset form fields
      setFormData({
        fullName: '',
        phoneNumber: '',
        emailAddress: '',
        preferredDate: '',
        preferredTime: 'morning',
        notes: ''
      });
    }, 1200);
  };

  return (
    <section id="contact" className="py-20 bg-linear-to-b from-white to-slate-50 relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_var(--color-dental-blue-50)_0%,transparent_50%)] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Value Prop Text */}
          <div className="lg:col-span-6 flex flex-col items-start space-y-6">
            <span className="font-sans text-xs font-bold text-dental-blue-500 uppercase tracking-widest bg-dental-blue-105/10 px-3.5 py-1.5 rounded-full border border-dental-blue-100">
              Ready for a Better Smile?
            </span>
            
            <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-dental-blue-900 leading-tight tracking-tight">
              Start Your <br />
              <span className="text-dental-blue-500">Smile Transformation</span> Today
            </h2>
            
            <p className="font-sans text-base text-slate-500 max-w-xl leading-relaxed">
              Book your low-cost New Patient Special Consultation and take the first step toward a healthier, brighter life. Claim your $49 package today!
            </p>

            {/* Bullet Points */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full pt-4">
              {bullets.map((b, idx) => (
                <div key={idx} className="flex gap-3">
                  <div className="w-5.5 h-5.5 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                    <ShieldCheck className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <h4 className="font-display font-semibold text-sm text-dental-blue-900">
                      {b.title}
                    </h4>
                    <p className="font-sans text-xs text-slate-500 mt-1 leading-normal">
                      {b.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Dynamic Form Block */}
          <div className="lg:col-span-6">
            <motion.div 
              whileHover={{ y: -2 }}
              transition={{ duration: 0.2 }}
              className="bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-slate-100/60"
            >
              <div className="mb-6">
                <h3 className="font-display font-bold text-xl sm:text-2xl text-dental-blue-900">
                  Book Consultation Slot
                </h3>
                <div className="flex items-center gap-2 mt-2 px-3 py-2 bg-dental-blue-50 text-dental-blue-700 rounded-xl max-w-max">
                  <Ticket className="w-4 h-4 shrink-0 text-dental-blue-500 animate-bounce" />
                  <span className="font-sans text-xs font-bold leading-none uppercase tracking-wide">
                    $49 New Patient Special Offer Applied
                  </span>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                
                {/* Full Name input */}
                <div className="space-y-1.5">
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Full Name *
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                      <User className="w-4 h-4" />
                    </div>
                    <input
                      type="text"
                      required
                      placeholder="Jane Doe"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="block w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-hidden focus:ring-2 focus:ring-dental-blue-500/20 focus:border-dental-blue-500 transition-all font-medium"
                    />
                  </div>
                </div>

                {/* Grid inputs for contact */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Phone number */}
                  <div className="space-y-1.5">
                    <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider">
                      Phone Number *
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                        <Phone className="w-4 h-4" />
                      </div>
                      <input
                        type="tel"
                        required
                        placeholder="(619) 555-0100"
                        value={formData.phoneNumber}
                        onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                        className="block w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-hidden focus:ring-2 focus:ring-dental-blue-500/20 focus:border-dental-blue-500 transition-all font-medium"
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div className="space-y-1.5">
                    <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider">
                      Email Address *
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                        <Mail className="w-4 h-4" />
                      </div>
                      <input
                        type="email"
                        required
                        placeholder="jane@example.com"
                        value={formData.emailAddress}
                        onChange={(e) => setFormData({ ...formData, emailAddress: e.target.value })}
                        className="block w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-hidden focus:ring-2 focus:ring-dental-blue-500/20 focus:border-dental-blue-500 transition-all font-medium"
                      />
                    </div>
                  </div>
                </div>

                {/* Grid inputs for appointment logistics */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Preferred date */}
                  <div className="space-y-1.5">
                    <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider">
                      Preferred Date *
                    </label>
                    <input
                      type="date"
                      required
                      min={new Date().toISOString().split('T')[0]}
                      value={formData.preferredDate}
                      onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                      className="block w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-hidden focus:ring-2 focus:ring-dental-blue-500/20 focus:border-dental-blue-500 transition-all font-medium"
                    />
                  </div>

                  {/* Time slice picker */}
                  <div className="space-y-1.5">
                    <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider">
                      Time Window *
                    </label>
                    <select
                      value={formData.preferredTime}
                      onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                      className="block w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-hidden focus:ring-2 focus:ring-dental-blue-500/20 focus:border-dental-blue-500 transition-all font-medium"
                    >
                      <option value="morning">Morning (8 AM - 12 PM)</option>
                      <option value="afternoon">Afternoon (1 PM - 5 PM)</option>
                    </select>
                  </div>
                </div>

                {/* Message notes */}
                <div className="space-y-1.5">
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Secondary Dental Needs / Notes (Optional)
                  </label>
                  <textarea
                    rows={2}
                    placeholder="E.g., extreme anxiety, inquiring about whitening..."
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    className="block w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-hidden focus:ring-2 focus:ring-dental-blue-500/20 focus:border-dental-blue-500 transition-all font-medium"
                  />
                </div>

                {/* Booking Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 bg-dental-blue-500 hover:bg-dental-blue-600 disabled:bg-dental-blue-400 text-white font-sans font-bold rounded-xl text-base shadow-lg shadow-dental-blue-500/20 hover:shadow-xl transition-all duration-200 flex items-center justify-center gap-2 transform active:scale-99 cursor-pointer"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      <span>Scheduling with Coordinator...</span>
                    </>
                  ) : (
                    <>
                      <Calendar className="w-5 h-5" />
                      <span>Book My Dental Consultation</span>
                    </>
                  )}
                </button>

                <p className="text-center font-sans text-[11px] text-slate-400 leading-normal pt-2">
                  We respect your HIPAA privacy. Your personal information is encrypted and safe with our team.
                </p>
              </form>
            </motion.div>
          </div>

        </div>
      </div>

      {/* Booking Success Dialog overlay */}
      <AnimatePresence>
        {submission && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSubmission(null)}
              className="absolute inset-0 bg-slate-950/75 backdrop-blur-xs"
            />

            {/* Success Box content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              className="relative w-full max-w-md bg-white rounded-3xl p-6 sm:p-8 text-center shadow-2xl z-10 border border-slate-100"
            >
              <div className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              <h4 className="font-display font-bold text-2xl text-dental-blue-900 leading-tight">
                Consultation Requested!
              </h4>

              <div className="my-5 p-4 bg-slate-50 rounded-2xl border border-slate-100 text-left space-y-3">
                <div className="flex justify-between text-xs">
                  <span className="font-semibold text-slate-400">Patient Name:</span>
                  <span className="font-bold text-slate-700">{submission.fullName}</span>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="font-semibold text-slate-400">Contact Number:</span>
                  <span className="font-bold text-slate-700">{submission.phoneNumber}</span>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="font-semibold text-slate-400">Requested Window:</span>
                  <span className="font-bold text-dental-blue-600 block text-right max-w-[200px] truncate">
                    {submission.preferredTime}
                  </span>
                </div>
                <div className="flex justify-between text-xs pt-2 border-t border-slate-100">
                  <span className="font-semibold text-slate-400">Status Status:</span>
                  <span className="px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 text-[10px] font-bold uppercase tracking-wider">
                    {submission.status}
                  </span>
                </div>
              </div>

              <p className="font-sans text-xs text-slate-500 leading-relaxed mb-6">
                Excellent! We have assigned a coordinator to evaluate your dates. Dr. Vance will reach out shortly via phone or email to lock down your exact hour!
              </p>

              <button
                onClick={() => setSubmission(null)}
                className="w-full py-3 bg-dental-blue-500 hover:bg-dental-blue-600 text-white font-sans font-bold rounded-xl text-sm transition-all shadow-md cursor-pointer"
              >
                Super, Thank you!
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
