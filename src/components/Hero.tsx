import { Link as ScrollLink } from "react-scroll";
import { motion } from "framer-motion";

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
      className="relative h-screen min-h-screen overflow-hidden"
    >
      <div className="flex flex-col justify-center h-screen">
        <>
          <motion.p
            variants={{
              hidden: { opacity: 0, y: -20 },
              visible,
            }}
            className="leading-8"
          >
            Hi, my name is
          </motion.p>
          <motion.h1
            variants={textVariants}
            className="pt-4 text-4xl font-semibold tracking-tight sm:text-6xl "
          >
            Mupa Nzaphila.
          </motion.h1>
          <motion.h2
            variants={textVariants}
            className="pt-4 text-4xl sm:text-6xl font-semibold text-gray-500"
          >
            A Frontend Engineer.
          </motion.h2>
          <motion.p variants={textVariants} className="pt-4 leading-8">
            I build responsive, accessible, interactive, and user-friendly
            websites and web applications.
          </motion.p>
          <motion.p variants={textVariants} className="flex pt-7 leading-8">
            <ScrollLink
              className="mr-3 text-sm border-2 border-primary-500 hover:bg-primary-500 text-primary-500 hover:text-primary-100 rounded-md p-3 font-normal leading-6 transition duration-150 ease-in-out cursor-pointer"
              to="about"
              smooth={true}
              duration={500}
              activeClass="active-link"
              spy={true}
            >
              About Me
            </ScrollLink>
            <ScrollLink
              className="text-sm border-2 border-primary-500 hover:bg-primary-500 text-primary-500 hover:text-primary-100 rounded-md p-3 font-normal leading-6 transition duration-150 ease-in-out cursor-pointer"
              to="projects"
              smooth={true}
              duration={500}
              activeClass="active-link"
              spy={true}
            >
              View Projects
            </ScrollLink>
          </motion.p>
        </>
        <motion.div
          variants={itemVariants}
          animate="scrollButton"
          className="absolute bottom-24 left-1/2 m-auto"
        >
          <div className="font-semibold border-2 border-primary-500 m-auto p-1 rounded-full">
            <span className="text-primary-500" aria-hidden="true">
              &darr;
            </span>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Hero;
