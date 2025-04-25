// src/components/Header/MyAccount.tsx
'use client';

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

import axios from "../../lib/axios";

interface Role {
  description: string;
  id: string;
  name: string;
  normalizedName: string;
  concurrencyStamp: string | null;
}

interface InstructorDetails {
  createdBy?: string;
  createdOn?: string;
  lastModifiedBy?: string;
  lastModifiedOn?: string;
  instructorDetailId?: number;
  idUser?: string;
  myProperty?: number;
  videoLevelEditing?: number;
  customerSharing?: number;
  typeCourse?: number;
  categoryId?: number;
}

interface UserProfile {
  id: string;
  email: string;
  completeName: string;
  phone: string | null;
  firstname: string | null;
  lastname: string | null;
  instructorDetails: InstructorDetails | null;
  roles: Role[];
}

type MyAccountProps = { 
  toggleRightPanel?: () => void; 
}; 

// Create custom events for login, logout, and profile update
declare global {
  interface WindowEventMap {
    'app:login': CustomEvent;
    'app:logout': CustomEvent;
    'app:profileUpdate': CustomEvent;
  }
}

// Helper function to create and dispatch custom events
const dispatchLoginEvent = () => {
  const event = new CustomEvent('app:login');
  document.dispatchEvent(event);
};

const dispatchLogoutEvent = () => {
  const event = new CustomEvent('app:logout');
  document.dispatchEvent(event);
};

// New function to dispatch profile update event
const dispatchProfileUpdateEvent = () => {
  const event = new CustomEvent('app:profileUpdate');
  document.dispatchEvent(event);
};

// Export these functions to be used in login/logout/update components
export { dispatchLoginEvent, dispatchLogoutEvent, dispatchProfileUpdateEvent };

