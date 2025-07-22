import Hero from "@/components/retro/Hero";
import About from "@/components/retro/About";
import Resume from "@/components/retro/Resume";
import Skills from "@/components/retro/Skills";
import Contact from "@/components/retro/Contact";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <Resume />
      <Skills />
      <Contact />
    </div>
  );
};

export default Index;
