import { projectsData } from "../entities";
import ProjectCard from "./ui/ProjectCard";

const Projects = () => {
  return (
    <section id="projects" className="flex flex-col justify-center">
      <h2 className="pt-24">My Projects</h2>
      <div>
        <div className="grid sm:grid-cols-2 gap-3 md:block">
          {projectsData.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
