import { Home } from "./assets/components/Home";
import { Navbar } from "./assets/components/Navbar";
import { Footer } from "./assets/components/Footer";
export const App = () => {
  return (
    <>
      <Navbar />
      <div className="py-19">
        <Home />
      </div>
      <Footer />
    </>
  );
};
