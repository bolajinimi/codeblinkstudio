import { PaystackButton } from "react-paystack";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// eslint-disable-next-line react/prop-types
export default function MakePayment({ name, email, course, onClose }) {
  const publicKey = import.meta.env.VITE_PAYSTACK_PUBLIC_KEY;

  // Determine the amount based on the selected course
  const amount =
    course === "Frontend Development"
      ? 250000 * 100
      : course === "UI/UX Design"
      ? 150000 * 100
      : course === "Backend Development"
      ? 300000 * 100
      : course === "Data Analysis"
      ? 200000 * 100
      : 0; // Default to 0 if no course matches

  const componentProps = {
    email,
    amount,
    publicKey,
    text: "Pay Now",
    onSuccess: () => {
      toast.success("Payment successful! Check your email for confirmation.");
      onClose(); // Close modal after successful payment
    },
    onClose: () => {
      toast.error("Payment canceled. You can try again.");
      onClose(); // Close modal when the Paystack modal is closed
    },
  };

  return (
    <div className="p-6 space-y-8 bg-gradient-to-r from-purple-500 via-indigo-500 to-blue-500 text-white rounded-lg shadow-lg max-w-lg mx-auto relative">
      <button
        onClick={onClose} // Trigger onClose when the close button is clicked
        className="absolute top-2 right-2 text-white hover:text-gray-300 text-2xl"
      >
        &times;
      </button>
      <h1 className="text-4xl font-extrabold text-center mb-6">Make Payment</h1>
      <div className="text-center">
        <p className="text-xl mb-4">
          Hello <strong className="text-yellow-300">{name}</strong>, you&apos;re about to make a payment for the{" "}
          <strong className="text-yellow-300">{course}</strong> course.
        </p>
        <p className="text-lg mb-6">
          Amount: <span className="font-semibold text-lg text-green-400">₦{amount / 100}</span>
        </p>
        <PaystackButton
          {...componentProps}
          className="px-8 py-3 bg-green-600 text-white rounded-lg shadow-md hover:bg-green-700 transition duration-300"
        />
      </div>
    </div>
  );
}
