import React, { useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faXmark } from "@fortawesome/free-solid-svg-icons";

const EditProfile = () => {
  const [isOpen, setIsOpen] = useState(false);
  const fileInputRef = useRef(null);

  // Handle file input click
  const handleUploadClick = () => {
    fileInputRef.current.click();
  };

  return (
    <>
      {/* Edit Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="flex items-center px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        <FontAwesomeIcon icon={faPenToSquare} className="mr-2" />
        Edit
      </button>

      {/* Backdrop */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-gray-900/50 z-40"
        ></div>
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-80 bg-white shadow-xl z-50 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex justify-between items-center bg-gray-900 p-4 border-b">
          <h2 className="text-xl text-white">Edit User Profile</h2>
          <button
            onClick={() => setIsOpen(false)}
            className="text-gray-400 hover:text-white"
          >
            <FontAwesomeIcon icon={faXmark} size="lg" />
          </button>
        </div>

        {/* User Image with Yellow Edit Button */}
        <div className="relative flex justify-center mt-10">
          <div className="w-32 h-32 rounded-full bg-white p-1 flex items-center justify-center shadow-lg">
            <img
              src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
              alt="profile"
              className="w-full h-full rounded-full object-cover"
            />
          </div>

          {/* Hidden File Input */}
          <input
            type="file"
            ref={fileInputRef}
            accept="image/*"
            style={{ display: "none" }}
          />

          {/* Edit Upload Button */}
          <button
            onClick={handleUploadClick}
            className="absolute bottom-0 right-28 bg-yellow-500 text-white p-2 rounded-full shadow hover:bg-yellow-600"
          >
            <FontAwesomeIcon icon={faPenToSquare} />
          </button>
        </div>

        {/* Form */}
        <div className="p-4">
          {/* Name */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              className="mt-1 block w-full border border-gray-300 rounded-lg p-2 focus:ring focus:ring-blue-200"
              placeholder="Enter your name"
            />
          </div>

          {/* Password */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              className="mt-1 block w-full border border-gray-300 rounded-lg p-2 focus:ring focus:ring-blue-200"
              placeholder="Enter new password"
            />
          </div>

          {/* Confirm Password */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Confirm Password
            </label>
            <input
              type="password"
              className="mt-1 block w-full border border-gray-300 rounded-lg p-2 focus:ring focus:ring-blue-200"
              placeholder="Confirm new password"
            />
          </div>

          {/* Bio */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700">
              Bio
            </label>
            <textarea
              rows="3"
              className="mt-1 block w-full border border-gray-300 rounded-lg p-2 focus:ring focus:ring-blue-200"
              placeholder="Write a short bio..."
            ></textarea>
          </div>

          {/* Buttons */}
          <div className="flex justify-center">
                <button
                  className="bg-amber-600 rounded text-white p-3 
              hover:bg-white 
              hover:border 
              hover:border-amber-600 
              hover:text-amber-400 ms-4"
                  style={{ width: "85px" }}
                >
                  Reset
                </button>
                <button
                  className="bg-green-600 rounded text-white p-3 
              hover:bg-white 
              hover:border 
              hover:border-green-600 
              hover:text-green-400 ms-4"
                  style={{ width: "85px" }}
                >
                  Submit
                </button>
              </div>
        </div>
      </div>
    </>
  );
};

export default EditProfile;
