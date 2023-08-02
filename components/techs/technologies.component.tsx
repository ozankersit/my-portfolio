import Stack from "./stack.component";

const Techs = () => {
  return (
    <div className="flex flex-col gap-10 justify-center items-center mt-20">
      <div>
        <span className="text-4xl underline">My Tech Stack</span>
      </div>
      <div>
        <Stack />
      </div>
    </div>
  );
};

export default Techs;
