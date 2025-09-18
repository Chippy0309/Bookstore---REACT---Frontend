import React from "react";
import AdminHeader from "../components/AdminHeader";
import Footer from "../../components/Footer";
import AdminSidebar from "../components/AdminSidebar";

const AdminSetting = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <AdminHeader />

      <div className="flex flex-1">
        <AdminSidebar />

        <main className="w-3/4 p-6">
          <h1 className="text-2xl font-semibold">Settings</h1>
          <div className="mt-6 max-w-md mx-auto">
            <input
              type="text"
              placeholder="Username"
              className="border p-2 w-full mb-4 rounded"
            />
            <input
              type="password"
              placeholder="Password"
              className="border p-2 w-full mb-4 rounded"
            />
            <input
              type="password"
              placeholder="Confirm Password"
              className="border p-2 w-full mb-4 rounded"
            />
            <div className="flex justify-between mt-4">
              <button className="bg-red-500 text-white px-4 py-2 rounded">
                Reset
              </button>
              <button className="bg-blue-500 text-white px-4 py-2 rounded">
                Update
              </button>
            </div>
          </div>
        </main>
      </div>

      <Footer />
    </div>
  );
};

export default AdminSetting;
