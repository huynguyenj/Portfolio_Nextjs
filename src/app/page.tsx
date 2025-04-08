import Navbar from "@/app/ui/components/Navbar";
import HeroSection from "./ui/components/HeroSection";
import About from "./ui/components/About";
import ProjectsSection from "./ui/components/ProjectsSection";
import Contact from "./ui/components/Contact";

export default function Home() {
  return (
    <div className=" relative min-h-[100vh]">
      <div><Navbar /></div>
      <div id="introduction"><HeroSection /></div>
      <div id="skills"><About/></div>
      <div id="projects"><ProjectsSection/></div>
      <div id="contact"><Contact/></div>
      <div className="fixed bottom-0 right-20"><a href="#introduction"><i className='bx bxs-up-arrow-circle text-4xl mb-5 hover:bg-white hover:text-black rounded-full cursor-pointer duration-300' ></i></a></div>
    </div>
  );
}
