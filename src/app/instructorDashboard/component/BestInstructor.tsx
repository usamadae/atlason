'use client';
import { useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function BestInstructorSlider() {
  const [instructors, setInstructors] = useState([]);
  const scrollRef = useRef(null);

  useEffect(() => {
    fetch('/api/best-instructors')
      .then(res => res.json())
      .then(data => setInstructors(data));
  }, []);

  const scroll = (direction) => {
    if (!scrollRef.current) return;
    const scrollAmount = scrollRef.current.offsetWidth; // scroll by container width
    scrollRef.current.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth',
    });
  };

  return (
    <div className="relative p-2 bg-[#F7F7F7]  rounded-lg">
      <h2 className="text-[#3DB765] font-semibold  text-[20px]  mb-4  px-5 text-left">Best Instructor</h2>

      {/* Chevron Buttons */}
      <button
        onClick={() => scroll('left')}
        className="absolute left-2 top-1/2 transform -translate-y-1/2  p-2 rounded-full  z-10"
      >
        <ChevronLeft size={20} />
      </button>
      <button
        onClick={() => scroll('right')}
        className="absolute right-2 top-1/2 transform -translate-y-1/2  p-2 rounded-full  z-10"
      >
        <ChevronRight size={20} />
      </button>

      {/* Slider */}
      <div
        ref={scrollRef}
        className="flex overflow-hidden gap-4 px-0"
      >
        {instructors.map((inst) => (
          <div
            key={inst.id}
            className="w-1/2 flex-shrink-0  rounded-lg  p-4 flex flex-col items-center"
          >
            <div className="w-24 h-24 mb-2">
              <img
                src={inst.image}
                alt={inst.name}
                className="w-full h-full rounded-full object-cover border-4 border-green-500"
              />
            </div>
            <h3 className="font-semibold font-[16px] font-inter">{inst.name}</h3>
            <p className=" text-center text-[10px] font-inter">{inst.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
