import React, { useState } from "react";
import Register from "../components/Register";
import Login from "../components/Login";

import { CoolB } from "../components/CoolB";
import { Music, Music4 } from "lucide-react"; // Import the music icon

export default function NCM() {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isSignupOpen, setIsSignupOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-white text-black">
      {/* Left section - Image */}
      <div className="hidden lg:flex lg:w-1/2 items-center justify-center">
        <div className="w-full h-full p-6 flex items-center justify-center">
          <div className="w-full h-full max-w-2xl max-h-2xl relative">
            <img
              src="/image.jpg"
              alt="Background"
              className="rounded-3xl object-cover w-full h-full shadow-2xl"
            />
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
            <h1 className="text-4xl font-bold  text-center group relative">
              <span className="relative z-10">Recording Moments</span>
            </h1>{" "}
            <Music4
              strokeWidth={3}
              size={60}
              className=" text-violet-500 animate-pulse"
            />{" "}
          </div>
          {/* Join Today Heading with Music Icon */}

          <p className="font-medium text-gray-400 text-center flex items-center justify-center gap-4">
            Write, reflect, and receive personalized feedback from teachers to
            continuously evolve your music journey{" "}
          </p>

          <div className="space-y-4 ">
            <CoolB
              text="Sign Up"
              className="mx-auto w-full sm:w-1/2 md:w-1/3 font-bold"
              onClick={() => setIsSignupOpen(true)}
            />
            <div className="relative py-4">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-b border-gray-300"></div>
              </div>
              <div className="relative flex justify-center">
                <span className="bg-white font-bold px-4 text-sm text-gray-500">
                  Already have an account?
                </span>
              </div>
            </div>

            <CoolB
              text="Sign in"
              className="mx-auto w-full sm:w-1/2 md:w-1/3 font-bold"
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
