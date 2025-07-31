import { Home } from "./assets/components/Home";
import { Navbar } from "./assets/components/Navbar";
import { Footer } from "./assets/components/Footer";
export const App = () => {
  return (
    <>
      <Navbar />
      <div className="">
        <Home />
      </div>
      <Footer />
    </>
  );
};
