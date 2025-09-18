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

        <main className="w-3/4 p-6">
          <h1 className="text-2xl font-semibold text-center">All Books</h1>
          <div className="flex justify-center mt-4 flex-wrap">
            {/* Example Books (Replace with dynamic data later) */}
            <div className="border p-4 m-2 w-40 text-center">
              <img
                src="http://example.com/book1.jpg"
                alt="The Da Vinci Code"
                className="h-40 mx-auto"
              />
              <h3 className="mt-2">The Da Vinci Code</h3>
            </div>
            <div className="border p-4 m-2 w-40 text-center">
              <img
                src="http://example.com/book2.jpg"
                alt="Book Title"
                className="h-40 mx-auto"
              />
              <h3 className="mt-2">Book Title</h3>
            </div>
            <div className="border p-4 m-2 w-40 text-center">
              <img
                src="http://example.com/book3.jpg"
                alt="Another Book"
                className="h-40 mx-auto"
              />
              <h3 className="mt-2">Another Book</h3>
            </div>
          </div>
        </main>
      </div>

      <Footer />
    </div>
  );
};

export default AdminBook;
