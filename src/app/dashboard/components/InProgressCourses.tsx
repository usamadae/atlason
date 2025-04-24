// app/dashboard/components/InProgressCourses.tsx
"use client"
import { useState, useRef } from 'react';
import { Course } from "../../types";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from 'next/image';

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
          <div key={course.id} className="bg-white rounded-lg overflow-hidden shadow">
            <div className="bg-gray-900 h-32 relative">
              <img src={course.imageUrl} alt={course.title} className="w-full h-full object-cover" />
              <div className="absolute top-2 left-2 bg-green-500 text-white text-xs px-2 py-1 rounded">
                LOREM
              </div>
            </div>
            
            <div className="p-4">
              <h4 className="font-bold text-sm mb-4">{course.title}</h4>
              
              <div className="flex items-center mt-4">
                <div className="w-8 h-8 rounded-full overflow-hidden mr-3">
                  <img 
                    src={course.instructorAvatar || "/avatar-placeholder.png"} 
                    alt={course.instructor}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="font-medium text-xs">Good Morning {course.instructor}</p>
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