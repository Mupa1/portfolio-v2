import { projectsData } from "../entities";
import { AnimateOnScroll } from "./ui/AnimateOnScroll";
import ProjectCard from "./ui/ProjectCard";

const Projects = () => {
  return (
    <AnimateOnScroll>
      <section id="projects" className="flex flex-col justify-center">
        <h2 className="pt-24">My Projects</h2>
        <div className="grid gap-3">
          {projectsData.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </section>
    </AnimateOnScroll>
  );
};

export default Projects;
