import styles from "./main.module.scss";

const MainText = () => {
  return (
    <>
      <div className="text-3xl text-center">
        Hey! I am <span className="font-bold">Ozan Kersit</span>{" "}
        <span className={`${styles.wave}`}>👋</span>
      </div>
      <div className="text-2xl max-w-3xl text-center">
        I am a passionate and dedicated{" "}
        <span className="font-bold">Front-End Developer</span> based in Turkey,
        Istanbul. 📍
      </div>
    </>
  );
};

export default MainText;
