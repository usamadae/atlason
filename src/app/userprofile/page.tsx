'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import axios from '../lib/axios';
import UserProfileCourseSlider from "../components/UserProfileCourseSlider/UserProfileCourseSlider"; 

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

export default function UserProfile() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  
  // Form state
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    fullName: '',
    title: '',
    language: 'English'
  });

  useEffect(() => {
    fetchProfileData();
  }, []);

  const fetchProfileData = async () => {
    const token = localStorage.getItem('token');
    
    if (!token) {
      router.push('/login');
      return;
    }

    setIsLoading(true);
    try {
      const response = await axios.get('/api/Account/MyProfile', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      setProfile(response.data);
      
      // Initialize form data with profile data
      setFormData({
        username: response.data.completeName?.split(' ')[0] || '',
        email: response.data.email || '',
        password: '123456', // For display only
        fullName: response.data.completeName || '',
        title: response.data.roles?.[0]?.name || '',
        language: 'English'
      });
    } catch (err: any) {
      console.error('Profile fetch error:', err);
      setError(err.response?.data?.message || 'Failed to load profile');
      
      // If token is invalid or expired, redirect to login
      if (err.response?.status === 401) {
        localStorage.removeItem('token');
        router.push('/login');
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSave = async () => {
    const token = localStorage.getItem('token');
    if (!token || !profile) return;

    setIsSaving(true);
    setError('');
    setSuccess('');
    
    try {
      // Prepare the data for the API
      const updateData = {
        id: profile.id,
        email: formData.email,
        completeName: formData.fullName,
        phone: profile.phone,
        firstname: formData.fullName.split(' ')[0],
        lastname: formData.fullName.split(' ').slice(1).join(' ') || null,
        instructorDetails: profile.instructorDetails,
        roles: profile.roles
      };
      
      await axios.post('/api/Account/updateUser', updateData, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      });
      
      setSuccess('Profile updated successfully');
      
      // Reload profile data to show updated information
      fetchProfileData();
    } catch (err: any) {
      console.error('Update error:', err);
      setError(err.response?.data?.message || 'Failed to update profile');
    } finally {
      setIsSaving(false);
    }
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="text-2xl">Loading profile...</div>
      </div>
    );
  }

  if (error && !profile) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="text-red-500 text-xl">{error}</div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-[80px]">
      {/* User Profile Header */}
      <div className="mb-6">
     <h2 className="xl:text-[52px] lg:text-[42px] md:text-[32px] text-[26px] font-bold font-inter inline-block">
     User <span className="text-[#3DB765] relative">Profile
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

      {success && (
        <div className="bg-green-100 text-green-700 p-3 rounded mb-4">{success}</div>
      )}

      {error && (
        <div className="bg-red-100 text-red-600 p-3 rounded mb-4">{error}</div>
      )}

      {/* Profile Information */}
      <div className="flex flex-col md:flex-row md:gap-6 gap-0 items-center mb-12">
        <div className="w-70 h-70">
          <Image 
            src="/images/userplaceholder.jpg" 
            alt="Profile Picture" 
            width={500} 
            height={500}
            className="rounded-md object-cover"
          />
        </div>
        <div className="flex-1">
          <h2 className="xl:text-[72px] md:text-[52px] text-[24px] md:text-left text-center font-inter capitalize font-bold mb-1">{profile?.completeName || 'Alaston Parker'}</h2>
          <p className="text-black font-inter font-semibold md:text-left text-center text-[18px] mb-4 text-sm">
            {profile?.roles?.[0]?.description || "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."}
          </p>
          <p className="text-[#3DB765] font-inter font-semibold md:text-left text-center text-[18px] mb-4">{profile?.email || 'Alaston@gmail.com'}</p>
          
          <div className="border-2 border-dashed rounded-md p-4 flex justify-center items-center bg-gray-50 max-w-md">
            <div className="flex flex-col items-center">
              <div className="w-8 h-8 text-[#3DB765] mb-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Purchase History/Courses */}
      <div className="mb-12">
       
        <h2 className="xl:text-[52px] lg:text-[42px] md:text-[32px] text-[26px] font-bold font-inter inline-block">
        Purchase <span className="text-[#3DB765] relative">      History/Courses
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
                    <UserProfileCourseSlider/>
     
      </div>

      {/* Account Details - Editable Form */}
      <div className='md:px-0 px-2'>

        <h2 className="xl:text-[52px] lg:text-[42px] md:text-[32px] text-[26px] font-bold font-inter inline-block">
        Account <span className="text-[#3DB765] relative">   Details
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
        <div className="grid grid-cols-1 md:grid-cols-2 mt-10 gap-y-4 max-w-3xl">
          <div>
            <label className="block font-medium mb-1">Username</label>
          </div>
          <div className="bg-gray-50 p-2">
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleInputChange}
              className="w-full bg-gray-50 outline-none"
              placeholder="Username"
              disabled
            />
          </div>
          
          <div>
            <label className="block font-medium mb-1">Email</label>
          </div>
          <div className="bg-gray-50 p-2">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full bg-gray-50 outline-none"
              placeholder="Email"
            />
          </div>
          
          <div>
            <label className="block font-medium mb-1">Password</label>
          </div>
          <div className="bg-gray-50 p-2">
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              className="w-full bg-gray-50 outline-none"
              placeholder="Password"
              disabled
            />
          </div>
          
          <div>
            <label className="block font-medium mb-1">Full Name</label>
          </div>
          <div className="bg-gray-50 p-2">
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleInputChange}
              className="w-full bg-gray-50 outline-none"
              placeholder="Full Name"
            />
          </div>
          
          <div>
            <label className="block font-medium mb-1">Title</label>
          </div>
          <div className="bg-gray-50 p-2">
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleInputChange}
              className="w-full bg-gray-50 outline-none"
              placeholder="Title"
              disabled
            />
          </div>
          
          <div>
            <label className="block font-medium mb-1">Language</label>
          </div>
          <div className="bg-gray-50 p-2">
            <input
              type="text"
              name="language"
              value={formData.language}
              onChange={handleInputChange}
              className="w-full bg-gray-50 outline-none"
              placeholder="Language"
            />
          </div>
        </div>
        
        <div className="mt-8 flex justify-center">
          <button 
            onClick={handleSave}
            disabled={isSaving}
            className="bg-black text-white px-8 py-2 text-sm rounded hover:bg-gray-800 transition"
          >
            {isSaving ? 'Saving...' : 'Save'}
          </button>
        </div>
      </div>
    </div>
  );
}