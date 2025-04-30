'use client';
import React, { useState } from 'react';

interface FormData {
  fullName: string;
  whatsappNumber: string;
  email: string;
}

const WaitlistForm = () => {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    whatsappNumber: '',
    email: '',
  });
  const [loading, setLoading] = useState<boolean>(false);
  const [message, setMessage] = useState<{ text: string; type: 'success' | 'error' | '' }>({
    text: '',
    type: '',
  });

 

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    console.log(`Input changed: ${name} = ${value}`);
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };



  const handleSubmit = async (e: React.FormEvent) => {

    e.preventDefault();
   
    
    setLoading(true);
    setMessage({ text: '', type: '' });
    
    try {
     
      const response = await fetch('/api/waitlist', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.message || 'Something went wrong');
      }
      
      setFormData({
        fullName: '',
        whatsappNumber: '',
        email: '',
      });
      setMessage({ text: 'Thank you for joining our waitlist!', type: 'success' });
    } catch (error) {
      console.error('Form submission error:', error);
      setMessage({ 
        text: error instanceof Error ? error.message : 'Failed to submit form', 
        type: 'error' 
      });
    } finally {
      setLoading(false);
      console.log('Form submission process completed');
    }
  };

  return (
    <div className="bg-white rounded-lg p-4">
      {message.text && (
        <div
          className={`mb-4 p-3 rounded ${
            message.type === 'success' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
          }`}
        >
          {message.text}
        </div>
      )}
      
      <form 
        className="space-y-4" 
        onSubmit={handleSubmit}
        onClick={() => console.log('Form element clicked')}
      >
        <div>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            placeholder="Tell us your full name"
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
          />
        </div>
        <div>
          <input
            type="tel"
            name="whatsappNumber"
            value={formData.whatsappNumber}
            onChange={handleChange}
            placeholder="Your WhatsApp number"
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
          />
        </div>
        <div>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your email address"
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
          />
        </div>
        
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-red-600 hover:bg-red-700 text-white font-medium py-3 px-4 rounded-md transition-colors disabled:bg-red-400"
        >
          {loading ? 'Processing...' : 'Join the wait list'}
        </button>
        
      
      </form>
    
    </div>
  );
};

export default WaitlistForm;