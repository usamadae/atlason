// RecommendedCourses.jsx
"use client"
import Image from 'next/image';
import Link from 'next/link';

const RecommendedCourses = () => {
    // Mock data for the courses
    const courses = [
        {
            id: 1,
            title: 'Investing In Stocks The Complete Course! (13 Hours)',
            category: 'STOCK & FINANCE',
            price: 100.00,
            originalPrice: 199.99,
            rating: 5.0,
            reviews: '(357,914)',
            students: '265.7K',
            instructor: 'Kevin Gilbert',
            instructorImage: '/images/ravatar.png',
            level: 'Beginner',
            duration: '6 hour',
            image: '/images/rc1.png',
        },
        {
            id: 2,
            title: 'Google Analytics Certification - Learn How To...',
            category: 'DIGITAL MARKETING',
            price: 100.00,
            originalPrice: 199.99,
            rating: 5.0,
            reviews: '(357,914)',
            students: '265.7K',
            instructor: 'Kevin Gilbert',
            instructorImage: '/images/ravatar.png',
            level: 'Beginner',
            duration: '6 hour',
            image: '/images/rc2.png',
        },
        {
            id: 3,
            title: 'Adobe XD for Web Design: Essential Principles',
            category: 'DEVELOPMENT',
            price: 100.00,
            originalPrice: 199.99,
            rating: 5.0,
            reviews: '(357,914)',
            students: '265.7K',
            instructor: 'Kevin Gilbert',
            instructorImage: '/images/ravatar.png',
            level: 'Beginner',
            duration: '6 hour',
            image: '/images/rc3.png',
        },
        {
            id: 4,
            title: 'The Python Mega Course: Build 10 Real World...',
            category: 'DATA',
            price: 100.00,
            originalPrice: 199.99,
            rating: 5.0,
            reviews: '(357,914)',
            students: '265.7K',
            instructor: 'Kevin Gilbert',
            instructorImage: '/images/ravatar.png',
            level: 'Beginner',
            duration: '6 hour',
            image: '/images/rc4.png',
        },
    ];

    return (
        <section className="md:py-[60px] py-[40px] px-4 container mx-auto">
            <div className="text-center md:mb-12 mb-5">
                <h2 className="xl:text-[52px] lg:text-[42px] md:text-[32px] text-[26px] mb-5 font-bold font-inter inline-block">
                    Recommended <span className="text-[#3DB765] relative">Courses
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

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {courses.map((course) => (
                    <div key={course.id} className="bg-white rounded-lg shadow-sm border border-gray-100 flex overflow-hidden p-[20px]">
                        <div className="relative md:w-40 w-[40%] xl:h-40 h-full flex-shrink-0 ">
                            <Image
                                src={course.image}
                                alt={course.title}
                                fill
                                className="object-cover "
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
                                    <div className="w-6 h-6 rounded-full bg-gray-300 overflow-hidden relative mr-2 rounded-lg">
                                        <Image
                                            src={course.instructorImage}
                                            alt={course.instructor}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                    <div>
                                        <span className="text-14px text-black font-inter ">{course.instructor}</span>
                                    </div>
                                </div>

                                <div className="flex items-center text-xs mt-2">
                                    <div className="flex items-center">
                                        {/* Star icon */}
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
                                    {/* Users icon */}

                                    <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10.8818 13.3232C13.6433 13.3232 15.8818 11.0847 15.8818 8.32324C15.8818 5.56182 13.6433 3.32324 10.8818 3.32324C8.12041 3.32324 5.88184 5.56182 5.88184 8.32324C5.88184 11.0847 8.12041 13.3232 10.8818 13.3232Z" stroke="#3DB765" stroke-width="1.5" stroke-miterlimit="10" />
                                        <path d="M3.30286 17.6975C4.07126 16.3675 5.17615 15.2631 6.50652 14.4953C7.83688 13.7274 9.34588 13.3232 10.8819 13.3232C12.418 13.3233 13.927 13.7275 15.2573 14.4953C16.5877 15.2632 17.6925 16.3676 18.4609 17.6977" stroke="#3DB765" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>

                                    <span className="ml-1 font-inter text-[14px] font-medium text-black"><span className='font-semibold'>{course.students}</span> students</span>
                                </div>

                                <div className="flex items-center xl:mx-4">
                                    {/* Level icon */}

                                    <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10.8818 17.4896V9.15625" stroke="#3DB765" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M15.8818 17.4896V4.15625" stroke="#3DB765" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M5.88184 17.4896V14.1562" stroke="#3DB765" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>

                                    <span className="ml-1 font-inter text-[14px] font-medium text-black">{course.level}</span>
                                </div>

                                <div className="flex items-center">
                                    {/* Clock icon */}

                                    <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10.8818 18.3232C15.024 18.3232 18.3818 14.9654 18.3818 10.8232C18.3818 6.68111 15.024 3.32324 10.8818 3.32324C6.7397 3.32324 3.38184 6.68111 3.38184 10.8232C3.38184 14.9654 6.7397 18.3232 10.8818 18.3232Z" stroke="#3DB765" stroke-width="1.5" stroke-miterlimit="10" />
                                        <path d="M10.8818 6.44824V10.8232H15.2568" stroke="#3DB765" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>

                                    <span className="ml-1 font-inter text-[14px] font-medium text-black">{course.duration}</span>
                                </div>
                            </div>


                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default RecommendedCourses;