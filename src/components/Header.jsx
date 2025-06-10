
import { useState } from "react";
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
  return (
    <header className="bg-white shadow-md h-20 flex items-center justify-between px-4 sm:px-6 lg:px-8">
      {/* Mobile Menu Toggle */}
      <button 
        onClick={onMenuToggle}
        className="md:hidden p-2 rounded-md text-gray-500 hover:text-indigo-600 hover:bg-indigo-50 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
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
        <a href="#" className="text-gray-600 hover:text-indigo-600 text-sm font-medium">Log in</a>
        <a href="#" className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-md text-sm font-medium shadow-md transition-transform transform hover:scale-105">
          Sign up
        </a>
      </div>
    </header>
  );
}

/**
 * Main Content Area component.
 * This is where the primary content of the page will be displayed.
 */
export function MainContent() {
  return (
    <main className="flex-1 p-4 sm:p-6 lg:p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-800">Welcome to Your Dashboard</h1>
        <p className="text-gray-600 leading-relaxed mb-8">
          This is the main content area. The sidebar on the left is responsive. On large screens, it's always visible. On smaller screens, you can toggle it using the menu icon in the header. This entire layout is built with React and Tailwind CSS.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md h-64 flex flex-col justify-center items-center">
                <h2 className="text-xl font-semibold text-gray-700 mb-2">Card One</h2>
                <p className="text-gray-500 text-center">Some content for the first card to demonstrate the layout.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md h-64 flex flex-col justify-center items-center">
                <h2 className="text-xl font-semibold text-gray-700 mb-2">Card Two</h2>
                <p className="text-gray-500 text-center">Some content for the second card.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md h-64 flex flex-col justify-center items-center sm:col-span-2">
                <h2 className="text-xl font-semibold text-gray-700 mb-2">Full Width Card</h2>
                <p className="text-gray-500 text-center">This card spans both columns on larger screens.</p>
            </div>
        </div>
      </div>
    </main>
  );
}
