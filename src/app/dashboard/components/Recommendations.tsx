// app/dashboard/components/Recommendations.tsx
"use client"
import { useState } from 'react';
import { Recommendation } from "../../types";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Recommendations({ data }: { data: Recommendation[] }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const maxVisibleCards = 3;

  const handlePrev = () => {
    setCurrentIndex(prev => (prev > 0 ? prev - 1 : 0));
  };

  const handleNext = () => {
    setCurrentIndex(prev => (prev < data.length - maxVisibleCards ? prev + 1 : prev));
  };

  const visibleRecommendations = data.slice(currentIndex, currentIndex + maxVisibleCards);

  return (
    <section className="mb-6 relative">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold">Recommended</h3>
        <div className="flex space-x-2">
          <button 
            onClick={handlePrev} 
            disabled={currentIndex === 0}
            className="rounded-full border border-gray-200 p-1 hover:bg-gray-100 disabled:opacity-50"
          >
            <ChevronLeft size={16} />
          </button>
          <button 
            onClick={handleNext} 
            disabled={currentIndex >= data.length - maxVisibleCards}
            className="rounded-full border border-gray-200 p-1 hover:bg-gray-100 disabled:opacity-50"
          >
            <ChevronRight size={16} />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 bg-white">
        {visibleRecommendations.map((course) => (
          <div key={course.id} className="bg-white p-4 rounded ">
            <div className="flex items-center gap-4 flex-col md:flex-row">
              <div className="sm:w-24 w-full  flex-shrink-0">
                <img
                  src={course.imageUrl}
                  alt={course.title}
                  className="w-full h-32 object-cover rounded-xl mb-2"
                />
              </div>
              <div className="flex flex-col justify-between">
                <h4 className="font-bold text-sm mb-1 ">{course.title}</h4>
                <div className='flex justify-between item-center'>
                  <div className='flex justify-center item-center'>
                <img
                  src='/images/Photo.png'
                  alt={course.title}
                  className="w-8 h-8 object-cover rounded-xl  self-center"
                />

                <p className="text-xs text-black-600 self-center">By {course.instructor}</p>
                </div>
                <p className="text-xs self-center">⭐ {course.rating} ({course.students})</p>
                </div>
                <div className="flex justify-between items-center mt-3 pt-3 xl:flex-nowrap flex-wrap gap-y-3 border-t border-black text-xs text-gray-600">
                                <div className="flex items-center">
                                    {/* Users icon */}

                                    <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10.8818 13.3232C13.6433 13.3232 15.8818 11.0847 15.8818 8.32324C15.8818 5.56182 13.6433 3.32324 10.8818 3.32324C8.12041 3.32324 5.88184 5.56182 5.88184 8.32324C5.88184 11.0847 8.12041 13.3232 10.8818 13.3232Z" stroke="#3DB765" stroke-width="1.5" stroke-miterlimit="10" />
                                        <path d="M3.30286 17.6975C4.07126 16.3675 5.17615 15.2631 6.50652 14.4953C7.83688 13.7274 9.34588 13.3232 10.8819 13.3232C12.418 13.3233 13.927 13.7275 15.2573 14.4953C16.5877 15.2632 17.6925 16.3676 18.4609 17.6977" stroke="#3DB765" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>

                                    <span className="ml-1 font-inter text-[12px] font-medium text-black"><span className='font-semibold'>{course.students}</span> students</span>
                                </div>

                                <div className="flex items-center ">
                                    {/* Level icon */}

                                    <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10.8818 17.4896V9.15625" stroke="#3DB765" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M15.8818 17.4896V4.15625" stroke="#3DB765" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M5.88184 17.4896V14.1562" stroke="#3DB765" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>

                                    <span className="ml-1 font-inter text-[12px] font-medium text-black">{course.level}</span>
                                </div>

                                <div className="flex items-center">
                                    {/* Clock icon */}

                                    <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10.8818 18.3232C15.024 18.3232 18.3818 14.9654 18.3818 10.8232C18.3818 6.68111 15.024 3.32324 10.8818 3.32324C6.7397 3.32324 3.38184 6.68111 3.38184 10.8232C3.38184 14.9654 6.7397 18.3232 10.8818 18.3232Z" stroke="#3DB765" stroke-width="1.5" stroke-miterlimit="10" />
                                        <path d="M10.8818 6.44824V10.8232H15.2568" stroke="#3DB765" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>

                                    <span className="ml-1 font-inter text-[12px] font-medium text-black">{course.duration}</span>
                                </div>
                            </div>
              </div>
              
            </div>
            
          </div>
        ))}
      </div>
    </section>
  );
}
