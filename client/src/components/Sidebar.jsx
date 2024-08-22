import { useState } from "react";
import { RiArrowLeftSFill } from "react-icons/ri";
import { Link, useLocation } from "react-router-dom";
import logoMTM from "../assets/MTMLogo.png";
import { sidebarData } from "../assets/data";

const Sidebar = ({ onToggle }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const location = useLocation();

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
    onToggle(!isCollapsed); // Mengirimkan status sidebar ke AdminLayout
  };

  return (
    <div
      className={`fixed top-0 left-0 h-screen bg-white transition-all duration-500 ease-in-out flex flex-col gap-10 ${
        isCollapsed ? "w-20" : "w-64"
      }`}
    >
      <div
        onClick={toggleSidebar}
        className={`absolute flex items-center justify-center w-10 h-10 top-20 bg-blue-500 rounded-full cursor-pointer transition-all duration-500 ease-in-out ${
          isCollapsed ? "left-16" : "left-60"
        } transform ${isCollapsed ? "rotate-180" : ""}`}
      >
        <RiArrowLeftSFill className="text-2xl text-white" />
      </div>
      <div className="flex items-center justify-center w-full h-20">
        <img
          src={logoMTM}
          alt="logoMTM"
          className={`object-cover transition-all duration-500 ease-in-out ${
            isCollapsed ? "w-20 h-20" : "w-20 h-20"
          }`}
        />
      </div>
      <div className="flex flex-col w-full h-full gap-2 px-5">
        {sidebarData.map((item, index) => (
          <Link
            to={item.path}
            key={index}
            className={`flex items-center h-10 text-sm font-bold rounded-lg cursor-pointer ${
              location.pathname === item.path ? "bg-blue-500 text-white" : ""
            } ${isCollapsed ? "w-fit p-2" : "w-full px-2"}`}
          >
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-gray-500 rounded">{item.icon}</div>
              {!isCollapsed && <p>{item.name}</p>}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
