// Learner.jsx
'use client';
import Image from 'next/image';
import { useCart } from '../../../context/CartContext';

const Learner = () => {
  // Mock data for the learner viewing courses
  const { addToCart } = useCart();
  const courses = [
    {
      id: 1,
      title: 'Lorem ipsum is simply dummy text of the printing and typesetting industry1.',
      description: 'Lorem ipsum is simply dummy text of the typesetting',
      rating: 5.0,
      price: 10.00,
      image: '/images/learner.png',
    },
    {
      id: 2,
      title: 'Lorem ipsum is simply dummy text of the printing and typesetting industry2.',
      description: 'Lorem ipsum is simply dummy text of the typesetting',
      rating: 5.0,
      price: 50.00,
      image: '/images/learner.png',
    },
    {
      id: 3,
      title: 'Lorem ipsum is simply dummy text of the printing and typesetting industry3.',
      description: 'Lorem ipsum is simply dummy text of the typesetting',
      rating: 5.0,
      price: 30.00,
      image: '/images/learner.png',
    },
    {
      id: 4,
      title: 'Lorem ipsum is simply dummy text of the printing and typesetting industry4.',
      description: 'Lorem ipsum is simply dummy text of the typesetting',
      rating: 5.0,
      price: 40.00,
      image: '/images/learner.png',
    },
  ];

  return (
    <section className="lg:py-[60px] py-[40px] md:pt-[40px] pt-[20px] px-4 container mx-auto">
         <div className="text-center md:mb-12 mb-8">
                      <h2 className="xl:text-[52px] lg:text-[42px] md:text-[32px] text-[26px] font-bold font-inter inline-block">
                      Learners Are <span className="text-[#3DB765] relative">Viewing
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
      
                      </h2>
                  </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {courses.map((course) => (
          <div key={course.id} className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-100">
            <div className="relative xl:h-48 lg:h-40 h-60 w-full p-10">
              <Image
                src={course.image}
                alt={course.title}
                fill
                className=""
              />
            </div>
            
            <div className="p-4">
              <h3 className="text-sm font-semibold line-clamp-2 text-[16px] font-inter h-10 mb-1">
                {course.title}
              </h3>
              
              <p className="text-xs text-black text-[14px] font-semibold  my-3">
                {course.description}
              </p>
              
              <div className="flex items-center mb-3">
                {/* Star rating */}
                <span className="text-[16px] font-inter font-semibold  me-1">{course.rating}</span>
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
                <span className="font-bold font-inter xl:text-[29px] text-[24px]">${course.price.toFixed(2)}</span>
                <button  onClick={() => addToCart(course)} className="bg-[#3DB765] text-[14px]  hover:bg-black text-white font-semibold px-3 py-1 !cursor-pointer transition-colors">
                  Enroll
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Learner;