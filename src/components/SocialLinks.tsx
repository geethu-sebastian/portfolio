import { cn } from "@/lib/utils";
import {Linkedin, Twitter, ExternalLink,Github  } from "lucide-react";
import { buttonVariants } from "./ui/button";
import Link from "next/link";

const SocialLinks = () => {
  const links = [
    { name: "Twitter", link: "https://x.com/geethugsp", icon: <Twitter /> },
    { name: "Linkedin", link: "https://www.linkedin.com/in/geethu-sebastian/", icon: <Linkedin /> },
    { name: "Github", link: "https://github.com/geethu-sebastian", icon: <Github /> },
  ];
  return (
    <>
      {links.map((itm, indx) => {
        return (
          <Link key={indx} target="blank"
            href={itm.link}
            className={cn(buttonVariants({ variant: "outline", size: "icon" }))}
          >{itm.icon}</Link>
        );
      })}
    </>
  );
};

export default SocialLinks;
