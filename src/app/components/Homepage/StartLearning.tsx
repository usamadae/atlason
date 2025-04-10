import React from 'react';
import Image from 'next/image';

const StartLearning = () => {
  return (
    <div className="w-full bg-black text-white py-[60px] mt-[40px] px-4">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="mb-6 md:mb-0">
               <div className=" mb-5">
                          <h2 className="text-[52px] font-bold font-inter inline-block">
                          Start Learning with 67.1k {" "}
                              <span className="text-[#3DB765] relative">Students {" "}
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
                              <br />
                              Around The {" "}
                              <span className="text-[#3DB765] relative">World {" "}
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
          
          <div className="mt-4 flex space-x-2">
            <button className="bg-[#3DB765] hover:bg-[#3DB765] cursor-pointer text-white font-semibold py-3 px-6  uppercase text-[16px]">
              Login
            </button>
            <button className="border border-black bg-white cursor-pointer text-black hover:bg-[#3DB765] hover:text-white font-semibold py-3 px-4  uppercase text-[16px]">
              Sign Up
            </button>
          </div>
        </div>
        
        <div className="flex flex-wrap justify-center md:justify-end space-x-8">
          <div className="text-center">
            <p className="text-[55px] font-inter font-bold">6.3k</p>
            <p className="text-[16px] font-inter font-medium text-white">Online courses</p>
          </div>
          <div className="text-center">
            <p className="text-[55px] font-inter font-bold">26k</p>
            <p className="text-[16px] font-inter font-medium text-white">Certified Instructor</p>
          </div>
          <div className="text-center">
            <p className="text-[55px] font-inter font-bold">99.9%</p>
            <p className="text-[16px] font-inter font-medium text-white">Success Rate</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StartLearning;