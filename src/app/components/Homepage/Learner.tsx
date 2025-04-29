'use client';
import Image from 'next/image';
import { useCart } from '../../../context/CartContext';
import { FC, useEffect, useState } from 'react';
import { useWishlist } from '../../../context/WishlistContext';

const Learner: FC = () => {
  const { addToCart } = useCart();
  const { wishlist, isLoading, addToWishlist, removeFromWishlist } = useWishlist();
  const [isAddingToWishlist, setIsAddingToWishlist] = useState<Record<string, boolean>>({});

  const courses = [
    {
      id: 1,
      title: 'Lorem ipsum is simply dummy text of the printing and typesetting industry1.',
      description: 'Lorem ipsum is simply dummy text of the typesetting',
      rating: 5.0,
      price: 10.0,
      image: '/images/learner.png',
    },
    {
      id: 2,
      title: 'Lorem ipsum is simply dummy text of the printing and typesetting industry2.',
      description: 'Lorem ipsum is simply dummy text of the typesetting',
      rating: 5.0,
      price: 50.0,
      image: '/images/learner.png',
    },
    {
      id: 3,
      title: 'Lorem ipsum is simply dummy text of the printing and typesetting industry3.',
      description: 'Lorem ipsum is simply dummy text of the typesetting',
      rating: 5.0,
      price: 30.0,
      image: '/images/learner.png',
    },
    {
      id: 4,
      title: 'Lorem ipsum is simply dummy text of the printing and typesetting industry4.',
      description: 'Lorem ipsum is simply dummy text of the typesetting',
      rating: 5.0,
      price: 40.0,
      image: '/images/learner.png',
    },
  ];

  const handleToggleWishlist = async (course: any) => {
    const courseId = String(course.id);
    const isInWishlist = wishlist.some((item) => item.id === courseId);
    
    // Set loading state for this specific course
    setIsAddingToWishlist(prev => ({ ...prev, [courseId]: true }));
    
    try {
      if (isInWishlist) {
        await removeFromWishlist(courseId);
      } else {
        await addToWishlist({ ...course, id: courseId });
      }
    } catch (error) {
      console.error('Failed to update wishlist:', error);
    } finally {
      // Reset loading state for this course
      setIsAddingToWishlist(prev => ({ ...prev, [courseId]: false }));
    }
  };

  return (
    <section className="lg:py-[60px] py-[40px] md:pt-[40px] pt-[20px] px-4 container mx-auto">
      <div className="text-center md:mb-12 mb-8">
        <h2 className="xl:text-[52px] lg:text-[42px] md:text-[32px] text-[26px] font-bold font-inter inline-block">
          Learners Are{' '}
          <span className="text-[#3DB765] relative">
            Viewing
            <div className="absolute bottom-[1px] left-0 w-full h-1">
              <Image
                src="/images/heading-line.png"
                alt="Student with tablet"
                width={260}
                height={23}
              />
            </div>
          </span>
        </h2>
      </div>

      {isLoading ? (
        <div className="flex justify-center items-center py-20">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#3DB765]"></div>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {courses.map((course) => {
            const isInWishlist = wishlist.some((item) => item.id === String(course.id));
            const isProcessing = isAddingToWishlist[String(course.id)];

            return (
              <div
                key={course.id}
                className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-100 relative"
              >
                <div className="absolute top-2 right-2 z-10">
                  <button 
                    onClick={() => handleToggleWishlist(course)} 
                    className="p-1 rounded-full cursor-pointer"
                    disabled={isProcessing}
                  >
                    {isProcessing ? (
                      <svg className="animate-spin h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill={isInWishlist ? 'white' : 'none'}
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="w-6 h-6 text-white"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M4.318 6.318a4.5 4.5 0 016.364 0L12 7.636l1.318-1.318a4.5 4.5 0 116.364 6.364L12 21.682l-7.682-7.682a4.5 4.5 0 010-6.364z"
                        />
                      </svg>
                    )}
                  </button>
                </div>

                <div className="relative xl:h-48 lg:h-40 h-60 w-full p-10">
                  <Image src={course.image} alt={course.title} fill className="" />
                </div>

                <div className="p-4">
                  <h3 className="text-sm font-semibold line-clamp-2 text-[16px] font-inter h-10 mb-1">
                    {course.title}
                  </h3>

                  <p className="text-xs text-black text-[14px] font-semibold my-3">
                    {course.description}
                  </p>

                  <div className="flex items-center mb-3">
                    <span className="text-[16px] font-inter font-semibold me-1">{course.rating}</span>
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className="h-3 w-3 text-yellow-400 fill-yellow-400"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                        </svg>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="font-bold font-inter xl:text-[29px] text-[24px]">
                      ${course.price.toFixed(2)}
                    </span>
                    <button
                      onClick={() => addToCart(course)}
                      className="bg-[#3DB765] text-[14px] hover:bg-black text-white font-semibold px-3 py-1 !cursor-pointer transition-colors"
                    >
                      Enroll
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </section>
  );
};

export default Learner;