import { CardBody, CardContainer, CardItem } from "./ui/3d-card";

export default  function ThreeDCard({imgUrl,name,para,github,hosted}) {
  return (
    (<CardContainer className="inter-var sm:w-[400px] w-[100%]">
        <CardBody className=" relative group/card  hover:shadow-2xl hover:shadow-emerald-500/[0.1] bg-black border-white/[0.2]  w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
            <CardItem translateZ="50" className="text-xl font-bold text-center w-[100%]  text-white">{name}</CardItem>
            <CardItem as="p" translateZ="60" className="text-neutral-500 text-center w-[100%] text-sm max-w-sm mt-2 ">{para}</CardItem>
            <CardItem translateZ="100" className="w-full mt-4">
              <img src={imgUrl}
                height="1000"
                width="1000"
                className="h-60  w-full rounded-xl group-hover/card:shadow-xl"
                alt="thumbnail" />
            </CardItem>
            <div className="flex justify-between items-center mt-10">
                <a href={hosted}>
                  <CardItem translateZ={20} href={hosted} target="__blank" className="text-white bg-red-600 py-1 px-4 font-bold hover:bg-red-200 hover:text-black rounded-lg">Live</CardItem>
                </a>
               <a href={github}>
               <CardItem translateZ={20} as="button" className="text-white bg-blue-600 hover:bg-blue-400 hover:text-black py-1 px-4 font-bold  rounded-lg">Github</CardItem>
               </a>
            </div>
        </CardBody>
    </CardContainer>)
  );
}
