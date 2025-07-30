import { FaLinkedinIn } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { IoPerson } from "react-icons/io5";
import { IoMdMail } from "react-icons/io";
import { VscCode } from "react-icons/vsc";
import { MdOutlineWork } from "react-icons/md";

export const Footer = () => {
  return (
    <div className="bg-gray-800 text-white p-5">
      <div className="flex items-center justify-evenly">
        <div>
          <h3 className="text-green-600 font-bold text-3xl text-center py-1">
            Mohd Kashan
          </h3>
          <p>MERN | Full-Stack Web Developer</p>
        </div>
        <div>
          <h3 className="text-yellow-500 font-bold text-xl text-center py-2">
            Quick Links
          </h3>
          <ul className="flex flex-col items-center justify-center">
            <li>
              <a
                href="/#about"
                className="flex items-center justify-center gap-2 hover:scale-120"
              >
                <IoPerson />
                About
              </a>
            </li>

            <li>
              <a
                href="/#skills"
                className="flex items-center justify-center gap-2 hover:scale-120"
              >
                <VscCode />
                Skills
              </a>
            </li>
            <li>
              <a
                href="/#projects"
                className="flex items-center justify-center gap-2 hover:scale-120"
              >
                <MdOutlineWork />
                Projects
              </a>
            </li>
            <li>
              <a
                href={`mailto:mohammadkashan29@gmail.com?subject=${encodeURIComponent(
                  "Your Subject Here"
                )}&body=${encodeURIComponent("Your message goes here.")}`}
                className="cursor-pointer transition-all flex items-center justify-center gap-2 hover:scale-120"
              >
                <IoMdMail />
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-yellow-500 font-bold text-xl text-center py-2">
            Follow Me
          </h3>
          <ul className="flex gap-3 items-center justify-center">
            <li>
              <a href="https://www.linkedin.com/in/mohammad-kashan-161726321/">
                <FaLinkedinIn className="text-3xl hover:scale-120" />
              </a>
            </li>
            <li>
              <a href="https://github.com/kashan0716">
                <FaGithub className="text-3xl hover:scale-120" />
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="flex items-center justify-center my-2 mt-5">
        <h1 className="items-center">
          © 2025 Mohd Kashan. All Rights Reserved.
        </h1>
      </div>
    </div>
  );
};
