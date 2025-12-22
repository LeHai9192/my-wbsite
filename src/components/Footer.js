import React from 'react';
import { MapPin, Phone, Mail, Facebook, Twitter, Linkedin, Github } from 'lucide-react';

const Footer = () => {
  // Smooth scroll function
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Company Info */}
        <div className="mb-8">
          <div className="relative flex flex-col md:flex-row md:items-center mb-4">
            <div className="flex flex-col items-start space-y-2 mb-4 md:mb-0 md:flex-shrink-0">
              <img 
                src="/logo.svg" 
                alt="Code Bridge Logo" 
                className="h-10 w-auto"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
              <h3 className="text-2xl font-bold text-blue-400">Code Bridge</h3>
            </div>
            <div className="flex flex-col w-full md:ml-8 md:max-w-2xl md:w-auto md:mt-6">
              <p className="text-gray-300 text-sm leading-relaxed text-left">
                日本市場向けのベトナムフリーランス開発チームとして、柔軟で高品質なITソリューションを提供。
              </p>
              <p className="text-gray-300 text-sm leading-relaxed text-left mt-1">
                プロジェクト単位から長期契約まで、お客様のニーズに合わせたサービスを提供します。
              </p>
            </div>
          </div>
          
          <div className="space-y-3 text-sm">
            <div className="flex items-start">
              <MapPin className="w-4 h-4 mr-3 mt-1 flex-shrink-0 text-blue-400" />
              <span className="text-gray-300">
                308号室、3階、オフィスビル、Vinhomes West Point、De Duc Chinh通り、Tu Liem区、ハノイ
              </span>
            </div>
            
            <div className="flex items-center">
              <Phone className="w-4 h-4 mr-3 flex-shrink-0 text-blue-400" />
              <a href="tel:+84-867-58-1992" className="text-gray-300 hover:text-blue-400 transition-colors">
                +84-867-58-1992
              </a>
            </div>
            
            <div className="flex items-center">
              <Mail className="w-4 h-4 mr-3 flex-shrink-0 text-blue-400" />
              <a href="mailto:info@codebridge.vn" className="text-gray-300 hover:text-blue-400 transition-colors">
                info@codebridge.vn
              </a>
            </div>
          </div>
        </div>

        {/* Two Column Layout for Mobile */}
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4 mb-8">
          {/* 企業情報 */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-blue-400">企業情報</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button 
                  onClick={() => scrollToSection('about')}
                  className="text-gray-300 hover:text-blue-400 transition-colors text-left"
                >
                  会社について
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('services')}
                  className="text-gray-300 hover:text-blue-400 transition-colors text-left"
                >
                  サービス
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('portfolio')}
                  className="text-gray-300 hover:text-blue-400 transition-colors text-left"
                >
                  実績
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('news')}
                  className="text-gray-300 hover:text-blue-400 transition-colors text-left"
                >
                  ニュース
                </button>
              </li>
            </ul>
          </div>

          {/* サービス */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-blue-400">サービス</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button 
                  onClick={() => scrollToSection('services')}
                  className="text-gray-300 hover:text-blue-400 transition-colors text-left"
                >
                  ソフトウェア開発
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('services')}
                  className="text-gray-300 hover:text-blue-400 transition-colors text-left"
                >
                  モバイルアプリ開発
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('services')}
                  className="text-gray-300 hover:text-blue-400 transition-colors text-left"
                >
                  クラウドソリューション
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('services')}
                  className="text-gray-300 hover:text-blue-400 transition-colors text-left"
                >
                  データベース設計
                </button>
              </li>
            </ul>
          </div>

          {/* Additional columns for desktop */}
          <div className="hidden md:block">
            <h4 className="text-lg font-semibold mb-4 text-blue-400">製品</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button 
                  onClick={() => scrollToSection('portfolio')}
                  className="text-gray-300 hover:text-blue-400 transition-colors text-left"
                >
                  ECサイト開発
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('portfolio')}
                  className="text-gray-300 hover:text-blue-400 transition-colors text-left"
                >
                  業務システム
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('portfolio')}
                  className="text-gray-300 hover:text-blue-400 transition-colors text-left"
                >
                  モバイルアプリ
                </button>
              </li>
            </ul>
          </div>

          <div className="hidden md:block">
            <h4 className="text-lg font-semibold mb-4 text-blue-400">リソース</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button 
                  onClick={() => scrollToSection('news')}
                  className="text-gray-300 hover:text-blue-400 transition-colors text-left"
                >
                  ブログ
                </button>
              </li>
              <li>
                <a href="#docs" className="text-gray-300 hover:text-blue-400 transition-colors">
                  ドキュメント
                </a>
              </li>
              <li>
                <a href="#support" className="text-gray-300 hover:text-blue-400 transition-colors">
                  サポート
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Media & Copyright */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex justify-center space-x-6 mb-6">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors" aria-label="Facebook">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors" aria-label="Twitter">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors" aria-label="LinkedIn">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors" aria-label="GitHub">
              <Github className="w-5 h-5" />
            </a>
          </div>
          
          <p className="text-center text-gray-400 text-sm">
            © 2025 Code Bridge. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;