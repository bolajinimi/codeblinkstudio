import  { useState } from "react";
import emailjs from "@emailjs/browser";

export default function Courses() {
  const [isModalOpen, setIsModalOpen] = useState(false);
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

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    // Send the application details to your email
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
                alert("Application submitted successfully! Check your email for confirmation.");
                handleCloseModal();
              },
              (error) => {
                console.error("Error sending thank-you email:", error);
                alert("Application submitted, but there was an issue sending the confirmation email.");
              }
            );
        },
        (error) => {
          console.error("Error sending admin email:", error);
          alert("There was an error. Please try again.");
        }
      );
  };
  

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     emailjs
//       .send(
//         "service_tbpzjbh", // Replace with your Email.js service ID
//         "template_ltgcypk", // Replace with your Email.js template ID
//         {
//             name: formData.name, // User's name to personalize the email
//             email: formData.email, // User's email
//           },
//         "PkTRIyzo8Hi5LniUC" // Replace with your Email.js public key
//       )
//       .then(
//         (result) => {
//             console.log("EmailJS response:", result);
//           alert("Application submitted successfully!");
//           handleCloseModal();
//         },
//         (error) => {
//           alert("There was an error. Please try again.");
//           console.error(error);
//         }
//       );
//   };

  const courses = [
    {
      title: "Frontend Development",
      tools: ["HTML", "CSS", "JavaScript", "React"],
      price: "$300",
    },
    {
      title: "UI/UX Design",
      tools: ["Figma", "Adobe XD", "Sketch"],
      price: "$250",
    },
    {
      title: "Backend Development",
      tools: ["Node.js", "Express", "MongoDB"],
      price: "$350",
    },
    {
      title: "Data Analysis",
      tools: ["Python", "Pandas", "NumPy", "Tableau"],
      price: "$400",
    },
  ];

  return (
    <div className="p-6 space-y-8">
      <h1 className="text-3xl font-bold text-center">Our Courses</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {courses.map((course, index) => (
          <div
            key={index}
            className="p-4 border rounded-lg shadow-md hover:shadow-lg"
          >
            <h2 className="text-xl font-bold mb-2">{course.title}</h2>
            <ul className="mb-4">
              {course.tools.map((tool, i) => (
                <li key={i} className="text-gray-600">
                  - {tool}
                </li>
              ))}
            </ul>
            <p className="text-lg font-bold mb-4">{course.price}</p>
            <button
              onClick={() => handleOpenModal(course.title)}
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              Apply Now
            </button>
          </div>
        ))}
      </div>

      {/* Modal */}
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
    </div>
  );
}
