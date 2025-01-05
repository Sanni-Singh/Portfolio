/* eslint-disable react/prop-types */
import {motion} from "framer-motion"

const Header = ({title}) => {
  return (
    <>
    <motion.h1
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ ease: "easeInOut", duration: 1, delay: 0.2 }}
        // exit={{ opacity: 0, y: 40 }}
        className=" w-[100%] text-3xl md:text-5xl lg:text-6xl xl:text-7xl text-center font-bold relative z-10 bg-clip-text text-transparent bg-gradient-to-b from-red-800 to-blue-900 px-8 py-4 sm:py-7 lg:py-10 tracking-widest"
      >
        {title}
      </motion.h1>
    </>
  )
}

export default Header