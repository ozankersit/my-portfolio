import Link from "next/link";
import { FC } from "react";

interface IProps {
  projectLink: string;
  projectName: string;
  projectTechs: Array<any>;
  projectIcon: any;
}

const ProjectSection: FC<IProps> = ({
  projectLink,
  projectName,
  projectTechs,
  projectIcon,
}) => {
  return (
    <Link href={`${projectLink}`}>
      <div className="flex gap-10 items-center xl:justify-between justify-center mt-10 bg-white p-5 rounded-xl transition duration-300 ease-in-out hover:scale-110 flex-wrap">
        <div>{projectIcon}</div>
        <div className="mb-auto mt-5">
          <div className="flex flex-col gap-1">
            <div className="flex flex-col xl:justify-between justify-center text-center">
              <span className="text-xl font-bold">{`${projectName}`}</span>
              <span className="font-medium text-lg underline">
                Technologies:
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
