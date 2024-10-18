import React from 'react';
import { sidebarLinks } from '../../../data/dashboard-links';
import SidebarLink from './SidebarLink';

export default function Sidebar() {
  return (
    <div className="bg-gray-800 text-white w-64 h-screen fixed">  {/* Sidebar container */}
      <div className="flex flex-col p-5 space-y-4">
        
        {
          sidebarLinks.map((link) => {
            return <SidebarLink key={link.id} link={link} />;
          })
        }
      </div>
    </div>
  );
}
