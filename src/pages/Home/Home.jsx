import xlmiddle from '../../assets/xs/xl-middle.svg'
import xrbottom from '../../assets/xs/xr-bottom.svg'
import xrtop from '../../assets/xs/xr-top.svg'
import exodia from '../../assets/exodia.svg'
import forums from '../../assets/forums.svg'
import Topsect from '../../Componets/Topsect'

function Home() {
  return (
    <div className=" h-screen w-full scr ">
{/* X blured */}
<div>
    <img className='absolute top-60 right-96 bg-transparent' src={xrtop} alt="x" />
    <img className='absolute top-80 left-64 bg-transparent' src={xlmiddle} alt="x" /> 
    <img className='absolute top-96 right-14 bg-transparent' src={xrbottom} alt="x" />
</div>


{/* Top section */}
<Topsect />

{/* left Navbar secton */}
<div className='fixed hidden max-sm:w-96 top-96 -left-32 h-10 flex text-[#9329FE] align-middle font-Inter font-medium  text-2xl -rotate-90 gap-8 cursor-pointer'>
<p className='hover:underline'>Contact</p>
<p className='hover:underline'>Mentors</p>
<p className='hover:underline'>Stacks</p>
<p className='hover:underline'>Home</p>
</div>
{/* Forums */}
   <div className='w-full flex justify-center mt-12'><img src={forums} alt="forums" /></div> 
{/* Middle section */}
<div className='flex mt-32 h-auto w-full justify-center'>
<img className='' src={exodia} alt="exodia" />
{/* Subtitle */}
{/* Timer */}
</div>






{/* //////////////////////////////// */}

    </div>
  )
}

export default Home
