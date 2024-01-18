import MentorCard from "../../Componets/MentorCard";
import AshwinImg from "../../assets/Mentors/Ashwin Dev MP.png";
import MentorImg from "../../assets/Mentors/Mentors.svg";

function Mentors() {
    return(
        <>
        {/* Screen Conatiner */}
        <div className="relative flex justify-center h-screen my-14">
            {/* Cards Container */}
            <div className="flex flex-col items-center gap-20 px-[15vh]">
                <MentorCard Name="ASWIN DEV MP" Desc="Spark Playtime AR Competition Winner" Topic="Augmented Reality" Image={AshwinImg} Index={0}/>
                {/* Container to align odd card */}
                <div className="mr-[15vh]">
                <MentorCard Name="ASWIN DEV MP" Desc="Spark Playtime AR Competition Winner" Topic="Generative AI" Image={AshwinImg} Index={1}/>
                </div>
                
                <MentorCard Name="ASWIN DEV MP" Desc="Spark Playtime AR Competition Winner" Topic="Game Development" Image={AshwinImg} Index={2}/>
            </div>
            {/* Heading */}
            <div className="relative w-14">    
                <p className="absolute text-white rotate-90 text-8xl theme h-fit w-fit top-[50%] -right-[30vh]">MENTORS</p>
            </div>
            {/* Mentors Background */}
            <img src={MentorImg} alt="" className="absolute bottom-0 w-full"/>
        </div>
        
        </>
    );

}

export default Mentors;