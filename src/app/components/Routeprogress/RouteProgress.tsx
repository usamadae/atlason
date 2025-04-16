'use client';

import { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import NProgress from 'nprogress';

import "../../globals.css";



NProgress.configure({ showSpinner: false });

const RouteProgress = () => {
  const pathname = usePathname();
  const previousPath = useRef<string | null>(null);

  useEffect(() => {
    if (previousPath.current !== pathname) {
      NProgress.start();

      // Simulate delay to show progress bar
      const timer = setTimeout(() => {
        NProgress.done();
      }, 300); // Adjust based on your needs

      previousPath.current = pathname;

      return () => clearTimeout(timer);
    }
  }, [pathname]);

  return null;
};

export default RouteProgress;
