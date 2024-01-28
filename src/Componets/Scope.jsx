function Scope()
{
    const scopeStyle="p-3 text-white bg-gray-800 rounded-3xl max-[640px]:text-sm max-[595px]:text-xs  max-[470px]:flex "
    return(
        <>
        <div className="flex flex-col items-center justify-center w-full gap-5 p-10 max-[550px]:px-5 ">
            <p className="py-4 text-3xl text-white theme">SCOPE OF EXODIA</p>
            <div className="flex gap-4 max-[595px]:gap-2 max-[470px]:flex-wrap justify-center">
                <p className={scopeStyle}>Innovative Knowledge</p>
                <p className={scopeStyle}>Hands-On Workshops</p>
                <p className={scopeStyle}>Networking Nirvana</p>
                <p className={`${scopeStyle} min-[471px]:hidden`}>Shaping the Future Together</p>            
            </div>
            <p className={`${scopeStyle} max-[470px]:hidden`}>Shaping the Future Together</p>            

        </div>
        
        </>
    );
}
export default Scope;