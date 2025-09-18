import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

const AdminSidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigation = (e) => {
    navigate(e.target.value);
  };

  return (
    <div className="w-1/4 bg-gray-100 border-r border-gray-300 p-6 min-h-screen flex flex-col items-center">
      {/* Profile Image */}
      <div className="w-32 h-32 rounded-full bg-white p-1 flex items-center justify-center shadow-lg">
        <img
          src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
          alt="profile"
          className="w-full h-full rounded-full object-cover"
        />
      </div>

      {/* Username */}
      <h2 className="text-lg font-semibold mt-4">Admin Username</h2>

      {/* Navigation (centered) */}
      <div className="mt-8 space-y-4 w-full flex flex-col items-center">
        <label className="flex items-center">
          <input
            type="radio"
            name="adminPage"
            value="/admin-home"
            onChange={handleNavigation}
            checked={location.pathname === "/admin-home"}
            className="mr-2"
          />
          Home
        </label>

        <label className="flex items-center">
          <input
            type="radio"
            name="adminPage"
            value="/admin-books"
            onChange={handleNavigation}
            checked={location.pathname === "/admin-books"}
            className="mr-2"
          />
          All Books
        </label>

        <label className="flex items-center">
          <input
            type="radio"
            name="adminPage"
            value="/admin-careers"
            onChange={handleNavigation}
            checked={location.pathname === "/admin-careers"}
            className="mr-2"
          />
          Careers
        </label>

        <label className="flex items-center">
          <input
            type="radio"
            name="adminPage"
            value="/admin-setting"
            onChange={handleNavigation}
            checked={location.pathname === "/admin-setting"}
            className="mr-2"
          />
          Settings
        </label>
      </div>
    </div>
  );
};

export default AdminSidebar;
