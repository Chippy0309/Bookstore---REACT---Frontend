import React, { useState } from "react";
import Header from "../users/components/Header";
import Footer from "../components/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt, faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent!"); // Replace with API call later
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <>
      <Header />
      <div className="px-6 md:px-50 py-12 bg-gray-50">
        {/* Title */}
        <h1 className="text-4xl font-bold text-center mb-4">Contact Us</h1>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eu magna
          massa. Sed malesuada ante vitae nunc consequat, ut dignissim orci
          gravida.
        </p>

        {/* Contact Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center mb-12">
          <div className="flex flex-col items-center bg-white shadow-md rounded-lg p-6">
            <FontAwesomeIcon icon={faMapMarkerAlt} className="text-blue-600 text-3xl mb-3" />
            <p className="font-semibold">Address</p>
            <p className="text-gray-600">123 Street, Palarivattom, Kochi</p>
          </div>
          <div className="flex flex-col items-center bg-white shadow-md rounded-lg p-6">
            <FontAwesomeIcon icon={faPhone} className="text-blue-600 text-3xl mb-3" />
            <p className="font-semibold">Phone</p>
            <p className="text-gray-600">+91 9876543210</p>
          </div>
          <div className="flex flex-col items-center bg-white shadow-md rounded-lg p-6">
            <FontAwesomeIcon icon={faEnvelope} className="text-blue-600 text-3xl mb-3" />
            <p className="font-semibold">Email</p>
            <p className="text-gray-600">info@bookstore.com</p>
          </div>
        </div>

        {/* Form + Map Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Form Section */}
          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Send a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <textarea
                name="message"
                placeholder="Message"
                required
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 h-32 resize-none"
              ></textarea>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
              >
                Send
              </button>
            </form>
          </div>

          {/* Map Section */}
          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Location</h2>
            <iframe
              src="https://maps.google.com/maps?q=Kochi&t=&z=13&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="350"
              className="rounded-md"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              title="Location Map"
            ></iframe>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ContactUs;
