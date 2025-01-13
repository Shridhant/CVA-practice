import React, { useState } from "react";
import Register from "../components/Register";
import Login from "../components/Login";

import { CoolB } from "../components/CoolB";

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
    <div
      className="flex min-h-screen text-white absolute inset-0 -z-10 h-full w-full bg-gradient-to-tl
from-slate-100
via-white
to-violet-300"
    >
      {/* Left section - Image */}
      <div className="hidden lg:flex lg:w-1/2 items-center justify-center relative overflow-hidden">
        <div className="w-full h-full p-6 flex items-center justify-center">
          <div className="w-full h-full max-w-2xl max-h-2xl flex items-center justify-center relative">
            {/* <div className="absolute inset-0  opacity-30 rounded-3xl pointer-events-none"></div> */}
            <img
              src="/logo.webp"
              alt="Background"
              className="h-fit w-fit rounded-3xl object-cover "
            />

            {/* Floating music icons */}
            <motion.div
              variants={floatingVariant}
              initial="initial"
              animate="animate"
              className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            >
              <img
                src="/banjo.svg"
                alt="Banjo"
                className="h-12 w-12 text-violet-500"
              />
            </motion.div>

            <motion.div
              variants={floatingVariant}
              initial="initial"
              animate="animate"
              className="absolute top-1/4 right-0 transform -translate-x-1/2 -translate-y-1/2"
            >
              <img
                src="/drum.svg"
                alt="Drum"
                className="h-12 w-12 text-violet-500"
              />
            </motion.div>

            <motion.div
              variants={floatingVariant}
              initial="initial"
              animate="animate"
              className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2"
            >
              <img
                src="/fiddle.svg"
                alt="Fiddle"
                className="h-12 w-12 text-violet-500"
              />
            </motion.div>

            <motion.div
              variants={floatingVariant}
              initial="initial"
              animate="animate"
              className="absolute bottom-1/4 left-0 transform translate-x-1/2 translate-y-1/2"
            >
              <img
                src="/guitar.svg"
                alt="Guitar"
                className="h-12 w-12 text-violet-500"
              />
            </motion.div>

            <motion.div
              variants={floatingVariant}
              initial="initial"
              animate="animate"
              className="absolute top-1/2 left-0 transform -translate-y-1/2 translate-x-1/2"
            >
              <img
                src="/trumpet.svg"
                alt="Trumpet"
                className="h-12 w-12 text-violet-500"
              />
            </motion.div>

            <motion.div
              variants={floatingVariant}
              initial="initial"
              animate="animate"
              className="absolute top-1/2 right-0 transform -translate-y-1/2 -translate-x-1/2"
            >
              <img
                src="/trombone.svg"
                alt="Trombone"
                className="h-12 w-12 text-violet-500"
              />
            </motion.div>

            <motion.div
              variants={floatingVariant}
              initial="initial"
              animate="animate"
              className="absolute top-3/4 left-1/4 transform -translate-x-1/2 -translate-y-1/2"
            >
              <img
                src="/gramophone.svg"
                alt="Gramophone"
                className="h-12 w-12 text-violet-500"
              />
            </motion.div>

            <motion.div
              variants={floatingVariant}
              initial="initial"
              animate="animate"
              className="absolute top-3/4 right-1/4 transform -translate-x-1/2 -translate-y-1/2"
            >
              <img
                src="/violin.svg"
                alt="Violin"
                className="h-12 w-12 text-violet-500"
              />
            </motion.div>

            <motion.div
              variants={floatingVariant}
              initial="initial"
              animate="animate"
              className="absolute top-1/4 right-3/4 transform -translate-x-1/2 -translate-y-1/2"
            >
              <img
                src="/cymball.svg"
                alt="Cymbal"
                className="h-12 w-12 text-violet-500"
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
          <div className="gap-1 md:gap-3 ">
            <h1 className="text-4xl pb-3 md:text-5xl whitespace-nowrap font-extrabold md:font-bold mb-2 bg-gradient-to-r from-gray-500 via-gray-600 to-gray-800 text-transparent bg-clip-text leading-10 text-center">
              Recording moments.
            </h1>
          </div>

          {/* Join Today Heading with Music Icon */}

          <p className="font-light md:font-normal text-gray-500 text-center flex items-center justify-center gap-4">
            Write, reflect, and receive personalized feedback from teachers to
            continuously evolve your music journey{" "}
          </p>

          <div className="space-y-4 ">
            <CoolB
              text="Sign Up"
              className="bg-slate-50 mx-auto w-1/2 md:w-1/3 font-bold"
              onClick={() => setIsSignupOpen(true)}
            />
            <div className="relative py-4">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-b border-gray-300"></div>
              </div>
              <div className="relative flex justify-center">
                <span className="font-bold px-4 text-sm text-gray-500 ">
                  Already have an account?
                </span>
              </div>
            </div>

            <CoolB
              text="Sign in"
              className="bg-slate-50 mx-auto w-1/2 md:w-1/3 font-semibold"
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
