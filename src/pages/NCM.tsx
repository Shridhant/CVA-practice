import React, { useState } from "react";
import Register from "../components/Register";
import Login from "../components/Login";

import { CoolB } from "../components/CoolB";
import { Music4 } from "lucide-react"; // Import the music icon
import { motion } from "framer-motion";

export default function NCM() {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isSignupOpen, setIsSignupOpen] = useState(false);
  const floatingVariant = {
    initial: { y: 0, opacity: 0 },
    animate: {
      y: [0, -10, 0],
      opacity: 1,
      transition: {
        y: {
          duration: 3,
          ease: "easeInOut",
          repeat: Infinity,
        },
        opacity: {
          duration: 0.8,
          ease: "easeInOut",
        },
      },
    },
  };

  return (
    <div className="flex min-h-screen text-white absolute inset-0 -z-10 h-full w-full bg-gradient-to-tl from-slate-50 to-purple-400">
      {/* Left section - Image */}
      <div className="hidden lg:flex lg:w-1/2 items-center justify-center relative overflow-hidden">
        <div className="w-full h-full p-6 flex items-center justify-center">
          <div className="w-full h-full max-w-2xl max-h-2xl relative">
            <img
              src="/image.jpg"
              alt="Background"
              className="rounded-3xl object-cover w-full h-full shadow-[0_3px_10px_rgb(0,0,0,0.2)]"
            />
            {/* Floating music icons */}
            <motion.div
              variants={floatingVariant}
              initial="initial"
              animate="animate"
              className="absolute top-10 left-10"
            >
              <img
                src="/banjo.svg"
                alt="Mic"
                className="size-16 text-violet-500"
              />
            </motion.div>
            <motion.div
              variants={floatingVariant}
              initial="initial"
              animate="animate"
              className="absolute top-1/4 right-10"
            >
              <img
                src="/drum.svg"
                alt="Radio"
                className="size-16 text-violet-500"
              />
            </motion.div>
            <motion.div
              variants={floatingVariant}
              initial="initial"
              animate="animate"
              className="absolute bottom-1/4 left-10"
            >
              <img
                src="/fiddle.svg"
                alt="Headphones"
                className="size-16 text-violet-500"
              />
            </motion.div>
            <motion.div
              variants={floatingVariant}
              initial="initial"
              animate="animate"
              className="absolute bottom-10 right-10"
            >
              <img
                src="/guitar.svg"
                alt="Music Note"
                className="size-16 text-violet-500"
              />
            </motion.div>
            <motion.div
              variants={floatingVariant}
              initial="initial"
              animate="animate"
              className="absolute top-1/3 left-1/3 transform -translate-x-1/2 -translate-y-1/2"
            >
              <img
                src="/trumpet.svg"
                alt="Center Music"
                className="size-16 text-violet-500"
              />
            </motion.div>
            <motion.div
              variants={floatingVariant}
              initial="initial"
              animate="animate"
              className="absolute top-16 right-1/4"
            >
              <img
                src="/trombone.svg"
                alt="Guitar"
                className="size-16 text-violet-500"
              />
            </motion.div>
            <motion.div
              variants={floatingVariant}
              initial="initial"
              animate="animate"
              className="absolute bottom-16 left-1/4"
            >
              <img
                src="/gramophone.svg"
                alt="Speaker"
                className="size-16 text-violet-500"
              />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Right section - Login/Signup */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center items-center p-4">
        <div className="w-full max-w-md space-y-5">
          <img
            src="/logo.webp"
            alt="Company Logo"
            className="size-24 mx-auto"
          />
          {/* Recording Moments Heading with Animation */}
          <div className="flex gap-1 md:gap-3 justify-center items-center">
            {/* <h1 className="text-4xl font-bold  text-center group relative">
              <span className="relative z-10">Recording Moments</span>
            </h1>{" "} */}
            <h1 className="text-4xl md:text-5xl whitespace-nowrap font-bold mb-2 bg-gradient-to-r from-gray-500 via-gray-600 to-gray-800 text-transparent bg-clip-text leading-normal">
              Recording moments.
            </h1>
          </div>
          {/* Join Today Heading with Music Icon */}

          <p className="font-medium text-gray-500 text-center flex items-center justify-center gap-4">
            Write, reflect, and receive personalized feedback from teachers to
            continuously evolve your music journey{" "}
          </p>

          <div className="space-y-4 ">
            <CoolB
              text="Sign Up"
              className="mx-auto w-1/2 md:w-1/3 font-bold"
              onClick={() => setIsSignupOpen(true)}
            />
            <div className="relative py-4">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-b border-gray-300"></div>
              </div>
              <div className="relative flex justify-center">
                <span className=" font-bold px-4 text-sm text-gray-500">
                  Already have an account?
                </span>
              </div>
            </div>

            <CoolB
              text="Sign in"
              className="mx-auto w-1/2 md:w-1/3 font-bold"
              onClick={() => setIsLoginOpen(true)}
            />
          </div>
        </div>
      </div>

      <Login isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} />
      <Register isOpen={isSignupOpen} onClose={() => setIsSignupOpen(false)} />
    </div>
  );
}
