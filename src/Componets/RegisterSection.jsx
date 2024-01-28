function RegisterSection()
{
    return (
        <div className="h-screen w-full flex items-center justify-center ">
        {/* Screen Container */}
        <div className="flex justify-center my-10 w-full">
            {/* Card Main Container */}
            <div className="relative w-2/3 h-[35vh] max-[390px]:w-5/6">
                {/* Content */}
                <div className=" bg-[#151515] w-full h-[35vh] flex flex-col justify-center items-center border-[#1D9D51] border-[2px] rounded-xl z-10 ">
                    <p className="text-[#1D9D51] text-4xl font-bold max-sm:text-2xl max-[700px]:text-3xl max-[470px]:text-lg">What are you waiting for ?</p>
                    <p className="text-[#1D9D51] font-light text-2xl italic max-sm:text-xl max-[470px]:text-base ">Time is ticking, opportunities missing </p>
                    <a className="py-2 my-10 text-lg font-bold bg-white px-14 rounded-2xl">Register</a>
                </div>
                {/* Design Bottom Section */}
                <div className="bg-[#1D9D51] w-full h-[35vh] rounded-xl -z-10 absolute -bottom-3 -left-3"></div>
            </div>

        </div>
        </div>
    );
}
export default RegisterSection;