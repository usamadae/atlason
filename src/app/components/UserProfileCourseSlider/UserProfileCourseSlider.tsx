import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// Define the course type
interface Course {
  id: number;
  title: string;
  image: string;
  category: string;
  price: number;
  originalPrice: number;
  instructor: string;
  instructorImage: string;
  rating: string;
  reviews: string;
  students: string;
  level: string;
  duration: string;
}

interface CourseSliderProps {
  autoPlayInterval?: number; // Time in milliseconds for autoplay
  pauseOnHover?: boolean;
}

const CourseSlider = ({ autoPlayInterval = 5000, pauseOnHover = true }: CourseSliderProps) => {
  // Sample course data - replace with your actual data
  const courses: Course[] = [
    {
      id: 1,
      title: "Complete Web Development Bootcamp 2025",
      image: "/images/rc1.png",
      category: "Development",
      price: 89.99,
      originalPrice: 199.99,
      instructor: "Kevin Gilbert",
      instructorImage: "/images/instructor-1.jpg",
      rating: "4.8",
      reviews: "(357,914)",
      students: "265.7K",
      level: "Beginner",
      duration: "6 hour"
    },
    {
      id: 2,
      title: "Advanced JavaScript: From Zero to Hero",
      image: "/images/rc2.png",
      category: "Programming",
      price: 79.99,
      originalPrice: 149.99,
      instructor: "Kevin Gilbert",
      instructorImage: "/images/instructor-1.jpg",
      rating: "4.9",
      reviews: "(124,573)",
      students: "189.3K",
      level: "Beginner",
      duration: "8 hour"
    },
    {
      id: 3,
      title: "Python for Data Science and Machine Learning",
      image: "/images/rc3.png",
      category: "AI & ML",
      price: 99.99,
      originalPrice: 199.99,
      instructor: "Kevin Gilbert",
      instructorImage: "/images/instructor-1.jpg",
      rating: "4.7",
      reviews: "(85,217)",
      students: "157.2K",
      level: "Beginner",
      duration: "10 hour"
    },
    {
      id: 4,
      title: "React and Redux: Building Modern Web Apps",
      image: "/images/rc4.png",
      category: "Frontend",
      price: 84.99,
      originalPrice: 169.99,
      instructor: "Kevin Gilbert",
      instructorImage: "/images/instructor-1.jpg",
      rating: "4.8",
      reviews: "(63,942)",
      students: "120.5K",
      level: "Beginner",
      duration: "7 hour"
    },
    {
      id: 5,
      title: "UI/UX Design Principles for Beginners",
      image: "/images/rc1.png",
      category: "Design",
      price: 74.99,
      originalPrice: 149.99,
      instructor: "Kevin Gilbert",
      instructorImage: "/images/instructor-1.jpg",
      rating: "4.7",
      reviews: "(42,873)",
      students: "98.6K",
      level: "Beginner",
      duration: "5 hour"
    },
    {
      id: 6,
      title: "Node.js: The Complete Backend Development",
      image: "/images/rc2.png",
      category: "Backend",
      price: 94.99,
      originalPrice: 189.99,
      instructor: "Kevin Gilbert",
      instructorImage: "/images/instructor-1.jpg",
      rating: "4.8",
      reviews: "(35,129)",
      students: "75.4K",
      level: "Beginner",
      duration: "9 hour"
    }
  ];

  const sliderRef = useRef<HTMLDivElement>(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const autoPlayTimerRef = useRef<NodeJS.Timeout | null>(null);
  
  // Function to scroll the slider
  const scroll = (direction: 'left' | 'right') => {
    if (sliderRef.current) {
      const scrollAmount = direction === 'left' ? -350 : 350;
      sliderRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };
  
  // Handle scroll event to show/hide arrows
  const handleScroll = () => {
    if (sliderRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current;
      setShowLeftArrow(scrollLeft > 0);
      setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  // Auto play functionality
  const startAutoPlay = () => {
    if (autoPlayTimerRef.current) {
      clearInterval(autoPlayTimerRef.current);
    }
    
    autoPlayTimerRef.current = setInterval(() => {
      if (sliderRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current;
        
        // If we're at the end, go back to the start
        if (scrollLeft >= scrollWidth - clientWidth - 10) {
          sliderRef.current.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          // Otherwise, scroll to the next item
          scroll('right');
        }
      }
    }, autoPlayInterval);
  };

  const stopAutoPlay = () => {
    if (autoPlayTimerRef.current) {
      clearInterval(autoPlayTimerRef.current);
      autoPlayTimerRef.current = null;
    }
  };

  // Initialize autoplay
  useEffect(() => {
    if (isAutoPlaying) {
      startAutoPlay();
    } else {
      stopAutoPlay();
    }
    
    return () => {
      stopAutoPlay();
    };
  }, [isAutoPlaying, autoPlayInterval]);

  // Add scroll event listener
  useEffect(() => {
    const currentRef = sliderRef.current;
    if (currentRef) {
      currentRef.addEventListener('scroll', handleScroll);
      return () => currentRef.removeEventListener('scroll', handleScroll);
    }
  }, []);

  // Mouse down event for dragging
  const handleMouseDown = (e: React.MouseEvent) => {
    if (sliderRef.current) {
      setIsDragging(true);
      setStartX(e.pageX - sliderRef.current.offsetLeft);
      setScrollLeft(sliderRef.current.scrollLeft);
      
      if (pauseOnHover) {
        setIsAutoPlaying(false);
      }
    }
  };

  // Mouse leave event
  const handleMouseLeave = () => {
    setIsDragging(false);
    if (pauseOnHover) {
      setIsAutoPlaying(true);
    }
  };

  // Mouse up event
  const handleMouseUp = () => {
    setIsDragging(false);
    if (pauseOnHover) {
      setIsAutoPlaying(true);
    }
  };

  // Mouse move event for dragging
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !sliderRef.current) return;
    e.preventDefault();
    const x = e.pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX) * 2; // Multiply by 2 for faster scroll
    sliderRef.current.scrollLeft = scrollLeft - walk;
  };

  // Touch events for mobile dragging
  const handleTouchStart = (e: React.TouchEvent) => {
    if (sliderRef.current) {
      setIsDragging(true);
      setStartX(e.touches[0].pageX - sliderRef.current.offsetLeft);
      setScrollLeft(sliderRef.current.scrollLeft);
      
      if (pauseOnHover) {
        setIsAutoPlaying(false);
      }
    }
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging || !sliderRef.current) return;
    const x = e.touches[0].pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    sliderRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
    if (pauseOnHover) {
      setIsAutoPlaying(true);
    }
  };

  return (
    <div className="relative mt-12">
      {showLeftArrow && (
        <button 
          onClick={() => scroll('left')} 
          className="absolute left-0 top-1/2 -translate-y-1/2 -ml-4 z-10 bg-white rounded-full shadow-md p-2"
          onMouseEnter={() => pauseOnHover && setIsAutoPlaying(false)}
          onMouseLeave={() => pauseOnHover && setIsAutoPlaying(true)}
        >
          <ChevronLeft size={20} />
        </button>
      )}
      
      <div 
        ref={sliderRef}
        className="flex overflow-x-auto scrollbar-hide gap-6 pb-4 pt-1 px-1 cursor-grab active:cursor-grabbing"
        onScroll={handleScroll}
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onMouseEnter={() => pauseOnHover && setIsAutoPlaying(false)}
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {courses.map((course) => (
          <div 
            key={course.id} 
            className="bg-white rounded-lg shadow-sm border border-gray-100 flex overflow-hidden p-[20px] flex-shrink-0"
            style={{ width: '500px', userSelect: 'none' }}
          >
            <div className="relative md:w-30 w-[30%] xl:h-40 h-full flex-shrink-0">
              <Image
                src={course.image}
                alt={course.title}
                fill
                className="object-cover"
                draggable={false}
              />
            </div>
            <div className="p-4 flex flex-col flex-grow">
              <div className="mb-1 flex justify-between md:flex-row flex-col gap-y-2">
                <div>
                  <span className="bg-black text-white xl:text-[10px] text-[8px] font-medium px-2 py-1 uppercase font-inter ">
                    {course.category}
                  </span>
                </div>
                <div>
                  <span className="font-bold font-inter text-[18px]">${course.price.toFixed(2)}</span>
                  <span className="text-black font-inter font-normal line-through text-sm ml-2">${course.originalPrice.toFixed(2)}</span>
                </div>
              </div>

              <h3 className="font-medium text-[16px] font-inter mb-4">{course.title}</h3>

              <div className="flex items-center justify-between">
                <div className='flex items-center'>
                  <div className="w-6 h-6 rounded-full bg-gray-300 overflow-hidden relative mr-2">
                    <Image
                      src={course.instructorImage}
                      alt={course.instructor}
                      fill
                      className="object-cover"
                      draggable={false}
                    />
                  </div>
                  <div>
                    <span className="text-14px text-black font-inter ">{course.instructor}</span>
                  </div>
                </div>

                <div className="flex items-center text-xs mt-2">
                  <div className="flex items-center">
                    <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9.21473 13.2408L13.155 15.7372C13.6587 16.0563 14.284 15.5817 14.1345 14.9938L12.9961 10.5155C12.9641 10.3908 12.9679 10.2595 13.0071 10.1368C13.0463 10.0142 13.1193 9.90506 13.2178 9.82206L16.7512 6.88117C17.2155 6.49474 16.9758 5.72423 16.3793 5.68552L11.765 5.38605C11.6407 5.37717 11.5215 5.33316 11.4212 5.25916C11.321 5.18515 11.2438 5.08419 11.1987 4.96803L9.47776 0.634201C9.43098 0.510908 9.3478 0.404763 9.23927 0.32986C9.13074 0.254958 9.00199 0.214844 8.87012 0.214844C8.73825 0.214844 8.6095 0.254958 8.50097 0.32986C8.39244 0.404763 8.30926 0.510908 8.26248 0.634201L6.54151 4.96803C6.49642 5.08419 6.41926 5.18515 6.31901 5.25916C6.21877 5.33316 6.09956 5.37717 5.97527 5.38605L1.3609 5.68552C0.764411 5.72423 0.524781 6.49474 0.989053 6.88117L4.52244 9.82206C4.62091 9.90506 4.69395 10.0142 4.73316 10.1368C4.77238 10.2595 4.77618 10.3908 4.74412 10.5155L3.68835 14.6686C3.50901 15.3741 4.25941 15.9437 4.86381 15.5607L8.52551 13.2408C8.62849 13.1753 8.74804 13.1405 8.87012 13.1405C8.9922 13.1405 9.11175 13.1753 9.21473 13.2408V13.2408Z" fill="#F48C06" />
                    </svg>
                    <span className="ml-1 text-[14px] font-semibold font-inter pe-1">{course.rating}</span>
                    <span className="text-[14px] font-inter font-medium">{course.reviews}</span>
                  </div>
                </div>
              </div>

              <div className="flex justify-between items-center mt-3 pt-3 xl:flex-nowrap flex-wrap gap-y-3 border-t border-black text-xs text-gray-600">
                <div className="flex items-center">
                  <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.8818 13.3232C13.6433 13.3232 15.8818 11.0847 15.8818 8.32324C15.8818 5.56182 13.6433 3.32324 10.8818 3.32324C8.12041 3.32324 5.88184 5.56182 5.88184 8.32324C5.88184 11.0847 8.12041 13.3232 10.8818 13.3232Z" stroke="#3DB765" strokeWidth="1.5" strokeMiterlimit="10" />
                    <path d="M3.30286 17.6975C4.07126 16.3675 5.17615 15.2631 6.50652 14.4953C7.83688 13.7274 9.34588 13.3232 10.8819 13.3232C12.418 13.3233 13.927 13.7275 15.2573 14.4953C16.5877 15.2632 17.6925 16.3676 18.4609 17.6977" stroke="#3DB765" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <span className="ml-1 font-inter text-[14px] font-medium text-black"><span className='font-semibold'>{course.students}</span> students</span>
                </div>

                <div className="flex items-center">
                  <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.8818 17.4896V9.15625" stroke="#3DB765" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M15.8818 17.4896V4.15625" stroke="#3DB765" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M5.88184 17.4896V14.1562" stroke="#3DB765" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <span className="ml-1 font-inter text-[14px] font-medium text-black">{course.level}</span>
                </div>

                <div className="flex items-center">
                  <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.8818 18.3232C15.024 18.3232 18.3818 14.9654 18.3818 10.8232C18.3818 6.68111 15.024 3.32324 10.8818 3.32324C6.7397 3.32324 3.38184 6.68111 3.38184 10.8232C3.38184 14.9654 6.7397 18.3232 10.8818 18.3232Z" stroke="#3DB765" strokeWidth="1.5" strokeMiterlimit="10" />
                    <path d="M10.8818 6.44824V10.8232H15.2568" stroke="#3DB765" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <span className="ml-1 font-inter text-[14px] font-medium text-black">{course.duration}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {showRightArrow && (
        <button 
          onClick={() => scroll('right')} 
          className="absolute right-0 top-1/2 -translate-y-1/2 -mr-4 z-10 bg-white rounded-full shadow-md p-2"
          onMouseEnter={() => pauseOnHover && setIsAutoPlaying(false)}
          onMouseLeave={() => pauseOnHover && setIsAutoPlaying(true)}
        >
          <ChevronRight size={20} />
        </button>
      )}
      
      
    </div>
  );
};

export default CourseSlider;