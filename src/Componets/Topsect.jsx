
import logo from '../assets/logo.svg';
import download from './../assets/downloadicon.svg'
function Topsect() {
  return (
    <div className='w-full p-5 px-14 flex justify-between bg-transparent sticky top-0 '>
      
    <img className='h-10 bg-transparent' src={logo} alt="logo" />
    <button className='h-8 w-40 bg-white rounded-xl flex justify-evenly p-1 font-semibold'>Brousher <img  className='bg-transparent' src={download} alt="" /></button>
    </div>
  )
}

export default Topsect
