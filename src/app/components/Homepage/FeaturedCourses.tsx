
"use client"
// FeaturedCourses.jsx
import Image from 'next/image';
import Link from 'next/link';

const FeaturedCourses = () => {
    // Mock data for the courses
    const courses = [
        {
            id: 1,
            title: 'Lorem Ipsum is simply dummy text of the printing.',
            category: 'DESIGN',
            price: 100,
            rating: 5.0,
            students: '265.7K',
            image: '/images/courseimages.png',
        },
        {
            id: 2,
            title: 'Lorem Ipsum is simply dummy text of the printing.',
            category: 'DESIGN',
            price: 100,
            rating: 5.0,
            students: '265.7K',
            image: '/images/courseimages.png',
        },
        {
            id: 3,
            title: 'Lorem Ipsum is simply dummy text of the printing.',
            category: 'DESIGN',
            price: 100,
            rating: 5.0,
            students: '265.7K',
            image: '/images/courseimages.png',
        },
        {
            id: 4,
            title: 'Lorem Ipsum is simply dummy text of the printing.',
            category: 'DESIGN',
            price: 100,
            rating: 5.0,
            students: '265.7K',
            image: '/images/courseimages.png',
        },
    ];

    return (
        <section className="xl:py-[60px] md:py-[40px] py-[60px] md:pb-[40px] pb-[20px] px-4 container mx-auto">
            <div className="text-center md:mb-12 mb-5">
                <h2 className="xl:text-[52px] lg:text-[42px] md:text-[32px] text-[26px] font-bold font-inter inline-block">
                    Featured <span className="text-[#3DB765] relative">Courses
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

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {courses.map((course) => (
                    <div key={course.id} className="bg-white cursor-pointer rounded-lg shadow-md overflow-hidden p-[20px]">
                        <div className="relative xl:h-48 lg:h-40 md:h-50 h-60 w-full">
                            <Image
                                src="/images/course-images.png"
                                alt={course.title}
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div className="py-4">
                            <div className='flex justify-between '>
                                <div className="uppercase text-[10px] inline-block bg-[#E3E3E3] font-semibold text-[#1D1F22] py-1 px-3 mb-1">
                                    {course.category}
                                </div>
                                <div>
                                    <p className="font-medium text-[18px]">${course.price}</p>
                                </div>
                            </div>
                            <div className="flex justify-between items-center my-2">
                                <p className="text-[16px] font-medium text-[#1D1F22] ">{course.title}</p>

                            </div>
                            <div className="flex items-center justify-between mt-4 pt-4 border-t border-[#E9EAF0] text-sm">
                                <div className="flex items-center">
                                    {/* Star icon */}

                                    <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M9.21473 13.2408L13.155 15.7372C13.6587 16.0563 14.284 15.5817 14.1345 14.9938L12.9961 10.5155C12.9641 10.3908 12.9679 10.2595 13.0071 10.1368C13.0463 10.0142 13.1193 9.90506 13.2178 9.82206L16.7512 6.88117C17.2155 6.49474 16.9758 5.72423 16.3793 5.68552L11.765 5.38605C11.6407 5.37717 11.5215 5.33316 11.4212 5.25916C11.321 5.18515 11.2438 5.08419 11.1987 4.96803L9.47776 0.634201C9.43098 0.510908 9.3478 0.404763 9.23927 0.32986C9.13074 0.254958 9.00199 0.214844 8.87012 0.214844C8.73825 0.214844 8.6095 0.254958 8.50097 0.32986C8.39244 0.404763 8.30926 0.510908 8.26248 0.634201L6.54151 4.96803C6.49642 5.08419 6.41926 5.18515 6.31901 5.25916C6.21877 5.33316 6.09956 5.37717 5.97527 5.38605L1.3609 5.68552C0.764411 5.72423 0.524781 6.49474 0.989053 6.88117L4.52244 9.82206C4.62091 9.90506 4.69395 10.0142 4.73316 10.1368C4.77238 10.2595 4.77618 10.3908 4.74412 10.5155L3.68835 14.6686C3.50901 15.3741 4.25941 15.9437 4.86381 15.5607L8.52551 13.2408C8.62849 13.1753 8.74804 13.1405 8.87012 13.1405C8.9922 13.1405 9.11175 13.1753 9.21473 13.2408V13.2408Z" fill="#F48C06" />
                                    </svg>

                                    <span className="ml-1 text-[#1D1F22] text-[16px] font-medium">{course.rating}</span>
                                </div>
                                <div className="flex items-center">
                                    {/* Users icon */}

                                    <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10.4397 12.8398C13.2011 12.8398 15.4397 10.6013 15.4397 7.83984C15.4397 5.07842 13.2011 2.83984 10.4397 2.83984C7.67827 2.83984 5.4397 5.07842 5.4397 7.83984C5.4397 10.6013 7.67827 12.8398 10.4397 12.8398Z" stroke="#1D1F22" stroke-width="1.5" stroke-miterlimit="10" />
                                        <path d="M2.86072 17.2141C3.62912 15.8841 4.73401 14.7797 6.06438 14.0119C7.39475 13.244 8.90375 12.8398 10.4398 12.8398C11.9758 12.8399 13.4848 13.2441 14.8152 14.0119C16.1455 14.7798 17.2504 15.8842 18.0188 17.2143" stroke="#1D1F22" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>

                                    <span className="ml-1 text-14px font-inter font-normal text-[#1D1F22]"><span className='font-semibold'>{course.students} </span>students</span>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="flex justify-center mt-12">
                <Link href="/courses" className="flex items-center bg-[#3DB765] hover:bg-black md:text-[16px] text-[14px] font-inter font-semibold text-white px-6 py-3 transition-colors">
                    Browse All Courses
                   
<svg className='ps-2' width="30" height="30" viewBox="0 0 36 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.6582 15.1494H34.6147" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M21.1328 1.66699L34.615 15.1492L21.1328 28.6314" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

                </Link>
            </div>
        </section>
    );
};

export default FeaturedCourses;