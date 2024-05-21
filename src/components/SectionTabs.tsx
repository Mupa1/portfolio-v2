import { Link as ScrollLink } from "react-scroll";
import clsx from "clsx";

type SectionTabsTypes = { className?: string };

const SectionTabs: React.FC<SectionTabsTypes> = ({ className }) => {
  const navigation = [
    { name: "Hero", href: "hero" },
    { name: "About", href: "about" },
    { name: "Projects", href: "projects" },
    { name: "Contact", href: "contact" },
  ];

  return (
    <div
      className={clsx(
        className,
        "flex h-screen text-lg font-semibold leading-6",
      )}
    >
      {navigation.map((item) => (
        <ScrollLink
          key={item.name}
          to={item.href}
          smooth={true}
          duration={500}
          className="text-sm font-normal w-6 h-6 border-solid border-2 border-primary-500 rounded-full leading-6 transition duration-150 ease-in-out cursor-pointer"
          activeClass="active-progress"
          spy={true}
        ></ScrollLink>
      ))}
    </div>
  );
};

export default SectionTabs;
