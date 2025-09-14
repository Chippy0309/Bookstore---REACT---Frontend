import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../../components/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";

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
              <p className="text-gray-600 mb-2"><strong>Role:</strong> {job.role}</p>
              <p className="text-gray-600 mb-2"><strong>Job Type:</strong> {job.type}</p>
              <p className="text-gray-600 mb-2"><strong>Salary:</strong> {job.salary}</p>
              <p className="text-gray-600 mb-2"><strong>Qualification:</strong> {job.qualification}</p>
              <p className="text-gray-600 mb-4"><strong>Experience:</strong> {job.experience}</p>
              <p className="text-gray-700 text-justify">{job.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Modal */}
      {openModal && selectedJob && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-gray-900/50"
            onClick={closeModal}
          ></div>

          {/* Modal Panel */}
          <div className="relative bg-gray-800 rounded-lg shadow-xl w-full max-w-lg mx-4 p-6 text-white z-50">
            <h2 className="text-xl font-bold mb-4">
              Apply for {selectedJob.title}
            </h2>
            <p className="text-sm text-gray-300 mb-6">
              You are applying for the position of{" "}
              <span className="font-semibold">{selectedJob.role}</span> located
              in {selectedJob.location}.
            </p>

            {/* Example form content */}
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full px-3 py-2 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="w-full px-3 py-2 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <textarea
                placeholder="Why do you think you're a good fit?"
                rows="3"
                className="w-full px-3 py-2 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </form>

            {/* Action Buttons */}
            <div className="flex justify-end gap-3 mt-6">
              <button
                onClick={closeModal}
                className="px-4 py-2 rounded-md bg-gray-600 hover:bg-gray-500"
              >
                Cancel
              </button>
              <button className="px-4 py-2 rounded-md bg-green-600 hover:bg-green-500">
                Submit Application
              </button>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </>
  );
};

export default Careers;
