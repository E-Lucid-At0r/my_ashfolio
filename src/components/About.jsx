import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { AiOutlinePlayCircle } from 'react-icons/ai';

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450
          }}
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        >
          <img src={icon} alt={title} className="w-16 h-16 object-contain" />
          <h3 className="text-white text-[20px] font-bold text-center">{title}</h3>
        </div>
      </motion.div>
    </Tilt>
  )
}

const About = () => {
  const MyButton = () => {
    return (
      <motion.button
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-10 flex items-center bg-tertiary hover:bg-secondary text-white font-bold py-2 px-4 rounded"
        onClick={() => window.open("https://drive.google.com/file/d/1VifmYSrBsLZgq5bvEyQY9oMptpJiHs4q/view?usp=sharing", "_blank")}
      >
        <AiOutlinePlayCircle className="mr-2" />
        <span>Resume</span>
      </motion.button>
    );
  };
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        I am a passionate game developer with a strong focus on creating immersive experiences using Unreal Engine 5.2. With two years of experience in the industry, I have honed my skills and developed a deep understanding of the engine's capabilities and its potential for pushing the boundaries of gaming. <br className="sm:block hidden" />
        As a game developer, I thrive in collaborative environments and have proven myself to be a valuable asset in team settings. I am well-versed in working with multidisciplinary teams, including artists, designers, and programmers, to bring innovative game concepts to life. Through effective communication and a cooperative mindset, I strive to foster an environment that promotes creativity, productivity, and ultimately, the delivery of high-quality games.
      </motion.p>
        <MyButton />
      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(About, "about")