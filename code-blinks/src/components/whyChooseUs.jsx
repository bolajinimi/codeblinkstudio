import { FaChalkboardTeacher, FaCreditCard, FaBook, FaBriefcase } from "react-icons/fa";

export default function WhyChooseUs() {
  const features = [
    {
      title: "Personalized Mentorship",
      description:
        "Gain hands-on guidance from mentors who review your code, provide feedback, and support your journey to success.",
      icon: <FaChalkboardTeacher size={40} className="text-purple-600" />,
    },
    {
      title: "Flexible Payment Plans",
      description:
        "Choose a payment option that works for you: pay in two installments or complete the full payment upfront. The final payment is due a month after the training has started.",
      icon: <FaCreditCard size={40} className="text-green-600" />,
    },
    {
      title: "Premium Learning Materials",
      description:
        "Access high-quality courses, videos, and study resources. Engage in live classes and interactive practice sessions.",
      icon: <FaBook size={40} className="text-blue-600" />,
    },
    {
      title: "Career & Professional Growth",
      description:
        "Master agile principles and methodologies, equipping you with skills to excel as a professional full-stack developer.",
      icon: <FaBriefcase size={40} className="text-yellow-600" />,
    },
  ];

  return (
    <div className="p-6 bg-gray-100 space-y-8">
      <h1 className="text-4xl font-bold text-center text-purple-700 mb-8">
        Why We’re the Best Choice for You
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300"
          >
            
            <div className="mb-4">{feature.icon}</div>
            <h2 className="text-xl font-bold mb-2 text-gray-800">
              {feature.title}
            </h2>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
