import clsx from "clsx";

import { socialIcons } from "../../entities";
import ExternalLink from "./ExternalLink";

type SocialIconsTypes = { className?: string };

const SocialIcons: React.FC<SocialIconsTypes> = ({ className }) => {
  return (
    <ul
      className={clsx(
        className,
        "flex h-screen text-lg font-semibold leading-6"
      )}
    >
      {socialIcons.map((link) => (
        <li key={link.id}>
          <ExternalLink href={link.href}>{link.icon}</ExternalLink>
        </li>
      ))}
    </ul>
  );
};

export default SocialIcons;
