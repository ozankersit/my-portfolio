import ProjectSection from "./project-section.component";
import NextjsIcon from "@/icons/nextjs-icon.component";
import TypeScriptIcon from "@/icons/typescript-icon.component";
import TailwindIcon from "@/icons/tailwind-icon.component";
import CssIcon from "@/icons/css-icon.component";
import SassIcon from "@/icons/sass-icon.component";
import AccountShopIcon from "@/icons/accountshop-icon.component";
import OzanKersitIcon from "@/icons/ozankersit-icon.component";
import QuizAppIcon from "@/icons/quiz-app-icon.component";

const accountShopTechs = [
  { id: 1, icon: <NextjsIcon /> },
  { id: 2, icon: <TypeScriptIcon /> },
  { id: 3, icon: <TailwindIcon /> },
  { id: 4, icon: <CssIcon /> },
];

const portfolioTechs = [
  { id: 1, icon: <NextjsIcon /> },
  { id: 2, icon: <TypeScriptIcon /> },
  { id: 3, icon: <TailwindIcon /> },
  { id: 4, icon: <SassIcon /> },
];

const quizAppTechs = [
  { id: 1, icon: <NextjsIcon /> },
  { id: 2, icon: <TypeScriptIcon /> },
  { id: 3, icon: <TailwindIcon /> },
];

const Projects = () => {
  return (
    <div className="mt-10 flex flex-col" id="projects">
      <div className="mr-auto ml-auto flex flex-col items-center">
        <span className="text-4xl underline">My Projects</span>
        <span className="text-blue text-2xl mt-6">Just click to view!</span>
      </div>
      <div className="flex md:flex-row flex-col gap-5 max-w-4xl">
      <ProjectSection
        projectIcon={<AccountShopIcon />}
        projectLink="https://accountshop.vercel.app/"
        projectName="Accountshop"
        projectTechs={accountShopTechs.map((item) => (
          <div key={item.id}>{item.icon}</div>
        ))}
      />
      <ProjectSection
        projectIcon={<OzanKersitIcon />}
        projectLink="https://ozankersit.vercel.app/"
        projectName="Ozan Kersit"
        projectTechs={portfolioTechs.map((item) => (
          <div key={item.id}>{item.icon}</div>
        ))}
      />
      <ProjectSection
        projectIcon={<QuizAppIcon />}
        projectLink="https://quiz-app-steel-chi.vercel.app/"
        projectName="Quiz App"
        projectTechs={quizAppTechs.map((item) => (
          <div key={item.id}>{item.icon}</div>
        ))}
      />
      </div>
    </div>
  );
};

export default Projects;
