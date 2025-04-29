'use client';
import Image from 'next/image';
import { FC, useState } from 'react';
import { useWishlist } from '../../context/WishlistContext';

const WishlistPage: FC = () => {
  const { wishlist, isLoading, removeFromWishlist } = useWishlist();
  const [removingItems, setRemovingItems] = useState<Record<string, boolean>>({});

  const handleRemoveFromWishlist = async (courseId: string) => {
    // Set loading state for this specific item
    setRemovingItems(prev => ({ ...prev, [courseId]: true }));
    
    try {
      await removeFromWishlist(courseId);
    } catch (error) {
      console.error('Failed to remove item from wishlist:', error);
    } finally {
      // Reset loading state
      setRemovingItems(prev => ({ ...prev, [courseId]: false }));
    }
  };

  return (
    <div className="container mx-auto md:py-[80px] py-[40px] px-4 overflow-hidden">
      <h1 className="xl:text-[62px] lg:text-[52px] md:text-[42px] text-[26px] font-semibold mb-2 font-inter mb-10">
        Your Wishlist
      </h1>
      
      {isLoading ? (
        <div className="flex justify-center items-center py-20">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#3DB765]"></div>
        </div>
      ) : wishlist.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 lg:grid-cols-3 gap-6 font-inter">
          {wishlist.map((course) => {
            const isRemoving = removingItems[course.id];
            
            return (
              <div
                key={course.id}
                className="bg-white rounded-lg shadow-md border border-gray-100 overflow-hidden"
              >
                <div className="relative w-full h-48">
                  <Image
                    src={course.image}
                    alt={course.title}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="p-4">
                  <h3 className="text-lg font-semibold mb-2 line-clamp-2">{course.title}</h3>
                  <p className="text-gray-600 text-sm mb-3">{course.description}</p>

                  <div className="flex items-center mb-3">
                    <span className="text-[15px] font-medium mr-1">{course.rating}</span>
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className="h-4 w-4 text-yellow-400 fill-yellow-400"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                        </svg>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-xl font-bold">${course.price.toFixed(2)}</span>
                    <button
                      onClick={() => handleRemoveFromWishlist(course.id)}
                      disabled={isRemoving}
                      className={`text-sm ${isRemoving ? 'text-gray-400' : 'text-red-600 hover:underline'} cursor-pointer font-bold flex items-center`}
                    >
                      {isRemoving ? (
                        <>
                          <span className="mr-1">Removing</span>
                          <svg className="animate-spin h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                        </>
                      ) : (
                        'Remove'
                      )}
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="text-center">
          <p className="text-red text-[22px] mb-4">Your wishlist is empty!</p>
          <a href="/courses" className="inline-block bg-[#3DB765] hover:bg-black text-white font-semibold px-6 py-3 rounded transition-colors">
            Browse Courses
          </a>
        </div>
      )}
    </div>
  );
};

export default WishlistPage;