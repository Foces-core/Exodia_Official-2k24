
import logo from '../assets/logo.svg';
import download from './../assets/downloadicon.svg'
function Topsect() {
  return (
    <div className='sticky top-0 z-20 flex justify-between max-w-full pt-5 bg-transparent px-14 max-sm:px-5'>
      
    <img className='bg-transparent max-h-10 sm:max-h-12' src={logo} alt="logo" />
    <button className='flex px-2 font-semibold bg-white rounded-lg h-7 min-w-12 justify-evenly'><p className='max-sm:hidden'>Brousher</p> <img  className='bg-transparent' src={download} alt="" /></button>
    </div>
  )
}

export default Topsect
