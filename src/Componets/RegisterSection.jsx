function RegisterSection()
{
    return (
        <>
        {/* Screen Container */}
        <div className="flex justify-center my-10">
            {/* Card Main Container */}
            <div className="relative w-[53vw] h-[35vh] ">
                {/* Content */}
                <div className=" bg-[#151515] w-[53vw] h-[35vh] flex flex-col justify-center items-center border-[#1D9D51] border-[2px] rounded-xl z-10 ">
                    <p className="text-[#1D9D51] text-4xl font-bold">What are you waiting for ?</p>
                    <p className="text-[#1D9D51] font-light text-2xl italic">Time is ticking, opportunities missing </p>
                    <a className="py-2 my-10 text-lg font-bold bg-white px-14 rounded-2xl">Register</a>
                </div>
                {/* Design Bottom Section */}
                <div className="bg-[#1D9D51] w-[53vw] h-[35vh] rounded-xl -z-10 absolute -bottom-3 -left-3"></div>
            </div>

        </div>
        </>
    );
}
export default RegisterSection;