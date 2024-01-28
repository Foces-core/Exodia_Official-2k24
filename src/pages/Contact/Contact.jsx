import { AiOutlinePhone } from "react-icons/ai";
import { CiMail } from "react-icons/ci";
import { FaInstagram,FaLinkedin } from "react-icons/fa";

function Contact()
{
    return (
        <div className="relative flex flex-col items-center justify-center w-full h-screen gap-10 p-10 py-18">
            <p className="theme text-[#9329FE] text-8xl max-md:text-5xl">Contact Us</p>
            <div className=" mt-20 flex w-[60vw]  h-[300px]  max-[860px]:w-[80vw] max-[1360px]:h-[250px] max-[700px]:flex-col max-[700px]:h-fit">
                <div className="w-[33%] h-full max-[700px]:w-full max-[700px]:h-[50%]">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3937.179869160877!2d76.61490531046704!3d9.31732529071739!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b0622ea027eb08f%3A0x41105b207db821c6!2sCollege%20of%20Engineering%20Chengannur!5e0!3m2!1sen!2sin!4v1706448825074!5m2!1sen!2sin" width="100%" height="100%" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> 
                </div>
                <div className="w-[33%] h-full bg-black flex flex-col p-6 justify-end text-white relative overflow-hidden max-[700px]:w-full max-[700px]:h-[50%]"> 
                    <p className="py-5 text-3xl max-[1360px]:text-2xl text-nowrap max-[1130px]:text-xl">Point of Contact</p>
                    <p className="flex items-center gap-2"><AiOutlinePhone/>+123456789</p>
                    <p className="flex items-center gap-2"><CiMail/>exodia@gmail.com</p>
                    <p className="absolute text-white text-[9rem] theme top-0 max-[1360px]:text-9xl max-[1211px]:text-7xl max-[1211px]:left-[40%]  max-[700px]:hidden">exoDia</p>
                </div>
                <div className="w-[33%] h-full flex flex-col p-6 gap-3 justify-end bg-[#1D9D51] text-white relative overflow-hidden max-[700px]:w-full max-[700px]:h-[50%]"> 
                    <p className="absolute text-black text-[9rem] theme top-0 -left-[91%] max-[1360px]:text-9xl max-[1211px]:text-7xl max-[1211px]:-left-[60%] max-[700px]:hidden ">exoDia</p>
                    <p className="text-4xl text-white theme max-md:hidden">'24</p>
                    <p className="text-4xl text-white theme md:hidden">exodia '24</p>
                    <p className="text-white">Connect us</p>
                    <div className="flex gap-3">
                        <FaInstagram size={30}/>
                        <FaLinkedin size={30}/>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Contact;