import Landing from "./pages/Landing";
import Card from "./components/Card";

function App() {
  const data = [
    {
      title: "Bear The Cat",
      description:
        "Stunning, customizable and open-source components for your next app. Time to give your code a vacation.",
      technologies: ["Next.js", "Tailwind", "TypeScript"],
      techColors: ["#818CF8", "#38B2AC", "#3178C6"],
      imageUrl:
        "https://p.turbosquid.com/ts-thumb/8n/MdAscq/58/chrome1/png/1731309405/1920x1080/fit_q87/9f400ef56931f711cd6c4a2be7fbad9534d906ac/chrome1.jpg",
      projectUrl: "https://i.imgur.com/VRtqhGC.png",
      githubUrl: "https://i.imgur.com/VRtqhGC.png",
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Landing />
      <Card projects={data} />
    </div>
  );
}

export default App;
