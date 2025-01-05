import { useEffect, useState } from "react";
import Variantss from "./HamBurgur";
const HeaderComponent = ()=>{

    const [bgVal ,setBgVal] = useState(false);
    const bgFn = ()=>{
        if(window.scrollY > 0) setBgVal(true);
        else setBgVal(false);
    }
    useEffect(()=>{
        window.addEventListener('scroll',bgFn);
        return ()=> window.removeEventListener('scroll',bgFn)
    },[])
    return(
        
        <div className={`w-[100%] fixed top-0 left-0 z-30 flex justify-between ${bgVal ? 'backdrop-blur-lg bg-opacity-50' : 'bg-transparent'}`}>
            <div className="flex items-center gap-4 py-2 px-8  " >
                <img className="w-[70px] bg-white rounded-[50%] p-1"  src="../public/HeaderGif.gif" alt="" />
                <p className="text-3xl font-bold text-white">Sanni Kumar</p>
            </div>
            <div className="flex justify-center items-center px-8">
                <Variantss />
            </div>
        </div>
    )
}
export default HeaderComponent;