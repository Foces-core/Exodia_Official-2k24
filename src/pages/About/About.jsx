import CountUp from 'react-countup';
function About()
{
    const data=[{'count':3,'type':'Stacks'},{'count':180,'type':'Students'},{'count':2,'type':'Days'}]
    return(
        <>
        <div className="flex flex-col items-center justify-center gap-10">
            <div className="flex flex-col gap-5 p-5 w-fit h-fit">
                
            
            <p className="text-4xl text-white theme">exoDia <span className="text-2xl theme">'24</span></p>
            <div className="w-[50vw] max-[768px]:w-[70vw] max-[375px]:w-[80vw] max-[390px]:text-sm h-fit p-10 max-[470px]:p-5 border border-t-3 rounded-tr-xl rounded-bl-xl border-[#9329FE] text-white border-gradient">
                <p>
                Welcome to Exodia, where Innovation meets Inspiration! Exodia is an 
                All-Kerala event that brings together tech enthusiasts and creative 
                minds to explore Artificial Intelligence (AI), Augmented Reality (AR), 
                and Game Development. This immersive experience empowers 
                attendees with innovative knowledge, hands-on workshops led by our 
                esteemed mentors, and unparalleled networking opportunities. 
                </p>
            </div>
            </div>
            <div className="flex justify-center w-full gap-10 p-5 max-[428px]:gap-5 text-white">
                {
                    data.map((item,index)=>{return(
                        <div key={index} className="relative z-0 flex flex-col items-center justify-center w-40 h-40 max-[595px]:w-32 max-[595px]:h-32 max-[470px]:w-24 max-[470px]:h-24 max-[375px]:w-20 max-[375px]:h-20   bg-white rounded-full before:absolute before:w-full before:h-full before:rounded-full before:bg-[#151515] before:-bottom-[0.5px] before:-left-[0.5px] before:-z-10">
                            <p className="text-5xl font-Inter max-[595px]:text-4xl max-[375px]:text-2xl"> <CountUp enableScrollSpy={true} scrollSpyOnce={true} scrollSpyDelay={0.5} start={0} end={item.count}/> </p>
                            <p className="text-2xl font-thin text-[#797979] max-[595px]:text-xl max-[375px]:text-lg">{item.type}</p>
                        </div>
                    )})
                }
                
                
            </div>
            
        </div>
        </>
    );
}
export default About;