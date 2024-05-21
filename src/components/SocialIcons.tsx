import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import clsx from "clsx";

type SocialIconsTypes = { className?: string };

const SocialIcons: React.FC<SocialIconsTypes> = ({ className }) => {
  const socialIcons = [
    {
      id: "github",
      icon: <FaGithub className="text-primary-500 size-6" />,
      href: "https://github.com/Mupa1",
    },
    {
      id: "twitter",
      icon: <FaSquareXTwitter className="text-primary-500 size-6" />,
      href: "https://twitter.com/mupa_mmbetsa",
    },
    {
      id: "linkedin",
      icon: <FaLinkedin className="text-primary-500 size-6" />,
      href: "https://www.linkedin.com/in/mupa-nzaphila",
    },
  ];

  return (
    <ul
      className={clsx(
        className,
        "flex h-screen text-lg font-semibold leading-6",
      )}
    >
      {socialIcons.map((link) => (
        <li className="text-primary-500" key={link.id}>
          <a href={link.href} target="_blank" rel="noopener noreferrer">
            {link.icon}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default SocialIcons;
