import {
  css,
  graphql,
  html,
  js,
  nextjs,
  nodejs,
  react,
  redux,
  sass,
  sql,
  tailwind,
  ts,
} from "../assets";

const About = () => {
  const tech = {
    HTML: html,
    CSS: css,
    JavaScript: js,
    TypeScript: ts,
    React: react,
    NextJS: nextjs,
    TailwindCSS: tailwind,
    NodeJS: nodejs,
    SASS: sass,
    SQL: sql,
    Redux: redux,
    GraphQL: graphql,
  };

  return (
    <section id="about" className="flex flex-col justify-center h-screen">
      <h2 className="pt-4 text-4xl sm:text-6xl font-semibold text-gray-500">
        About Me
      </h2>
      <p className="py-4 leading-8">
        I am a Frontend Engineer based in Mannheim with 3+ years of experience
        building responsive, accessible, interactive, and user-friendly websites
        and web applications. My Interest in web development started in 2019
        when I decided to change careers from graphic design to web development.
        I've had the privilege of working at various startups including Kulima,
        Heycar, and Accure. Through this professional experience and my passion
        for continous learning, I've gaining proficiency in various technologies
        including:-
      </p>
      <div className="grid grid-cols-3 md:grid-cols-4 gap-y-3">
        {Object.entries(tech).map(([key, value]) => (
          <div
            key={key}
            className="flex flex-col justify-center rounded-md opacity-70 items-center h-28 w-28 bg-primary-900"
          >
            <img width={64} height={64} src={value} alt={key} />
            {key}
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;
