import React from "react";
import { FaGithub } from "react-icons/fa";

interface Content {
  title: string;
  description: string;
  technologies: Array<string>;
  techColors: Array<string>;
  imageUrl: string;
  projectUrl: string;
  githubUrl: string;
}

interface ProjectCardProps {
  projects: Array<Content>;
}

const Card: React.FC<ProjectCardProps> = ({ projects }) => {
  return (
    <div className="flex flex-wrap justify-center items-center gap-6 py-10">
      {projects.map((project, index) => (
        <div
          key={index}
          className="relative bg-gray-800/30 border border-gray-600 w-[350px] shadow-lg rounded-xl overflow-hidden backdrop-filter backdrop-blur-lg bg-opacity-30"
        >
          <div className="absolute inset-0">
            <img
              src={project.imageUrl}
              alt={`${project.title} Background`}
              className="w-full h-full object-cover rounded-xl"
            />
          </div>

          <div className="relative z-10 h-full flex flex-col justify-between">
            <div className="p-4">
              <a
                href={project.projectUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="relative h-52 overflow-hidden rounded-xl">
                  <img
                    src={project.imageUrl}
                    alt={`${project.title} Thumbnail`}
                    className="w-full h-full object-cover rounded-xl"
                  />
                </div>
              </a>
            </div>

            <div className="p-4 flex flex-col bg-gray-800/30 backdrop-filter backdrop-blur-lg bg-opacity-30 rounded-b-xl">
              <div className="flex items-center justify-between mb-2">
                <h2 className="text-xl font-semibold text-white">
                  {project.title}
                </h2>
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub
                    className="text-gray-400 cursor-pointer hover:text-gray-500"
                    size={24}
                  />
                </a>
              </div>

              <div className="flex justify-start items-center flex-wrap">
                {project.technologies.map((techstack, index) => (
                  <div
                    key={index}
                    className="flex items-center text-gray-400 px-3 text-xs py-1 border border-gray-500 rounded-full mr-2 mb-2"
                  >
                    <div
                      className="rounded-full h-2 w-2 mr-2"
                      style={{
                        backgroundColor:
                          project.techColors[index % project.techColors.length],
                      }}
                    ></div>
                    {techstack}
                  </div>
                ))}
              </div>

              <div className="mt-3">
                <p className="text-gray-300 mb-3">{project.description}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
