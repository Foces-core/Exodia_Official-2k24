
import logo from '../assets/logo.svg';
import download from './../assets/downloadicon.svg'
function Topsect() {
  return (
    <div className='max-w-full pt-5 px-14 flex justify-between bg-transparent sticky top-0 max-sm:px-5'>
      
    <img className='max-h-10 bg-transparent sm:max-h-12' src={logo} alt="logo" />
    <button className='h-7 min-w-12 bg-white rounded-lg px-2 flex justify-evenly  font-semibold'><p className='max-sm:hidden'>Brousher</p> <img  className='bg-transparent' src={download} alt="" /></button>
    </div>
  )
}

export default Topsect
