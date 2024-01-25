
import logo from '../assets/logo.svg';
import download from './../assets/downloadicon.svg'
function Topsect() {
  return (
    <div className='max-w-full pt-5 px-5 flex justify-between bg-transparent sticky top-0 '>
      
    <img className='max-h-6 bg-transparent sm:max-h-8' src={logo} alt="logo" />
    <button className='h-6 min-w-12 bg-white rounded-lg px-2 flex justify-evenly  font-semibold'><p className='max-sm:hidden'>Brousher</p> <img  className='bg-transparent' src={download} alt="" /></button>
    </div>
  )
}

export default Topsect
