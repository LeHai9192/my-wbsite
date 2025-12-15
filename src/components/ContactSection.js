import React from 'react';
import ContactForm from './ContactForm';

const ContactSection = () => {
  return (
    <section id="contact" className="py-16 bg-blue-700 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="fade-in">
            <h2 className="text-3xl font-normal mb-4">お問い合わせ</h2>
            <p className="opacity-90 leading-relaxed mb-4">
              プロジェクトのご相談やお見積もりなど、お気軽にお問い合わせください。
            </p>
            <p className="opacity-90 leading-relaxed">
              専門スタッフが丁寧に対応させていただきます。
            </p>
          </div>
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default ContactSection;