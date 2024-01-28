import MentorCard from "../../Componets/MentorCard";
import AshwinImg from "../../assets/Mentors/Ashwin Dev MP.png";
import MentorImg from "../../assets/Mentors/Mentors.svg";
import AromalImg from "../../assets/Mentors/Aromal.png";
import JerilImg from "../../assets/Mentors/Jeril.png";

function Mentors() {
    return(
        <>
        {/* Screen Conatiner */}
        <div className="relative flex  justify-center max-[768px]:items-center h-fit my-14 max-[768px]:flex-col-reverse" id='Mentors'>
            {/* Cards Container */}
            <div className="flex flex-col items-center gap-20 px-[15vh] max-[428px]:px-6 max-[375px]:px-2 max-[768px]:w-full max-[768px]:px-12 max-[768px]:gap-32 my-10">
                <MentorCard Name="ASWIN DEV MP" Desc="Spark Playtime AR Competition Winner" Topic="Augmented Reality" Image={AshwinImg} Index={0} />
                {/* Container to align odd card */}
                
                <MentorCard Name="AROMAL S SANTHOSH" Desc="SDE @IBM ISL [Data & AI ~ IBM watsonx] " Topic="Generative AI" Image={AromalImg} Index={1}/>
                
                
                <MentorCard Name="JERIL MONZI JACOB" Desc="Software Engineer @ Founding Minds Software Pvt Ltd" Topic="Game Development" Image={JerilImg} Index={2}/>
            </div>
            {/* Heading */}
            <div className="relative w-14 max-[768px]:w-fit max-[768px]:h-fit max-[768px]:py-10">    
                <p className="absolute text-white rotate-90 text-8xl theme h-fit w-fit top-[50%] max-md:text-5xl max-md:mb-20 -right-[30vh] max-[768px]:rotate-0  max-[768px]:relative max-[768px]:right-0 max-[768px]:top-0 ">MENTORS</p>
            </div>
            {/* Mentors Background */}
            <img src={MentorImg} alt="" className="absolute bottom-0 z-0 w-full max-[750px]:bottom-28"/>
        </div>
        
        </>
    );

}

export default Mentors;