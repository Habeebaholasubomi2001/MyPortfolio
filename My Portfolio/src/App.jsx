// import { useRef } from "react";
import Nav from "./components/Navbar";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Skills from "./components/Skills";

function App() {
  return (
    <div className="container">
      <Nav />
      <Home />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </div>
  );
}

export default App;
