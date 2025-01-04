import { motion } from "motion/react";

function Landing() {
  return (
    <section className="bg-blue-400 h-screen flex justify-center items-center text-center ">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-white"
      >
        <div>
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Hello</h1>
          <p className="text-lg md:text-xl font-serif mb-6">
            Build something useful!
          </p>
          <button className="bg-white text-blue-500 font-semibold text-lg md:text-xl px-2 py-3 rounded-md hover:text-white transition-all duration-200 hover:bg-blue-600">
            {" "}
            start now!
          </button>
        </div>
      </motion.div>
      <motion.h1
        animate={{ x: [50, 150, 50], opacity: 1, scale: 1 }}
        transition={{
          duration: 5,
          delay: 0.3,
          ease: [0.5, 0.71, 1, 1.5],
        }}
        initial={{ opacity: 0, scale: 0.5 }}
        whileHover={{ scale: 1.2 }}
      >
        Animation made easy with Framer Motion
      </motion.h1>
    </section>
  );
}

export default Landing;
