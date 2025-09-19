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
          <h1 className="text-2xl font-bold mb-6 text-center">Settings</h1>

          <div className="flex justify-between">
            {/* Left Info */}
            <div className="w-1/2 pr-6 text-gray-700">
              <p className="mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Praesent sit amet quam a sapien volutpat fringilla...
              </p>
              <p>
                More placeholder content here to match the layout from the
                reference image...
              </p>
            </div>

            {/* Right Form */}
            <div className="w-1/2 bg-blue-50 p-6 rounded-lg shadow">
              <div className="flex justify-center mb-4">
                <div className="relative">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
                    alt="profile"
                    className="w-20 h-20 rounded-full border"
                  />
                  <label className="absolute bottom-0 right-0 bg-blue-600 text-white rounded-full p-1 cursor-pointer text-xs">
                    ✎
                    <input type="file" className="hidden" />
                  </label>
                </div>
              </div>

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
                <button className="bg-yellow-500 text-white px-4 py-2 rounded">
                  Reset
                </button>
                <button className="bg-green-600 text-white px-4 py-2 rounded">
                  Update
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>

      <Footer />
    </div>
  );
};

export default AdminSetting;
