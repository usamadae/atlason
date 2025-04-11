"use client"
import { useState, useEffect } from 'react';
import Logo from "./logo";
import BrowseCategory from "./BrowseCategory";
import SearchField from "./SearchField";
import HeaderIcon from "./HeaderIcon";
import MyAccount from "./MyAccount";

const Header = () => {
    const [isMobile, setIsMobile] = useState(false);
    const [isTablet, setIsTablet] = useState(false);
    const [isRightPanelOpen, setIsRightPanelOpen] = useState(false);

    // Handle responsive layout detection
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
            setIsTablet(window.innerWidth >= 768 && window.innerWidth < 1024);
        };

        // Set initial state
        handleResize();

        // Add event listener
        window.addEventListener('resize', handleResize);

        // Cleanup
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const toggleRightPanel = () => {
        setIsRightPanelOpen(!isRightPanelOpen);
    };

    return (
        <>
            <header className="bg-[#F7F7F7] py-[20px] md-px-0 px-2">
                <div className="container mx-auto">
                    {/* Desktop View */}
                    {!isMobile && !isTablet && (
                        <div className="flex">
                            <div className="w-[50%] flex justify-center gap-x-5 items-center justify-items-start">
                                <div className="w-[25%]">
                                    <Logo />
                                </div>
                                <div className="w-[25%] d">
                                    <BrowseCategory />
                                </div>
                                <div className="w-[50%]">
                                    <SearchField />
                                </div>
                            </div>
                            <div className="w-[50%] flex gap-x-5 items-center justify-end">
                                <div className="w-auto">
                                    <HeaderIcon />
                                </div>
                                <div className="w-auto">
                                    <MyAccount />
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Tablet View */}
                    {isTablet && (
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-x-4 w-[70%]">
                                <div className="w-auto">
                                    <Logo />
                                </div>
                                <div className="w-full">
                                    <SearchField />
                                </div>
                            </div>
                            <div className="flex items-center gap-x-4 w-[30%] justify-end">
                               
                                <div className="flex items-center gap-x-3 justify-end">
                                    <HeaderIcon />
                                    <button 
                                        onClick={toggleRightPanel}
                                        className="p-2 focus:outline-none"
                                    >
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M3 6H21" stroke="black" strokeWidth="2" strokeLinecap="round"/>
                                            <path d="M3 12H21" stroke="black" strokeWidth="2" strokeLinecap="round"/>
                                            <path d="M3 18H21" stroke="black" strokeWidth="2" strokeLinecap="round"/>
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Mobile View */}
                    {isMobile && (
                        <div className="flex items-center justify-between">
                            <div className="w-auto">
                                <Logo />
                            </div>
                            <div className="flex items-center gap-x-2">
                                <HeaderIcon />
                                <button 
                                    onClick={toggleRightPanel}
                                    className="p-2 focus:outline-none"
                                >
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M3 6H21" stroke="black" strokeWidth="2" strokeLinecap="round"/>
                                        <path d="M3 12H21" stroke="black" strokeWidth="2" strokeLinecap="round"/>
                                        <path d="M3 18H21" stroke="black" strokeWidth="2" strokeLinecap="round"/>
                                    </svg>
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </header>

            {/* Right Panel Sidebar */}
            <div 
                className={`fixed top-0 right-0 h-full w-[80%] bg-white shadow-lg z-50 transform transition-transform duration-300 ease-in-out ${
                    isRightPanelOpen ? 'translate-x-0' : 'translate-x-full'
                }`}
            >
                <div className="p-5">
                    <div className="flex justify-between items-center mb-6">
                        <h2 className="text-xl font-semibold">Menu</h2>
                        <button 
                            onClick={toggleRightPanel}
                            className="p-2 focus:outline-none"
                        >
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M18 6L6 18" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M6 6L18 18" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </button>
                    </div>

                    {/* Mobile Search Field */}
                    {isMobile && (
                        <div className="mb-6">
                            <SearchField />
                        </div>
                    )}

                    {/* Browse Category in Panel */}
                    <div className="mb-6">
                        <h3 className="text-lg font-medium mb-3">Categories</h3>
                        <div className="">
                            <BrowseCategory />
                        </div>
                    </div>

                    {/* Header Icons in Panel */}
                    <div className="mb-6">
                        <h3 className="text-lg font-medium mb-3">Quick Links</h3>
                        <div className="">
                        <SearchField />
                        </div>
                    </div>

                    {/* Account Buttons in Panel */}
                    <div className="mb-6">
                        <h3 className="text-lg font-medium mb-3">My Account</h3>
                        <div className="">
                            <MyAccount />
                        </div>
                    </div>
                </div>
            </div>

            {/* Overlay when panel is open */}
            {isRightPanelOpen && (
                <div 
                    className="fixed inset-0 bg-black bg-opacity-50 z-40"
                    onClick={toggleRightPanel}
                ></div>
            )}
        </>
    );
};

export default Header;