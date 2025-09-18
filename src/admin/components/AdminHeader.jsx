import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPowerOff } from "@fortawesome/free-solid-svg-icons";

const AdminHeader = () => {
  return (
    <>
      <div className="flex justify-between px-20 p-3">
        <div className="flex items-center">
          <img
            src="https://openclipart.org/download/275692/1489798288.svg"
            alt="Admin-Bookstore"
            style={{ width: "50px", height: "50px" }}
          />
          <h1 className="ms-3 font-medium text-2xl">BOOK STORE</h1>
        </div>

        <button className="px-4 py-2 border border-black rounded hover:bg-black hover:text-white">
          <FontAwesomeIcon icon={faPowerOff} className="me-3" />
          Logout
        </button>
      </div>

      <marquee
        behavior=""
        direction="left"
        className="p-3 bg-gray-900 text-white"
      >
        <p>
          Welcome, Admin! You're all set to manage and monitor the system. Let's
          get to Work!
        </p>
      </marquee>
    </>
  );
};

export default AdminHeader;
