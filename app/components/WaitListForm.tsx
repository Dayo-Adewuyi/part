import React from 'react';

const WaitlistForm = () => {
  return (
    <div className="bg-white rounded-lg p-4">
      <form className="space-y-4">
        <div>
          <input
            type="text"
            placeholder="Tell us your full name"
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
          />
        </div>
        <div>
          <input
            type="tel"
            placeholder="Your WhatsApp number"
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
          />
        </div>
        <div>
          <input
            type="email"
            placeholder="Your email address"
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-red-600 hover:bg-red-700 text-white font-medium py-3 px-4 rounded-md transition-colors"
        >
          Join the wait list
        </button>
      </form>
    </div>
  );
};

export default WaitlistForm;