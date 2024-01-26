import React, { useEffect, useState } from 'react';

function Leftnav() {
  const sectionIds = ["Contacts","Mentors", "Stacks", "Home"];
  const [activeSection, setActiveSection] = useState(sectionIds[0]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0 ,rootMargin: "-50% 0% -50% 0%"}
    );

    sectionIds.forEach(id => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => {
      sectionIds.forEach(id => {
        const element = document.getElementById(id);
        if (element) observer.unobserve(element);
      });
    };
  }, [sectionIds]);

  return (
      <>
      <div className='fixed max-sm:w-96 top-80 -left-32 h-10 flex text-[#9329FE] align-middle  font-Inter font-medium  text-2xl -rotate-90 gap-8 cursor-pointer max-[768px]:hidden'>
        {sectionIds.map(id => (
          <a
            key={id}
            href={`#${id}`}
            className={`hover:underline ${activeSection === id ? 'opacity-100 underline' : 'opacity-45'}`}
            ref={React.createRef()}
          >
            {id}
          </a>
        ))}
      </div>
      <div className="hidden flex-row-reverse sticky px-4 bottom-6 w-[90%] h-10 z-50 left-[5%] text-white  gap-5 rounded-lg justify-center items-center right-4 bg-[#6C6C6C80] max-[768px]:flex">
        {sectionIds.map(id => (
          <a
            key={id}
            href={`#${id}`}
            className={`text-xl  max-[350px]:text-base font-medium text-white font-Inter ${activeSection === id ? ' relative before:absolute before:w-full before:h-[0.35rem] before:bg-[#9329FE] before:-bottom-4 before:rounded-xl' : 'opacity-45'}`}
            ref={React.createRef()}
          >
            {id}
          </a>
        ))}
        
      </div>
      </>

  );
}

export default Leftnav;