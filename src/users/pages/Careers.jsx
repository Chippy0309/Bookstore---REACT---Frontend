import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../../components/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt, faXmark } from "@fortawesome/free-solid-svg-icons";

const Careers = () => {
  const [openModal, setOpenModal] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);

  const jobs = [
    {
      title: "Frontend Developer",
      role: "React Developer",
      type: "Full-time",
      salary: "₹6-8 LPA",
      qualification: "B.Tech / MCA",
      experience: "2+ years",
      location: "Remote",
      description:
        "We are seeking a creative frontend developer skilled in ReactJS to help build engaging and responsive user interfaces for our online bookstore platform. Experience with TailwindCSS and Redux is a plus.",
    },
    {
      title: "Backend Developer",
      role: "Node.js Engineer",
      type: "Full-time",
      salary: "₹7-10 LPA",
      qualification: "B.Tech / MCA",
      experience: "3+ years",
      location: "Bangalore, India",
      description:
        "Join our backend engineering team to design and scale APIs for our bookstore ecosystem. Candidates with experience in Node.js, Express, and MongoDB are encouraged to apply.",
    },
    {
      title: "UI/UX Designer",
      role: "Product Designer",
      type: "Contract",
      salary: "₹4-6 LPA",
      qualification: "Any Graduate / Diploma in Design",
      experience: "2+ years",
      location: "Kochi, India",
      description:
        "We are looking for a passionate UI/UX designer who can create visually appealing and user-friendly experiences. Proficiency in Figma or Adobe XD with a strong design portfolio is required.",
    },
  ];

  const handleApplyClick = (job) => {
    setSelectedJob(job);
    setOpenModal(true);
  };

  const closeModal = () => {
    setOpenModal(false);
    setSelectedJob(null);
  };

  return (
    <>
      <Header />

      {/* Careers Title */}
      <section className="text-center py-10">
        <h1 className="text-5xl font-bold mb-8">Careers</h1>
        <p className="mx-auto text-gray-700 leading-relaxed text-lg text-justify flex-col md:px-40 mt-10">
          At Book Store, we believe in creating a workplace where innovation,
          collaboration, and passion thrive together. Our mission is not just to
          bring knowledge closer to people but also to nurture a culture where
          ideas are valued, and every individual contributes to a shared vision.
          Joining our team means becoming part of a dynamic environment that
          encourages growth, continuous learning, and opportunities to make a
          real impact. We’re not just about selling books—we’re about shaping
          the future of how people discover, connect with, and experience
          knowledge. Whether you are a creative thinker, a problem solver, or
          someone passionate about technology and education, there’s a place for
          you here. We’re committed to empowering our employees, offering them
          the right resources, mentorship, and space to excel in their careers.
          Be part of a journey where your skills are celebrated, your
          aspirations are supported, and your contributions truly matter.
          Explore our current opportunities below and take the first step
          towards building a rewarding future with us.
        </p>
      </section>

      {/* Current Openings */}
      <section className="flex-col mx-auto md:px-40 py-10">
        <h2 className="text-3xl mb-6 text-left">Current Openings</h2>

        {/* Search Bar with Button */}
        <div className="flex justify-center mb-12 flex-col md:flex-row gap-3">
          <input
            type="text"
            placeholder="Search for jobs..."
            className="border border-gray-300 rounded-lg px-4 py-2 w-full md:w-2/3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition w-full md:w-auto">
            Search
          </button>
        </div>

        {/* Job Cards */}
        <div className="space-y-8">
          {jobs.map((job, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg p-8 hover:shadow-lg transition relative"
            >
              {/* Apply Now Button */}
              <button
                onClick={() => handleApplyClick(job)}
                className="absolute top-6 right-6 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition"
              >
                Apply Now
              </button>

              <h3 className="text-2xl font-semibold mb-4">{job.title}</h3>

              {/* Gradient Line */}
              <div className="h-1 w-full bg-gradient-to-r from-gray-300 via-gray-200 to-white rounded-full mb-6"></div>

              <p className="text-gray-600 mb-4 flex items-center">
                <FontAwesomeIcon
                  icon={faMapMarkerAlt}
                  className="text-blue-600 mr-2"
                />
                {job.location}
              </p>
              <p className="text-gray-600 mb-2">
                <strong>Role:</strong> {job.role}
              </p>
              <p className="text-gray-600 mb-2">
                <strong>Job Type:</strong> {job.type}
              </p>
              <p className="text-gray-600 mb-2">
                <strong>Salary:</strong> {job.salary}
              </p>
              <p className="text-gray-600 mb-2">
                <strong>Qualification:</strong> {job.qualification}
              </p>
              <p className="text-gray-600 mb-4">
                <strong>Experience:</strong> {job.experience}
              </p>
              <p className="text-gray-700 text-justify">{job.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Modal */}
      {openModal && selectedJob && (
        <div
          className="relative z-50"
          aria-labelledby="modal-title"
          role="dialog"
          aria-modal="true"
        >
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-gray-500/75 transition-opacity"
            onClick={closeModal}
          ></div>

          {/* Modal Content */}
          <div className="fixed inset-0 z-50 w-screen overflow-y-auto">
            <div className="flex md:min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                {/* Title */}
                <div className="bg-gray-900 p-4 flex justify-between sm:px-6">
                  <h1 className="text-white text-2xl">Application Form</h1>
                  <FontAwesomeIcon
                    icon={faXmark}
                    className="text-white fa-2x cursor-pointer"
                    onClick={closeModal}
                  />
                </div>

                {/* Body */}
                <div className="bg-white px-4 pt-3 pb-4 sm:p-6 sm:pb-4">
                  <div className="grid grid-cols-2">
                    <div className="p-3">
                      <div className="mb-3">
                        <input
                          type="text"
                          placeholder="Full Name"
                          className="p-2 border border-gray-400 rounded w-full"
                        />
                      </div>
                      <div className="mb-3">
                        <input
                          type="text"
                          placeholder="Email Id"
                          className="p-2 border border-gray-400 rounded w-full"
                        />
                      </div>
                    </div>

                    <div className="p-3">
                      <div className="mb-3">
                        <input
                          type="text"
                          placeholder="Qualification"
                          className="p-2 border border-gray-400 rounded w-full"
                        />
                      </div>
                      <div className="mb-3">
                        <input
                          type="text"
                          placeholder="Phone"
                          className="p-2 border border-gray-400 rounded w-full"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="mb-3 px-3 w-full">
                    <textarea
                      placeholder="Cover Letter"
                      className="p-2 border border-gray-400 rounded w-full"
                    ></textarea>
                  </div>
                  <div className="mb-3 px-3 w-full">
                    <p className="text-gray-600 text-sm mb-1">Resume</p>
                    <input
                      type="file"
                      id="fileInput"
                      className="border border-gray-400 rounded w-full file:bg-gray-400 file:p-2 file:text-white"
                    />
                  </div>
                </div>

                {/* Footer */}
                <div className="bg-gray-200 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                  <button
                    type="button"
                    className="inline-flex w-full justify-center rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white hover:bg-green-700 sm:ml-3 sm:w-auto"
                  >
                    Submit
                  </button>
                  <button
                    type="button"
                    className="mt-3 inline-flex w-full justify-center rounded-md bg-orange-500 px-3 py-2 text-sm font-semibold text-white hover:bg-orange-600 sm:mt-0 sm:w-auto"
                  >
                    Reset
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </>
  );
};

export default Careers;
