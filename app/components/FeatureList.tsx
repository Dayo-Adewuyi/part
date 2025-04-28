import React from 'react';

type Feature = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

const features: Feature[] = [
  {
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 0C5.37 0 0 5.37 0 12C0 18.63 5.37 24 12 24C18.63 24 24 18.63 24 12C24 5.37 18.63 0 12 0ZM18 5.34L20.16 7.5L10.5 17.16L5.34 12L7.5 9.84L10.5 12.84L18 5.34Z" fill="#D82F27"/>
    </svg>
    ,
    title: 'Verified Suppliers Only',
    description: 'No counterfeits or fake listings. Every vendor is vetted 💯',
  },
  {
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 0C5.37 0 0 5.37 0 12C0 18.63 5.37 24 12 24C18.63 24 24 18.63 24 12C24 5.37 18.63 0 12 0ZM18 5.34L20.16 7.5L10.5 17.16L5.34 12L7.5 9.84L10.5 12.84L18 5.34Z" fill="#D82F27"/>
    </svg>
    ,
    title: 'AI Powered Search',
    description: 'Search by brand, model, or VIN — find the right fit instantly. 🔎',
  },
  {
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 0C5.37 0 0 5.37 0 12C0 18.63 5.37 24 12 24C18.63 24 24 18.63 24 12C24 5.37 18.63 0 12 0ZM18 5.34L20.16 7.5L10.5 17.16L5.34 12L7.5 9.84L10.5 12.84L18 5.34Z" fill="#D82F27"/>
    </svg>
    ,
    title: 'Delivery or pickup option',
    description: 'Fast parts delivery to your door or pickup spot ✈️🚛',
  },
];

const FeatureList= () => {
  return (
    <div className="space-y-6">
      {features.map((feature, index) => (
        <div key={index} className="flex items-start">
          <div className="text-red-600 text-2xl mr-4">{feature.icon}</div>
          <div>
            <h3 className="font-bold text-lg">{feature.title}</h3>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FeatureList;