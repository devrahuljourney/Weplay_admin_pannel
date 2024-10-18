import React, { useState, useEffect } from 'react';
import Sidebar from '../components/core/dashboard/Sidebar';
import { Outlet } from 'react-router-dom';
import { push as Menu } from 'react-burger-menu';

export default function Dashboard() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); 
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="flex min-h-screen"> 
      {isMobile ? (
        <Menu >
          <Sidebar />
        </Menu>
      ) : (
        <Sidebar />
      )}

      <div className={`flex-1 transition-all duration-300 ${isMobile ? 'ml-0' : 'ml-64'}`}>
        <div className="h-full overflow-auto"> 
          <div className="mx-auto w-11/12 max-w-[1000px] py-10">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}
