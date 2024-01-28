import {Accordion,AccordionHeader,AccordionBody} from '@material-tailwind/react'
import React from 'react'
import FAQimg from '../../assets/Faq.svg'

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
    const AccordianBodyStyle='text-white text-md font-semibold p-2'

    return(
    
        <div className='relative flex flex-col items-center justify-center w-full h-screen gap-3 p-3'>
        <p className='text-8xl text-white theme max-md:text-5xl'>FAQ</p>
       <div className='z-10 w-3/4 mt-5 '>
    
        
       <Accordion open={open === 1} icon={<Icon id={1} open={open} />} className={AccordianStyle} data-aos='fade-up' data-aos-duration={250}> 
        <AccordionHeader onClick={() => handleOpen(1)} className={AccordianHeaderStyle}> Is it an offline or online event?</AccordionHeader>
        <AccordionBody className={AccordianBodyStyle}>
        It is a 2-day offline event
        </AccordionBody>
       </Accordion>

       <Accordion open={open === 2} icon={<Icon id={2} open={open} />} className={AccordianStyle} data-aos='fade-up' data-aos-duration={250} data-aos-delay={250}>
        <AccordionHeader onClick={() => handleOpen(2)} className={AccordianHeaderStyle}>
        Will there be accommodation?
        </AccordionHeader>
        <AccordionBody className={AccordianBodyStyle}>
        Accommodation will be provided if requested. The participant needs to pay the fees for it.
        </AccordionBody>
       </Accordion>

        <Accordion open={open === 3} icon={<Icon id={3} open={open} />} className={AccordianStyle} data-aos='fade-up' data-aos-duration={250} data-aos-delay={500}>
        <AccordionHeader onClick={() => handleOpen(3)} className={AccordianHeaderStyle}>
        Do I need to bring a laptop?
        </AccordionHeader>
        <AccordionBody className={AccordianBodyStyle}>
        You are requested to bring a laptop for a smooth experience of the workshops by working with the mentor live at the session.
        </AccordionBody>
        </Accordion>

        <Accordion open={open === 4} icon={<Icon id={4} open={open} />} className={AccordianStyle} data-aos='fade-up' data-aos-duration={250} data-aos-delay={500}>
        <AccordionHeader onClick={() => handleOpen(4)} className={AccordianHeaderStyle}>
        Will meals be provided during the event?
        </AccordionHeader>
        <AccordionBody className={AccordianBodyStyle}>
        Yes, meals and refreshments will be provided throughout the duration of the event, including lunch and coffee breaks
        </AccordionBody>
          </Accordion>


          <Accordion open={open === 5} icon={<Icon id={5} open={open} />} className={AccordianStyle} data-aos='fade-up' data-aos-duration={250} data-aos-delay={500}>
          <AccordionHeader onClick={() => handleOpen(5)} className={AccordianHeaderStyle}>
          Can I register on the day of the event? 
          </AccordionHeader>
          <AccordionBody className={AccordianBodyStyle}>
          There will be no spot registration for the event. 
          </AccordionBody>
          </Accordion>

          <Accordion open={open === 6} icon={<Icon id={6} open={open} />} className={AccordianStyle} data-aos='fade-up' data-aos-duration={250} data-aos-delay={500}>
          <AccordionHeader onClick={() => handleOpen(6)} className={AccordianHeaderStyle}>
          Will there be any social activities or entertainment during the event?
          </AccordionHeader>
          <AccordionBody className={AccordianBodyStyle}>
          Yes, there will be cultural, networking, and dinner in the event.
          </AccordionBody>
          </Accordion>

          <Accordion open={open === 7} icon={<Icon id={7} open={open} />} className={AccordianStyle} data-aos='fade-up' data-aos-duration={250} data-aos-delay={500}>
          <AccordionHeader onClick={() => handleOpen(7)} className={AccordianHeaderStyle}>
          Can I request a refund if I&apos;m unable to attend after registering?
          </AccordionHeader>
          <AccordionBody className={AccordianBodyStyle}>
          No, refunds will not be available for registrations after the registration process is complete.
          </AccordionBody>
          </Accordion>

        </div>
        <img src={FAQimg} alt="" className='absolute w-full h-[50%] bottom-14 z-0'/>
      </div>
    ) 
}
export default FAQ