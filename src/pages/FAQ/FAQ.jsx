import {Accordion,AccordionHeader,AccordionBody} from '@material-tailwind/react'
import React from 'react'

function Icon({ id, open }) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2}
        stroke="currentColor"
        className={`${id === open ? "rotate-180" : ""} h-5 w-5 transition-transform`}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
      </svg>
    );
  }
function FAQ()
{
    const [open, setOpen] = React.useState(0);
 
    const handleOpen = (value) => setOpen(open === value ? 0 : value);

    const AccordianStyle='p-4 border border-t-0 border-l-0 border-r-0 border-b-3 border-gray-700'
    const AccordianHeaderStyle='text-white hover:text-[#9329FE] border-[#9328feaa]'
    const AccordianBodyStyle='text-white p-2'

    return(<>
    <div className='flex flex-col items-center justify-center w-full gap-3 p-5 h-fit'>
        <p className='text-4xl text-white theme'>FAQ</p>
    <div className='w-3/4'>
    
        
    <Accordion open={open === 1} icon={<Icon id={1} open={open} />} className={AccordianStyle}>
        <AccordionHeader onClick={() => handleOpen(1)} className={AccordianHeaderStyle}>What is Material Tailwind?</AccordionHeader>
        <AccordionBody className={AccordianBodyStyle}>
          We&apos;re not always in the position that we want to be at. We&apos;re constantly
          growing. We&apos;re constantly making mistakes. We&apos;re constantly trying to express
          ourselves and actualize our dreams.
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 2} icon={<Icon id={2} open={open} />} className={AccordianStyle}>
        <AccordionHeader onClick={() => handleOpen(2)} className={AccordianHeaderStyle}>
          How to use Material Tailwind?
        </AccordionHeader>
        <AccordionBody className={AccordianBodyStyle}>
          We&apos;re not always in the position that we want to be at. We&apos;re constantly
          growing. We&apos;re constantly making mistakes. We&apos;re constantly trying to express
          ourselves and actualize our dreams.
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 3} icon={<Icon id={3} open={open} />} className={AccordianStyle}>
        <AccordionHeader onClick={() => handleOpen(3)} className={AccordianHeaderStyle}>
          What can I do with Material Tailwind?
        </AccordionHeader>
        <AccordionBody className={AccordianBodyStyle}>
          We&apos;re not always in the position that we want to be at. We&apos;re constantly
          growing. We&apos;re constantly making mistakes. We&apos;re constantly trying to express
          ourselves and actualize our dreams.
        </AccordionBody>
      </Accordion>
    </div>
    </div>
    </>)
}
export default FAQ