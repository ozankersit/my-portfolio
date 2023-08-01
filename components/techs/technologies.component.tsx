import Stack from "./stack.component";

const Techs = () => {
  return (
    <div className="flex flex-col gap-10 justify-center items-center mt-20">
      <div>
        <span className="border-b-2 border-black text-4xl">My Tech Stack</span>
      </div>
      <div>
        <Stack />
      </div>
    </div>
  );
};

export default Techs;
