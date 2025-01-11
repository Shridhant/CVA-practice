import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Button from "./Button";
import { Lock } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Login({ isOpen, onClose }: LoginModalProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
        >
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 50, opacity: 0 }}
            transition={{ type: "spring", duration: 0.5 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-white text-black border border-gray-200 rounded-2xl max-w-md w-full mx-auto p-8 shadow-xl"
          >
            <div className="flex justify-between items-center mb-6">
              <button
                onClick={onClose}
                className="text-gray-600 hover:text-gray-800"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
              <div className="flex justify-center items-center gap-3">
                <Lock className="w-6 h-6 text-black" />
                <h2 className="text-2xl font-bold text-center flex-grow">
                  Sign in
                </h2>
              </div>

              <div className="w-6"></div>
            </div>
            <form className="space-y-6">
              <div>
                <input
                  type="text"
                  placeholder="Phone, email, or username"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#1d9bf0] focus:border-transparent"
                />
              </div>
              <div>
                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#1d9bf0] focus:border-transparent"
                />
              </div>
              <Button
                onClick={() => {
                  navigate("/feed");
                }}
                className="w-full bg-blue-500 text-white rounded-full py-1 px-4 font-bold hover:bg-blue-500 transition duration-200"
              >
                Sign up
              </Button>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
