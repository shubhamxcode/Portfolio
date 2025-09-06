import React from "react";
import GithubIcon from "../Icons/GithubIcon";
import LinkedinIcon from "../Icons/LinkedinIcon";
import InstagramIcon from "../Icons/InstagramIcon";
import TwitterIcon from "../Icons/TwitterIcon";
const ClickableIcon = props => {
  return (
    <a href={props.href} className="" target={"_blank"} rel="noreferrer">
      <props.Icon className={"w-5 h-5 text-gray-400 hover:text-AAsecondary fill-current hover:cursor-pointer"} />
    </a>
  );
};
const IconsData = [
  { href: "https://github.com/shubhamxcode", Icon: GithubIcon },
  { href: "https://www.linkedin.com/in/shubham-varshney-1b49b4294/", Icon: LinkedinIcon },
  { href: "https://www.instagram.com/titof_abdo/", Icon: InstagramIcon },
  { href: "https://x.com/shubhamXcode", Icon: TwitterIcon },
];

export default function Fotter(props: { hideSocialsInDesktop: boolean }) {
  return (
    <div className="bg-AAprimary flex flex-col justify-center items-center py-8 space-y-4">
      {/* // ? Reach me at */}
      <div className={`flex flex-row space-x-8 ${props.hideSocialsInDesktop ? "lg:hidden" : ""}`}>
        {IconsData.map((iconData, index) => {
          return <ClickableIcon key={index} href={iconData.href} Icon={iconData.Icon} />;
        })}
      </div>
      <div className="flex flex-col font-mono justify-center items-center text-gray-400 text-sm">
        <span className="sm:text-sm text-xs">
          Built by Shubham Varshney
        </span>
      </div>
    </div>
  );
}
