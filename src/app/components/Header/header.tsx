// src/components/Header/header.tsx

"use client";
import { useState, useEffect } from "react";
import Logo from "./logo";
import BrowseCategory from "./BrowseCategory";
import SearchField from "./SearchField";
import HeaderIcon from "./HeaderIcon";
import MyAccount from "./MyAccount";
import { browseCategoriesWithSub } from "../../utils/api/browseCategory";
import { GetServerSideProps } from "next";


// Fetch data on the server-side
export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const rawCategories = await browseCategoriesWithSub();
    return {
      props: {
        browsingCategory: rawCategories,
      },
    };
  } catch (error) {
    console.error("Error fetching categories:", error);
    return {
      props: {
        browsingCategory: [],
      },
    };
  }
};

type HeaderProps = {
  // Define properties as needed. For example:
  browsingCategory: any[]; // adjust type as needed
  // If you use top categories also in header, you can add:
  categories?: any[];
  animate: any[];
};

const Header = ({ browsingCategory, categories }: HeaderProps) => {



  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [isRightPanelOpen, setIsRightPanelOpen] = useState(false);

  // Handle responsive layout detection
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      setIsTablet(window.innerWidth >= 768 && window.innerWidth < 1024);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleRightPanel = () => {
    setIsRightPanelOpen(!isRightPanelOpen);
  };
  const [scrollY, setScrollY] = useState(0);
  const [isFixed, setIsFixed] = useState(false);
  const [animateClass, setAnimateClass] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;

      if (currentScroll > 200 && !isFixed) {
        setIsFixed(true);
        setAnimateClass('animate-slide-down');
      } else if (currentScroll <= 100 && isFixed) {
        setAnimateClass('animate-slide-up');
        setTimeout(() => {
          setIsFixed(false); // Remove 'fixed' after animation
        }, 400); // Match animation duration
      }

      setScrollY(currentScroll);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isFixed]);

  return (
    <>
      <header
        className={`w-full left-0 top-0 z-50 bg-[#F7F7F7] md:px-0 px-2 py-3 transition-all duration-300 ${isFixed ? 'fixed shadow-md' : 'absolute'
          } ${animateClass}`}
      >
        <div className="container mx-auto">
          {/* Desktop View */}
          {!isMobile && !isTablet && (
            <div className="flex">
              <div className="w-[50%] flex justify-center gap-x-5 items-center">
                <div className="w-[25%]">
                  <Logo />
                </div>
                <div className="w-[25%]">
                  <BrowseCategory categories={browsingCategory} />
                </div>
                <div className="w-[50%]">
                  <SearchField />
                </div>
              </div>
              <div className="w-[50%] flex gap-x-5 items-center justify-end">
                <HeaderIcon />
                <MyAccount />
              </div>
            </div>
          )}
          {/* Tablet View */}
          {isTablet && (
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-x-4 w-[70%]">
                <Logo />
                <SearchField />
              </div>
              <div className="flex items-center gap-x-4 w-[30%] justify-end">
                <HeaderIcon />
                <button onClick={toggleRightPanel} className="p-2 focus:outline-none">
                  <svg width="24" height="24" viewBox="0 0 24 24">
                    <path d="M3 6H21" stroke="black" strokeWidth="2" strokeLinecap="round" />
                    <path d="M3 12H21" stroke="black" strokeWidth="2" strokeLinecap="round" />
                    <path d="M3 18H21" stroke="black" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </button>
              </div>
            </div>
          )}
          {/* Mobile View */}
          {isMobile && (
            <div className="flex items-center justify-between">
              <Logo />
              <div className="flex items-center gap-x-2">
                <HeaderIcon />
                <button onClick={toggleRightPanel} className="p-2 focus:outline-none">
                  <svg width="24" height="24" viewBox="0 0 24 24">
                    <path d="M3 6H21" stroke="black" strokeWidth="2" strokeLinecap="round" />
                    <path d="M3 12H21" stroke="black" strokeWidth="2" strokeLinecap="round" />
                    <path d="M3 18H21" stroke="black" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </button>
              </div>
            </div>
          )}
        </div>
      </header>
      {/* Right Panel Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-[80%] bg-white shadow-lg z-50 transform transition-transform duration-300 ease-in-out ${isRightPanelOpen ? "translate-x-0" : "translate-x-full"
          }`}
      >
        <div className="p-5">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold">Menus</h2>
            <button onClick={toggleRightPanel} className="p-2 focus:outline-none">
              <svg width="24" height="24" viewBox="0 0 24 24">
                <path d="M18 6L6 18" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M6 6L18 18" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
          {isMobile && (
            <div className="mb-6">
              <SearchField />
            </div>
          )}
          <div className="mb-6">
            <h3 className="text-lg font-medium mb-3">Categories</h3>
            <BrowseCategory categories={browsingCategory} />
          </div>
          <div className="mb-6">
            <h3 className="text-lg font-medium mb-3">Quick Links</h3>
            <SearchField />
          </div>
          <div className="mb-6">
            <h3 className="text-lg font-medium mb-3">My Account</h3>
            <MyAccount toggleRightPanel={toggleRightPanel} />

          </div>
        </div>
      </div>
      {isRightPanelOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40" onClick={toggleRightPanel}></div>
      )}
    </>
  );
};

export default Header;
