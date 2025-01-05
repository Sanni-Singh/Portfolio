/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
const SkillsCard = ({name, Logo}) => {
  return (
    <div className="relative   bg-white text-black rounded-md flex justify-center gap-2 md:gap-3 lg:gap-4 items-center px-1.5 sm:px-3 h-12 lg:h-16 gh-regular hover:bg-transparent hover:text-white transition-all duration-300 ease-in-out cursor-pointer">
      <motion.p 
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ ease: "easeInOut", duration: 1, delay: 0.2 }}
      // exit={{ opacity: 0, y: 40 }}
      className="text-xl sm:text-2xl font-bold"  >
        {name}
      </motion.p>
      <motion.img src={Logo} alt="skills"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ ease: "easeInOut", duration: 1, delay: 0.2 }}
        className="w-6 sm:w-8" />
    </div>
  )
}

export default SkillsCard