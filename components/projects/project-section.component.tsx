import Link from "next/link";
import { FC } from "react";

interface IProps {
  projectLink: string;
  projectTechs: Array<any>;
  projectIcon: any;
}

const ProjectSection: FC<IProps> = ({
  projectLink,
  projectTechs,
  projectIcon,
}) => {
  return (
    <Link target="_blank" href={`${projectLink}`}>
      <div className="flex gap-10 items-center xl:justify-between justify-center pb-10 bg-white p-5 rounded-xl transition duration-300 ease-in-out hover:scale-105 flex-wrap h-full group">
        <div className="mx-auto">{projectIcon}</div>
        <div className="mb-auto mt-5 mx-auto">
          <div className="flex flex-col gap-1">
            <div className="flex flex-col xl:justify-between justify-center text-center">
              <span className="font-medium text-lg underline">
                <span className="relative inline-block">
                  Technologies:
                  <span className="absolute left-0 bottom-0 h-[1px] rounded-lg bg-black w-0 transition-all duration-300 group-hover:w-full"></span>
                </span>
              </span>
            </div>

            <div className="mt-5">
              <div className="flex flex-wrap max-w-[150px] gap-5 justify-center">
                {projectTechs}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProjectSection;
