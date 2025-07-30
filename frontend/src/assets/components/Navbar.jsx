import image from "/react.svg";
import resume from "/Resume.pdf";

export const Navbar = () => {
  return (
    <>
      <header className="z-90 bg-gray-800">
        <nav className="flex item-center justify-between py-5 px-15 fixed w-full bg-gray-800">
          <div>
            <img src={image} alt="logo" className="cursor-pointer" />
          </div>
          <div>
            <ul className="flex item-center justify-center gap-8 text-white font-bold">
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href={resume} type="download">
                  View Resume
                </a>
              </li>
              <li>
                <a
                  href={`mailto:mohammadkashan29@gmail.com?subject=${encodeURIComponent(
                    "Your Subject Here"
                  )}&body=${encodeURIComponent("Your message goes here.")}`}
                >
                  Hire me
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
};
