import linkedinimg from "../assets/Mentors/linkedin.svg";
import { useEffect, useState } from "react";

function MentorCard( props)
{
 
    const [isMobile, setIsMobile] = useState(false);
    
    useEffect(() => {
        const handleResize = () => {
          setIsMobile(window.innerWidth <= 767);
        };
    
        window.addEventListener('resize', handleResize);
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, []);
        


    const load=['-right-12']
    return(
        <>
        <div className={"relative flex items-center z-10 w-[41vw] h-[25vh] max-[768px]:justify-normal max-[768px]:w-fit max-[550px]:h-[20vh] max-[428px]:w-full border border-[#9329FE] rounded-[17px] bg-black "+((props.Index%2==0 && !isMobile)?"justify-normal":"justify-end")} data-aos='fade-up'>
            {/* Image Section */}
            <div className={"bg-[#9329FE] w-[30vh] h-[30vh] max-[375px]:w-[18vh] max-[375px]:h-[18vh]  max-[550px]:w-[20vh] max-[550px]:h-[20vh] max-[428px]:left-3 max-[768px]:w-[28vh] max-[550px]:-top-8 max-[768px]:h-[28vh] rounded-full absolute max-[768px]:-top-16 max-[375px]:-top-5 max-[768px]:left-5  -top-[1.5vw] " + ((props.Index%2==0 && !isMobile)?"-left-[15vh]":"-right-[15vh]")}>
                <img src={props.Image} alt="" className="  h-[32.5vh] max-[768px]:h-[30.5vh] max-[550px]:h-[22.6vh]  w-[25h] grayscale  absolute -top-[2.6vh] rounded-b-full max-[375px]:h-[20.5vh] "/>
            </div>
            
            {/* Middle Section */}
            <div className="hidden max-[768px]:flex w-[28vh] h-[28vh]">
                 
            </div>
            <div className={"flex flex-col gap-2 max-[768px]:px-8  text-white max-[768px]:text-left "+((props.Index%2==0 && !isMobile)?"text-left pl-[16vh]":"text-right pr-[16vh]")}>
                <p className="text-[2vw] font-bold max-[768px]:text-[4vw] max-[550px]:text-lg max-[375px]:text-[4.1vw]">{props.Name}</p>
                <p className="max-[768px]:text-[2vw] max-[375px]:text-[3vw] ">{props.Desc}</p>
                <a className={"w-[3vh] flex max-[768px]:self-start  "+((props.Index%2==0 && !isMobile)?"":"self-end")}><img src={linkedinimg} alt="" className="cursor-pointer"/></a >
            </div>
            
            {/* Topic Section */}
            <div className={"absolute bg-[#1D9D51] h-[5vh] px-8 rounded-full  bottom-6 flex justify-center max-[768px]:-bottom-5  max-[768px]:left-6 items-center max-[428px]:left-3 max-[769px]:right-auto "+((props.Index%2==0 && !isMobile)?"-right-12":"-left-12")}>
                <p className="text-lg font-bold text-black max-[428px]:text-sm">{props.Topic}</p>
            </div>
        </div>
        </>
    );
}

export default MentorCard;