import MentorCard from "../../Componets/MentorCard";
import AshwinImg from "../../assets/Mentors/Ashwin Dev MP.png";
import MentorImg from "../../assets/Mentors/Mentors.svg";
import AromalImg from "../../assets/Mentors/aromal.png";
import JerilImg from "../../assets/Mentors/Jeril.png";

function Mentors() {
    return(
        <>
        {/* Screen Conatiner */}
        <div className="relative flex  justify-center max-[768px]:items-center h-fit my-14 max-[768px]:flex-col-reverse" id='Mentors'>
            {/* Cards Container */}
            <div className="flex flex-col items-center gap-20 px-[15vh] max-[428px]:px-6 max-[375px]:px-2 max-[768px]:w-full max-[768px]:px-12 max-[768px]:gap-32 my-10">
                <MentorCard Name="ASWIN DEV MP" Desc="Spark Playtime AR Competition Winner" Topic="Augmented Reality" Image={AshwinImg} Index={0} link="https://www.linkedin.com/in/aswin-dev-m-p-4206791b3?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"/>
                {/* Container to align odd card */}
                
                <MentorCard Name="AROMAL S SANTHOSH" Desc="SDE @IBM ISL [Data & AI ~ IBM watsonx] " Topic="Generative AI" Image={AromalImg} Index={1} link="https://www.linkedin.com/in/aromalsanthosh?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"/>
                
                
                <MentorCard Name="JERIL MONZI JACOB" Desc="Software Engineer @ Founding Minds Software Pvt Ltd" Topic="Game Development" Image={JerilImg} Index={2} link="https://www.linkedin.com/in/jerilmj?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"/>
            </div>
            {/* Heading */}
            <div className="relative w-14 max-[768px]:w-fit max-[768px]:h-fit max-[768px]:py-10">    
                <p className="absolute text-white rotate-90 text-8xl theme h-fit w-fit top-[50%] max-md:text-5xl max-md:mb-20 -right-[30vh] max-[768px]:rotate-0  max-[768px]:relative max-[768px]:right-0 max-[768px]:top-0 ">MENTORS</p>
            </div>
            {/* Mentors Background */}
            <img src={MentorImg} alt="" className="absolute bottom-1 z-0 w-full max-md:bottom-96"/>
        </div>
        
        </>
    );

}

export default Mentors;