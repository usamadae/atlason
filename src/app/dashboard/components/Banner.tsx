// app/dashboard/components/Banner.tsx

import Image from "next/image";

export default function Banner() {
  return (
    <div 
    className="text-white  rounded-xl mb-6 flex justify-between items-center relative bg-right-center mt-[50px] bg-no-repeat bg-cover"
    style={{ backgroundImage: "url('/images/dashboard-bg.png')" }}
  >

      <div className="p-6">
        <h2 className="text-[16px] font-inter font-normal">ONLINE COURSE</h2>
        <p className="text-[28px] font-inter font-bold w-[60%] py-3">Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
        <button className="mt-2 px-6 py-3  bg-black font-inter text-[14px] hover:bg-white hover:text-black font-bold transition cursor-pointer text-white rounded-lg flex items-center gap-2">
          Join Now
          
        </button>
      </div>
      <div className="flex-shrink-0">
        <Image 
          src="/images/student-banner.png"
          alt="Students with books"
          width={400}
          height={150}
          className="object-contain w-full h-[350px] mt-[-120px]"
        />
      </div>
    </div>
  );
}