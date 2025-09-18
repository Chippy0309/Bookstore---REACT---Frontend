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
          <h1 className="text-2xl font-semibold">Careers</h1>

          <div className="flex items-center mt-4">
            <input
              type="text"
              placeholder="Job Title"
              className="border p-2 w-1/3"
            />
            <button className="ml-4 bg-blue-500 text-white px-4 py-2 rounded">
              Search
            </button>
          </div>

          <div className="my-6">
            <h2 className="text-xl font-semibold">Job Postings</h2>
            {/* Example job */}
            <div className="border p-4 m-2 rounded shadow">
              <h3 className="font-bold">Job Title</h3>
              <p>Location: XYZ</p>
              <p>Job Type: Senior Level</p>
              <p>Salary: 10 lakhs</p>
              <p>Qualification: M-Tech/B-Tech/BCA/MCA</p>
              <button className="bg-red-500 text-white px-4 py-1 rounded mt-2">
                Delete
              </button>
            </div>
          </div>
        </main>
      </div>

      <Footer />
    </div>
  );
};

export default AdminCareer;
