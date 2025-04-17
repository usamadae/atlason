'use client';
import Image from 'next/image';
import { FC } from 'react';
import { useWishlist } from '../../context/WishlistContext';


const WishlistPage: FC = () => {
  const { wishlist, removeFromWishlist } = useWishlist();

  return (
    <div className="container mx-auto md:py-[80px] py-[40px] px-4 overflow-hidden ">

      <h1 className="xl:text-[62px] lg:text-[52px] md:text-[42px] text-[26px] font-semibold mb-2 font-inter mb-10">Your Wishlist</h1>
      {wishlist.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 lg:grid-cols-3 gap-6 font-inter">
          {wishlist.map((course) => (
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
                    onClick={() => removeFromWishlist(course.id)}
                    className="text-sm text-red-600 hover:underline cursor-pointer font-bold"
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-red text-[22px]">Your wishlist is empty!</p>
      )}
    </div>
  );
};

export default WishlistPage;
