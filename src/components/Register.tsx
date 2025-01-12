import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Button from "./Button";
import { Lock, X } from "lucide-react";

interface SignupModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Register({ isOpen, onClose }: SignupModalProps) {
  const [name, setName] = useState("");
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
            className="bg-white text-black border border-gray-200 rounded-2xl max-w-md w-full mx-auto p-8 shadow-xl"
          >
            <div className="flex justify-between items-center mb-6">
              <button
                onClick={onClose}
                className="text-gray-600 hover:text-gray-800"
              >
                <X strokeWidth={3} className="w-6 h-6 text-black" />
              </button>
              <div className="flex justify-center items-center gap-3">
                <Lock strokeWidth={3} className="w-6 h-6 text-black" />
                <h2 className="text-2xl font-bold text-center flex-grow">
                  Sign Up!
                </h2>
              </div>
              <div className="w-6"></div>
            </div>
            <form className="space-y-6">
              <div>
                <input
                  type="text"
                  placeholder="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#1d9bf0] focus:border-transparent"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Email"
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
                type="submit"
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
