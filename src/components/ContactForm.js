import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ type: '', message: '' });

  // EmailJS configuration
  const EMAILJS_SERVICE_ID = process.env.REACT_APP_EMAILJS_SERVICE_ID || 'service_7voaaid';
  const EMAILJS_TEMPLATE_ID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID || 'template_x4w3fnq';
  const EMAILJS_PUBLIC_KEY = process.env.REACT_APP_EMAILJS_PUBLIC_KEY || 'QlrzMrM6k1RoFJ-PY';

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: '', message: '' });

    try {
      // Gửi email qua EmailJS
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        company: formData.company || '未記入',
        message: formData.message,
      };

      console.log('Sending email with params:', {
        service_id: EMAILJS_SERVICE_ID,
        template_id: EMAILJS_TEMPLATE_ID,
        public_key: EMAILJS_PUBLIC_KEY,
        template_params: templateParams
      });

      const result = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY
      );

      console.log('EmailJS result:', result);

      if (result.status === 200 || result.text === 'OK') {
        // Lưu submission vào localStorage để kiểm tra sau
        const submission = {
          id: Date.now(),
          timestamp: new Date().toISOString(),
          ...templateParams
        };
        
        // Lấy danh sách submissions hiện có
        const existingSubmissions = JSON.parse(localStorage.getItem('contactSubmissions') || '[]');
        existingSubmissions.push(submission);
        
        // Lưu lại (giữ tối đa 50 submissions gần nhất)
        const recentSubmissions = existingSubmissions.slice(-50);
        localStorage.setItem('contactSubmissions', JSON.stringify(recentSubmissions));
        
        // Log thông tin để kiểm tra trong Console
        console.log('✅ Form submitted successfully!');
        console.log('📧 Submission details:', submission);
        console.log('📋 All submissions:', recentSubmissions);
        console.log('💡 To view all submissions, run in Console:');
        console.log('   JSON.parse(localStorage.getItem("contactSubmissions"))');
        
        setSubmitStatus({ 
          type: 'success', 
          message: 'お問い合わせありがとうございます。メールを送信しました。' 
        });
        setFormData({ name: '', email: '', company: '', message: '' });
      } else {
        throw new Error('Unexpected response: ' + JSON.stringify(result));
      }
    } catch (error) {
      console.error('Email sending error:', error);
      let errorMessage = '送信に失敗しました。もう一度お試しください。';
      
      if (error.text) {
        errorMessage = `送信エラー: ${error.text}`;
      } else if (error.message) {
        errorMessage = `送信エラー: ${error.message}`;
      }
      
      setSubmitStatus({ 
        type: 'error', 
        message: errorMessage
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white p-8 rounded-lg fade-in">
      <h4 className="text-blue-700 text-2xl font-bold mb-6">お問い合わせフォーム</h4>
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
          disabled={isSubmitting}
          className={`bg-blue-700 text-white px-8 py-3 rounded transition-colors text-sm ${
            isSubmitting 
              ? 'opacity-50 cursor-not-allowed' 
              : 'hover:bg-blue-800'
          }`}
        >
          {isSubmitting ? '送信中...' : '送信'}
        </button>
        
        {submitStatus.message && (
          <div className={`mt-4 p-3 rounded text-sm ${
            submitStatus.type === 'success' 
              ? 'bg-green-100 text-green-700 border border-green-300' 
              : 'bg-red-100 text-red-700 border border-red-300'
          }`}>
            {submitStatus.message}
          </div>
        )}
      </form>
    </div>
  );
};

export default ContactForm;