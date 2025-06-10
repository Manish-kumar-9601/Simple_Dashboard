import { useState } from "react";
import { useNavigate } from "react-router-dom";


const navigationItems = [
  { name: 'Home', href: '/', icon: <HomeIcon /> },
  { name: 'Employee', href: '/employee', icon: <FeaturesIcon /> },
  { name: 'Pricing', href: '#', icon: <PricingIcon /> },
  { name: 'About', href: '#', icon: <AboutIcon /> },
];

// --- SVG Icons ---
// Using functional components for SVG icons for reusability and clarity.


function BrandIcon(props) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 21V3m0 0V3m0 0v18m0-18h6.364M12 3H5.636M21 12h-9m0 0H3m9 0v6.364m0-6.364V5.636" />
    </svg>
  );
}

function HomeIcon(props) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" >
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955a1.5 1.5 0 012.122 0l8.954 8.955M3 13.5V21a1.5 1.5 0 001.5 1.5h3.75a1.5 1.5 0 001.5-1.5V16.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75v4.5a1.5 1.5 0 001.5 1.5h3.75a1.5 1.5 0 001.5-1.5V13.5" />
    </svg>
  );
}

function FeaturesIcon(props) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-1.043 1.11-1.226a2.25 2.25 0 012.593 1.226c.09.542.56 1.043 1.11 1.226a2.25 2.25 0 012.593 1.226c.09.542.56 1.043 1.11 1.226a2.25 2.25 0 012.593 1.226c.09.542.56 1.043 1.11 1.226a2.25 2.25 0 010 4.452c-.55.183-1.02.684-1.11 1.226a2.25 2.25 0 01-2.593 1.226c-.55.183-1.02.684-1.11 1.226a2.25 2.25 0 01-2.593 1.226c-.55.183-1.02.684-1.11 1.226a2.25 2.25 0 01-2.593-1.226c-.09-.542-.56-1.043-1.11-1.226a2.25 2.25 0 01-2.593-1.226c-.09-.542-.56-1.043-1.11-1.226a2.25 2.25 0 010-4.452c.55-.183 1.02-.684 1.11-1.226a2.25 2.25 0 012.593-1.226z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  );
}

function PricingIcon(props) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 11.21 12.77 11 12 11s-1.536.21-2.121.782c-1.172.879-1.172 2.303 0 3.182z" />
    </svg>
  );
}

function AboutIcon(props) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );
}


// --- Components ---

/**
 * Sidebar component containing the brand logo, navigation links, and footer.
 * @param {object} props - Component props.
 * @param {boolean} props.isSidebarOpen - Controls the visibility of the sidebar on mobile.
 */
export function Sidebar({ isSidebarOpen }) {
 
  return (
    // The sidebar itself. It's fixed on large screens, and uses a transform to slide in/out on mobile.
    <aside className={`absolute top-0 left-0 z-40 w-64 h-screen bg-white shadow-xl transition-transform duration-300 ease-in-out lg:translate-x-0 ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
      <div className="flex flex-col h-full">
        {/* Sidebar Header with Logo */}
        <div className="flex items-center justify-center h-20 border-b">
          <a href="/" className="flex items-center space-x-2 text-indigo-600">
            <BrandIcon className="h-8 w-8" />
            <span className="text-2xl font-bold text-gray-800">Infinity</span>
          </a>
        </div>
        
        {/* Navigation Links */}
        <nav className="flex-grow px-4 py-6">
          <ul className="space-y-2">
            {navigationItems.map((item) => (
              <li key={item.name}>
                <a  href={item.href} className="flex items-center p-3 text-gray-600 rounded-lg hover:bg-indigo-50 hover:text-indigo-600 transition-colors duration-200">
                  <div className="w-6 h-6">{item.icon}</div>
                  <span className="ml-4 font-medium">{item.name}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
        
        {/* Sidebar Footer */}
        <div className="p-4 border-t  sm:block lg:hidden md:hidden ">
          <a href="#" className="w-full bg-indigo-600 hover:bg-indigo-700 text-white text-center px-4 py-2.5 rounded-lg text-sm font-medium shadow-md transition-transform transform hover:scale-105 block">
            Sign Up
          </a>
           <a href="#" className="w-full text-center mt-2 text-gray-600 hover:text-indigo-600 text-sm font-medium block py-2">
            Log In
          </a>
        </div>
      </div>
    </aside>
  );
}