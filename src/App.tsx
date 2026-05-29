import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import Transformations from './components/Transformations';
import BookingForm from './components/BookingForm';
import Footer from './components/Footer';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'services', 'why-us', 'testimonials', 'contact'];
      const scrollPosition = window.scrollY + 200; // Offset for sticky navbar

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleBookConsultation = () => {
    const bookingSection = document.getElementById('contact');
    if (bookingSection) {
      bookingSection.scrollIntoView({ behavior: 'smooth' });
      
      // Auto focus on the Full Name input field for seamless usability
      const nameInput = bookingSection.querySelector('input[type="text"]') as HTMLInputElement;
      if (nameInput) {
        setTimeout(() => {
          nameInput.focus();
        }, 800);
      }
    }
  };

  return (
    <div className="min-h-screen bg-[#fafbfc] flex flex-col justify-between selection:bg-dental-blue-100 selection:text-dental-blue-900">
      
      {/* Shared Nav Header */}
      <Header 
        onBookClick={handleBookConsultation} 
        activeSection={activeSection} 
      />

      <main className="grow">
        
        {/* Hero Section Banner */}
        <Hero onBookClick={handleBookConsultation} />

        {/* 4 Core Services Grid */}
        <Services onBookClick={handleBookConsultation} />

        {/* Why Choose Us & Doctor Details */}
        <WhyChooseUs />

        {/* Testimonials Slider & Before/After comparative drag-viewer */}
        <Transformations />

        {/* Live Booking Registration with local database storage */}
        <BookingForm />

      </main>

      {/* Corporate Foot footer block */}
      <Footer />

    </div>
  );
}
