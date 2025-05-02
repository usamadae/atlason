"use client";
import { useState } from 'react';

export default function Layout() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex">
      {/* Sidebar */}
      <aside
        className={`fixed z-50 top-0 left-0 h-full w-full bg-white shadow-lg flex flex-col py-2 px-10 transform transition-transform duration-300 ease-in-out
        ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:relative md:translate-x-0 md:flex`}
      >
         <aside className="  flex flex-col py-2">
      <div className="px-4 py-4 h-full flex flex-col justify-between">


        <div className="mb-8">
          {/* <Logo /> */}
          <h2 className="text-[16px] font-inter font-bold my-6">OVERVIEW</h2>
          <nav className="space-y-6">
            <a href="#" className="flex items-center text-sm">


              <svg className="w-5 h-5 mr-3 text-[#3DB765]" width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 12.5674V10.5674" stroke="#3DB765" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M6.71343 2.44761L2.09343 6.14761C1.57343 6.56094 1.2401 7.43427 1.35343 8.08761L2.2401 13.3943C2.4001 14.3409 3.30676 15.1076 4.26676 15.1076H11.7334C12.6868 15.1076 13.6001 14.3343 13.7601 13.3943L14.6468 8.08761C14.7534 7.43427 14.4201 6.56094 13.9068 6.14761L9.28676 2.45427C8.57343 1.88094 7.4201 1.88094 6.71343 2.44761Z" stroke="#3DB765" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              </svg>

              <span className="text-[16px] font-inter font-semibold text-[#3DB765]">Dashboard</span>
            </a>
            <a href="#" className="flex items-center text-sm group ">
              <svg className="w-5 h-5 mr-3" width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 1.90039V6.56706L9.33333 5.23372" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M8.00008 6.56771L6.66675 5.23438" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M1.32007 9.23438H4.26007C4.5134 9.23438 4.74007 9.37438 4.8534 9.60104L5.6334 11.161C5.86007 11.6144 6.32007 11.901 6.82674 11.901H9.18007C9.68674 11.901 10.1467 11.6144 10.3734 11.161L11.1534 9.60104C11.2667 9.37438 11.5001 9.23438 11.7467 9.23438H14.6534" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M4.66659 3.32031C2.30659 3.66698 1.33325 5.05365 1.33325 7.90031V10.567C1.33325 13.9003 2.66659 15.2336 5.99992 15.2336H9.99992C13.3333 15.2336 14.6666 13.9003 14.6666 10.567V7.90031C14.6666 5.05365 13.6933 3.66698 11.3333 3.32031" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              </svg>

              <span className="text-[16px] font-inter font-semibold hover:text-[#3DB765]">Inbox</span>
            </a>
            <a href="#" className="flex items-center text-sm">
              <svg className="w-5 h-5 mr-3" width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14.4466 10.1004L14.1799 13.4337C14.0799 14.4537 13.9999 15.2337 12.1933 15.2337H3.80659C1.99993 15.2337 1.91993 14.4537 1.81993 13.4337L1.55326 10.1004C1.49993 9.54706 1.67326 9.03372 1.98659 8.64039C1.99326 8.63372 1.99326 8.63372 1.99993 8.62706C2.36659 8.18039 2.91993 7.90039 3.53993 7.90039H12.4599C13.0799 7.90039 13.6266 8.18039 13.9866 8.61372C13.9933 8.62039 13.9999 8.62706 13.9999 8.63372C14.3266 9.02706 14.5066 9.54039 14.4466 10.1004Z" stroke="black" stroke-width="1.5" stroke-miterlimit="10" />
                <path d="M2.33325 8.18757V4.75423C2.33325 2.48757 2.89992 1.9209 5.16659 1.9209H6.01325C6.85992 1.9209 7.05325 2.17423 7.37325 2.6009L8.21992 3.73423C8.43325 4.01423 8.55992 4.18756 9.12659 4.18756H10.8266C13.0933 4.18756 13.6599 4.75423 13.6599 7.0209V8.21423" stroke="black" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M6.28662 11.9004H9.71329" stroke="black" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
              </svg>

              <span className="text-[16px] font-inter font-semibold hover:text-[#3DB765]">Lesson</span>
            </a>
            <a href="#" className="flex items-center text-sm">
              <svg className="w-5 h-5 mr-3" width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.24658 6.4873H11.7466" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M4.25342 6.4873L4.75342 6.9873L6.25342 5.4873" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M8.24658 11.1543H11.7466" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M4.25342 11.1543L4.75342 11.6543L6.25342 10.1543" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M5.99992 15.2337H9.99992C13.3333 15.2337 14.6666 13.9004 14.6666 10.5671V6.56706C14.6666 3.23372 13.3333 1.90039 9.99992 1.90039H5.99992C2.66659 1.90039 1.33325 3.23372 1.33325 6.56706V10.5671C1.33325 13.9004 2.66659 15.2337 5.99992 15.2337Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
              <span className="text-[16px] font-inter font-semibold hover:text-[#3DB765]">Task</span>
            </a>
            <a href="#" className="flex items-center text-sm">
              <svg className="w-5 h-5 mr-3" width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 5.34039C11.96 5.33373 11.9133 5.33373 11.8733 5.34039C10.9533 5.30706 10.22 4.55373 10.22 3.62039C10.22 2.66706 10.9866 1.90039 11.94 1.90039C12.8933 1.90039 13.66 2.67373 13.66 3.62039C13.6533 4.55373 12.92 5.30706 12 5.34039Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M11.3132 10.1938C12.2265 10.3472 13.2332 10.1872 13.9399 9.71383C14.8799 9.08716 14.8799 8.0605 13.9399 7.43383C13.2265 6.9605 12.2065 6.80049 11.2932 6.96049" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M3.98007 5.34039C4.02007 5.33373 4.06674 5.33373 4.10674 5.34039C5.02674 5.30706 5.76007 4.55373 5.76007 3.62039C5.76007 2.66706 4.9934 1.90039 4.04007 1.90039C3.08674 1.90039 2.32007 2.67373 2.32007 3.62039C2.32674 4.55373 3.06007 5.30706 3.98007 5.34039Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M4.66663 10.1938C3.75329 10.3472 2.74663 10.1872 2.03996 9.71383C1.09996 9.08716 1.09996 8.0605 2.03996 7.43383C2.75329 6.9605 3.77329 6.80049 4.68663 6.96049" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M7.99997 10.3209C7.95997 10.3142 7.9133 10.3142 7.8733 10.3209C6.9533 10.2875 6.21997 9.53419 6.21997 8.60086C6.21997 7.64753 6.98664 6.88086 7.93997 6.88086C8.8933 6.88086 9.65997 7.65419 9.65997 8.60086C9.6533 9.53419 8.91997 10.2942 7.99997 10.3209Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M6.05998 12.4206C5.11998 13.0473 5.11998 14.074 6.05998 14.7006C7.12665 15.414 8.87331 15.414 9.93998 14.7006C10.88 14.074 10.88 13.0473 9.93998 12.4206C8.87998 11.714 7.12665 11.714 6.05998 12.4206Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              </svg>

              <span className="text-[16px] font-inter font-semibold hover:text-[#3DB765]">Group</span>
            </a>
          </nav>
        </div>

      </div>
      
      <div className="mb-5">
          <h2 className="text-[16px] font-inter font-bold my-6">SETTINGS</h2>
          <nav className="space-y-4">
            <a href="#" className="flex items-center text-sm">
              <svg className="w-5 h-5 mr-3 " viewBox="0 0 24 24" fill="currentColor">
                <path d="M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z" />
              </svg>
              <span className="text-[16px] font-inter font-semibold hover:text-[#3DB765]">Settings</span>
            </a>
            <a href="#" className="flex items-center text-sm text-red-500">
              <svg className="w-5 h-5 mr-3 text-red-500" viewBox="0 0 24 24" fill="currentColor">
                <path d="M13 3h-2v10h2V3zm4.83 2.17l-1.42 1.42C17.99 7.86 19 9.81 19 12c0 3.87-3.13 7-7 7s-7-3.13-7-7c0-2.19 1.01-4.14 2.58-5.42L6.17 5.17C4.23 6.82 3 9.26 3 12c0 4.97 4.03 9 9 9s9-4.03 9-9c0-2.74-1.23-5.18-3.17-6.83z" />
              </svg>
              <span className="text-[16px] font-inter font-semibold">Logout</span>
            </a>
          </nav>
        </div>
    </aside>
    
      </aside>

      {/* Overlay for mobile when sidebar is open */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0  md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Page Content */}
      <div className="flex-1 relative py-4 mt-6">
      <div className="flex-1 absolute top-0 left-5 ">
        {/* Menu Button for Mobile/Tablet */}
        <button
          className="md:hidden mb-4 px-4 py-2 bg-gray-800 text-white rounded"
          onClick={() => setSidebarOpen(true)}
        >
           <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-6 h-6"
          >
            <path d="M3 12h18M3 6h18M3 18h18" />
          </svg>
        </button>
        </div>
        
      </div>
    </div>
  );
}
