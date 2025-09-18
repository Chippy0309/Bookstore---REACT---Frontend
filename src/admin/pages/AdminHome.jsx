import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import AdminHeader from "../components/AdminHeader";
import Footer from "../../components/Footer";

const AdminHome = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigation = (e) => {
    navigate(e.target.value);
  };

  return (
    <div>
      {/* Admin Header */}
      <AdminHeader />

      <div className="flex">
        {/* Sidebar */}
        <div className="w-1/4 bg-gray-200 p-4 min-h-screen">
          <h2 className="text-xl font-semibold">Navigate</h2>
          <div className="mt-4 space-y-2">
            <label className="block">
              <input
                type="radio"
                name="adminPage"
                value="/admin-home"
                checked={location.pathname === "/admin-home"}
                onChange={handleNavigation}
                className="mr-2"
              />
              Home
            </label>

            <label className="block">
              <input
                type="radio"
                name="adminPage"
                value="/admin-books"
                checked={location.pathname === "/admin-books"}
                onChange={handleNavigation}
                className="mr-2"
              />
              All Books
            </label>

            <label className="block">
              <input
                type="radio"
                name="adminPage"
                value="/admin-careers"
                checked={location.pathname === "/admin-careers"}
                onChange={handleNavigation}
                className="mr-2"
              />
              Careers
            </label>

            <label className="block">
              <input
                type="radio"
                name="adminPage"
                value="/admin-settings"
                checked={location.pathname === "/admin-settings"}
                onChange={handleNavigation}
                className="mr-2"
              />
              Settings
            </label>
          </div>
        </div>

        {/* Main content */}
        <div className="w-3/4 p-6 text-center">
          <h1 className="text-2xl font-bold">Admin Home</h1>
          <p className="mt-4 text-gray-700">
            Welcome, Admin! You're all set to manage and monitor the system. Let's get to work!
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default AdminHome;
