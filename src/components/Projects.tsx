import { projectsData } from "../entities";
import ProjectCard from "./ui/ProjectCard";

const Projects = () => {
  return (
    <section
      id="projects"
      className="flex flex-col justify-center lg:snap-center"
    >
      <h2 className="pt-24 md:pt-0">My Projects</h2>
      <div className="grid sm:grid-cols-2 gap-3 md:block">
        {projectsData.map((project) => (
          <ProjectCard project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
