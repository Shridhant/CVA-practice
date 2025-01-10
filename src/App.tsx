// import Landing from "./pages/Landing";
import Card from "./components/Card";
import Card2 from "./components/Card2";
import { motion } from "motion/react";
import Words from "./components/Words";

function App() {
  const variants1 = {
    hidden: { filter: "blur(10px)", opacity: 0 },
    visible: { filter: "blur(0px)", opacity: 1 },
  };

  const data = [
    {
      title: "Bear The Cat",
      description: "My cat is half punjabi and half naga.",
      technologies: ["Cat.js", "Catwind", "Catscript"],
      techColors: ["#818CF8", "#38B2AC", "#3178C6"],
      imageUrl:
        "https://p.turbosquid.com/ts-thumb/8n/MdAscq/58/chrome1/png/1731309405/1920x1080/fit_q87/9f400ef56931f711cd6c4a2be7fbad9534d906ac/chrome1.jpg",
      projectUrl: "https://github.com",
      githubUrl: "https://github.com",
    },
  ];

  return (
    <>
      <h1 className="text-center font-display text-4xl font-bold tracking-[-0.02em] drop-shadow-sm md:text-7xl md:leading-[5rem]">
        I am a{" "}
        <Words
          words={["developer", "designer", "entrepreneur"]}
          interval={2000}
          className="text-blue-500"
        />
      </h1>
      <motion.h1
        initial="hidden"
        animate="visible"
        transition={{ duration: 1 }}
        variants={variants1}
        className="text-center font-display text-4xl font-bold tracking-[-0.02em] drop-shadow-sm md:text-7xl md:leading-[5rem]"
      >
        Cards!
      </motion.h1>

      <motion.div
        initial="hidden"
        animate="visible"
        transition={{ duration: 2 }}
        variants={variants1}
        className="p-4 flex flex-wrap justify-center items-center min-h-screen overflow-hidden"
      >
        <div className="w-full max-w-3xl flex justify-center gap-6">
          <Card projects={data} />
          <Card2 />
        </div>
      </motion.div>
    </>
  );
}

export default App;
