import { FiGithub } from "react-icons/fi";
import { HiMiniArrowTopRightOnSquare } from "react-icons/hi2";

import ExternalLink from "./ExternalLink";

type ProjectCardType = {
  project: {
    imageSrc: string;
    title: string;
    description: string;
    live: string;
    github: string;
    techStack: string[];
  };
};

const ProjectCard: React.FC<ProjectCardType> = ({ project }) => {
  const { imageSrc, title, description, live, github, techStack } = project;
  return (
    <article
      className={`flex flex-col-reverse justify-between md:flex-row p-3 gap-3 bg-primary-900 rounded-md`}
    >
      <div>
        <p>{description}</p>
        <div className="flex gap-x-3">
          {techStack.map((tech) => (
            <p key={tech} className="text-gray-400">
              {tech}
            </p>
          ))}
        </div>
        <div className="flex gap-x-3 items-center pt-3">
          <ExternalLink href={github}>
            <FiGithub className="stroke-2" size="1.1rem" title="Github link" />
          </ExternalLink>
          <ExternalLink href={live}>
            <HiMiniArrowTopRightOnSquare size="1.4rem" title="View link" />
          </ExternalLink>
        </div>
      </div>
      <ExternalLink href={live}>
        <img
          className="md:max-w-[24rem] transition-transform duration-300 transform hover:rotate-3"
          src={imageSrc}
          alt={title}
        />
      </ExternalLink>
    </article>
  );
};

export default ProjectCard;
