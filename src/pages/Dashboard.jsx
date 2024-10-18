import React, { useState, useEffect } from 'react';
import Sidebar from '../components/core/dashboard/Sidebar';
import { Outlet } from 'react-router-dom';
import { push as Menu } from 'react-burger-menu';


export default function Dashboard() {
  const [isMobile, setIsMobile] = useState(false);

  // Detect screen size changes
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Set threshold for mobile
    };

    // Initialize the value
    handleResize();

    // Add event listener for resizing
    window.addEventListener('resize', handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="relative flex min-h-[calc(100vh-3.5rem)]">
      
      {/* Render hamburger menu only on mobile */}
      {isMobile ? (
        <Menu>
          <Sidebar />
        </Menu>
      ) : (
        <Sidebar />  // Render normal sidebar for larger screens
      )}

      {/* Main content area */}
      <div className="h-[calc(100vh-3.5rem)] flex-1 overflow-auto">
        <div className="mx-auto w-11/12 max-w-[1000px] py-10">
          <Outlet /> {/* Render nested routes */}
        </div>
      </div>
    </div>
  );
}
