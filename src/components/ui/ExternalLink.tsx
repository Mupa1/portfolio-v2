import { PropsWithChildren } from "react";

type PageLayoutType = {
  href: string;
};

const ExternalLink: React.FC<PropsWithChildren<PageLayoutType>> = ({
  children,
  href,
}) => {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  );
};

export default ExternalLink;
