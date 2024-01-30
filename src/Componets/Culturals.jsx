import _01 from '../assets/Culturals/1.png'
import _02 from '../assets/Culturals/2.png'
import _03 from '../assets/Culturals/3.png'


function Culturals(){
    return(
        <div className="flex  justify-center max-[768px]:translate-x-[10%] max-[768px]:justify-start max-[768px]:w-[80%] w-full h-[60vw] max-[768px]:h-[90vw] ">
            <div className="relative border w-[30vw] h-[20vw] border-whtie max-[768px]:w-[45vw] max-[768px]:h-[30vw] " data-aos='fade-right'>
                <img src={_01} alt=""  className='w-full h-full'/>
                <p className="w-full text-white bg-gradient-to-r from-[#9329FE] to-transparent px-5 absolute bottom-0 right-0"> Music Band</p>
                <div className="absolute border w-[30vw] h-[20vw] border-white top-[80%] -right-[80%] max-[768px]:w-[45vw] max-[768px]:h-[30vw]" data-aos='fade-left'>
                    <div className="relative w-full h-full">
                        <img src={_02} alt="" className='w-full h-full'/>
                        <p className="w-full text-white bg-gradient-to-l text-right from-[#9329FE] px-5 to-transparent absolute bottom-0 right-0"></p>
                        <div className="absolute border w-[30vw] h-[20vw] border-white top-[80%] -left-[80%] max-[768px]:w-[45vw] max-[768px]:h-[30vw]" data-aos='fade-right'>
                            <div className="relative w-full h-full">
                                <img src={_03} alt="" className='w-full h-full'/>
                                <p className="w-full text-white bg-gradient-to-r px-5 from-[#9329FE] to-transparent absolute bottom-0 right-0"> Culturals</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Culturals;