import xlmiddle from '../../assets/xs/xl-middle.svg'
import xrbottom from '../../assets/xs/xr-bottom.svg'
import xrtop from '../../assets/xs/xr-top.svg'
// import exodia from '../../assets/exodia.svg'
import forums from '../../assets/forums.svg'
// import Atropos from 'atropos/react';
import 'atropos/css'
// import { Box, Text } from '@antropos-ui/core';
// import { hover } from '@antropos-ui/core';



function Home() {
  return (
    <div className=" h-screen w-full bg-[#151515] ">
{/* X blured */}
<div>
    <img className='absolute top-60 right-96 bg-transparent' src={xrtop} alt="x" />
    <img className='absolute top-80 left-64 bg-transparent' src={xlmiddle} alt="x" /> 
    <img className='absolute top-96 right-14 bg-transparent' src={xrbottom} alt="x" />
</div>

{/* Forums */}
   <div className='w-full flex justify-center mt-12'><img src={forums} alt="forums" /></div> 
{/* Middle section */}

<div className='flex mt-24 h-auto w-2/4 justify-center'>
{/* <Box className='relative theme text-[14rem]'>
      <Text className={`absolute text-white z-10 -top-3 left-1 ${hover.scaleUp} transition-transform duration-300 ease-in-out`}>exoDia</Text>
      <Text className={`absolute text-[#9329FE] z-0 ${hover.scaleUp} transition-transform duration-300 ease-in-out`}>exoDia</Text>
    </Box> */}
</div>
    </div>
  )
}

export default Home
