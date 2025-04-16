// src/app/signup/page.tsx
'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import axios from '../lib/axios';

export default function SignUp() {
  const router = useRouter();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [role, setRole] = useState('student'); // Default role

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    if (!agreeTerms) {
      setError('You must agree to the Terms and Privacy Policies');
      return;
    }

    setIsLoading(true);
    setError('');
    
    try {
      const registrationData = {
        username: email,
        password: password,
        confirmPassword: confirmPassword,
        name: name,
        role: role,
        instructorDetailDTO: role === 'instructor' ? {
          createdBy: email,
          createdOn: new Date().toISOString(),
          lastModifiedBy: email,
          lastModifiedOn: new Date().toISOString(),
          instructorDetailId: 0,
          idUser: "",
          myProperty: 1,
          videoLevelEditing: 1,
          customerSharing: 1,
          typeCourse: 1,
          categoryId: 0
        } : null
      };

      const response = await axios.post('/api/Account/register', registrationData);
      
      // If registration is successful, redirect to login
      router.push('/login');
    } catch (err: any) {
      setError(err.response?.data?.message || 'Registration failed');
    } finally {
      setIsLoading(false);
    }
  };

  const handleSocialSignUp = (provider: string) => {
    setError(`${provider} sign up is not yet integrated.`);
  };

  return (
    <div className="flex items-center justify-center px-4 md:px-8">
      <div className="flex container mx-auto md:py-[80px] py-[40px] justify-center items-center bg-white overflow-hidden">
        {/* Left Side - Form */}
        <div className="w-full lg:w-1/2 md:p-8 p-2">
          <h1 className="xl:text-[72px] lg:text-[52px] md:text-[42px] text-[26px] font-semibold mb-2 font-inter">Sign Up</h1>
          <p className="text-gray-500 mb-6 font-inter lg:text-[22px] md:text-[20px] text-[18px] font-light">
            Let's get you all set up so you can access your personal account
          </p>

          {error && (
            <div className="bg-red-100 text-red-600 p-3 rounded mb-4">{error}</div>
          )}

          <form className="font-inter " onSubmit={handleSignUp}>
            <div className='flex flex-wrap gap-x-4 md:gap-y-2 gap-y-1'>
            <div className="mb-6 md:w-[48%] w-[100%]">
              <label htmlFor="name" className="text-base font-medium text-black block mb-2">
                Name
              </label>
              <input
                id="name"
                type="text"
                className="w-full border-2 border-black rounded-lg p-4 py-3 text-lg"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>

            <div className="mb-6 md:w-[48%] w-[100%]">
              <label htmlFor="email" className="text-base font-medium text-black block mb-2">
                Email Address
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

            <div className="mb-6 md:w-[48%] w-[100%]">
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

            <div className="mb-6 md:w-[48%] w-[100%]">
              <label htmlFor="confirmPassword" className="text-base font-medium font-inter text-black block mb-2">
                Confirm Password
              </label>
              <div className="relative">
                <input
                  id="confirmPassword"
                  type={showConfirmPassword ? 'text' : 'password'}
                  className="w-full border-2 border-black rounded-lg p-4 py-3 pr-12 text-lg"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                />
                <button
                  type="button"
                  className="absolute cursor-pointer right-3 top-1/2 transform -translate-y-1/2 text-xl"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                >
                  {showConfirmPassword ? '🙈' : '👁️'}
                </button>
              </div>
            </div>
            </div>
            <div className="mb-6">
  <label className="text-base font-medium text-black block mb-2">
    I am a:
  </label>
  <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
    <button
      type="button"
      className={`flex flex-col items-center justify-center p-4 border-2 rounded-lg transition-all ${
        role === 'student'
          ? 'border-[#3DB765] bg-[#3DB76510] text-[#3DB765]'
          : 'border-black-300 hover:border-black-400'
      }`}
      onClick={() => setRole('student')}
    >
      <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-2 ${
        role === 'student' ? 'bg-[#3DB765] text-white' : 'bg-gray-100'
      }`}>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      </div>
      <span className="font-medium">Student</span>
      <span className="text-[14px] text-black mt-1">Learn on the platform</span>
      <input
        type="radio"
        name="role"
        value="student"
        checked={role === 'student'}
        onChange={() => setRole('student')}
        className="hidden"
      />
    </button>
    
    <button
      type="button"
      className={`flex flex-col items-center justify-center p-4 border-2 rounded-lg transition-all ${
        role === 'instructor'
          ? 'border-[#3DB765] bg-[#3DB76510] text-[#3DB765]'
          : 'border-black-300 hover:border-black-400'
      }`}
      onClick={() => setRole('instructor')}
    >
      <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-2 ${
        role === 'instructor' ? 'bg-[#3DB765] text-white' : 'bg-gray-100'
      }`}>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
        </svg>
      </div>
      <span className="font-medium">Instructor</span>
      <span className="text-xs text-black-500 mt-1">Create and teach courses</span>
      <input
        type="radio"
        name="role"
        value="instructor"
        checked={role === 'instructor'}
        onChange={() => setRole('instructor')}
        className="hidden"
      />
    </button>
  </div>
</div>

            <div className="flex items-center mb-6">
              <input
                type="checkbox"
                id="agreeTerms"
                checked={agreeTerms}
                onChange={(e) => setAgreeTerms(e.target.checked)}
                className="mr-2"
                required
              />
              <label htmlFor="agreeTerms" className="text-[16px]">
                I agree to all the <Link href="/terms" className="text-[#ff0004]">Terms</Link> and <Link href="/privacy" className="text-[#ff0004]">Privacy Policies</Link>
              </label>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-[#3DB765] text-white py-3 md:text-[24px] text-[18px] cursor-pointer font-bold hover:bg-black transition"
            >
              {isLoading ? 'Creating Account...' : 'Create Account'}
            </button>
          </form>

          <div className="mt-6 text-center md:text-[20px] text-[16px] font-inter font-medium">
            Already have an account? <Link href="/login" className="text-[#3DB765] font-medium">Login</Link>
          </div>

          <div className="flex items-center my-10">
            <div className="flex-grow border-t" />
            <span className="mx-3 font-inter font-semibold md:text-[20px] text-[16px] text-sm">Or sign up with</span>
            <div className="flex-grow border-t" />
          </div>

          <div className="flex justify-center gap-4">
            {['facebook', 'google', 'apple'].map((provider) => (
              <button
                key={provider}
                onClick={() => handleSocialSignUp(provider)}
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
            src="/images/signup-illustration.png"
            alt="Sign Up Illustration"
            width={650}
            height={650}
          />
        </div>
      </div>
    </div>
  );
}