import { SkillsInfo } from "../utils/constant";
import SkillsCard from "./SkillsCard";
import Header from './SkillsHeader'
const Skills = () => {
  return (
    <>
    
    <section id="Skills" className="w-[100%] h-screen mt-2 md:mt-12 md:pt-12  overflow-hidden">
    <Header title="SKILLS"/>

      <div className="text-white text-2xl font-bold flex flex-wrap gap-8   max-w-[900px] mx-auto justify-center items-center px-2 md:px-4 pt-8 md:pt-10 lg:pt-16 xl:pt-20">
        {SkillsInfo.map((item, idx) => (
          <SkillsCard key={idx} {...item} />
        ))}
      </div>
    </section>
    </>
  );
};

export default Skills;
