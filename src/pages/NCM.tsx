import React, { useState } from "react";

import Register from "../components/Register";
import Login from "../components/Login";
import CoolButton from "../components/CoolButton";

export default function NCM() {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isSignupOpen, setIsSignupOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-gray-100 text-black">
      {/* Left section - Image */}
      <div className="hidden lg:flex lg:w-1/2 items-center justify-center p-8">
        <div className="w-full h-full max-w-2xl max-h-2xl relative">
          <img
            src="/image.jpg"
            alt="Background"
            className="rounded-3xl object-cover w-full h-full shadow-2xl"
          />
        </div>
      </div>

      {/* Right section - Login/Signup */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center items-center p-8">
        <div className="w-full max-w-md space-y-8">
          <h1 className="text-4xl font-bold mb-8">Recording Moments</h1>
          <h2 className="text-3xl font-bold mb-8">Join today.</h2>
          <div className="space-y-4">
            <CoolButton
              variant="primary"
              text="Sign up"
              onClick={() => setIsSignupOpen(true)}
              className="w-full rounded-full py-2 px-4 font-bold transition duration-200"
            />

            <p className="font-bold mt-8 mb-2">Already have an account?</p>
            {/* <button
              onClick={() => setIsLoginOpen(true)}
              className="w-full bg-transparent text-[#1d9bf0] border border-[#1d9bf0] rounded-full py-2 px-4 font-bold hover:bg-[#031018] transition duration-200"
            >
              Sign in
            </button> */}
            <CoolButton
              text="Sign in"
              variant="primary"
              onClick={() => setIsLoginOpen(true)}
              className="w-full py-3 px-4 font-bold"
            />
          </div>
        </div>
      </div>

      <Login isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} />
      <Register isOpen={isSignupOpen} onClose={() => setIsSignupOpen(false)} />
    </div>
  );
}
