import { Link as ScrollLink } from "react-scroll";
import clsx from "clsx";

import { sectionNavLinks } from "../../entities";

type SectionTabsTypes = { className?: string };

const SectionTabs: React.FC<SectionTabsTypes> = ({ className }) => {
  return (
    <div
      className={clsx(
        className,
        "flex h-screen text-lg font-semibold leading-6",
      )}
    >
      {sectionNavLinks.map((item) => (
        <ScrollLink
          key={item.name}
          to={item.href}
          smooth={true}
          duration={500}
          className="text-sm font-normal w-6 h-6 border-solid border-2 border-primary-50 rounded-full leading-6 transition duration-150 ease-in-out cursor-pointer"
          activeClass="active-progress"
          spy={true}
        ></ScrollLink>
      ))}
    </div>
  );
};

export default SectionTabs;
