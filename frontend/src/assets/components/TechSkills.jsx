import { FaJs } from "react-icons/fa6";
import { FaNodeJs } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { FaCss3Alt } from "react-icons/fa";
import { SiMysql } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaBootstrap } from "react-icons/fa";
import { SiNpm } from "react-icons/si";
import { SiMongoose } from "react-icons/si";
import { FaGit } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FaCloudDownloadAlt } from "react-icons/fa";
import { TbBrandVscode } from "react-icons/tb";
import { FaFigma } from "react-icons/fa";

export const TechSkills = () => {
  const skillsData = [
    {
      title: "Languages",
      skills: [
        {
          name: "HTML",
          level: <span className="text-blue-600">Expert</span>,
          icon: <FaHtml5 className="text-orange-600 text-2xl" />,
        },
        {
          name: "CSS",
          level: <span className="text-green-600">Intermediate</span>,
          icon: <FaCss3Alt className="text-blue-600 text-2xl" />,
        },
        {
          name: "JavaScript",
          level: <span className="text-green-600">Intermediate</span>,
          icon: <FaJs className="text-yellow-400 text-2xl" />,
        },
      ],
    },
    {
      title: "Back-End",
      skills: [
        {
          name: "Node.Js",
          level: <span className="text-green-600">Intermediate</span>,
          icon: <FaNodeJs className="text-green-900 text-2xl" />,
        },
        {
          name: "Express.Js",
          level: <span className="text-green-600">Intermediate</span>,
          icon: <SiExpress className="text-black text-2xl" />,
        },
      ],
    },
    {
      title: "Front-End",
      skills: [
        {
          name: "React.Js",
          level: <span className="text-red-600">Beginner</span>,
          icon: <FaReact className="text-blue-700 text-2xl" />,
        },
        {
          name: "Tailwind",
          level: <span className="text-red-600">Beginner</span>,
          icon: <RiTailwindCssFill className="text-blue-700 text-2xl" />,
        },
        {
          name: "Bootstrap",
          level: <span className="text-red-600">Beginner</span>,
          icon: <FaBootstrap className="text-purple-800 text-2xl" />,
        },
        {
          name: "NPM",
          level: <span className="text-green-600">Intermediate</span>,
          icon: <SiNpm className="text-red-600 text-2xl" />,
        },
      ],
    },
    {
      title: "Database",
      skills: [
        {
          name: "MySQL",
          level: <span className="text-green-600">Intermediate</span>,
          icon: <SiMysql className="text-blue-700 text-2xl" />,
        },
        {
          name: "MongoDB",
          level: <span className="text-green-600">Intermediate</span>,
          icon: <SiMongodb className="text-green-800 text-2xl" />,
        },
        {
          name: "Mongoose",
          level: <span className="text-red-600">Beginner</span>,
          icon: <SiMongoose className="text-red-800 text-2xl" />,
        },
      ],
    },
    {
      title: "DevTools",
      skills: [
        {
          name: "Git",
          level: <span className="text-green-600">Intermediate</span>,
          icon: <FaGit className="text-orange-700 text-2xl" />,
        },
        {
          name: "GitHub",
          level: <span className="text-green-600">Intermediate</span>,
          icon: <FaGithub className="text-black text-2xl" />,
        },
      ],
    },
    {
      title: "Technologies",
      skills: [
        {
          name: "VS Code",
          level: <span className="text-green-600">Intermediate</span>,
          icon: <TbBrandVscode className="text-blue-800 text-2xl" />,
        },
        {
          name: "Figma",
          level: <span className="text-green-600">Intermediate</span>,
          icon: <FaFigma className="text-purple-800 text-2xl" />,
        },
        {
          name: "Cloud",
          level: <span className="text-green-600">Intermediate</span>,
          icon: <FaCloudDownloadAlt className="text-blue-500 text-2xl" />,
        },
      ],
    },
  ];
  return (
    <>
      <div className="flex flex-col my-6" id="skills">
        <h1 className="text-center font-bold text-5xl mt-5 my-5 mx-auto">
          Tech Skills
        </h1>
        <div className="flex flex-wrap items-center justify-center gap-15 mx-auto my-6">
          {skillsData?.map((item) => {
            return (
              <div
                key={item.title}
                className="items-center shadow-2xl h-65 shadow-gray-500 p-8"
              >
                <h3 className="text-center font-bold text-3xl">{item.title}</h3>
                <br />
                <ul>
                  {item.skills?.map((element) => {
                    return (
                      <li
                        key={element.name}
                        className="flex items-center justify-between gap-20 w-[350px] my-3 hover:scale-105 transition-all ease-in font-bold cursor-pointer"
                      >
                        <div>{element.icon}</div>
                        <div>{element.name}</div>
                        <div>{element.level}</div>
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};
