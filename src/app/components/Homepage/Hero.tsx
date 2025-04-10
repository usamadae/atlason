import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Hero = () => {
    return (
        <div className="relative bg-[#3DB765] pt-16 pb-[60px] overflow-hidden">
            {/* Curved bottom shape */}
            <div className="absolute xl:bottom-0 lg:bottom-[-50px] md:bottom-[-32px] bottom-[-1px] left-0 right-0">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 180" preserveAspectRatio="none" className="w-full h-32">
                    <path fill="white" d="M0,0 C360,160 1080,160 1440,0 L1440,180 L0,180 Z"></path>
                </svg>
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-3">
                <div className="flex flex-col md:flex-row items-center justify-between">
                    {/* Left side content */}
                    <div className="w-full md:w-1/2 text-white mb-8 md:mb-0 text-center md:text-left">
                        <h1 className="text-4xl text-center md:text-left md:text-4xl lg:text-[52px] xl:text-[72px] lg:leading-[70px] font-black xl:mb-4 font-inter">
                            Learn With <span className="relative text-black">Expert
                                <div className="absolute bottom-[-8px] left-0 w-full h-1">
                                    <Image
                                        src="/images/hero-text-line.png"
                                        alt="Underline"
                                        width={260}
                                        height={23}
                                        className="w-full"
                                    />
                                </div>
                            </span>
                        </h1>
                        <h2 className="text-4xl text-center md:text-left mt-4 md:mt-0 md:text-4xl leading-tight sm:leading-normal xl:leading-[92px] lg:leading-[70px] xl:text-[72px] lg:text-[52px] font-black mb-4 font-inter">
                            Any <span className="relative text-black">Time
                                <div className="absolute bottom-[5px] left-0 w-full h-1">
                                    <Image
                                        src="/images/hero-text-line.png"
                                        alt="Underline"
                                        width={260}
                                        height={23}
                                        className="w-full"
                                    />
                                </div>
                            </span> Any <br className="hidden sm:block" /> Where
                        </h2>
                        <p className="mb-8 md:text-[20px] text-[16px] text-center md:text-left xl:text-[24px] lg:text-[20px] font-inter font-normal">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                        </p>
                        <button className="bg-white text-[#3DB765] px-6 py-3 text-[16px] lg:text-[18px] font-inter font-semibold hover:bg-black cursor-pointer hover:text-white transition">
                            Create Account
                        </button>
                    </div>

                    {/* Right side image and notifications */}
                    <div className="w-full md:w-1/2 relative">
                        {/* Main image */}
                        <div className="relative z-10 flex justify-center md:justify-start">
                            <Image
                                src="/images/hero-lady.png"
                                alt="Student with tablet"
                                width={500}
                                height={600}
                                className="object-cover max-w-[80%] sm:max-w-[60%] md:max-w-full pb-[20px] md:pb-0"
                            />
                        </div>

                        {/* Stats notification */}
                        <div className="absolute hidden  top-[10%] sm:top-[20%] md:top-[20px] lg:top-[125px] left-0 sm:left-[-20px] md:left-[-50px] lg:left-[-30px] bg-white opacity-[80%] rounded-[20px] px-3 sm:px-5 py-2 sm:py-3 shadow-md z-20 lg:flex items-center scale-75 sm:scale-90 md:scale-100">
                            <div className="bg-[#3DB765] p-2 rounded-md mr-3">
                                <svg width="30" height="30" viewBox="0 0 50 51" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect y="0.366211" width="30" height="30" rx="8" fill="#2EBB5E" />
                                    <g clipPath="url(#clip0_156_9452)">
                                        <path d="M18.125 11.6162C17.5826 11.6162 17.1429 12.0559 17.1429 12.5984V14.5626H19.1071V12.5984C19.1071 12.0559 18.6674 11.6162 18.125 11.6162Z" fill="white" />
                                        <path d="M31.875 11.6162C31.3325 11.6162 30.8928 12.0559 30.8928 12.5984V14.5626H32.8571V12.5984C32.8571 12.0559 32.4174 11.6162 31.875 11.6162Z" fill="white" />
                                        <path d="M35.8036 14.5625H32.8571V18.4911C32.8571 19.0335 32.4174 19.4733 31.875 19.4733C31.3325 19.4733 30.8928 19.0335 30.8928 18.4911V14.5625H19.1071V18.4911C19.1071 19.0335 18.6674 19.4733 18.125 19.4733C17.5825 19.4733 17.1428 19.0335 17.1428 18.4911V14.5625H14.1964C12.5692 14.5625 11.25 15.8817 11.25 17.5089V36.1697C11.25 37.7969 12.5692 39.1161 14.1964 39.1161H35.8036C37.4308 39.1161 38.75 37.7969 38.75 36.1697V17.5089C38.75 15.8817 37.4308 14.5625 35.8036 14.5625ZM36.7857 36.1697C36.7857 36.7121 36.346 37.1518 35.8035 37.1518H14.1964C13.654 37.1518 13.2143 36.7121 13.2143 36.1697V23.4018H36.7857V36.1697Z" fill="white" />
                                        <path d="M19.1071 25.3662H17.1428C16.6004 25.3662 16.1607 25.8059 16.1607 26.3484C16.1607 26.8908 16.6004 27.3305 17.1428 27.3305H19.1071C19.6495 27.3305 20.0893 26.8908 20.0893 26.3484C20.0893 25.8059 19.6495 25.3662 19.1071 25.3662Z" fill="white" />
                                        <path d="M25.9821 25.3662H24.0179C23.4754 25.3662 23.0357 25.8059 23.0357 26.3484C23.0357 26.8908 23.4754 27.3305 24.0179 27.3305H25.9821C26.5246 27.3305 26.9643 26.8908 26.9643 26.3484C26.9643 25.8059 26.5246 25.3662 25.9821 25.3662Z" fill="white" />
                                        <path d="M32.8572 25.3662H30.8929C30.3505 25.3662 29.9107 25.8059 29.9107 26.3484C29.9107 26.8908 30.3505 27.3305 30.8929 27.3305H32.8572C33.3996 27.3305 33.8393 26.8908 33.8393 26.3484C33.8393 25.8059 33.3995 25.3662 32.8572 25.3662Z" fill="white" />
                                        <path d="M19.1071 29.2949H17.1428C16.6004 29.2949 16.1607 29.7346 16.1607 30.2771C16.1607 30.8195 16.6004 31.2592 17.1428 31.2592H19.1071C19.6495 31.2592 20.0893 30.8195 20.0893 30.2771C20.0893 29.7346 19.6495 29.2949 19.1071 29.2949Z" fill="white" />
                                        <path d="M25.9821 29.2949H24.0179C23.4754 29.2949 23.0357 29.7346 23.0357 30.2771C23.0357 30.8195 23.4754 31.2592 24.0179 31.2592H25.9821C26.5246 31.2592 26.9643 30.8195 26.9643 30.2771C26.9643 29.7346 26.5246 29.2949 25.9821 29.2949Z" fill="white" />
                                        <path d="M32.8572 29.2949H30.8929C30.3505 29.2949 29.9107 29.7346 29.9107 30.2771C29.9107 30.8195 30.3505 31.2592 30.8929 31.2592H32.8572C33.3996 31.2592 33.8393 30.8195 33.8393 30.2771C33.8393 29.7346 33.3995 29.2949 32.8572 29.2949Z" fill="white" />
                                        <path d="M19.1071 33.2236H17.1428C16.6004 33.2236 16.1607 33.6634 16.1607 34.2058C16.1607 34.7482 16.6004 35.1879 17.1428 35.1879H19.1071C19.6495 35.1879 20.0893 34.7482 20.0893 34.2057C20.0893 33.6633 19.6495 33.2236 19.1071 33.2236Z" fill="white" />
                                        <path d="M25.9821 33.2236H24.0179C23.4754 33.2236 23.0357 33.6634 23.0357 34.2058C23.0357 34.7482 23.4754 35.188 24.0179 35.188H25.9821C26.5246 35.188 26.9643 34.7482 26.9643 34.2058C26.9643 33.6634 26.5246 33.2236 25.9821 33.2236Z" fill="white" />
                                        <path d="M32.8572 33.2236H30.8929C30.3505 33.2236 29.9107 33.6634 29.9107 34.2058C29.9107 34.7482 30.3505 35.188 30.8929 35.188H32.8572C33.3996 35.188 33.8393 34.7482 33.8393 34.2058C33.8393 33.6634 33.3995 33.2236 32.8572 33.2236Z" fill="white" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_156_9452">
                                            <rect width="27.5" height="27.5" fill="white" transform="translate(11.25 11.6162)" />
                                        </clipPath>
                                    </defs>
                                </svg>
                            </div>
                            <div>
                                <div className="font-bold text-black font-inter text-[16px] sm:text-[18px] md:text-[20px]">250k</div>
                                <div className="text-[12px] sm:text-[14px] md:text-[16px] text-black font-inter font-semibold">Assisted Student</div>
                            </div>
                        </div>

                        {/* Only icon notification */}
                        <div className="absolute top-[5%] right-0 sm:top-[10%] sm:right-[10%] md:top-[50px] md:right-[80px] lg:right-[20px] xl:right-[80px] hidden lg:flex items-center scale-75 sm:scale-90 md:scale-100">
                            <div className="bg-[#3DB765] p-2 rounded-md mr-3">
                                <svg width="69" height="70" viewBox="0 0 69 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect y="0.757599" width="69" height="69" rx="14" fill="#3DB765" />
                                    <rect x="11.35" y="12.8326" width="47.3" height="44.85" rx="8" fill="white" />
                                    <path d="M34.5 23.1826V47.3326" stroke="#3DB765" strokeWidth="4" strokeLinecap="round" />
                                    <path d="M25.875 27.4951L25.875 47.3326" stroke="#3DB765" strokeWidth="4" strokeLinecap="round" />
                                    <path d="M43.125 32.6701V47.3326" stroke="#3DB765" strokeWidth="4" strokeLinecap="round" />
                                </svg>
                            </div>
                        </div>

                        {/* Congratulations notification */}
                        <div className="absolute top-[50%] hidden lg:flex sm:top-[55%] md:top-[300px] right-0 sm:right-8 md:right-16 bg-white opacity-[80%] rounded-[20px] px-3 sm:px-5 py-2 sm:py-3 shadow-md z-20 max-w-[200px] sm:max-w-xs scale-75 sm:scale-90 md:scale-100">
                            <div className="flex items-start">
                                <div className="mr-3 mt-1">
                                    <svg width="30" height="30" viewBox="0 0 50 51" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect y="0.757568" width="50" height="50" rx="8" fill="#2EBB5E" />
                                        <path d="M38.9285 15.0433H11.0714L25 26.5162L39.086 15.0754C39.0345 15.0604 38.9818 15.0496 38.9285 15.0433Z" fill="white" />
                                        <path d="M25.676 28.7318C25.2813 29.0551 24.7133 29.0551 24.3186 28.7318L10 16.9354V35.4004C10 35.9922 10.4797 36.4719 11.0714 36.4719H38.9285C39.5203 36.4719 40 35.9922 40 35.4004V17.094L25.676 28.7318Z" fill="white" />
                                    </svg>
                                </div>
                                <div>
                                    <div className="font-bold text-[16px] sm:text-[18px] md:text-[20px] font-inter flex items-center gap-2">
                                        Congratulations
                                        <span className="bg-green-100 text-green-600 p-1 rounded-full">
                                            <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <circle cx="10" cy="10.3662" r="10" fill="#4EE381" />
                                                <path d="M6 11.0607L8.88679 14.3662L15 7.36621" stroke="white" strokeWidth="2" strokeLinecap="round" />
                                            </svg>
                                        </span>
                                    </div>
                                    <div className="text-[12px] sm:text-[14px] md:text-[16px] font-inter font-semibold">Your admission completed</div>
                                </div>
                            </div>
                        </div>

                        {/* Class notification */}
                        <div className="absolute bottom-10 hidden lg:flex sm:bottom-20 md:bottom-0 lg:bottom-32 left-0 sm:left-[-20px] md:left-[-150px]  lg:left-[100px] xl:left-[-50px] bg-white opacity-[80%] rounded-[20px] px-3 sm:px-5 py-2 sm:py-3 shadow-md z-20 scale-75 sm:scale-90 md:scale-100">
                            <div className="flex items-start">
                                <div className="mr-3">
                                    <div className="flex items-center justify-center overflow-hidden">
                                        <Image
                                            src="/images/hero-avatar.png"
                                            alt="Instructor"
                                            width={40}
                                            height={40}
                                            className="object-contain"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <div className="font-bold text-[16px] sm:text-[18px] md:text-[20px] font-inter">User Experience Class</div>
                                    <div className="text-[12px] sm:text-[14px] md:text-[16px] font-inter font-semibold mb-2">Today at 12.00 PM</div>
                                    <Link href="#">
                                        <button className="bg-[#3DB765] text-white py-1 sm:py-2 px-4 sm:px-8 rounded-[80px] text-[12px] sm:text-[14px] md:text-[16px] font-inter font-bold">
                                            Join Now
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;