import SectionTabs from "./SectionTabs";
import SocialIcons from "./SocialIcons";

type PageLayoutType = {
  children: React.ReactNode;
};

const PageLayout: React.FC<PageLayoutType> = ({ children }) => {
  return (
    <div className="w-screen mx-auto">
      <div className="hidden md:flex">
        <SocialIcons className="fixed gap-y-8 left-10 flex-col justify-center items-center" />
        <div className="md:flex">
          <SectionTabs className="fixed gap-y-8 right-10 flex-col justify-center items-center" />
        </div>
      </div>
      {children}
    </div>
  );
};

export default PageLayout;
