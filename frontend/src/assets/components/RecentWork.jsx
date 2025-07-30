import todoImage from "/todo.png";
import airbnbImage from "/airbnb.png";
import spotifyImage from "/spotify.png";

const projects = [
  {
    id: 1,
    title: "Airbnb-clone",
    descreption:
      "Airbnb is an online marketplace that connects people looking to rent out their homes with travelers seeking accommodations. It offers unique stays, from apartments and houses to treehouses and villas, across 190+ countries, allowing users to book short- or long-term lodging and experiences directly through the platform.",
    image: airbnbImage,
    technologies: [
      "HTML",
      "CSS",
      "javaScript",
      "Ejs",
      "Cloudinary",
      "Node.js",
      "Express.js",
      "Mongodb",
      "Bootstrap",
    ],
    link: "https://github.com/kashan0716/Airbnb",
    demo: "https://airbnb-u2d0.onrender.com/listings",
  },
  {
    id: 2,
    title: "Spotify-clone",
    descreption:
      "Spotify is a digital music streaming platform that allows users to listen to millions of songs, podcasts, and playlists from artists around the world. It offers personalized recommendations, curated playlists, and social sharing features across web and mobile platforms.",
    image: spotifyImage,
    technologies: [
      "HTML",
      "CSS",
      "javaScript",
      "Mongodb",
      "Express.js",
      "React.js",
      "Node.js",
      "Cloudinary",
      "Tailwind",
    ],
    link: "https://github.com/kashan0716/spotify-clone",
    demo: "https://spotify-clone-frontend-nm5e.onrender.com/",
  },
  {
    id: 3,
    title: "ToDoList",
    descreption:
      "A simple and intuitive web application that allows users to create, manage, and track daily tasks. Built with the MERN stack, it supports features like adding, editing, deleting, and marking tasks as complete to boost productivity and task organization.",
    image: todoImage,
    technologies: [
      "HTML",
      "CSS",
      "javaScript",
      "Mongodb",
      "Express.js",
      "React.js",
      "Node.js",
      "Icons",
      "Tailwind",
    ],
    link: "",
    demo: "",
  },
];

export const RecentWork = () => {
  return (
    <div className="flex flex-col items-center justify-center" id="projects">
      <h1 className="text-center font-bold text-5xl mb-5">Recent Works</h1>
      <ul className="flex flex-wrap items-center justify-center gap-15 mt-5">
        {projects.length > 0 &&
          projects.map((project) => {
            return (
              <li
                key={project.id}
                className="w-1/4 h-180 shadow-2xl shadow-gray-500 rounded-xl p-5"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-auto"
                />
                {project.demo ? (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold text-xl text-violet-600 hover:underline block mb-2"
                  >
                    {project.title}
                  </a>
                ) : (
                  <h2 className="font-bold text-xl mb-2">{project.title}</h2>
                )}
                <p className="text-md">{project.descreption}</p>
                <ul className="flex flex-wrap items-center justify-start my-5 gap-2 h-50">
                  {project.technologies.length > 0 &&
                    project.technologies.map((technology, index) => {
                      return (
                        <li
                          key={index}
                          className="py-2 px-5 shadow-2xl shadow-gray-400 rounded-xl bg-gray-200"
                        >
                          {technology}
                        </li>
                      );
                    })}
                </ul>
                {project.link ? (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-center py-2 px-4 rounded-xl bg-violet-500 hover:bg-violet-600 cursor-pointer text-white font-semibold"
                  >
                    Source Code
                  </a>
                ) : (
                  <span className="block text-center text-gray-400 italic">
                    Source code not available
                  </span>
                )}
              </li>
            );
          })}
      </ul>
    </div>
  );
};
