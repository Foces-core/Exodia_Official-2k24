function RegisterSection()
{
    return (
        <div className="flex items-center justify-center w-full h-screen " >
        {/* Screen Container */}
        <div className="flex justify-center w-full my-10" data-aos='fade-up'>
            {/* Card Main Container */}
            <div className="relative w-2/3 h-[35vh] max-[390px]:w-5/6">
                {/* Content */}
                <div className=" bg-[#151515] w-full h-[35vh] flex flex-col justify-center items-center border-[#1D9D51] border-[2px] rounded-xl z-10 ">
                    <p className="text-[#1D9D51] text-4xl font-bold max-sm:text-2xl max-[700px]:text-3xl max-[470px]:text-lg">What are you waiting for ?</p>
                    <p className="text-[#1D9D51] font-light text-2xl italic max-sm:text-xl max-[470px]:text-base ">Time is ticking, opportunities missing </p>
                    <a className="py-2 my-10 text-lg font-bold bg-white cursor-pointer px-14 rounded-2xl border hover:bg-[#1f1f1f] hover:border transition-all duration-150 hover:text-[#1D9D51] hover:border-[#1D9D51]">Register</a>
                </div>
                {/* Design Bottom Section */}
                <div className="bg-[#1D9D51] w-full h-[35vh] rounded-xl -z-10 absolute -bottom-3 -left-3"></div>
            </div>

        </div>
        </div>
    );
}
export default RegisterSection;