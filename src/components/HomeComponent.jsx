import { useEffect, useState, useMemo } from "react";
import { motion } from "framer-motion";
import CVDownLoad from './CVDownLoad'
import one from '../utils/image/one.gif'
import two from '../utils/image/two.gif'
import three from '../utils/image/three.gif'
import four from '../utils/image/four.gif'

let gif = [one,two,three,four];
let gifIdx = Math.floor(Math.random() * (gif.length - 1));
const HomeComponent = ()=>{

    const texts = useMemo(
        () => [
          "I'm Frontend Developer",
          "I'm Sanni",
          "How are you?",
          "Welcome to My Portfolio",
        ],
        []
      );
      const [displayedText, setDisplayedText] = useState("");
      const [currentTextIndex, setCurrentTextIndex] = useState(0);
      const [isDeleting, setIsDeleting] = useState(false);
      const [charIndex, setCharIndex] = useState(0);
    
      useEffect(() => {
        const handleTyping = () => {
          const currentText = texts[currentTextIndex];
          if (isDeleting) {
            if (charIndex > 0) {
              setDisplayedText(currentText.substring(0, charIndex - 1));
              setCharIndex(charIndex - 1);
            } else {
              setIsDeleting(false);
              setCurrentTextIndex((currentTextIndex + 1) % texts.length);
            }
          } else {
            if (charIndex < currentText.length) {
              setDisplayedText(currentText.substring(0, charIndex + 1));
              setCharIndex(charIndex + 1);
            } else {
              setTimeout(() => setIsDeleting(true), 2000);
            }
          }
        };
    
        const typingSpeed = isDeleting ? 50 : 150;
        const timer = setTimeout(handleTyping, typingSpeed);
    
        return () => clearTimeout(timer);
      }, [displayedText, isDeleting, charIndex, currentTextIndex, texts]);

      return(
        <section
        id="Home"
        className="min-h-screen flex items-center bg-radial-gradient text-white "
      >
        <div className="container mx-auto flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 flex justify-center cursor-pointer">
            <motion.img
              src={gif[2]}
              alt="Profile"
              className="sm:w-[300px] w-[250px] p-2 z-20 rounded-[50%]"
              initial={{ opacity: 0, rotateY: -90 }}
              animate={{ opacity: 1, rotateY: 0 }}
              exit={{ opacity: 0, rotateY: 90 }}
              whileHover={{ scale: 1.05 }}
              style={{ boxShadow: "0 0 100rem rgba(255, 255, 255, 0.2)" }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            />
          </div>
  
          <div className="md:w-1/2 text-center md:text-left  md:mb-0 flex flex-col gap-12">
            <motion.h1
              id="heading1"
              className="sm:text-5xl md:text-6xl leading-tight text-[30px] font-bold "
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeInOut" }}
            >
              <span className="font-FIra cursor-pointer">
                <span className="typing-effect">
                  Hey!<span className="text-red-600">(</span>
                  <span className="text-yellow-400">{displayedText}</span>
                  <span className="text-red-600">)</span>
                </span>
              </span>
            </motion.h1>
            <motion.a href="" download
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.6, ease: "easeIn" }}
            >
                <CVDownLoad />
            </motion.a>
          </div>
        </div>
      </section>
      )
    
    
    
}
export default HomeComponent;