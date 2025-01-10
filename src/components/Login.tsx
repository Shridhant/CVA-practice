import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Login({ isOpen, onClose }: LoginModalProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
            className="bg-black border border-gray-700 rounded-2xl max-w-md w-full mx-auto p-8"
          >
            <div className="flex justify-between items-center mb-6">
              <button
                onClick={onClose}
                className="text-gray-500 hover:text-gray-400"
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
              <h2 className="text-2xl font-bold">Sign in</h2>
              <div className="w-6"></div>
            </div>
            <form className="space-y-6">
              <div>
                <input
                  type="text"
                  placeholder="Phone, email, or username"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 bg-black border border-gray-700 rounded-md text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#1d9bf0] focus:border-transparent"
                />
              </div>
              <div>
                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-3 bg-black border border-gray-700 rounded-md text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#1d9bf0] focus:border-transparent"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-white text-black rounded-full py-3 px-4 font-bold hover:bg-gray-200 transition duration-200"
              >
                Log in
              </button>
            </form>
            <div className="mt-6 text-center">
              <a href="#" className="text-[#1d9bf0] hover:underline">
                Forgot password?
              </a>
            </div>
            <div className="mt-6 text-center text-gray-500">
              Don't have an account?{" "}
              <a href="#" className="text-[#1d9bf0] hover:underline">
                Sign up
              </a>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
