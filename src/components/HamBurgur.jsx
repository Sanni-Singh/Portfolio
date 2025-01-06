import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons/faHouse";
import { faAddressBook } from "@fortawesome/free-solid-svg-icons";
import { faUserGraduate } from "@fortawesome/free-solid-svg-icons";
import { faComputer } from "@fortawesome/free-solid-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons/faGithub";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons/faLinkedin";

let arr = [faHouse , faUserGraduate , faComputer,faAddressBook]
let val = false;
export default function Variantss() {
    const [isOpen, setIsOpen] = useState(false);
    val = isOpen;
    const containerRef = useRef(null);
    const { height } = useDimensions(containerRef);

    return (
        <div>
            <div style={container} className={` ${isOpen ? "w-[350px] h-[100vh]" :  "w-[100px] h-[100px]"}`}>
                <motion.nav
                    initial={false}
                    animate={isOpen ? "open" : "closed"}
                    custom={height}
                    ref={containerRef}
                    style=""
                    className=""
                >
                    <motion.div  style={background} variants={sidebarVariants}></motion.div>
                    <Navigation />
                    
                    <MenuToggle toggle={() => setIsOpen(!isOpen)} />
                        
                </motion.nav>
            </div>
        </div>
    );
}

const navVariants = {
    open: {
        transition: { staggerChildren: 0.07, delayChildren: 0.2 },
    },
    closed: {
        transition: { staggerChildren: 0.05, staggerDirection: -1 },
    },
};

const Navigation = () => (
    <motion.ul className="  flex flex-col gap-8" style={list} variants={navVariants}>
        {["Home" , "Skills", "Projects", "Contact"].map((ele ,i) => (
            <MenuItem val ={ele} idx ={i} key={i} />
        ))}
         {/* {val && <div className=" flex gap-8 justify-end">
            <a href=""><FontAwesomeIcon icon={faGithub} style={{color:"#FF008C" ,fontSize:"30px"}}/></a>
            <a href=""><FontAwesomeIcon icon={faLinkedin} style={{color:"#9C1AFF" ,fontSize:"30px"}}/></a>
            <a href=""><FontAwesomeIcon icon={faTwitter} style={{color:"#7700FF" ,fontSize:"30px"}}/></a>
        </div>} */}
         {val && <motion.div  variants={itemVariants} className=" flex gap-8 justify-end">
                <a href="https://github.com/Sanni-Singh"><FontAwesomeIcon icon={faGithub} style={{color:"#FF008C" ,fontSize:"30px"}} bounce/></a>
                <a href="https://www.linkedin.com/in/sanni07/"><FontAwesomeIcon icon={faLinkedin} style={{color:"#9C1AFF" ,fontSize:"30px"}} shake/></a>
                <a href=""><FontAwesomeIcon icon={faTwitter} style={{color:"#7700FF" ,fontSize:"30px"}} fade/></a>
            </motion.div>}
    </motion.ul>
);

const itemVariants = {
    open: {
        y: 0,
        opacity: 1,
        transition: {
            y: { stiffness: 1000, velocity: -100 },
        },
    },
    closed: {
        y: 50,
        opacity: 0,
        transition: {
            y: { stiffness: 1000 },
        },
    },
};

const colors = ["#FF008C", "#D309E1", "#9C1AFF", "#7700FF", "#4400FF"];
const MenuItem = ({ val , idx}) => {
    const border = `2px solid ${colors[idx]}`;
    return (
        <motion.li
            style={listItem}
            variants={itemVariants}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
        >
            
            
            <a href={`#${val}`}>
            <div className="" style={{ ...iconPlaceholder, border , backgroundColor:`${colors[idx]}` , color:"white"}}>
                <FontAwesomeIcon icon={arr[idx]} style={{fontSize:"30px"}}/>
             </div>
            </a>

            <a href={`#${val}`}>
            <div style={{ ...textPlaceholder, border , backgroundColor:`${colors[idx]}` , color:"white" , fontSize:"1.5rem" , fontWeight:"700"}} >
                <p className="">{val}</p>
            </div>
            </a>
        </motion.li>
    );
};

const sidebarVariants = {
    open: (height = 1000) => ({
        clipPath: `circle(${height * 2 + 200}px at 100% 40px)`,
        transition: {
            type: "spring",
            stiffness: 20,
            restDelta: 2,
        },
    }),
    closed: {
        clipPath: "circle(30px at 100% 40px)",
        transition: {
            delay: 0.2,
            type: "spring",
            stiffness: 400,
            damping: 40,
        },
    },
};

const Path = (props) => (
    <motion.path
        fill="transparent"
        strokeWidth="3"
        stroke="hsl(0, 0%, 18%)"
        strokeLinecap="round"
        {...props}
    />
);

const MenuToggle = ({ toggle }) => (
    <button style={toggleContainer} onClick={toggle}>
        <svg width="39" height="53" fill="white" viewBox="0 0 23 23">
            <Path
            stroke="#FF008C" 
                variants={{
                    closed: { d: "M 2 2.5 L 20 2.5" },
                    open: { d: "M 3 16.5 L 17 2.5" },
                }}
            />
            <Path
            stroke="#9C1AFF" 
                d="M 2 9.423 L 20 9.423"
                variants={{
                    closed: { opacity: 1 },
                    open: { opacity: 0 },
                }}
                transition={{ duration: 0.1 }}
            />
            <Path
            stroke="#4400FF" 
                variants={{
                    closed: { d: "M 2 16.346 L 20 16.346" },
                    open: { d: "M 3 2.5 L 17 16.346" },
                }}
            />
        </svg>
    </button>
);


const container = {
    position: "fixed",
    top:"0",
    right:"0",
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "stretch",
    flex: 1,
    // width: 100,
    maxWidth: "100%",
    // height:100,
    borderRadius: 20,
    overflow: "hidden",
};


const background = {
    backgroundColor: "#f5f5f5",
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
};

const toggleContainer = {
    outline: "none",
    border: "none",
    WebkitUserSelect: "none",
    MozUserSelect: "none",
    cursor: "pointer",
    position: "absolute",
    top: 18,
    right: 15, // Changed to top-right corner
    width: 50,
    height: 50,
    borderRadius: "50%",
    background: "transparent",
    // color: "red",
};

const list = {
    listStyle: "none",
    padding: 25,
    margin: 0,
    position: "absolute",
    top: 80,
    right:10,
    width: 330,
    
};

const listItem = {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: 0,
    margin: 0,
    listStyle: "none",
    marginBottom: 20,
    cursor: "pointer",
};

const iconPlaceholder = {
    width: 60,
    height: 60,
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    borderRadius: "50%",
    marginRight: 20,
};

const textPlaceholder = {
    borderRadius: 5,
    width: 150,
    height: 50,
    display:"flex",
    alignItems:"center",
    flex: 1,
    fontSize:"1.5rem",
    justifyContent:"center",
    // backgroundColor:`${backgroundColor}`,
};
const useDimensions = (ref) => {
    const dimensions = useRef({ width: 0, height: 0 });

    useEffect(() => {
        if (ref.current) {
            dimensions.current.width = ref.current.offsetWidth;
            dimensions.current.height = ref.current.offsetHeight;
        }
    }, [ref]);

    return dimensions.current;
};

