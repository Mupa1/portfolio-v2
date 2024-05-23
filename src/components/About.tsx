import { tech } from "../entities";

const About = () => {
  return (
    <section id="about" className="flex flex-col justify-center md:h-screen">
      <h2>About Me</h2>
      <p className="pb-4">
        I am a Frontend Engineer based in Mannheim with 3+ years of experience
        building responsive, accessible, interactive, and user-friendly websites
        and web applications. My Interest in web development started in 2019
        when I decided to change careers from graphic design to web development.
        I've had the privilege of working at various startups including Kulima,
        Heycar, and Accure. Through this professional experience and my passion
        for continous learning, I've gaining proficiency in various technologies
        including:-
      </p>
      <div className="flex flex-wrap justify-between gap-3">
        {Object.entries(tech).map(([key, value]) => (
          <div
            key={key}
            className="flex flex-col justify-center rounded-md items-center h-24 w-24 md:h-28 md:w-28 text-gray-400 bg-primary-900"
          >
            <img
              className="w-12 h-12 md:w-16 md:h-16 pb-1"
              src={value}
              alt={key}
            />
            {key}
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;
