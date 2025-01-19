import ImageSection from "./image-section.component";
import styles from "./main.module.scss";
import SocialSection from "./social-section.components";

const HeroSection = () => {
  return (
    <div className="flex md:flex-row flex-col max-w-5xl items-center md:gap-28 gap-10">
      <ImageSection imageSrc="/images/me.jpeg" />
      <div className="md:text-left text-center flex md:block flex-col items-center gap-5">
        <div className="text-3xl">
          <span>Hey! I am <span className="font-bold">Ozan Kersit</span></span>
          <span className={`${styles.wave} ml-2`}>👋</span>
        </div>
        <div className="text-2xl max-w-3xl ">
          I am a passionate and dedicated
          <span className="font-bold ml-2">Front-End Developer</span> based in
          Turkey, Istanbul. 📍
        </div>
        <SocialSection />
      </div>
    </div>
  );
};

export default HeroSection;
