import { FaInstagram, FaWhatsapp, FaEnvelope, FaPhoneAlt } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Logo and Copyright */}
        <div className="flex flex-col items-center md:items-start">
          <h1 className="text-2xl font-bold text-purple-500 mb-4">CodeBlinks</h1>
          <p className="text-gray-400 mb-2">
            Empowering your skills, one step at a time.
          </p>
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} CodeBlinks. All rights reserved.
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col items-center md:items-start">
          <h2 className="text-xl font-semibold mb-4">Quick Links</h2>
          <ul className="space-y-2">
            <li>
              <a href="#contact" className="hover:text-purple-400 transition">
                Contact Us
              </a>
            </li>
            <li>
              <a href="#courses" className="hover:text-purple-400 transition">
                Courses
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-purple-400 transition">
                About Us
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Information */}
        <div className="flex flex-col items-center md:items-start">
          <h2 className="text-xl font-semibold mb-4">Contact Us</h2>
          <ul className="space-y-3">
            <li className="flex items-center space-x-2">
              <FaEnvelope className="text-blue-500" size={20} />
              <span>codeblinkstudio@gmail.com</span>
            </li>
            <li className="flex items-center space-x-2">
              <FaPhoneAlt className="text-green-500" size={20} />
              <span>+2348165987765</span>
            </li>
            <li className="flex items-center space-x-2">
              <FaWhatsapp className="text-green-500" size={20} />
              <a
                href="https://wa.me/2348165987765"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-purple-400 transition"
              >
                WhatsApp
              </a>
            </li>
            <li className="flex items-center space-x-2">
              <FaInstagram className="text-pink-500" size={20} />
              <a
                href="https://www.instagram.com/codeblinkstudio/?igsh=OTFrbmQ4cGJjMTl5&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-purple-400 transition"
              >
                Instagram
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
