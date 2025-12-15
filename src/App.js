import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServicesSection';
import PortfolioSection from './components/PortfolioSection';
import CompanyMessageSection from './components/CompanyMessageSection';
import AdvantagesSection from './components/AdvantagesSection';
import LeadershipSection from './components/LeadershipSection';
import PartnersSection from './components/PartnersSection';
import NewsSection from './components/NewsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import './App.css';


const App = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    const observeElements = () => {
      const elements = document.querySelectorAll('.fade-in');
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              entry.target.classList.add('visible');
            }
          });
        },
        { threshold: 0.1 }
      );

      elements.forEach(el => observer.observe(el));
    };

    window.addEventListener('scroll', handleScroll);
    observeElements();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header isScrolled={isScrolled} />
      <HeroSection />
      <ServicesSection />
      <PortfolioSection />
      <CompanyMessageSection />
      <AdvantagesSection />
      <LeadershipSection />
      <PartnersSection />
      <NewsSection />
      <ContactSection />
      <Footer />

    </div>
  );
};

export default App;


