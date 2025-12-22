import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header = ({ isScrolled }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  const navItems = [
    { label: "ホーム", id: "home" },
    { label: "サービス", id: "services" },
    { label: "会社概要", id: "about" },
    { label: "実績", id: "portfolio" },
    { label: "ニュース", id: "news" },
    { label: "お問い合わせ", id: "contact" }
  ];

  return (
    <header className={`fixed w-full top-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-sm'
    }`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex flex-col items-center space-y-1 cursor-pointer" onClick={() => scrollToSection('home')}>
            <img 
              src="/logo.svg" 
              alt="Code Bridge Logo" 
              className="h-8 w-auto"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
              }}
            />
            <span className="text-xl font-bold text-blue-700">Code Bridge</span>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6 lg:space-x-8">
            {navItems.map(item => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-gray-700 hover:text-blue-700 transition-colors text-base lg:text-lg font-medium"
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-700 hover:text-blue-700"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          <button className="hidden md:block bg-blue-700 text-white px-4 py-2 rounded text-sm hover:bg-blue-800 transition-colors">
            日本語
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-gray-200 py-4">
            <nav className="flex flex-col space-y-4">
              {navItems.map(item => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-gray-700 hover:text-blue-700 transition-colors text-base font-medium text-left"
                >
                  {item.label}
                </button>
              ))}
              <button className="bg-blue-700 text-white px-4 py-2 rounded text-base hover:bg-blue-800 transition-colors w-fit">
                日本語
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;