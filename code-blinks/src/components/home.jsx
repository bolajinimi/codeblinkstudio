// import React from "react";

export default function HomePage() {
  return (
    <div className="relative h-[80vh]">

        {/* Background color overlay */}
     <div className="absolute inset-0 bg-[#8909AF] opacity-90"></div>

      {/* Background Image */}
      <div className="absolute inset-0 bg-cover bg-center opacity-90 bg-[url('/home02.jpg')]"></div>
      {/* Content */}
        <div className="relative flex flex-col items-center justify-center h-full text-center">
          <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
            Welcome to Africa&apos;s #1 Training Institute
          </h1>
          <p className="text-lg lg:text-2xl text-white mb-4">
            Transforming passionate individuals into world-class developers.
          </p>
          <a
            href="#"
            className="px-6 py-3 text-white bg-[#8909AF] hover:bg-blue-700 rounded-lg shadow-lg text-lg font-semibold"
          >
            Register Now
          </a>
        </div>


      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/1234567890?text=08101107427"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-4 right-4 bg-green-500 text-white px-4 py-3 rounded-full shadow-lg flex items-center gap-2 hover:bg-green-600 transition z-50"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          className="w-6 h-6"
          viewBox="0 0 24 24"
        >
          <path d="M20.52 3.481C18.3 1.25 15.218.001 12.001.001 5.94.001.87 5.07.869 11.128c0 1.957.512 3.87 1.487 5.562L.008 23.9l7.428-2.308c1.622.738 3.39 1.118 5.128 1.118h.005c6.059 0 11.129-5.071 11.129-11.131 0-3.217-1.249-6.3-3.17-8.232zm-8.52 18.52h-.005c-1.545 0-3.047-.363-4.399-1.053l-.316-.158-4.412 1.371 1.434-4.331-.163-.319c-.898-1.568-1.373-3.336-1.373-5.173.002-4.907 3.992-8.899 8.899-8.899 2.384 0 4.63.928 6.316 2.614s2.615 3.932 2.615 6.316c-.001 4.908-3.992 8.899-8.896 8.899zm4.908-6.951c-.268-.134-1.594-.789-1.842-.879-.248-.089-.428-.134-.607.134-.178.268-.693.879-.848 1.057-.157.178-.313.201-.581.067-.268-.134-1.129-.415-2.15-1.325-.794-.706-1.33-1.58-1.487-1.847-.156-.268-.017-.412.117-.546.12-.119.268-.313.403-.468.134-.157.178-.268.268-.447.09-.179.045-.335-.023-.469-.067-.134-.607-1.47-.831-2.007-.218-.522-.439-.451-.607-.451-.156-.012-.335-.012-.515-.012-.179 0-.468.067-.713.335s-.937.918-.937 2.237c0 1.319.96 2.594 1.094 2.772.134.178 1.891 2.893 4.582 4.058.642.277 1.141.444 1.53.57.643.205 1.226.176 1.688.107.515-.079 1.594-.651 1.821-1.281.224-.631.224-1.175.157-1.282-.067-.104-.246-.157-.515-.29z" />
        </svg>
        <span>Send us a WhatsApp message</span>
      </a>
    </div>
  );
}
