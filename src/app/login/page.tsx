// src/app/login/page.tsx
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import axios from '../lib/axios';
import { checkAndRestoreSession } from '../lib/authUtils';

// Import the event dispatcher function
import { dispatchLoginEvent } from '../components/Header/MyAccount';

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [isForgot, setIsForgot] = useState(false);
  const [forgotEmail, setForgotEmail] = useState('');
  const [successMsg, setSuccessMsg] = useState('');

  useEffect(() => {
    // Check for remembered email on component mount
    const rememberedEmail = localStorage.getItem('rememberedEmail');
    if (rememberedEmail) {
      setEmail(rememberedEmail);
      setRememberMe(true);
    }
    
    // Check if user has a valid session
    const isLoggedIn = checkAndRestoreSession();
    if (isLoggedIn) {
      // User is already logged in, redirect to profile
      router.push('/userprofile');
    }
  }, [router]);

  const handleGoogleLogin = () => {
    console.log("API URL:", process.env.NEXT_PUBLIC_API_BASE_URL);
   window.location.href = `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/account/google-signin`;
   
  };
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');
    try {
      const response = await axios.post('/api/Account/login', {
        username: email,
        password
      });
      
      // Store the token in localStorage
      localStorage.setItem('token', response.data.token);
      
      // Handle "Remember Me" functionality
      if (rememberMe) {
        // Store user email in localStorage if "Remember Me" is checked
        localStorage.setItem('rememberedEmail', email);
      } else {
        // Remove stored email if "Remember Me" is unchecked
        localStorage.removeItem('rememberedEmail');
      }
      
      // Important: Dispatch the login event to update the UI immediately
      dispatchLoginEvent();
      
      // Redirect to user profile page
      router.push('/userprofile');
    } catch (err: any) {
      console.error('Login Error:', err);
      setError(err.response?.data?.message || 'Login failed');
    } finally {
      setIsLoading(false);
    }
  };

  const handleForgotPassword = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');
    setSuccessMsg('');
    try {
      await axios.post('/api/Account/forgot-password', { email: forgotEmail });
      setSuccessMsg('Password reset link has been sent to your email.');
    } catch (err: any) {
      setError(err.response?.data?.message || 'Something went wrong.');
    } finally {
      setIsLoading(false);
    }
  };

 const handleSocialLogin = (provider: string) => {
  if (provider === 'google') {
    handleGoogleLogin();
  } else {
    setError(`${provider} login is not yet integrated.`);
  }
};
  return (
    // Your JSX remains the same
    <div className="flex items-center justify-center px-4 md:px-8">
      <div className="flex container mx-auto md:py-[80px] py-[40px] justify-center items-center  bg-white overflow-hidden">
        {/* Left Side - Form */}
        <div className="w-full lg:w-1/2 md:p-8 p-2">
          <h1 className="xl:text-[72px] lg:text-[52px] md:text-[42px] text-[26px] font-semibold mb-2 font-inter ">Login</h1>
          <p className="text-gray-500 mb-6 font-inter lg:text-[22px] md:text-[20px] text-[18px] font-light">Login to access your academuz account</p>

          {error && (
            <div className="bg-red-100 text-red-600 p-3 rounded mb-4">{error}</div>
          )}
          {successMsg && (
            <div className="bg-green-100 text-green-700 p-3 rounded mb-4">{successMsg}</div>
          )}

          {!isForgot ? (
           <form className='font-inter' onSubmit={handleLogin}>
           <div className="mb-6">
             <label htmlFor="email" className="text-base font-medium text-black block mb-2">
               Email
             </label>
             <input
               id="email"
               type="email"
               className="w-full border-2 border-black rounded-lg p-4 py-3 text-lg"
               value={email}
               onChange={(e) => setEmail(e.target.value)}
               required
             />
           </div>
         
           <div className="mb-6">
             <label htmlFor="password" className="text-base font-medium font-inter text-black block mb-2">
               Password
             </label>
             <div className="relative">
               <input
                 id="password"
                 type={showPassword ? 'text' : 'password'}
                 className="w-full border-2 border-black rounded-lg p-4 py-3 pr-12 text-lg"
                 value={password}
                 onChange={(e) => setPassword(e.target.value)}
                 required
               />
               <button
                 type="button"
                 className="absolute cursor-pointer right-3 top-1/2 transform -translate-y-1/2 text-xl"
                 onClick={() => setShowPassword(!showPassword)}
               >
                 {showPassword ? '🙈' : '👁️'}
               </button>
             </div>
           </div>
         
           <div className="flex justify-between items-center mb-6 text-sm">
             <label className="flex items-center md:text-[20px] text-[16px] cursor-pointer font-medium">
               <input
                 type="checkbox"
                 checked={rememberMe}
                 onChange={(e) => setRememberMe(e.target.checked)}
                 className="mr-2"
               />
               Remember me
             </label>
             <button
               type="button"
               className="text-[#ff0004] cursor-pointer md:text-[20px] text-[16px]"
               onClick={() => setIsForgot(true)}
             >
               Forgot Password
             </button>
           </div>
         
           <button
             type="submit"
             disabled={isLoading}
             className="w-full bg-[#3DB765] text-white py-3 md:text-[24px] text-[18px] cursor-pointer font-bold hover:bg-black transition"
           >
             {isLoading ? 'Logging in...' : 'Login'}
           </button>
         </form>
         
          ) : (
            <form onSubmit={handleForgotPassword}>
              <div className="mb-4">
                <label className=" font-medium font-inter text-black block mb-1">Enter your email</label>
                <input
                  type="email"
                  className="w-full border-2 border-black rounded-lg p-4 py-3 pr-12 text-lg"
                  value={forgotEmail}
                  onChange={(e) => setForgotEmail(e.target.value)}
                  required
                />
              </div>
              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-[#3DB765] text-white py-3 md:text-[20px] text-[18px] cursor-pointer
                 font-bold hover:bg-black transition"
              >
                {isLoading ? 'Sending...' : 'Reset Password'}
              </button>
              <button
                type="button"
                className="text-sm mt-4 md:text-left text-center w-full font-inter md:text-[20px] text-[16px] font-semibold cursor-pointer underline"
                onClick={() => setIsForgot(false)}
              >
                Back to Login
              </button>
            </form>
          )}

          <div className="mt-6 text-center md:text-[20px] text-[16px] font-inter font-medium">
            Don't have an account? <Link href="/" className="text-[#3DB765] font-medium">Sign up</Link>
          </div>

          <div className="flex items-center my-10">
            <div className="flex-grow border-t" />
            <span className="mx-3 font-inter font-semibold md:text-[20px] text-[16px] text-sm">Or login with</span>
            <div className="flex-grow border-t" />
          </div>

          <div className="flex justify-center gap-4">
            {['facebook', 'google', 'apple'].map((provider) => (
              <button
                key={provider}
                onClick={() => handleSocialLogin(provider)}
                className="py-3 px-4 cursor-pointer rounded-md transition-transform duration-300 transform hover:-translate-y-2 shadow-lg"
              >
                <Image
                  src={`/icons/${provider}.svg`}
                  alt={provider}
                  width={24}
                  height={24}
                />
              </button>
            ))}
          </div>
        </div>

        {/* Right Side - Illustration */}
        <div className="hidden lg:flex w-1/2 items-center justify-center p-8">
          <Image
            src="/images/login-illustration.png"
            alt="Login Illustration"
            width={650}
            height={650}
          />
        </div>
      </div>
    </div>
  );
}