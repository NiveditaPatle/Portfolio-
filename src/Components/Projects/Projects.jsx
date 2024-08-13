import React from "react";
import "./Projects.css";
import ProjectsData from "../../assets/projects-data";
import { FaArrowRightLong } from "react-icons/fa6";
import { IoRemoveOutline } from "react-icons/io5";
import { LuGithub } from "react-icons/lu";
import { IoIosLink } from "react-icons/io";

const Projects = () => {
  return (
    <div id="projects" className="project">
      <div className="title flex items-center space-x-2">
        <IoRemoveOutline className="title-icon " />
        <span className="title-color">&lt;</span>
        <h1 className="px-3">PROJECTS</h1>{" "}
        <span className="title-color">/&gt;</span>
        <IoRemoveOutline className="title-icon" />
      </div>

      <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14">
        {ProjectsData.map((project) => (
          <div
            key={project.id}
            className=" shadow-lg rounded-lg overflow-hidden border border-stone-900 hover:shadow-lg transform hover:scale-105 transition-shadow hover:shadow-stone-800 duration-300"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-center"
            />
            <div className="pt-6 pb-4 px-2">
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-lg text-gray-300">{project.title}</h3>
                <div className="flex space-x-4">
                  <a
                    href={project.gitlink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 border border-gray-400 p-2 shadow rounded-full hover:text-gray-200"
                  >
                    <LuGithub className=" text-xl" />
                  </a>
                  <a
                    href={project.livelink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 border border-gray-400 p-2 rounded-full hover:text-gray-200"
                  >
                    <IoIosLink className=" text-xl" />
                  </a>
                </div>
              </div>
              <div>
                {project.technology.map((tech, index) => (
                  <span
                    key={index}
                    className="text-sm text-neutral-500 py-[1px] px-[8px] mr-2 bg-neutral-800 rounded-[30px]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="project-showmore bg-custom-gradient items-center">
        {/* <p>View More</p> */}
        <a
          href="https://github.com/NiveditaPatle?tab=repositories"
          target="_blank"
        >
          VIEW MORE
        </a>
        <FaArrowRightLong className="text-[19px]" />
      </div>
    </div>
  );
};

export default Projects;
