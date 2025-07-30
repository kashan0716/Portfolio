export const Education = () => {
  const education = [
    {
      name: "The Bachelor of Computer Applications (BCA) in Cyber Security and Forensics",
      university: "BBD University, Lucknow",
      year: "2025",
      description:
        "The Bachelor of Computer Applications (BCA) is a 3-year undergraduate program focused on computer science and application development. It covers key subjects like programming, database management, web development, networking, and software engineering—preparing students for careers in IT and software industries.",
      duration: "2022-2025",
    },
    {
      name: "12th Class",
      university: "Shri Vardhman Inter college, Lucknow",
      year: "2022",
      description:
        "Class 12 Study Hub is a comprehensive learning platform designed for Class 12 students, offering high-quality resources in Physics, Chemistry, Biology, Hindi, and English. Whether you're preparing for board exams or aiming to strengthen your concepts, our website provides chapter-wise notes, video lectures, sample papers, and interactive quizzes to make learning easier and more effective.",
      duration: "2020-2022",
    },
    {
      id: 3,
      name: "10th Class",
      university: "Shri Vardhman Inter College, Lucknow",
      year: "2020",
      description:
        "An all-in-one learning platform for Class 10 students, offering easy-to-understand notes, interactive videos, and practice questions in Physics, Chemistry, Biology, Hindi, and English. Designed to help students grasp key concepts, improve exam performance, and build a strong academic foundation.",
      duration: "2018-2020",
    },
  ];
  return (
    <div
      className=" flex flex-col items-center justify-center  w-2/3 mx-auto mt-6"
      id="education"
    >
      <h1 className="text-center font-bold text-5xl">Qualifications</h1>
      <div className="relative w-full">
        <div className="absolute h-[590px] w-[2px] top-10 bg-gray-800 -left-6"></div>
        {education?.map((item) => (
          <div className="my-4">
            <div className="relative w-[15px] h-[15px] rounded-full top-5 bg-gray-800 -left-[30px] "></div>
            <button className="py-1 px-5 text-md bg-gray-500 rounded-xl font-md text-white">
              {item.year}
            </button>
            <h2 className="my-1 text-xl font-bold text-start text-gray-800">
              {item.name}
            </h2>
            <p className="py-1 text-md">{item.description}</p>
            <div className="text-gray-500 font-semibold">
              <span className="">{item.university}- </span>
              <span className="px-1">{item.duration}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
