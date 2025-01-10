import {motion , useMotionTemplate , useMotionValue,animate} from "framer-motion"
import { useEffect, useState} from "react";

const COLOR = ["#13FFAA" , "#1E67C6","#CE84CF","#DD335C"]

const FooterComponent = ()=>{
    const color = useMotionValue(COLOR[0]);
    const backgroundImage = useMotionTemplate`radial-gradient(100% 100% at 50% 0%,#020617 50% , ${color})`
    const border = useMotionTemplate`1px solid ${color}`
    const borderShadow = useMotionTemplate`0px 4px 24px  ${color}`

    const [tarik, setTarik] = useState(new Date().toLocaleTimeString());
    useEffect(()=>{
        const timerFn = setInterval(()=>{
            setTarik(new Date().toLocaleTimeString());
        },1000);
        return () => clearInterval(timerFn);
    },[])
    

    useEffect(()=>{
        animate(color , COLOR,{
            ease:'easeInOut',
            duration:10,
            repeat:Infinity,
            repeatType:"mirror"
        })
    },[])
    return(
        <motion.section style={{
            backgroundImage,
            backgroundColor: 'transparent',
        }} className="relative flex  items-end h-[20rem] bg-transparent place-content-center overflow-hidden px-4  text-grey-200">

            <div className="text-white  w-screen bg-transparent flex justify-between items-center px-10 py-5">
                <div>
                    <h3 className="text-xl flex gap-2">Bihar,<span>India</span></h3>
                    <p>{tarik}</p>
                </div>
                <p className="flex justify-center items-center gap-3 text-xl">Made With 💓 by <span className="text-3xl text-bold">Sanniii</span></p>
                <a href="#Home">
                <motion.button style={{border,borderShadow}} className=" bg-gray-950/10 text-gray-50 transition-colours p-2 rounded-lg cursor-pointer hover:bg-gray-950/50">Back To Top</motion.button>
                </a>
            </div>

        </motion.section>
    )
}
export default FooterComponent;