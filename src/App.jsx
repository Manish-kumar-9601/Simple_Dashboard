import { Header } from "./components/Header";
import { BrowserRouter, Routes, Route, useNavigate, redirect } from "react-router-dom";
import { useContext, useState } from "react";
import { Employees } from "./components/employees";
import { SignUpPage } from "./components/SignUpPage";
import { Sidebar } from "./components/SideBar";
import { HomePage } from './components/HomePage'
import { UserContext } from "./context/UserContext";
export default function App ()
{
  const { isValid } = useContext(UserContext);
  // State to manage the sidebar's open/closed state on mobile
  // const navigate = useNavigate();

  const [isSidebarOpen, setSidebarOpen] = useState(false);
  if (localStorage.getItem('isValid') === 'true')
  {
    // If the user is valid, set the sidebar to open
    // navigate('/signup');

    redirect('/signup');
  }


  // Function to toggle the sidebar state
  const toggleSidebar = () =>
  {
    setSidebarOpen(prevState => !prevState);
    console.log(`Sidebar is now ${isSidebarOpen}`);
  };

  return (
    // The main container for the application
    <div className=" bg-gray-100 font-sans">
      {/* The Sidebar component */}
      <Sidebar isSidebarOpen={isSidebarOpen} />

      {/* Overlay for mobile view when sidebar is open */}
      {isSidebarOpen && (
        <div
          onClick={() => toggleSidebar()}
          className="md:hidden fixed inset-0 bg-black opacity-50 z-30"
          aria-hidden="true"
        ></div>
      )}


      <div className={`flex flex-col   ${isSidebarOpen ? 'ml-64' : ''} transition-margin duration-300 ease-in-out`}>
        <Header onMenuToggle={toggleSidebar} isSidebarOpen={isSidebarOpen} />


        <BrowserRouter>
          <Routes>
            
            <Route path="/" element={isValid ? <HomePage/> :<SignUpPage /> } />

            
            <Route path="/employee" element={<Employees />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}  