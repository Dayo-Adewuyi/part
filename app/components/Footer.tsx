'use client';


const Footer = () => {
  return (
    <div className="bg-[#FDF7F7] py-16 px-6 md:px-12">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Be part of our building process, we would love to hear from you
        </h2>
        <button className="mx-auto bg-white hover:bg-gray-100 text-gray-800 border border-gray-300 font-medium py-3 px-8 rounded-md transition-colors" onClick={
          () => window.open('https://calendar.app.google/GwGUBawBxUzt76aBA', '_blank')
        }>
          Talk to us
        </button>
      </div>
    </div>
  );
};

export default Footer;