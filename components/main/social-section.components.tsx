import GithubIcon from "@/icons/github-icon.component";
import  LinkedinIcon from "@/icons/linkedin-icon.component";
import Link from "next/link";
import React from "react";

const SocialSection = () => {
  return (
    <div className="flex items-center gap-5">
      <Link href={"https://www.linkedin.com/in/ozan-ker%C5%9Fit-5aa177232/"}>
       <LinkedinIcon/>
      </Link>
      <Link href={"https://github.com/ozankersit"}>
        <GithubIcon/>
      </Link>
    </div>
  );
};

export default SocialSection;
