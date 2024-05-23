import { BsBoxArrowUpRight } from "react-icons/bs";
import { FiGithub } from "react-icons/fi";
import { motion } from "framer-motion";

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
    <article className="flex flex-col-reverse justify-between md:flex-row md:items-center md:mb-3 gap-3 bg-primary-900 rounded-md p-3 ">
      <div>
        <p>{description}</p>
        <div className="flex gap-x-3">
          {techStack.map((tech) => (
            <p className="text-gray-400">{tech}</p>
          ))}
        </div>
        <div className="flex gap-x-3 pt-3">
          <ExternalLink href={github}>
            <FiGithub size="1.1rem" title="Github link" />
          </ExternalLink>
          <ExternalLink href={live}>
            <BsBoxArrowUpRight size="1.1rem" title="View link" />
          </ExternalLink>
        </div>
      </div>
      <ExternalLink href={live}>
        <motion.img
          whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
          className="md:max-w-60"
          src={imageSrc}
          alt={title}
        />
      </ExternalLink>
    </article>
  );
};

export default ProjectCard;
