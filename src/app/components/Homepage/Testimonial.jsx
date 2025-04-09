// Testimonial.jsx
"use client"
import { useState, useEffect } from 'react';
import Image from 'next/image';

const testimonials = [
  {
    id: 1,
    name: 'Gloria Rose',
    image: '/images/testimonail.png',
    text: 'Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type',
    rating: 5,
  },
  {
    id: 2,
    name: 'John Smith',
    image: '/images/testimonail.png',
    text: 'Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type',
    rating: 4,
  },
  {
    id: 3,
    name: 'Emma Johnson',
    image: '/images/testimonail.png',
    text: 'Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type',
    rating: 5,
  },
];

// Custom Arrow SVG components
const ChevronRight = () => (

<svg width="15" height="15" viewBox="0 0 19 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2.2309 1.60254L15.0288 12.2675L2.2309 22.9324" stroke="#3DB765" stroke-width="4"/>
</svg>

);

const ChevronLeft = () => (
 
<svg width="15" height="15" viewBox="0 0 18 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15.9934 22.9531L3.23094 12.2459L16.0641 1.62342" stroke="#3DB765" stroke-width="4"/>
</svg>

);

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full container mx-auto py-12 pb-[120px] px-4">
      <div className="flex flex-col md:flex-row gap-8 items-center">
        {/* Left content */}
        <div className="w-full md:w-1/2">
          <div className="mb-4">
            <h3 className="uppercase text-[24px] font-bold font-inter tracking-wider ">TESTIMONIAL</h3>



            <div className="text-left mb-8">
              <h2 className="text-[52px] font-bold font-inter inline-block">
                <span className="text-black relative">What They {" "}
                  <div className="absolute bottom-[1px] left-0 w-full h-1 ">
                    <Image
                      src="/images/heading-line.png"
                      alt="Student with tablet"
                      width={260}
                      height={23}
                      className=""
                    />

                  </div>
                </span>
                Say?

              </h2>
            </div>          </div>

          <p className="font-inter text-[20px] leading-[34px] font-semibold mb-8">
            Lorem ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
            when an unknown printer took a galley of type and scrambled it to make a type
            specimen book. It has survived not only five centuries, but also the leap into
            electronic typesetting.
          </p>

          <button className="flex items-center border group cursor-pointer border-[#3DB765]  rounded-full px-5 py-3 hover:bg-[#3DB765] transition-colors">
            <span className="mr-2 text-[#3DB765] font-semibold font-inter text-[20px] group-hover:text-white  ">Write Your Assessment</span>
            <span className="w-5 h-5 flex items-center justify-center rounded-full bg-[#3DB765] text-white">
              <ChevronRight />
            </span>
          </button>
        </div>

        {/* Right content - Testimonial Slider */}
        <div className="w-full md:w-1/2 relative">
          <div className="rounded-lg ">
            {/* Image */}
            <div className="relative h-[750px] w-[600px]">
              {testimonials.map((testimonial, index) => (
                <div
                  key={testimonial.id}
                  className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${index === currentIndex ? 'opacity-100' : 'opacity-0'
                    }`}
                >
                  <img
                    src={testimonial.image || "/api/placeholder/400/320"}
                    alt={`Testimonial by ${testimonial.name}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}

              {/* Navigation buttons */}
              <button
                onClick={prevSlide}
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-white p-5 rounded-full cursor-pointer shadow-md opacity-70 hover:opacity-100"
              >
                <ChevronLeft />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-white rounded-full cursor-pointer  p-5 shadow-md opacity-70 hover:opacity-100"
              >
                <ChevronRight />
              </button>
            </div>

            {/* Testimonial text */}
            <div className="absolute bottom-[-100px] left-[75px] p-10 bg-white -mt-6 ml-6 mr-6 md:ml-12 shadow-lg border-l-10 rounded-[10px] border-[#3DB765]">
              {testimonials.map((testimonial, index) => (
                <div
                  key={`text-${testimonial.id}`}
                  className={`transition-opacity duration-500 ease-in-out ${index === currentIndex ? 'block' : 'hidden'
                    }`}
                >
                  <div className="border-l-8 border-[#3DB765] pl-8 mb-4">
                    <p className="text-black text-[18px] leading-[30px] font-poppins font-normal">
                      {testimonial.text}
                    </p>
                  </div>
                  <div className="flex justify-between items-center">
                    <h4 className="font-bold text-[18px] font-poppins pl-10">{testimonial.name}</h4>
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          xmlns="http://www.w3.org/2000/svg"
                          className={`h-5 w-5 ${i < testimonial.rating ? 'text-[#3DB765]' : 'text-gray-300'}`}
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Dots indicators */}
      {/* <div className="flex justify-center mt-8">
        {testimonials.map((_, index) => (
          <button
            key={`dot-${index}`}
            onClick={() => setCurrentIndex(index)}
            className={`h-2 w-2 mx-1 rounded-full ${index === currentIndex ? 'bg-[#3DB765]' : 'bg-gray-300'
              }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div> */}
    </div>
  );
};

export default Testimonial;