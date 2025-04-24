// src/components/AuthChecker.tsx
'use client';

import { useEffect } from 'react';
import { checkAndRestoreSession } from '../../lib/authUtils';

export default function AuthChecker() {
  useEffect(() => {
    // Check for valid token when component mounts
    checkAndRestoreSession();
    
    // You could also set up an interval to periodically check the token
    // This is optional but can help ensure the UI stays in sync
    const checkInterval = setInterval(() => {
      checkAndRestoreSession();
    }, 60000); // Check every minute
    
    return () => clearInterval(checkInterval);
  }, []);

  // This component doesn't render anything visible
  return null;
}