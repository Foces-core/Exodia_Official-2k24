import CountUp from "react-countup";
import { ReactTyped } from "react-typed";
function About() {
  const data = [
    { count: 3, type: "Stacks" },
    { count: 180, type: "Students" },
    { count: 2, type: "Days" },
  ];
  return (
    <>
      <div id='About' className="flex flex-col items-center justify-center gap-10 ">
        <div className="flex flex-col gap-5 p-5 w-fit h-fit">
          <p className="text-4xl text-[#1D9D51] theme">
            exoDia <span className="text-2xl theme">&apos;24</span>
          </p>
          <div className="w-[70vw] max-[768px]:w-[85vw] max-md:text-lg max-[375px]:w-[80vw] max-[390px]:text-sm min-h-72 text-justify text-xl t p-5 max-[470px]:p-5 border border-t-3 rounded-tr-xl rounded-bl-xl border-[#9329FE] text-gray-200 border-gradient">
            <p>
                          <ReactTyped strings={["Welcome to EXODIA- where Innovation meets Inspiration! Exodia is an all-Kerala event that brings together tech enthusiasts and creative minds to explore Artificial Intelligence (AI), Augmented Reality (AR), and Game Development. This immersive experience empowers attendees with innovative knowledge, hands-on workshops led by our esteemed mentors, and unparalleled networking opportunities. EXODIA is a joint effort by IEDC, FOCES, and MULEARN -the 3 leading forums of the College Of Engineering Chengannur. Taking place on February 17th and 18th at the prestigious CEC Campus, this extravaganza is a fusion of intellect, talent, and excitement. Join us at EXODIA, where you can fuel your passion for technology, connect with like-minded individuals, and stay at the forefront of the latest AI, AR, and Game Development advancements."]}
                              typeSpeed={20}
                              loop={false}
                              showCursor={false}
                          />
              
            </p>
          </div>
        </div>
        <div className="flex justify-center w-full gap-10 p-5 max-[428px]:gap-5 text-white">
          {data.map((item, index) => {
            return (
              <div
                key={index}
                className="relative z-0 flex flex-col items-center justify-center w-40 h-40 max-[595px]:w-32 max-[595px]:h-32 max-[470px]:w-24 max-[470px]:h-24 max-[375px]:w-20 max-[375px]:h-20   bg-white rounded-full before:absolute before:w-full before:h-full before:rounded-full before:bg-[#151515] before:-bottom-[0.5px] before:-left-[0.5px] before:-z-10"
              >
                <p className="text-5xl font-Inter max-[595px]:text-4xl max-[375px]:text-2xl">
                  {" "}
                  <CountUp
                    enableScrollSpy={true}
                    scrollSpyOnce={true}
                    scrollSpyDelay={0.5}
                    start={0}
                    end={item.count}
                  />{" "}
                </p>
                <p className="text-2xl font-thin text-[#797979] max-[595px]:text-xl max-[375px]:text-lg">
                  {item.type}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
export default About;
