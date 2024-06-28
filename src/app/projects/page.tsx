import Heading from "@/components/Heading";
import ProjectCards from "@/components/ProjectsCard";
import { Badge } from "@/components/ui/badge";
import { Layers } from "lucide-react";

const projectsPage = () => {
  // PROJECTS DATA
  const Projects = [
    {
      title: "FindYourJob - A Job Portal",
      description:
        "FindYourJob is a job portal where user can search for jobs and apply for them. ",
      tags: ["Typescript", "Nextjs"],
      link: "",
    },
    {
      title: "QRide - A QR Code Enabled Bus information system",
      description:
        "Qride is an app where users can scan QR codes at bus stops and get bus information. ",
      tags: ["Typescript", "Nextjs"],
      link: "",
    },
    {
      title: "Connectify - A social media Platform",
      description:
        "FriendZ is a social media app where  user can Create, delete, like, comment Post. ",
      tags: ["Typescript", "Nextjs"],
      link: "",
    },
    {
      title: "OneTap- One Page many Links",
      description:
        "itZmyLink is a simple platform where user can create a personalized page to showcase all your social media profiles in one place. ",
      tags: ["Nextjs", "Typescript", "Shadcn Ui"],
      link: "",
    },
  
  ];

  return (
    // PROJECT PAGE
    <div className="h-full w-full relative flex flex-col items-start gap-5 overflow-hidden">
      <Badge className=" gap-2">
        <Layers className="h-5 w-5" />
        Projects
      </Badge>
      <div className="flex flex-col gap-3">
        <Heading>My Projects</Heading>

        <p className=" font-poppins text-lg w-full text-primary max-sm:text-base">
          I love to Build Cool Projects. Here, you&#x27;ll find a curated
          collection of my creative endeavors and technical projects. Each piece
          represents a journey of innovation, problem-solving, and continuous
          learning. Feel free to explore this showcase of my passion and
          expertise in action.
        </p>
      </div>

      <div className=" w-full flex flex-row flex-wrap gap-3 max-lg:flex-col">
        {Projects.map((val, indx) => {
          return <ProjectCards key={indx} value={val} />;
        })}
      </div>
    </div>
  );
};

export default projectsPage;
