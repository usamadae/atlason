"use client"

import React, { useState } from 'react';
import Image from 'next/image';

const GeneralInstruction = () => {
  const [showVideoPopup, setShowVideoPopup] = useState(false);

  const openVideoPopup = () => {
    setShowVideoPopup(true);
  };

  const closeVideoPopup = () => {
    setShowVideoPopup(false);
  };

  return (
    <div className="container mx-auto px-4 xl:py-[80px] md:py-[60px]">
      <div className="flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Left side content */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <div className="relative mb-4">
            <div className="absolute -left-10 top-0 xl:w-20 xl:h-20 lg:w-15 lg:h-15 rounded-full bg-[#3DB765]"></div>
            <h2 className="xl:text-[48px] lg:text-[28px] text-center md:text-left text-[22px] font-inter font-bold relative z-10 mb-3">
              Lorem Ipsum is simply dummy text of the{' '}
              <span className="text-[#3DB765]">printing and typesetting industry.</span>
            </h2>
          </div>
          <p className="text-black font-poppins text-center md:text-left xl:text-[24px] lg:text-[20px] text-[18px] lg:leading-[42px] leading-[36px] mb-6">
            Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry's standard dummy text ever since the 1500s
          </p>
          <button className="bg-[#3DB765] cursor-pointer text-white lg:text-[18px] md:text-[16px] font-semibold px-8 py-3 hover:bg-black transition">
            Learn More
          </button>
        </div>

        {/* Right side image */}
        <div className="w-full md:w-1/2">
          <div className="rounded-xl overflow-hidden">
            <div className="relative">
              <Image 
                src="/images/gernal_instruction.png"
                alt="Classroom with students and instructor"
                width={600}
                height={350}
                className="w-full object-cover"
              />
              {/* Play button overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div 
                  className="bg-white rounded-full p-3 shadow-md cursor-pointer hover:bg-gray-100 transition"
                  onClick={openVideoPopup}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-800" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* YouTube Video Popup */}
      {showVideoPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
          <div className="relative w-full max-w-4xl mx-4">
            {/* Close button */}
            <button 
              className="absolute -top-10 right-0 text-white hover:text-gray-300"
              onClick={closeVideoPopup}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            {/* Video iframe */}
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/your_video_id?autoplay=1"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GeneralInstruction;