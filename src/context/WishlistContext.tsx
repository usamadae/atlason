"use client"
import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { toast } from 'react-hot-toast';
import axiosInstance from '../app/lib/axios';

interface Course {
  price: any;
  rating: ReactNode;
  id: string;
  title: string;
  image: string;
  description: string;
}

interface WishlistItem {
  wishListId: number;
  userId: string;
  courseId: number;
}

interface WishlistContextType {
  wishlist: Course[];
  isLoading: boolean;
  addToWishlist: (course: Course) => Promise<void>;
  removeFromWishlist: (courseId: string) => Promise<void>;
  isItemInWishlist: (courseId: string) => boolean;
}

const WishlistContext = createContext<WishlistContextType | undefined>(undefined);

export const WishlistProvider = ({ children }: { children: ReactNode }) => {
  const [wishlist, setWishlist] = useState<Course[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [wishlistItems, setWishlistItems] = useState<WishlistItem[]>([]);

  // Fetch user's wishlist on component mount
  useEffect(() => {
    fetchWishlist();
  }, []);

  const fetchWishlist = async () => {
    setIsLoading(true);
    try {
      // Get user ID from localStorage
      const userId = localStorage.getItem('userId');
      
      if (!userId) {
        setIsLoading(false);
        return;
      }

      // Fetch all wishlist items for this user
      const response = await axiosInstance.get(`/api/WishList/GetAllByIdStudent/${userId}`);
      
      if (response.data && Array.isArray(response.data)) {
        setWishlistItems(response.data);
        
        // For each wishlist item, fetch course details if needed
        const coursePromises = response.data.map(async (item: WishlistItem) => {
          // You might need to fetch course details if the API doesn't return them directly
          const courseResponse = await axiosInstance.get(`/api/Courses/${item.courseId}`);
          return courseResponse.data;
        });
        
        const courses = await Promise.all(coursePromises);
        setWishlist(courses);
      }
    } catch (error) {
      console.error('Failed to fetch wishlist:', error);
      toast.error('Failed to load wishlist items');
    } finally {
      setIsLoading(false);
    }
  };

  const isItemInWishlist = (courseId: string): boolean => {
    const courseIdNum = parseInt(courseId, 10);
    return wishlistItems.some(item => item.courseId === courseIdNum);
  };

  const addToWishlist = async (course: Course) => {
    try {
      const userId = localStorage.getItem('UserId');
      const UserName = localStorage.getItem('UserName');
      
      
      if (!userId) {
        toast.error('You need to log in to add items to your wishlist');
        return;
      }

      const courseId = parseInt(course.id, 10);
      if (isNaN(courseId)) {
        toast.error('Invalid course information');
        return;
      }

      // Check if already in wishlist
      if (isItemInWishlist(course.id)) {
        toast('This course is already in your wishlist');
        return;
      }

      // Create new wishlist item
      const response = await axiosInstance.post('/api/WishList/CreateWishList', {
        userId: userId,
        courseId: courseId,
        createdBy: UserName,
        createdOn: new Date().toISOString(),
        lastModifiedBy: UserName,
        lastModifiedOn: new Date().toISOString(),
        wishListId: 0  // Backend will assign the actual ID
      });

      if (response.status === 200 || response.status === 201) {
        // Update local state with the new course
        setWishlist(prev => [...prev, course]);
        
        // Update wishlist items with the new item
        if (response.data) {
          setWishlistItems(prev => [...prev, response.data]);
        }
        
        toast.success('Added to wishlist successfully');
      }
    } catch (error) {
      console.error('Failed to add to wishlist:', error);
      toast.error('Failed to add to wishlist');
    }
  };

  const removeFromWishlist = async (courseId: string) => {
    try {
      // Find the wishlist item for this course
      const courseIdNum = parseInt(courseId, 10);
      const itemToRemove = wishlistItems.find(item => item.courseId === courseIdNum);
      
      if (!itemToRemove) {
        toast.error('Course not found in wishlist');
        return;
      }

      // Delete the wishlist item
      const response = await axiosInstance.delete(`/api/WishList/DeleteWishList/${itemToRemove.wishListId}`);
      
      if (response.status === 200 || response.status === 204) {
        // Update local state by removing the course
        setWishlist(prev => prev.filter(course => course.id !== courseId));
        
        // Update wishlist items
        setWishlistItems(prev => prev.filter(item => item.wishListId !== itemToRemove.wishListId));
        
        toast.success('Removed from wishlist');
      }
    } catch (error) {
      console.error('Failed to remove from wishlist:', error);
      toast.error('Failed to remove from wishlist');
    }
  };

  return (
    <WishlistContext.Provider value={{ 
      wishlist, 
      isLoading, 
      addToWishlist, 
      removeFromWishlist,
      isItemInWishlist 
    }}>
      {children}
    </WishlistContext.Provider>
  );
};

export const useWishlist = (): WishlistContextType => {
  const context = useContext(WishlistContext);
  if (!context) {
    throw new Error('useWishlist must be used within a WishlistProvider');
  }
  return context;
};