import Experiences from "@/components/experiences";
import Header from "@/components/header";
import Hero from "@/components/hero";
import Projects from "@/components/projects";
import Skills from "@/components/skills";

const Home = () => {
  return (
    <div className="relative h-screen overflow-x-hidden overflow-y-auto px-[3.2rem] py-[7.2rem] md:max-w-[60vw] xl:max-w-[40vw] md:mx-auto">
      <Header />
      <Hero orgName="Tekion" />
      <Skills />
      <Experiences />
      <Projects />
    </div>
  );
};

export default Home;
