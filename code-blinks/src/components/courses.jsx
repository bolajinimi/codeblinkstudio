import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import frontend from "../assets/frontend.jpeg";
import uiux from "../assets/ui-ux.jpg";
import backend from "../assets/backend.jpeg";
import data from "../assets/data.jpg";
import emailjs from "@emailjs/browser";
import MakePayment from "./makePayment";

export default function Courses() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    course: "",
  });

  const handleOpenModal = (course) => {
    setFormData({ ...formData, course });
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setFormData({ name: "", email: "", phone: "", course: "" });
  };

  const handlePaymentModalClose = () => {
    setIsPaymentModalOpen(false);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .send(
        "service_tbpzjbh",
        "template_ynjw9ge",
        {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          course: formData.course,
        },
        "PkTRIyzo8Hi5LniUC"
      )
      .then(
        (result) => {
          console.log("Admin email sent successfully:", result);

          // Send a thank-you email to the user
          emailjs
            .send(
              "service_tbpzjbh",
              "template_ltgcypk",
              {
                to_name: formData.name,
                user_email: formData.email,
              },
              "PkTRIyzo8Hi5LniUC"
            )
            .then(
              (result) => {
                console.log("Thank-you email sent successfully:", result);

                // Show success notification
                toast.success("Application submitted successfully! Proceeding to payment...");

                // Close the application modal and open the payment modal
                setIsModalOpen(false);
                setIsPaymentModalOpen(true);
              },
              (error) => {
                console.error("Error sending thank-you email:", error);
                toast.error("Application submitted, but there was an issue sending the confirmation email.");
              }
            );
        },
        (error) => {
          console.error("Error sending admin email:", error);
          toast.error("There was an error. Please try again.");
        }
      );
  };

  const courses = [
    {
      title: "Frontend Development",
      tools: ["HTML", "CSS", "JavaScript", "React"],
      price: "#250,000",
      image: frontend,
      startDate: "January 15, 2024",
    },
    {
      title: "UI/UX Design",
      tools: ["Figma", "Adobe XD", "Sketch"],
      price: "#150,000",
      image: uiux,
      startDate: "February 10, 2024",
    },
    {
      title: "Backend Development",
      tools: ["Node.js", "Express", "MongoDB"],
      price: "#300,000",
      image: backend,
      startDate: "March 5, 2024",
    },
    {
      title: "Data Analysis",
      tools: ["Python", "Pandas", "NumPy", "Tableau"],
      price: "#200,000",
      image: data,
      startDate: "April 20, 2024",
    },
  ];

  return (
    <div className="p-6 space-y-8">
      <h1 className="text-3xl font-bold text-center">Our Courses</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {courses.map((course, index) => (
          <div
            key={index}
            className="relative p-4 bg-white border rounded-lg shadow-md hover:shadow-xl transform hover:scale-105 transition duration-300 ease-in-out"
          >
            <img
              src={course.image}
              alt={course.title}
              className="w-full h-60 object-cover rounded-t-lg mb-4"
            />
            <h2 className="text-xl font-bold mb-2">{course.title}</h2>
            <p className="text-sm text-gray-500 mb-2">
              Start Date: <span className="font-semibold">{course.startDate}</span>
            </p>
            <ul className="mb-4 space-y-1">
              {course.tools.map((tool, i) => (
                <li key={i} className="text-gray-600">
                  - {tool}
                </li>
              ))}
            </ul>
            <p className="text-lg font-bold text-gray-800 mb-4">{course.price}</p>
            <button
              onClick={() => handleOpenModal(course.title)}
              className="px-4 py-2 bg-[#8909AF] text-white rounded hover:bg-blue-600 transition duration-300"
            >
              Apply Now
            </button>
          </div>
        ))}
      </div>

      {/* Toastify Container */}
      <ToastContainer position="top-right" autoClose={3000} />

      {/* Application Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-80">
            <h2 className="text-2xl font-bold mb-4">Apply for {formData.course}</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded"
                required
              />
              <input
                type="tel"
                name="phone"
                placeholder="Your Phone Number"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded"
                required
              />
              <button
                type="submit"
                className="w-full px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
              >
                Submit
              </button>
            </form>
            <button
              onClick={handleCloseModal}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
            >
              &times;
            </button>
          </div>
        </div>
      )}

      {/* Payment Modal */}
      {isPaymentModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-80">
            <MakePayment {...formData} onClose={handlePaymentModalClose} />
          </div>
        </div>
      )}
    </div>
  );
}
