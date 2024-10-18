import React from "react";
import * as VscIcons from "react-icons/vsc";
import * as CiIcons from "react-icons/ci";
import * as FaIcons from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

export default function SidebarLink({ link }) {
  const location = useLocation(); // Get the current route location

  const getIconComponent = () => {
    switch (link.library) {
      case "vsc":
        return VscIcons[link.icon];
      case "ci":
        return CiIcons[link.icon];
      case "fa":
        return FaIcons[link.icon];
      default:
        return null;
    }
  };

  const IconComponent = getIconComponent();

  
  const isActive = location.pathname === link.path;

  return (
    <Link
      to={link.path}
      className={`flex items-center p-3 space-x-3 text-gray-500 transition-colors duration-300 hover:text-blue-600 hover:bg-gray-100 rounded-md ${
        isActive ? "bg-blue-100 text-gray-800 font-semibold" : ""
      }`}
    >
      {IconComponent && <IconComponent size={20} />}
      <span className="ml-3">{link.name}</span>
    </Link>
  );
}
