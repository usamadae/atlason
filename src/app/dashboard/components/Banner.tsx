// app/dashboard/components/Banner.tsx

import Image from "next/image";

export default function Banner() {
  return (
    <div 
    className="text-white  rounded-xl mb-6 flex flex-col md:flex-col  lg:flex-row justify-between items-center  relative bg-right-center sm:mt-[20px] mt-[50px] bg-no-repeat bg-cover"
    style={{ backgroundImage: "url('/images/dashboard-bg.png')" }}
  >

      <div className="p-6  w-full sm:w-full md:w-full lg:w-1/2  ">
        <h2 className=" text-xs text-sm font-inter font-normal">ONLINE COURSE</h2>
        <p className=" text-sm  text-base  text-xl font-inter font-bold w-[100%] py-3     ">Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
        <button className="mt-2 px-6 py-3  bg-black font-inter text-[14px] hover:bg-white hover:text-black font-bold transition cursor-pointer text-white rounded-lg flex items-center gap-2">
          Join Now
          
        </button>
      </div>
      <div className="flex-shrink-0 w-full sm:w-full md:w-[70%] lg:w-1/2 xl:w-1/2">
        <Image 
          src="/images/student-banner.png"
          alt="Students with books"
          width={300}
          height={150}
          className="object-contain w-full md:h-[220px] sm:h-[280px] lg:h-[250px] md:mt-[10px] lg:mt-[-120px]"
        />
      </div>
    </div>
  );
}