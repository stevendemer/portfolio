import Link from "next/link";
import { BsLinkedin, BsGithub } from "react-icons/bs";

const paths = [
  {
    name: "Projects",
    path: "/projects",
  },
  {
    name: "About",
    path: "/about",
  },
  {
    name: "Contact me",
    path: "/contact",
  },
];

const Header = () => {
  return (
    <div className="w-full flex justify-around items-center p-2 border-b-[1px] border-slate-300">
      <h2 className="text-2xl mx-10 leading-8 w-full cursor-pointer inline-block whitespace-nowrap p-2 ">
        Steven Demertzis
      </h2>
      <div className="container space-x-6 text-slate-100 items-center lg:flex hidden">
        {paths.map((path, idx) => (
          <div
            className="group text-lg text-slate-200 font-semibold transition duration-300 ease-in link-underline link-underline-black"
            key={idx}
          >
            <Link href={path.path}>{path.name}</Link>
          </div>
        ))}
      </div>
      <div className="w-full space-x-6 flex items-center">
        <Link legacyBehavior href="https://github.com/stevendemer">
          <a target="_blank" rel="noopener noreferrer">
            <BsGithub />
          </a>
        </Link>
        <Link
          legacyBehavior
          href="https://www.linkedin.com/in/steven-demertzis-5931571a6"
        >
          <a target="_blank" rel="noopener noreferrer">
            <BsLinkedin className="text-blue-500" />
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Header;