const MyAccount = ({ toggleRightPanel }: MyAccountProps) => {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Handle clicks outside the dropdown to close it
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Check authentication status immediately when component mounts
  useEffect(() => {
    // First check local storage directly for immediate UI update
    const token = localStorage.getItem('token');
    if (token) {
      setIsAuthenticated(true);
    }
    
    // Then verify with the server
    checkAuthStatus();
    
    // Set up event listeners for login/logout/update events
    const loginHandler = () => handleLogin();
    const logoutHandler = () => {
      setIsAuthenticated(false);
      setProfile(null);
    };
    const profileUpdateHandler = () => {
      checkAuthStatus(); // Refresh profile data when update event is received
    };
    
    document.addEventListener('app:login', loginHandler);
    document.addEventListener('app:logout', logoutHandler);
    document.addEventListener('app:profileUpdate', profileUpdateHandler);
    
    // Listen for storage changes (for cross-tab synchronization)
    window.addEventListener('storage', handleStorageChange);
    
    return () => {
      document.removeEventListener('app:login', loginHandler);
      document.removeEventListener('app:logout', logoutHandler);
      document.removeEventListener('app:profileUpdate', profileUpdateHandler);
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  const handleLogin = () => {
    setIsAuthenticated(true);
    checkAuthStatus(); // Fetch the profile data
  };

  // Handle storage changes for cross-tab synchronization
  const handleStorageChange = (event: StorageEvent) => {
    if (event.key === 'token') {
      if (event.newValue) {
        setIsAuthenticated(true);
        checkAuthStatus(); // Fetch the profile data
      } else {
        setIsAuthenticated(false);
        setProfile(null);
      }
    }
  };

  const checkAuthStatus = async () => {
    const token = localStorage.getItem('token');
    
    if (!token) {
      setIsAuthenticated(false);
      setIsLoading(false);
      return;
    }

    try {
      const response = await axios.get('/api/Account/MyProfile', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      
      setProfile(response.data);
      setIsAuthenticated(true);
    } catch (err: any) {
      console.error('Auth check error:', err);
      // Handle token expiration
      if (err.response?.status === 401) {
        localStorage.removeItem('token');
        setIsAuthenticated(false);
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleLogout = async (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    try {
      // First close the dropdown to prevent UI issues
      setIsDropdownOpen(false);
      
      // Remove token from localStorage
      localStorage.removeItem('token');
      
      // Dispatch the logout event before state changes
      // This helps prevent potential race conditions
      dispatchLogoutEvent();
      
      // Update the component state
      setIsAuthenticated(false);
      setProfile(null);
      
      // Use a small timeout to ensure state updates have time to process
      // before navigation, preventing potential render conflicts
      setTimeout(() => {
        router.push('/');
      }, 100);
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  // Toggle dropdown when clicking the profile button
  const toggleDropdown = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsDropdownOpen(!isDropdownOpen);
  };

  // Show loader while checking authentication
  if (isLoading) {
    return <div className="w-10 h-10 bg-gray-200 rounded-full animate-pulse"></div>;
  }

  // If user is not authenticated, show login/signup buttons
  if (!isAuthenticated) {
    return ( 
      <div className="flex font-inter gap-3 md:flex-row flex-col"> 
        <Link 
          href="/signup" 
          className="text-[16px] font-normal text-white py-3 px-5 bg-[#3DB765] hover:bg-black transition" 
          onClick={toggleRightPanel} 
        > 
          Create Account 
        </Link> 
        <Link 
          href="/login" 
          className="text-[16px] font-normal text-white py-3 px-5 bg-black hover:bg-[#3DB765] transition" 
          onClick={toggleRightPanel} 
        > 
          Sign In 
        </Link> 
      </div> 
    );
  }

  // If user is authenticated, show profile dropdown
  return (
    <div className="relative" ref={dropdownRef}>
      <button
        className="flex items-center justify-center w-10 h-10 rounded-full bg-[#3DB765] text-white"
        aria-label="User profile"
        onClick={toggleDropdown}
      >
        <div className="flex items-center justify-center w-full h-full rounded-full bg-[#3DB765]">
          <span className="text-lg font-bold uppercase">
            {profile?.firstname ? profile.firstname.charAt(0) : (profile?.completeName?.charAt(0) || "U")}
          </span>
        </div>
      </button>

      {isDropdownOpen && (
        <div className="relative lg:absolute right-0 mt-2 w-full lg:w-80 bg-white border font-inter border-gray-200 shadow-lg z-50">
          <div className="p-4 border-b border-gray-200">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 p-[14px] rounded-full bg-[#3DB765] flex items-center justify-center text-white">
                <span className="text-lg font-bold uppercase">
                  {profile?.firstname ? profile.firstname.charAt(0) : (profile?.completeName?.charAt(0) || "U")}
                </span>
              </div>
              <div>
                <p className="font-medium text-[#3DB765]">{profile?.completeName || "User"}</p>
                <p className="text-sm text-black">{profile?.email || "user@example.com"}</p>
              </div>
            </div>
          </div>

          <nav className="py-2">
            <Link 
              href="/my-learning"
              className="block px-4 py-2 text-black hover:bg-gray-100"
            >
              My learning
            </Link>
            <Link 
              href="/cart"
              className="block px-4 py-2 text-black hover:bg-gray-100"
            >
              My cart
            </Link>
            <Link 
              href="/wishlist"
              className="block px-4 py-2 text-black hover:bg-gray-100"
            >
              Wishlist
            </Link>
           
           
            <Link 
              href="/messages"
              className="block px-4 py-2 text-black hover:bg-gray-100 border-b border-gray-200"
            >
              Messages
            </Link>
            <Link 
              href="/account-settings"
              className="block px-4 py-2 text-black hover:bg-gray-100"
            >
              Account settings
            </Link>
            <Link 
              href="/payment-methods"
              className="block px-4 py-2 text-black hover:bg-gray-100"
            >
              Payment methods
            </Link>
            
           
            <Link 
              href="/purchase-history"
              className="block px-4 py-2 text-black hover:bg-gray-100 border-b border-gray-200"
            >
              Purchase history
            </Link>

            

            <Link 
              href="/profile"
              className="block px-4 py-2 text-black hover:bg-gray-100"
            >
              Public profile
            </Link>
            <Link 
              href="/edit-profile"
              className="block px-4 py-2 text-black hover:bg-gray-100 border-b border-gray-200"
            >
              Edit profile
            </Link>
            <Link 
              href="/help"
              className="block px-4 py-2 text-black hover:bg-gray-100"
            >
              Help and Support
            </Link>
            <button
              className="w-full text-left px-4 py-2 text-black cursor-pointer hover:bg-gray-100"
              onClick={handleLogout}
            >
              Log out
            </button>
          </nav>
        </div>
      )}
    </div>
  );
};

export default MyAccount;