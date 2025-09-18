import React, { useState } from "react";
import Footer from "../../components/Footer";
import Header from "../components/Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck, faSquarePlus } from "@fortawesome/free-solid-svg-icons";
import EditProfile from "../components/EditProfile";

const Profile = () => {
  const [sellStatus, setSellStatus] = useState(true);
  const [soldHistoryStatus, setSoldHistoryStatus] = useState(false);
  const [purchaseStatus, setPurchaseStatus] = useState(false);

  return (
    <>
      <Header />

      {/* Header background */}
      <div className="bg-gray-900 h-48 w-full relative"></div>

      {/* Profile image overlapping header */}
      <div className="relative w-full flex justify-start">
        <div className="w-50 h-50 rounded-full bg-white p-1 -mt-20 ml-16 flex items-center justify-center shadow-lg">
          <img
            src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
            alt="profile"
            className="w-full h-full rounded-full object-cover"
          />
        </div>
      </div>

      {/* Name with verified icon & Edit button */}
      <div className="flex items-center justify-between px-20 mt-4 mb-4">
        {/* Left Side */}
        <div className="flex items-center space-x-2">
          <span className="text-3xl">Lakshmi Priya</span>
          <FontAwesomeIcon
            icon={faCircleCheck}
            className="text-blue-500 text-xl"
          />
        </div>
        {/* Right Side */}
        <EditProfile />
      </div>

      <p className="md:px-20 px-5 my-5 text-justify">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. In, magnam
        porro! Earum soluta, nisi minima, voluptate ea exercitationem rem qui
        autem minus ex itaque necessitatibus vero ipsum obcaecati fugit quidem.
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus rem cum
        inventore cumque ab molestias autem sequi illum laborum. Vitae nemo,
        aspernatur molestiae placeat delectus fuga! Quaerat libero voluptatibus
        nesciunt! Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        Veniam cupiditate assumenda, molestiae dicta maiores voluptate
        blanditiis dolorum recusandae id explicabo modi quisquam velit nihil
        voluptatibus eligendi fuga. Aspernatur, voluptas fuga.
      </p>

      <div>
        {/* Tabs */}
        <div className="flex justify-center items-center my-5 space-x-2">
          <p
            onClick={() => {
              setSellStatus(true);
              setSoldHistoryStatus(false);
              setPurchaseStatus(false);
            }}
            className={`p-4 cursor-pointer ${
              sellStatus
                ? "text-blue-600 border-t border-r border-l border-gray-200 rounded-t"
                : "text-black border-b border-gray-200"
            }`}
          >
            Sell Book
          </p>
          <p
            onClick={() => {
              setSellStatus(false);
              setSoldHistoryStatus(true);
              setPurchaseStatus(false);
            }}
            className={`p-4 cursor-pointer ${
              soldHistoryStatus
                ? "text-blue-600 border-t border-r border-l border-gray-200 rounded-t"
                : "text-black border-b border-gray-200"
            }`}
          >
            Sold History
          </p>
          <p
            onClick={() => {
              setSellStatus(false);
              setSoldHistoryStatus(false);
              setPurchaseStatus(true);
            }}
            className={`p-4 cursor-pointer ${
              purchaseStatus
                ? "text-blue-600 border-t border-r border-l border-gray-200 rounded-t"
                : "text-black border-b border-gray-200"
            }`}
          >
            Purchase History
          </p>
        </div>

        <div className="mt-10 p-10">
          {/* Content */}
          {sellStatus && (
            <div className="bg-gray-200 p-5 rounded">
              <h1 className="text-center text-3xl font-medium">Book Details</h1>
              <div className="md:grid grid-cols-2 mt-5 w-full">
                {/* Left Side */}
                <div className="p-5">
                  <div className="mb-3">
                    <input
                      type="text"
                      placeholder="Title"
                      className="p-2 bg-white rounded placeholder-gray-300 w-full"
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      type="text"
                      placeholder="Author"
                      className="p-2 bg-white rounded placeholder-gray-300 w-full"
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      type="text"
                      placeholder="No.of Pages"
                      className="p-2 bg-white rounded placeholder-gray-300 w-full"
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      type="text"
                      placeholder="Image URL"
                      className="p-2 bg-white rounded placeholder-gray-300 w-full"
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      type="text"
                      placeholder="Price"
                      className="p-2 bg-white rounded placeholder-gray-300 w-full"
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      type="text"
                      placeholder="Discount Price"
                      className="p-2 bg-white rounded placeholder-gray-300 w-full"
                    />
                  </div>
                  <div className="mb-3">
                    <textarea
                      placeholder="Abstract"
                      className="p-2 bg-white rounded placeholder-gray-300 w-full"
                    ></textarea>
                  </div>
                </div>

                {/* Right Side */}
                <div className="p-5">
                  <div className="mb-3">
                    <input
                      type="text"
                      placeholder="Publisher"
                      className="p-2 bg-white rounded placeholder-gray-300 w-full"
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      type="text"
                      placeholder="Language"
                      className="p-2 bg-white rounded placeholder-gray-300 w-full"
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      type="text"
                      placeholder="ISBN"
                      className="p-2 bg-white rounded placeholder-gray-300 w-full"
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      type="text"
                      placeholder="Category"
                      className="p-2 bg-white rounded placeholder-gray-300 w-full"
                    />
                  </div>
                  <div className="mb-3 flex justify-center items-center w-full mt-10">
                    <label htmlFor="imageFile">
                      <input
                        type="file"
                        id="imageFile"
                        style={{ display: "none" }}
                      />
                      <img
                        src="https://www.pngplay.com/wp-content/uploads/8/Upload-Icon-Logo-PNG-Photos.png"
                        alt="No Image"
                        style={{ width: "150px", height: "150px" }}
                      />
                    </label>
                  </div>

                  {/* Preview with Plus Icon */}
                  <div className="mb-3 flex justify-center items-center space-x-3">
                    <div
                      className="flex justify-center items-center rounded shadow bg-white"
                      style={{ width: "70px", height: "90px" }}
                    >
                      <img
                        src="https://img.freepik.com/free-vector/minimalist-book-cover-template_23-2148899519.jpg"
                        alt="No Image"
                        className="object-contain max-w-full max-h-full"
                      />
                    </div>

                    <FontAwesomeIcon
                      icon={faSquarePlus}
                      className="text-gray-600 text-2xl cursor-pointer hover:text-blue-700"
                    />
                  </div>
                </div>
              </div>

              <div className="flex justify-end">
                <button
                  className="bg-amber-600 rounded text-black p-3 
              hover:bg-white 
              hover:border 
              hover:border-amber-600 
              hover:text-amber-400 ms-4"
                  style={{ width: "85px" }}
                >
                  Reset
                </button>
                <button
                  className="bg-green-600 rounded text-black p-3 
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
          )}

          {soldHistoryStatus && (
            <div className="p-10 my-2 shadow rounded">
              {/* Sold History with Content */}
              <div className="bg-gray-200 p-4 rounded">
                <div className="md:grid grid-cols-[3fr_1fr]">
                  <div>
                    <h1>Dracula</h1>
                    <h2>Bram Stoker</h2>
                    <h3 className="text-blue-400">$13</h3>
                    <p>
                      "Dracula" by Bram Stoker is a Gothic horror novel written
                      in the late 19th century. The story unfolds through a
                      series of letters, journal entries, and newspaper
                      clippings, primarily following the experiences of Jonathan
                      Harker, a young English solicitor. Harker’s journey takes
                      him to Transylvania, where he encounters the enigmatic
                      Count Dracula, setting a thrilling and mysterious tone
                      that delves into themes of fear, seduction, and the
                      supernatural.
                    </p>
                    <div className="flex">
                      <img
                        src="https://psdstamps.com/wp-content/uploads/2022/04/round-pending-stamp-png.png"
                        alt="no image"
                        style={{ height: "100px", width: "125px" }}
                      />
                      <img
                        src="https://toppng.com/uploads/thumbnail/round-approved-green-postage-stamp-11642625401zu7k8uejjp.png"
                        alt="no image"
                        style={{ height: "100px", width: "125px" }}
                      />
                      <img
                        src="https://png.pngtree.com/png-vector/20230910/ourmid/pngtree-used-sold-stamp-complete-png-image_9241111.png"
                        alt="no image"
                        style={{ height: "100px", width: "125px" }}
                      />
                    </div>
                  </div>

                  <div className="p-5">
                    <img
                      src="https://m.media-amazon.com/images/I/71E4H-r1swL._UF1000,1000_QL80_.jpg"
                      alt="no image"
                      className="w-full"
                      style={{ height: "300px" }}
                    />
                    <div className="flex justify-end mt-4">
                      <button className="p-2 rounded bg-red-600 text-white hover:bg-gray-200 hover:text-red-600 hover:border hover:border-red-600">
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex justify-center items-center flex-col text-red-600 text-2xl">
                <img
                  src="https://i.pinimg.com/originals/b4/13/34/b41334a036d6796c281a6e5cbb36e4b5.gif"
                  alt="No Book"
                  style={{ width: "200px", height: "200px" }}
                />
                <p>No Book Added Yet</p>
              </div>
            </div>
          )}

          {purchaseStatus && (
            <div className="p-10 my-2 shadow rounded">
              {/* Purchase History with Content */}
              <div className="bg-gray-200 p-4 rounded">
                <div className="md:grid grid-cols-[3fr_1fr]">
                  <div>
                    <h1>Dracula</h1>
                    <h2>Bram Stoker</h2>
                    <h3 className="text-blue-400">$13</h3>
                    <p>
                      "Dracula" by Bram Stoker is a Gothic horror novel written
                      in the late 19th century. The story unfolds through a
                      series of letters, journal entries, and newspaper
                      clippings, primarily following the experiences of Jonathan
                      Harker, a young English solicitor. Harker’s journey takes
                      him to Transylvania, where he encounters the enigmatic
                      Count Dracula, setting a thrilling and mysterious tone
                      that delves into themes of fear, seduction, and the
                      supernatural.
                    </p>
                    <div className="flex">
                      <img
                        src="https://psdstamps.com/wp-content/uploads/2022/04/round-pending-stamp-png.png"
                        alt="no image"
                        style={{ height: "100px", width: "125px" }}
                      />
                      <img
                        src="https://toppng.com/uploads/thumbnail/round-approved-green-postage-stamp-11642625401zu7k8uejjp.png"
                        alt="no image"
                        style={{ height: "100px", width: "125px" }}
                      />
                      <img
                        src="https://png.pngtree.com/png-vector/20230910/ourmid/pngtree-used-sold-stamp-complete-png-image_9241111.png"
                        alt="no image"
                        style={{ height: "100px", width: "125px" }}
                      />
                    </div>
                  </div>

                  <div className="p-5">
                    <img
                      src="https://m.media-amazon.com/images/I/71E4H-r1swL._UF1000,1000_QL80_.jpg"
                      alt="no image"
                      className="w-full"
                      style={{ height: "300px" }}
                    />
                    <div className="flex justify-end mt-4">
                      <button className="p-2 rounded bg-red-600 text-white hover:bg-gray-200 hover:text-red-600 hover:border hover:border-red-600">
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex justify-center items-center flex-col text-red-600 text-2xl">
                <img
                  src="https://i.pinimg.com/originals/b4/13/34/b41334a036d6796c281a6e5cbb36e4b5.gif"
                  alt="No Book"
                  style={{ width: "200px", height: "200px" }}
                />
                <p>No Book Added Yet</p>
              </div>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Profile;
