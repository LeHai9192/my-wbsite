import React from 'react';
import { MapPin, Phone, Mail, Facebook, Twitter, Linkedin, Github } from 'lucide-react';

const Footer = () => {
  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <h2 className="text-2xl font-bold text-blue-400 mb-4">Code Bridge</h2>
            <p className="text-gray-300 text-sm mb-4 leading-relaxed">
              ベトナムの最先端のソフトウェア開発会社として、革新的なテクノロジーソリューションを通じて、お客様のビジネスの成長を支援します。
            </p>
            
            <div className="space-y-2">
              <div className="flex items-center text-gray-300 text-sm">
                <MapPin className="w-4 h-4 mr-2 text-blue-400" />
                <span>〒100-0001 東京都千代田区千代田1-1-1</span>
              </div>
              <div className="flex items-center text-gray-300 text-sm">
                <Phone className="w-4 h-4 mr-2 text-blue-400" />
                <span>+84-867-58-1992</span>
              </div>
              <div className="flex items-center text-gray-300 text-sm">
                <Mail className="w-4 h-4 mr-2 text-blue-400" />
                <span>info@codebridge.com.vn</span>
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="text-lg font-medium mb-4">企業情報</h3>
            <div className="space-y-2">
              <button 
                onClick={() => scrollToSection('about')}
                className="block text-gray-300 hover:text-white text-sm transition-colors"
              >
                会社について
              </button>
              <button 
                onClick={() => scrollToSection('services')}
                className="block text-gray-300 hover:text-white text-sm transition-colors"
              >
                サービス
              </button>
              <button 
                onClick={() => scrollToSection('portfolio')}
                className="block text-gray-300 hover:text-white text-sm transition-colors"
              >
                実績
              </button>
              <button 
                onClick={() => scrollToSection('news')}
                className="block text-gray-300 hover:text-white text-sm transition-colors"
              >
                ニュース
              </button>
            </div>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="text-lg font-medium mb-4">サービス</h3>
            <div className="space-y-2">
              <a href="#" className="block text-gray-300 hover:text-white text-sm transition-colors">
                ソフトウェア開発
              </a>
              <a href="#" className="block text-gray-300 hover:text-white text-sm transition-colors">
                モバイルアプリ開発
              </a>
              <a href="#" className="block text-gray-300 hover:text-white text-sm transition-colors">
                クラウドソリューション
              </a>
              <a href="#" className="block text-gray-300 hover:text-white text-sm transition-colors">
                データベース設計
              </a>
            </div>
          </div>
        </div>

        {/* Social Media & Bottom */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex space-x-4 mb-4 md:mb-0">
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Github className="w-5 h-5" />
              </a>
            </div>
            
            <div className="text-center md:text-right">
              <p className="text-gray-400 text-xs mb-2">
                © 2024 Code Bridge. All rights reserved.
              </p>
              <button 
                onClick={scrollToTop}
                className="text-blue-400 hover:text-blue-300 text-xs transition-colors"
              >
                トップに戻る ↑
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;