import { useContext } from "react";
import { UserContext } from "../context/UserContext";

function MenuIcon(props) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
    </svg>
  );
}

function CloseIcon(props) {
    return (
        <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
    );
}


export function Header({ onMenuToggle, isSidebarOpen }) {
  const { isValid } = useContext(UserContext);
  return (
    <header className="bg-white w-full shadow-md h-20 flex items-center justify-between px-4 sm:px-6 lg:px-8">
      {/* Mobile Menu Toggle */}
      <button 
        onClick={()=>onMenuToggle()}
        className="p-2 rounded-md text-gray-500 hover:text-indigo-600 hover:bg-indigo-50 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
        aria-label="Toggle menu"
      >
        {isSidebarOpen ? <CloseIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
      </button>

      {/* Placeholder for search or other header content */}
      <div className="flex-1 text-center md:text-left">
          <h1 className="text-xl font-semibold text-gray-800">Dashboard</h1>
      </div>

      {/* Desktop Action Buttons */}
      <div className="hidden md:flex items-center space-x-4">
       
      { isValid && <a href="/ " className="bg-red-500 hover:bg-red-700 text-white px-4 py-2 rounded-md text-sm font-medium shadow-md transition-transform transform hover:scale-105">
          LogOut
        </a>}
      </div>
    </header>
  );
}


