import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
function App() {
  return (
    <div className="">
      <Header />
      <Hero />
      <About />
      <Skills />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
