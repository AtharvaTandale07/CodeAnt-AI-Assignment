import React from 'react';
import { LogOut, BookText, Phone, ChevronDown } from 'lucide-react';
import { TbHome } from "react-icons/tb";
import { BsCodeSlash } from "react-icons/bs";
import { IoIosCloudOutline } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";
import svgIconUrl from '../assets/CodeAntAIIcon.svg';
const Sidebar = ({ classname, isMobileMenuOpen }) => {
    const navArray = [
        "AI Code Review",
        "Cloud Security",
        "How to Use",
        "Settings",
        "Support",
        "Logout"
    ];

    const navIconArray = [
        <BsCodeSlash className="w-6 h-5" />,
        <IoIosCloudOutline className="w-6 h-5" />,
        <BookText className="w-6 h-5 outline-none" />,
        <IoSettingsOutline className="w-6 h-5" />,
        <Phone className="w-6 h-5" />,
        <LogOut className="w-6 h-5" />
    ];

    return (
        <div className={`bg-white h-full ${classname}`}>
            <div className="p-4 border-gray-200">
                <div className="hidden sm:flex items-center space-x-2">
                    <img src={svgIconUrl}/>
                    <span className="text-2xl">CodeAnt AI</span>
                </div>
            </div>
            
            <nav className="px-4 space-y-2">
                <div className="flex items-center justify-between border-2 border-gray-300 rounded-md p-2 font-semibold mb-4 drop-shadow-lg">
                    {!isMobileMenuOpen ? <span className="text-sm text-gray-600">UtkarshDhairyaPa...</span>:<span className="text-sm text-gray-600">UtkarshDhairyaPanwar</span>}
                    <ChevronDown />
                </div>
                
                <button className="w-full flex items-center space-x-3 px-3 py-2 font-medium bg-white text-black md:bg-[#2773DE] md:text-white rounded-md">
                    <TbHome className="w-6 h-5" />
                    <span>Repositories</span>
                </button>
                
                {navArray.map((item, key) => (
                    <button 
                        key={item} 
                        className="w-full flex items-center space-x-3 px-3 py-2 font-semibold text-gray-700 hover:bg-gray-100 rounded-md"
                    >
                        {navIconArray[key]}
                        <span>{item}</span>
                    </button>
                ))}
            </nav>

            {/* Footer items now only show on desktop */}
            <div className="hidden md:block absolute bottom-0 w-full p-4 space-y-2">
                <button className="w-full flex items-center space-x-3 px-3 py-2 font-semibold text-gray-700 hover:bg-gray-100 rounded-md">
                    <Phone className="w-6 h-5" />
                    <span>Security</span>
                </button>
                <button className="w-full flex items-center space-x-3 px-3 py-2 font-semibold text-gray-700 hover:bg-gray-100 rounded-md">
                    <LogOut className="w-6 h-5" />
                    <span>Logout</span>
                </button>
            </div>
        </div>
    );
};

export default Sidebar;
