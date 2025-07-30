import profilePic from "/profile.jpg";
import { FaFacebook, FaNodeJs } from "react-icons/fa";
import { BsLinkedin, BsWordpress } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { motion } from "framer-motion";

const socialMedia = [
  {
    id: 1,
    icon: <BsLinkedin className="text-blue-500 text-3xl hover:scale-105 " />,
    url: "https://www.linkedin.com/in/mohammad-kashan-161726321/",
  },
  {
    id: 2,
    icon: <FaGithub className="text-white text-3xl hover:scale-105" />,
    url: "https://github.com/kashan0716",
  },
  {
    id: 3,
    icon: <FaFacebook className="text-blue-800 text-3xl hover:scale-105" />,
    url: "https://www.facebook.com/",
  },
];

const skills = [
  {
    id: 1,
    name: "MongoDB",
    icon: <SiMongodb className="text-green-500 text-2xl" />,
  },
  {
    id: 2,
    name: "ExpressJs",
    icon: <SiExpress className="text-yellow-500 text-2xl" />,
  },
  {
    id: 3,
    name: "React",
    icon: <FaReact className="text-blue-500 text-2xl" />,
  },
  {
    id: 4,
    name: "Nodejs",
    icon: <FaNodeJs className="text-blue-500 text-2xl" />,
  },

  {
    id: 5,
    name: "web Developer",
    icon: <FaNodeJs className="text-white text-2xl" />,
  },
];

export const About = () => {
  const style = {
    FontFace: "Times New Roman",
  };
  return (
    <>
      <div
        className="flex flex-col items-center justify-center mx-auto bg-gray-800"
        id="about"
      >
        <div>
          <motion.div
            className="flex items-center justify-center mx-auto"
            initial={{ opacity: 0, x: -10, y: -10 }}
            animate={{ opacity: 10, x: 10, y: 0 }}
            transition={{ duration: 0.9 }}
          >
            <img
              src={profilePic}
              alt="profile picture"
              className="w-48 h-48 rounded-full cursor-pointer outline-gray-900 outline-8 mb-1"
            />
          </motion.div>
          <motion.div
            className=" py-2"
            initial={{ opacity: 0, x: -10, y: 30 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.9 }}
            style={style}
          >
            <h1 className="font-bold text-4xl text-green-500 text-center">
              Hi, I'm Mohd Kashan
            </h1>
            <h2 className="text-white text-center font-semibold text-xl py-1">
              Analytical, Self-Motivated and Confident
            </h2>
            <h2 className="text-yellow-500 text-center  text-2xl font-bold">
              MERN | Full-Stack Web Developer
            </h2>
          </motion.div>

          <motion.div className="flex items-center justify-center gap-3">
            {socialMedia?.map((item) => (
              <motion.a
                key={item.id}
                href={item.url}
                initial={{
                  opacity: 0,
                  x: 30,
                  y: -10,
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                  y: 0,
                }}
                transition={{
                  duration: 0.9,
                }}
                className="hover:scale-110"
              >
                {item.icon}
              </motion.a>
            ))}
          </motion.div>

          <div className="text-white flex items-center justify-center gap-3 my-3">
            {skills.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-center gap-2 bg-gray-900 py-3 px-5 shadow-md shadow-green-500 rounded-2xl hover:scale-110 cursor-pointer"
              >
                <div>{item.icon}</div>
                <div>{item.name}</div>
              </div>
            ))}
          </div>
          <div className="flex flex-col item-center justify-center mx-auto mt-5 w-350 bg-gray-700 rounded-xl mb-5">
            <h2 className="text-green-600 ml-5 py-1 text-3xl font-bold">
              Objective
            </h2>
            <p className="text-white py-1 ml-5 text-3/2 front-semibold mt-3 mb-3">
              A motivated individual with in-depth knowledge of programming
              languages, especially JavaScript and development tools. I am
              skilled and experienced in both Front-end and Back-end Web
              Development, seeking a position as a Web Developer in a
              growth-oriented company where I can use my skills to the advantage
              of the company while having the scope to develop my own skills.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
