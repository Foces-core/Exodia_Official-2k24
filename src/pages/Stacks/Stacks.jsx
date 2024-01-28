import { useEffect } from 'react';
import PopModel from '../../Componets/PopModel';
import stackbg from '../../assets/stack.svg';
import data from '../../Data.json';
import { useRecoilState } from 'recoil';
import { stackdetails } from '../../../recoil';
import Carousel from '../../Componets/Carousel';
import ProgressBar from '../../Componets/ProgressBar';


function Stacks() {
  const [stackData, setStackData] = useRecoilState(stackdetails);

  useEffect(() => {
    // Set the Recoil state with the data when the component mounts
    setStackData(data);
  }, []); // Empty dependency array ensures that this effect runs only once on mount

  console.log(stackData);

  return (
    <div className="relative z-0 flex items-center justify-center w-full h-screen overflow-hidden" id="Stacks">
      {/* ///////////////MID CONTENT////////////// */}
      <div className="flex flex-col h-[600px] w-[900px] items-center justify-center  ">
        <p className="theme text-8xl text-[#1D9D51] justify-center max-md:text-4xl">STACKS</p>
        <p className="mt-5 bg-[#1D9D51] rounded-lg text-white font-bold text-center text-lg max-sm:text-sm h-5 w-64 rounded-md font-medium sm:h-8 w-52">Choose your adventure !</p>
        {/* <div className="flex m-5 mt-28 gap-10">
          {stackData && stackData.Stack_name ? (
            stackData.Stack_name.map((item) => (
              <Folder key={item} name={item} />
            ))
          ) : (
            <p>loading</p>
          )}
        </div> */}
        <div className='flex flex-col mt-5 h-96 items-center max-md:w-full'>
          <Carousel/>
        </div>
        <div className='flex -mt-36 w-full justify-center -z-20'>
      <ProgressBar value={0.7}/>
      </div>
        <PopModel />
      </div>

      {/*////////////// BOTTOM //////////// */}
      <div>
        <img className="absolute top-[450px] left-40 scale-150 -z-10 max-md:top-52 left-7" src={stackbg} alt="" />
      </div>
    </div>
  );
}

export default Stacks;
