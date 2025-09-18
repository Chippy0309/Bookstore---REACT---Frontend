import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

const AdminSidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigation = (e) => {
    navigate(e.target.value);
  };

  return (
    <div className="w-1/4 bg-gray-100 border-r border-gray-300 p-6">
      <h2 className="text-lg font-semibold mb-4">Admin Panel</h2>
      <div className="space-y-3">
        <label className="block">
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
        <label className="block">
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
        <label className="block">
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
        <label className="block">
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
