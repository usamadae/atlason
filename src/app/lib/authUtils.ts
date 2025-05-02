// src/lib/authUtils.ts
import { dispatchLoginEvent } from '../components/Header/MyAccount';

export const checkAndRestoreSession = () => {
  try {
    // Check if there's a token in localStorage
    const token = localStorage.getItem('token');
    
    if (!token) {
      return false;
    }
    
    // If token exists, consider the user logged in
    // In a production app, you would ideally validate this token
    dispatchLoginEvent();
    return true;
  } catch (error) {
    console.error('Session restoration error:', error);
    return false;
  }
};

export const logout = () => {
  // Clear token and other auth-related data
  // localStorage.removeItem('token');
  
  // You can keep the remembered email if you want
  // localStorage.removeItem('rememberedEmail');
  
  // Dispatch an event to update UI components
  document.dispatchEvent(new CustomEvent('userLoggedOut'));
  
  // Redirect to login page
  window.location.href = '/login';
};