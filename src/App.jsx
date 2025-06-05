import "./App.css";
import {
  Contact,
  Experience,
  Footer,
  Hero,
  Navbar,
  Projects,
  Skills,
} from "./components";

const App = () => {
  return (
    <>
      <section>
        {/* Navbar */}
        <Navbar />
        {/* Navbar */}
        {/* Hero section */}
        <Hero />
        {/* Hero section */}
        {/* Skills section */}
        <Skills />
        {/* Skills section */}
        {/* Experience section */}
        <Experience />
        {/* Experience section */}
        {/* Project section */}
        <Projects />
        {/* Project section */}
        {/* Contact section */}
        <Contact />
        {/* Contact section */}
        {/* Footer section */}
        <Footer />
        {/* Footer section */}
      </section>
    </>
  );
};

export default App;
