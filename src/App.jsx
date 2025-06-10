import { Header, MainContent } from "./components/Header";  
import { Sidebar } from "./components/SideBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
 
import {Employees} from "./components/employees";
import { SignUpPage } from "./components/SignUpPage";
import Home from "./components/Home";

export default function App() {
  // State to manage the sidebar's open/closed state on mobile
  const [isSidebarOpen, setSidebarOpen] = useState(false);
    const [logs, setLogs] = useState([]);
  const [status, setStatus] = useState("idle");
  const [showLogs, setShowLogs] = useState(false);

 
  // Function to toggle the sidebar state
  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    // The main container for the application
    <div className="relative min-h-screen bg-gray-100 font-sans">
      {/* The Sidebar component */}
      <Sidebar isSidebarOpen={isSidebarOpen} />

      {/* Overlay for mobile view when sidebar is open */}
      {isSidebarOpen && (
        <div
          onClick={toggleSidebar}
          className="md:hidden fixed inset-0 bg-black opacity-50 z-30"
          aria-hidden="true"
        ></div>
      )}

      {/* Main content area, which includes the header and the page content */}
      {/* The left margin (ml-0 or ml-64) adapts based on screen size */}
      <div className="flex flex-col flex-1 md:ml-64 transition-margin duration-300 ease-in-out">
        <Header onMenuToggle={toggleSidebar} isSidebarOpen={isSidebarOpen} />

        {/* Removed commented-out MainContent */}
        {/* <MainContent /> */}

        {/* BrowserRouter and Routes should ideally wrap the components that use routing,
            but placing it directly here is also syntactically valid in React 18+ */}
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            
            <Route path="/signup" element={<SignUpPage />} />
            <Route path="/employee" element={<Employees />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}  