import { PropsWithChildren } from "react";
import { IconContext } from "react-icons";

import SectionTabs from "../ui/SectionTabs";
import SocialIcons from "../ui/SocialIcons";

const PageLayout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <IconContext.Provider value={{ size: "1.5rem" }}>
      <div className="w-screen mx-auto">
        <div className="hidden md:flex">
          <SocialIcons className="fixed z-10 h-screen gap-y-8 left-10 flex-col justify-center items-center" />
          <div className="md:flex">
            <SectionTabs className="fixed z-10 gap-y-8 right-10 flex-col justify-center items-center" />
          </div>
        </div>
        {children}
      </div>
    </IconContext.Provider>
  );
};

export default PageLayout;
