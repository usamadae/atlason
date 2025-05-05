'use client';

import { useState } from 'react';
import { User } from "../../types";

export default function ProfileCard({ user }: { user: User }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Toggle Button for mobile */}
      {/* Button to toggle profile */}
      <button
        className="fixed bottom-4 right-4 z-50 bg-green-700 text-white p-2 rounded-full shadow-lg sm:block md:block lg:hidden"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? 'Close' : 'Profile'}
      </button>

      {/* Sidebar Wrapper */}
      <aside
        className={`fixed top-0 right-0 h-full w-62 z-40 transform transition-transform duration-300 ease-in-out bg-[#F7F7F7] shadow-lg py-7 px-4
         transition-all duration-300 ${isOpen ? 'block' : 'hidden'} 
          md:fixed md:translate-x-0 lg:relative lg:block overflow-y-auto`}
      >
        <div className="flex justify-between mb-4 ">
          <p className="font-bold text-black">Your Profile</p>
          <button className="lg:hidden" onClick={() => setIsOpen(false)}>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
              <path d="M11.6665 4.23405C11.6665 3.31738 10.9165 2.56738 9.99984 2.56738C9.08317 2.56738 8.33317 3.31738 8.33317 4.23405C8.33317 5.15072 9.08317 5.90072 9.99984 5.90072C10.9165 5.90072 11.6665 5.15072 11.6665 4.23405Z" stroke="black" strokeWidth="1.5" />
              <path d="M11.6665 15.901C11.6665 14.9844 10.9165 14.2344 9.99984 14.2344C9.08317 14.2344 8.33317 14.9844 8.33317 15.901C8.33317 16.8177 9.08317 17.5677 9.99984 17.5677C10.9165 17.5677 11.6665 16.8177 11.6665 15.901Z" stroke="black" strokeWidth="1.5" />
              <path d="M11.6665 10.0671C11.6665 9.15039 10.9165 8.40039 9.99984 8.40039C9.08317 8.40039 8.33317 9.15039 8.33317 10.0671C8.33317 10.9837 9.08317 11.7337 9.99984 11.7337C10.9165 11.7337 11.6665 10.9837 11.6665 10.0671Z" stroke="black" strokeWidth="1.5" />
            </svg>
          </button>
          
        </div>

        <button className="bg-green-600 text-white p-2 m-auto block rounded-lg my-4 w-full font-bold text-[16px]">
          Become Instructor
        </button>

        <img src='/images/prof.png' alt={user.name} className="w-32 h-32 rounded-full mx-auto mb-2" />
        <h4 className="text-center font-bold text-lg">{user.name}</h4>
        <p className="text-center text-sm text-black-600 mb-4">{user.role}</p>

        <div className="my-10 flex justify-evenly align-center">
        <div>
          <svg xmlns="http://www.w3.org/2000/svg" width="40" height="41" viewBox="0 0 40 41" fill="none">
            <rect x="0.5" y="1.20312" width="39" height="39" rx="19.5" stroke="black" />
            <path d="M20.0134 14.6436C17.8067 14.6436 16.0134 16.4369 16.0134 18.6436V20.5702C16.0134 20.9769 15.8401 21.5969 15.6334 21.9436L14.8667 23.2169C14.3934 24.0036 14.7201 24.8769 15.5867 25.1702C18.4601 26.1302 21.5601 26.1302 24.4334 25.1702C25.2401 24.9036 25.5934 23.9502 25.1534 23.2169L24.3867 21.9436C24.1867 21.5969 24.0134 20.9769 24.0134 20.5702V18.6436C24.0134 16.4436 22.2134 14.6436 20.0134 14.6436Z" stroke="black" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" />
            <path d="M21.2465 14.8361C21.0398 14.7761 20.8265 14.7294 20.6065 14.7028C19.9665 14.6228 19.3531 14.6694 18.7798 14.8361C18.9731 14.3428 19.4531 13.9961 20.0131 13.9961C20.5731 13.9961 21.0531 14.3428 21.2465 14.8361Z" stroke="black" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M22.0132 25.4102C22.0132 26.5102 21.1132 27.4102 20.0132 27.4102C19.4665 27.4102 18.9598 27.1835 18.5998 26.8235C18.2398 26.4635 18.0132 25.9568 18.0132 25.4102" stroke="black" stroke-width="1.5" stroke-miterlimit="10" />
          </svg>
        </div>
        <div>
          <svg xmlns="http://www.w3.org/2000/svg" width="40" height="41" viewBox="0 0 40 41" fill="none">
            <rect x="0.5" y="1.20312" width="39" height="39" rx="19.5" stroke="black" />
            <path d="M18.0002 27.3695H22.0002C25.3335 27.3695 26.6668 26.0361 26.6668 22.7028V18.7028C26.6668 15.3695 25.3335 14.0361 22.0002 14.0361H18.0002C14.6668 14.0361 13.3335 15.3695 13.3335 18.7028V22.7028C13.3335 26.0361 14.6668 27.3695 18.0002 27.3695Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M13.3335 21.3699H15.8402C16.3468 21.3699 16.8068 21.6566 17.0335 22.1099L17.6268 23.3033C18.0002 24.0366 18.6668 24.0366 18.8268 24.0366H21.1802C21.6868 24.0366 22.1468 23.7499 22.3735 23.2966L22.9668 22.1033C23.1935 21.6499 23.6535 21.3633 24.1602 21.3633H26.6535" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </div>
        <div>
          <svg xmlns="http://www.w3.org/2000/svg" width="40" height="41" viewBox="0 0 40 41" fill="none">
            <rect x="0.5" y="1.20312" width="39" height="39" rx="19.5" stroke="black" />
            <path d="M18.0002 27.3695H22.0002C25.3335 27.3695 26.6668 26.0361 26.6668 22.7028V18.7028C26.6668 15.3695 25.3335 14.0361 22.0002 14.0361H18.0002C14.6668 14.0361 13.3335 15.3695 13.3335 18.7028V22.7028C13.3335 26.0361 14.6668 27.3695 18.0002 27.3695Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M13.3335 21.3699H15.8402C16.3468 21.3699 16.8068 21.6566 17.0335 22.1099L17.6268 23.3033C18.0002 24.0366 18.6668 24.0366 18.8268 24.0366H21.1802C21.6868 24.0366 22.1468 23.7499 22.3735 23.2966L22.9668 22.1033C23.1935 21.6499 23.6535 21.3633 24.1602 21.3633H26.6535" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </div>
      </div>
      <div className="my-8 flex justify-center align-center">
        <svg xmlns="http://www.w3.org/2000/svg" width="204" height="109" viewBox="0 0 204 109" fill="none">
          <rect y="90.333" width="31.2" height="18.5568" fill="#3DB765" />
          <rect y="81.0547" width="31.2" height="9.27841" fill="#43CD71" />
          <rect y="73.5615" width="31.2" height="7.49251" fill="#56E285" />
          <path d="M0 72.8672C0 70.658 1.79086 68.8672 4 68.8672H27.2C29.4091 68.8672 31.2 70.658 31.2 72.8672V73.562H0V72.8672Z" fill="#6CF198" />
          <rect x="43.2002" y="77.7412" width="31.2" height="31.148" fill="#3DB765" />
          <rect x="43.2002" y="62.6123" width="31.2" height="15.1285" fill="#43CD71" />
          <rect x="43.2002" y="45.4609" width="31.2" height="17.1517" fill="#56E285" />
          <path d="M43.2002 41.1855C43.2002 38.9764 44.9911 37.1855 47.2002 37.1855H70.4002C72.6093 37.1855 74.4002 38.9764 74.4002 41.1855V45.4611H43.2002V41.1855Z" fill="#6CF198" />
          <rect x="86.4004" y="68.6836" width="31.2" height="40.2062" fill="#3DB765" />
          <rect x="86.4004" y="50.0176" width="31.2" height="18.6664" fill="#43CD71" />
          <rect x="86.4004" y="29.0068" width="31.2" height="21.0103" fill="#56E285" />
          <path d="M86.4004 21.6152C86.4004 19.4061 88.1913 17.6152 90.4004 17.6152H113.6C115.81 17.6152 117.6 19.4061 117.6 21.6152V29.0073H86.4004V21.6152Z" fill="#6CF198" />
          <rect x="129.6" y="62.1445" width="31.2" height="46.7453" fill="#3DB765" />
          <rect x="129.6" y="38.292" width="31.2" height="23.8526" fill="#43CD71" />
          <rect x="129.6" y="12.0947" width="31.2" height="26.1965" fill="#56E285" />
          <path d="M129.6 4.70312C129.6 2.49398 131.39 0.703125 133.6 0.703125H156.8C159.009 0.703125 160.8 2.49399 160.8 4.70313V12.0952H129.6V4.70312Z" fill="#6CF198" />
          <rect x="172.8" y="66.7695" width="31.2" height="42.1197" fill="#3DB765" />
          <rect x="172.8" y="46.4756" width="31.2" height="20.2944" fill="#43CD71" />
          <rect x="172.8" y="25.2793" width="31.2" height="21.1962" fill="#56E285" />
          <path d="M172.8 17.9316C172.8 15.7225 174.591 13.9316 176.8 13.9316H200C202.209 13.9316 204 15.7225 204 17.9316V25.2794H172.8V17.9316Z" fill="#6CF198" />
        </svg>
      </div>
      <div >
        <div className="flex justify-between my-5">
          <div>
            <h5 className="font-semibold mb-2">Course History</h5>
          </div>

          <div>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
              <rect x="0.5" y="1.20312" width="23" height="23" rx="11.5" stroke="black" />
              <path d="M9 12.7031H15" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M12 15.7031V9.70312" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </div>
        </div>
        <div className="bg-white px-3 py-2 rounded-2xl" >
          {user.courseHistory.map(course => (
            <div key={course.id} className="text-sm mb-2 bg-white ">
              <div className="flex justify-center align-center border-b border-black border-b-gray-500 py-3 ">
                <div className="w-[20%] flex align-center justify-center ">
                  <img src='/images/dummmy.png' alt={user.name} className="w-8 h-8 rounded-full mx-auto  self-center" />
                </div>
                <div className="w-[80%] flex justify-center items-start flex-col">
                  <p className="text-[10px] font-medium" >{course.title}</p>
                  <p className="text-[8px] " >{course.instructor}</p>
                </div>
              </div>
              {/* <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-blue-500 h-2 rounded-full" style={{ width: ${course.progress}% }}></div>
            </div> */}

            </div>

          ))}
        </div>
        <button className="text-green-600 text-center block m-auto my-2"> See All</button>
      </div>
      </aside>

      {/* Overlay on mobile when open */}
      {isOpen && (
        <div
          className="fixed md:scroll"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
}
