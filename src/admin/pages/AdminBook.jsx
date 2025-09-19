import React from "react";
import AdminHeader from "../components/AdminHeader";
import Footer from "../../components/Footer";
import AdminSidebar from "../components/AdminSidebar";

const AdminBook = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <AdminHeader />

      <div className="flex flex-1">
        <AdminSidebar />

        <main className="w-3/4 p-6 text-center">
          <h1 className="text-2xl font-bold mb-6">All Books</h1>

          {/* Tabs */}
          <div className="flex justify-center space-x-6 border-b pb-2 mb-6">
            <button className="text-blue-600 font-semibold border-b-2 border-blue-600">
              Book List
            </button>
            <button className="text-gray-600 hover:text-blue-600">
              Users
            </button>
          </div>

          {/* Books */}
          <div className="flex justify-center flex-wrap gap-6">
            <div className="bg-white shadow rounded p-4 w-48">
              <img
                src="https://m.media-amazon.com/images/I/71C0BBpl5aL._UF1000,1000_QL80_.jpg"
                alt="The Da Vinci Code"
                className="h-48 mx-auto rounded"
              />
              <h3 className="mt-2 font-semibold">The Da Vinci Code</h3>
              <span className="text-green-600 font-medium">Approved</span>
            </div>

            <div className="bg-white shadow rounded p-4 w-48">
              <img
                src="https://m.media-amazon.com/images/I/71C0BBpl5aL._UF1000,1000_QL80_.jpg"
                alt="The Da Vinci Code"
                className="h-48 mx-auto rounded"
              />
              <h3 className="mt-2 font-semibold">The Da Vinci Code</h3>
              <span className="text-green-600 font-medium">Approved</span>
            </div>

            <div className="bg-white shadow rounded p-4 w-48">
              <img
                src="https://m.media-amazon.com/images/I/71C0BBpl5aL._UF1000,1000_QL80_.jpg"
                alt="The Da Vinci Code"
                className="h-48 mx-auto rounded opacity-70"
              />
              <h3 className="mt-2 font-semibold">The Da Vinci Code</h3>
              <span className="text-gray-500 font-medium">Pending</span>
            </div>
          </div>
        </main>
      </div>

      <Footer />
    </div>
  );
};

export default AdminBook;
