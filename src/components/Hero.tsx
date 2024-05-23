import { motion } from "framer-motion";

import ExternalLink from "./ui/ExternalLink";

const Hero: React.FC = () => {
  const itemVariants = {
    initial: {
      x: -500,
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 1,
        staggerChildren: 0.1,
      },
    },
    scrollButton: {
      opacity: 0,
      y: 10,
      transition: {
        duration: 2,
        repeat: Infinity,
      },
    },
  };

  const visible = { opacity: 1, y: 0, transition: { duration: 1 } };

  const textVariants = {
    hidden: { opacity: 0, y: 10 },
    visible,
  };

  return (
    <motion.section
      id="hero"
      initial="hidden"
      animate="visible"
      exit={{ opacity: 0, transition: { duration: 5 } }}
      variants={{ visible: { transition: { staggerChildren: 0.3 } } }}
      className="relative h-screen min-h-screen overflow-hidden bg-transparent"
    >
      <div className="flex flex-col justify-center min-h-screen h-screen">
        <>
          <motion.p
            className="leading-8"
            variants={{
              hidden: { opacity: 0, y: -20 },
              visible,
            }}
          >
            Hi, my name is
          </motion.p>
          <motion.h1
            variants={textVariants}
            className="pt-4 text-4xl font-semibold tracking-tight sm:text-6xl"
          >
            Mupa Nzaphila.
          </motion.h1>
          <motion.h2
            variants={textVariants}
            className="pt-4 text-4xl sm:text-6xl font-semibold text-gray-400"
          >
            A Frontend Engineer.
          </motion.h2>
          <motion.p variants={textVariants}>
            I build responsive, accessible, interactive, and user-friendly
            websites and web applications.
          </motion.p>
          <motion.p variants={textVariants} className="flex pt-6 leading-8">
            <ExternalLink href="http://localhost:5173/resume.pdf">
              <div className="mr-3 text-sm border-2 border-primary-500 hover:bg-primary-600 text-primary-500 hover:text-primary-100 rounded-sm p-2 font-normal leading-6 transition duration-150 ease-in-out cursor-pointer">
                Resume
              </div>
            </ExternalLink>
          </motion.p>
        </>
        <motion.div
          variants={itemVariants}
          animate="scrollButton"
          className="absolute bottom-24 left-1/2 m-auto"
        >
          <span className="text-primary-600 text-4xl" aria-hidden="true">
            &darr;
          </span>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Hero;
