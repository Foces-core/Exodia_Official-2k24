import Folder from "../../Componets/Folder"
import PopModel from "../../Componets/PopModel"
import stackbg from "../../assets/stack.svg"

function Stacks() {
  
  return (
    <div className='relative z-0 flex items-center justify-center w-full h-screen overflow-hidden ' id="Stacks">
      {/* ///////////////MID CONTENT////////////// */}
       <div className="flex flex-col h-[600px] w-[900px] items-center justify-center ">
        <p className="theme text-8xl text-[#1D9D51] justify-center">STACKS</p>
        <p className="mt-5 bg-[#1D9D51] rounded-lg w-96 h-8 text-white font-bold text-center text-lg">Choose your adventure !</p>
      <div className="flex m-5 mt-28 gap-10">
        <Folder name="Generative AI"/>
      <Folder name="Augmented Reality"/>
      <Folder name="Game Development" />
      </div>  
      <PopModel/>
       </div>
      
      {/*////////////// BOTTOM //////////// */}
      <div><img className="absolute top-[450px] left-40 scale-150 -z-10" src={stackbg} alt="" /></div>
 
    </div>
  )
}

export default Stacks
