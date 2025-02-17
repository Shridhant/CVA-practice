import Buttons from "./Buttons";
import { motion } from "motion/react";

function Landing() {
  const variants1 = {
    hidden: { filter: "blur(10px)", opacity: 0 },
    visible: { filter: "blur(0px)", opacity: 1 },
  };
  const transition = { duration: 1, ease: [0.25, 0.1, 0.25, 1] };
  const variants = {
    hidden: { filter: "blur(10px)", transform: "translateY(20%)", opacity: 0 },
    visible: { filter: "blur(0)", transform: "translateY(0)", opacity: 1 },
  };
  return (
    <section className=" h-screen flex flex-col  justify-center items-center text-center ">
      <motion.h1
        initial="hidden"
        animate="visible"
        transition={{ duration: 1 }}
        variants={variants1}
        className="text-center pb-4 font-display mb-6 text-4xl font-bold tracking-[-0.02em] drop-shadow-sm md:text-7xl md:leading-[5rem]"
      >
        Buttons!
      </motion.h1>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={variants}
        transition={transition}
      >
        <Buttons />
      </motion.div>
    </section>
  );
}

export default Landing;
