import React from "react";
import AdminHeader from "../components/AdminHeader";
import Footer from "../../components/Footer";
import AdminSidebar from "../components/AdminSidebar";

const AdminCareer = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <AdminHeader />

      <div className="flex flex-1">
        <AdminSidebar />

        <main className="w-3/4 p-6">
          <h1 className="text-2xl font-bold mb-6 text-center">Careers</h1>

          {/* Tabs */}
          <div className="flex justify-center space-x-6 border-b pb-2 mb-6">
            <button className="text-blue-600 font-semibold border-b-2 border-blue-600">
              Job Post
            </button>
            <button className="text-gray-600 hover:text-blue-600">
              View Applicant
            </button>
          </div>

          {/* Search + Add Job */}
          <div className="flex justify-between items-center mb-6">
            <input
              type="text"
              placeholder="Job Title"
              className="border p-2 w-1/2 rounded"
            />
            <button className="ml-4 bg-blue-600 text-white px-4 py-2 rounded">
              Add Job
            </button>
          </div>

          {/* Job Card */}
          <div className="bg-white p-6 shadow rounded border">
            <h3 className="text-xl font-bold mb-2">Job Title</h3>
            <p className="text-gray-600 mb-1">📍 Location</p>
            <p className="mb-1">Job Type: Senior Level</p>
            <p className="mb-1">Salary: 10 lakhs</p>
            <p className="mb-1">Qualification: M-Tech/B-Tech/BCA/MCA</p>
            <p className="mb-1">Experience: 5-7 Years</p>
            <p className="text-gray-700 mt-2">
              Description: Lorem Ipsum is simply dummy text of the printing and
              typesetting industry...
            </p>
            <button className="mt-4 bg-red-600 text-white px-4 py-2 rounded">
              Delete
            </button>
          </div>
        </main>
      </div>

      <Footer />
    </div>
  );
};

export default AdminCareer;
