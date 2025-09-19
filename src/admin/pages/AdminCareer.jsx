import React, { useState } from "react";
import AdminHeader from "../components/AdminHeader";
import Footer from "../../components/Footer";
import AdminSidebar from "../components/AdminSidebar";

const AdminCareer = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

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
            <button
              className="ml-4 bg-blue-600 text-white px-4 py-2 rounded"
              onClick={() => setIsModalOpen(true)}
            >
              Add Job +
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

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-900/50 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg w-1/3 p-6 relative">
            {/* Header */}
            <div className="flex justify-between items-center border-b pb-2 mb-4">
              <h2 className="text-xl font-semibold">Application form</h2>
              <button
                className="text-gray-600 hover:text-red-600 text-2xl font-bold"
                onClick={() => setIsModalOpen(false)}
              >
                ✕
              </button>
            </div>

            {/* Form */}
            <form className="space-y-3">
              <input
                type="text"
                placeholder="Job Title"
                className="border p-2 w-full rounded"
              />
              <input
                type="text"
                placeholder="Location"
                className="border p-2 w-full rounded"
              />
              <input
                type="text"
                placeholder="Job Type"
                className="border p-2 w-full rounded"
              />
              <input
                type="text"
                placeholder="Salary"
                className="border p-2 w-full rounded"
              />
              <input
                type="text"
                placeholder="Qualification"
                className="border p-2 w-full rounded"
              />
              <input
                type="text"
                placeholder="Experience"
                className="border p-2 w-full rounded"
              />
              <textarea
                placeholder="Description"
                className="border p-2 w-full rounded h-20"
              ></textarea>

              {/* Buttons */}
              <div className="flex justify-between mt-4">
                <button
                  type="reset"
                  className="bg-orange-500 text-white px-4 py-2 rounded"
                >
                  Reset
                </button>
                <button
                  type="submit"
                  className="bg-green-600 text-white px-4 py-2 rounded"
                >
                  Add
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminCareer;
