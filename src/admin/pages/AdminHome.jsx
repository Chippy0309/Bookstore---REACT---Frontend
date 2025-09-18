import React from "react";
import AdminHeader from "../components/AdminHeader";
import Footer from "../../components/Footer";
import AdminSidebar from "../components/AdminSidebar";

const AdminHome = () => {
  return (
    <div>
      <AdminHeader />
      <div className="flex">
        <AdminSidebar />
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
