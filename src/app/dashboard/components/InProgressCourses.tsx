// app/dashboard/components/InProgressCourses.tsx
"use client"
import { useState, useRef } from 'react';
import { Course } from "../../types";
import { ChevronLeft, ChevronRight } from "lucide-react";


export default function InProgressCourses({ courses }: { courses: Course[] }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const maxVisibleCards = 3;
  
  const handlePrev = () => {
    setCurrentIndex(prev => (prev > 0 ? prev - 1 : 0));
  };
  
  const handleNext = () => {
    setCurrentIndex(prev => (prev < courses.length - maxVisibleCards ? prev + 1 : prev));
  };
  
  const visibleCourses = courses.slice(currentIndex, currentIndex + maxVisibleCards);
  
  return (
    <section className="mb-6 relative">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold">In-Progress Courses</h3>
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
            disabled={currentIndex >= courses.length - maxVisibleCards}
            className="rounded-full border border-gray-200 p-1 hover:bg-gray-100 disabled:opacity-50"
          >
            <ChevronRight size={16} />
          </button>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {visibleCourses.map((course) => (
          <div key={course.id} className="bg-white  overflow-hidden shadow rounded-3xl">
            <div className="bg-gray-900 h-32 relative">
              <img src={course.imageUrl} alt={course.title} className="w-full h-full object-cover" />
              
            </div>
            
            <div className="p-4">
            <div className="  bg-green-100 text-green-900   text-[10px]  px-2 py-1 text-center  rounded-lg w-24">
                LOREM
              </div>
              <h4 className="text-[14px] text-sm mt-2  mb-2" style={{ color: '#000000', fontWeight: '500' } }> {course.title}</h4>
              <div className="w-full bg-gray-300 h-2 rounded-full">
            <div
              className="bg-green-600 h-2 rounded-full"
              style={{ width: `${course.progress}%` }}
            ></div>
          </div>


              <div className="flex items-center mt-4">
                <div className="w-8 h-8 rounded-full overflow-hidden mr-3">
                  <img 
                    src={course.instructorAvatar || "/avatar-placeholder.png"} 
                    alt={course.instructor}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="font-medium text-xs">{course.instructor}</p>
                  <p className="text-xs text-gray-500">Software Developer</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}