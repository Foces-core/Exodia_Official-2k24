import xlmiddle from '../../assets/xs/xl-middle.svg'
import xrbottom from '../../assets/xs/xr-bottom.svg'
import xrtop from '../../assets/xs/xr-top.svg'
// import exodia from '../../assets/exodia.svg'
import forums from '../../assets/forums.svg'
// import Atropos from 'atropos/react';
import 'atropos/css'
import Atropos from 'atropos/react'
import { useCallback, useEffect } from 'react'
import Counter from '../../Componets/Counter'
// import rallax from 'rallax.js'
// import rolly from 'rolly.js'
// import 'rolly.js/dist/rolly.min.css'





function Home() {
  // useEffect(() => {
    
  //   const target=document.querySelector('.appX1')
  //   const parallax=rallax(target, {speed:3.0})
  //   const target2=document.querySelector('.appX2')
  //   const parallax2=rallax(target2, {speed:2.5})
  //   const target3=document.querySelector('.appX3')
  //   const parallax3=rallax(target3, {speed:2.0})
  // },[])



  return (
    <div className=" h-screen w-full bg-[#151515] " id='Home'>
{/* X blured */}
<div className='appX'>
    <img data-scene className='absolute bg-transparent top-60 right-96 appX1' src={xrtop} alt="x" />
    <img data-scene className='absolute bg-transparent top-80 left-64 appX2' src={xlmiddle} alt="x" /> 
    <img data-scene className='absolute bg-transparent top-96 right-14 appX3' src={xrbottom} alt="x" />
</div>
      {/* 
      <div className='flex justify-center w-2/4 h-auto '>
        <div className='relative theme text-[14rem] w-fit h-fit'>
          <p className={`absolute text-white z-10 -top-3 left-1  transition-transform duration-300 ease-in-out`}>exoDia</p>
          <p className={`absolute text-[#9329FE] z-0  transition-transform duration-300 ease-in-out`}>exoDia</p>
        </div> 
      </div> */}

{/* Forums */}
      <div className='flex justify-center w-full mt-12'><img src={forums} alt="forums" /></div> 
{/* Middle section */}

      <div className='w-full h-[60vh] flex justify-center items-center '>  
        <Atropos className='my-atropos' highlight={false}>
          <div className='flex items-center justify-center w-full h-full text-[14vw] theme'>

              <p className={`absolute text-white z-10 `} data-atropos-offset='0'>exoDia</p>
              <p className={`mr-2 mt-4 text-[#9329FE] `} data-atropos-offset='-3' >exoDia</p>

          </div>
        </Atropos>
      </div>
      <div className='flex justify-center w-full'>
        
        <Counter/>
      </div>




    </div>
  )
}

export default Home
