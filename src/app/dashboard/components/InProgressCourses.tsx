"use client";
import { useState, useEffect } from "react";
import { Course } from "../../types";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function InProgressCourses({ courses }: { courses: Course[] }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(3); // default for desktop

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 640) {
        setCardsPerView(1); // mobile
      } else if (width < 1024) {
        setCardsPerView(2); // tablet
      } else {
        setCardsPerView(3); // desktop
      }
    };

    handleResize(); // initial
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const totalSlides = courses.length;
  const maxIndex = totalSlides - cardsPerView;

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  return (
    <section className="mb-6 relative bg-[#F7F7F7] py-4 px-2 mb-4 rounded-2xl">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold">In-Progress Courses</h3>
        <div className="flex space-x-2">
          <button
            onClick={handlePrev}
            className="rounded-full border border-gray-200 p-1 hover:bg-gray-100"
          >
            <ChevronLeft size={16} />
          </button>
          <button
            onClick={handleNext}
            className="rounded-full border border-gray-200 p-1 hover:bg-gray-100"
          >
            <ChevronRight size={16} />
          </button>
        </div>
      </div>

      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            width: `${(100 / cardsPerView) * totalSlides}%`,
            transform: `translateX(-${(100 / totalSlides) * currentIndex}%)`,
          }}
        >
          {courses.map((course) => (
            <div
              key={course.id}
              className="px-1"
              style={{ width: `${100 / totalSlides}%` }}
            >
              <div className="bg-white overflow-hidden shadow rounded-3xl h-full flex flex-col">
                <div className="bg-gray-900 h-32 relative">
                  <img
                    src={course.imageUrl}
                    alt={course.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-2 flex flex-col justify-between flex-1">
                  <div>
                    <div className="bg-green-100 text-green-900 text-[10px] px-2 py-1 text-center rounded-lg w-24">
                      LOREM
                    </div>
                    <h4 className="text-sm mt-1 mb-1 font-medium text-black text-[12px]">
                      {course.title}
                    </h4>
                    <div className="w-full bg-gray-300 h-2 rounded-full">
                      <div
                        className="bg-green-600 h-2 rounded-full"
                        style={{ width: `${course.progress}%` }}
                      ></div>
                    </div>
                  </div>

                  <div className="flex items-center mt-1">
                    <div className="w-8 h-8 rounded-full overflow-hidden mr-3">
                      <img
                        src={course.instructorAvatar || "/avatar-placeholder.png"}
                        alt={course.instructor}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-medium text-[10px]">{course.instructor}</p>
                      <p className="text-[10px] text-gray-500">Software Developer</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
