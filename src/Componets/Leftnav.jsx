
function Leftnav() {
  return (
    <>
    <div className='fixed max-sm:w-96 top-96 -left-32 h-10 flex text-[#9329FE] align-middle  font-Inter font-medium  text-2xl -rotate-90 gap-8 cursor-pointer max-[768px]:hidden'>
      <p className='hover:underline opacity-45'>Contact</p>
      <p className='hover:underline opacity-45'>Mentors</p>
      <p className='hover:underline opacity-45'>Stacks</p>
      <p className='underline opacity-100'>Home</p>
    </div>
    <div className="hidden fixed px-4 bottom-6 w-[90%] h-10 z-50 left-[5%]   gap-5 rounded-lg justify-center items-center right-4 bg-[#6C6C6C80] max-[768px]:flex">
      <p className='relative max-[350px]:text-base   text-xl font-medium text-white before:absolute before:w-full before:h-[0.35rem] before:-bottom-4 before:rounded-md before:bg-[#9329FE] font-Inter'>Home</p>      
      <p className='text-xl  max-[350px]:text-base font-medium text-white font-Inter'>Stacks</p>
      <p className='text-xl  max-[350px]:text-base font-medium text-white font-Inter'>Mentors</p>
      <p className='text-xl  max-[350px]:text-base font-medium text-white font-Inter'>Contact</p>
    </div>
    </>
  )
}

export default Leftnav
