import Buttons from "./Buttons";
import { motion } from "motion/react";

function Landing() {
  const variants1 = {
    hidden: { filter: "blur(10px)", opacity: 0 },
    visible: { filter: "blur(0px)", opacity: 1 },
  };
  return (
    <section className=" h-screen flex flex-col  justify-center items-center text-center ">
      <motion.h1
        initial="hidden"
        animate="visible"
        transition={{ duration: 1 }}
        variants={variants1}
        className="text-center pb-4 font-display text-4xl font-bold tracking-[-0.02em] drop-shadow-sm md:text-7xl md:leading-[5rem]"
      >
        Buttons!
      </motion.h1>
      <Buttons />
    </section>
  );
}

export default Landing;
