import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('フォームが送信されました');
    setFormData({ name: '', email: '', company: '', message: '' });
  };

  return (
    <div className="bg-white p-8 rounded-lg fade-in">
      <h4 className="text-blue-700 text-xl font-medium mb-6">お問い合わせフォーム</h4>
      <form onSubmit={handleSubmit} className="space-y-6">
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          placeholder="お名前 *"
          className="w-full p-3 border border-gray-300 rounded text-gray-800 text-sm"
          required
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          placeholder="メールアドレス *"
          className="w-full p-3 border border-gray-300 rounded text-gray-800 text-sm"
          required
        />
        <input
          type="text"
          name="company"
          value={formData.company}
          onChange={handleInputChange}
          placeholder="会社名"
          className="w-full p-3 border border-gray-300 rounded text-gray-800 text-sm"
        />
        <textarea
          name="message"
          value={formData.message}
          onChange={handleInputChange}
          placeholder="お問い合わせ内容 *"
          rows={4}
          className="w-full p-3 border border-gray-300 rounded text-gray-800 text-sm resize-vertical"
          required
        />
        <button
          type="submit"
          className="bg-blue-700 text-white px-8 py-3 rounded hover:bg-blue-800 transition-colors text-sm"
        >
          送信
        </button>
      </form>
    </div>
  );
};

export default ContactForm;