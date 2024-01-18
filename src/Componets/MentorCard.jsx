import linkedinimg from "../assets/Mentors/linkedin.svg";

function MentorCard( props)
{
    return(
        <>
        <div className="relative flex justify-center items-center w-[41vw] h-[25vh] border border-[#9329FE] rounded-[17px] bg-black">
            {/* Image Section */}
            <div className={"bg-[#9329FE] w-[30vh] h-[30vh] rounded-full absolute  -top-[1.5vw] " + ((props.Index%2==0)?"-left-[15vh]":"-right-[15vh]")}>
                <img src={props.Image} alt="" className=" w-[500vh] h-[32.5vh] grayscale  absolute -top-[2.6vh] rounded-b-full"/>
            </div>
            
            {/* Middle Section */}
            <div className={"flex flex-col gap-2  text-white "+((props.Index%2==0)?"text-left":"text-right")}>
                <p className="text-5xl font-bold">{props.Name}</p>
                <p>{props.Desc}</p>
                <a className={"w-[3vh] flex "+((props.Index%2==0)?"":"self-end")}><img src={linkedinimg} alt=""/></a >
            </div>
            
            {/* Topic Section */}
            <div className={"absolute bg-[#1D9D51] h-[5vh] px-8 rounded-full  bottom-6 flex justify-center items-center "+((props.Index%2==0)?"-right-8":"-left-8")}>
                <p className="text-lg font-bold text-black ">{props.Topic}</p>
            </div>
        </div>
        </>
    );
}

export default MentorCard;