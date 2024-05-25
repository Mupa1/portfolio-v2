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
    <div className="bg-[url('/hero-bg.svg')] bg-opacity-50 bg-cover bg-no-repeat h-screen">
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
              <ExternalLink href="https://mupanzaphila.com/resume.pdf">
                <span className="mr-3 text-sm bg-primary-600 hover:bg-primary-500 text-primary-100  p-2 font-normal leading-6 transition duration-300 ease-in-out cursor-pointer">
                  Resume
                </span>
              </ExternalLink>
            </motion.p>
          </>
          <motion.div
            variants={itemVariants}
            animate="scrollButton"
            className="absolute bottom-24 left-1/2 m-auto"
          >
            <span className="text-primary-500 text-4xl" aria-hidden="true">
              &darr;
            </span>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default Hero;
