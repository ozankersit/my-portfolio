import WebDeveloperIcon from "@/icons/web-developer-icon.component";

const About = () => {
  return (
    <div
      className="mt-10 md:pb-0 pb-10 flex flex-wrap items-center bg-white w-screen shadow-sm justify-center"
      id="about"
    >
      <div>
        <WebDeveloperIcon />
      </div>
      <div className="flex flex-col flex-wrap justify-center xl:text-start text-center">
        <span className="font-black text-4xl">About Me</span>
        <span className="font-bold text-blue text-xl">
          Ozan Kersit / Front-End Web Developer
        </span>
        <span className="max-w-3xl">
          My goal is to improve myself as a front-end developer, to stay up to
          date by trying new technologies, to try to the end and develop my team
          together with myself.
        </span>
      </div>
    </div>
  );
};

export default About;
