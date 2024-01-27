import { useRecoilState } from "recoil"
import coverback from "../assets/folder/coverBack.svg"
import coverfront from "../assets/folder/coverFront.svg"
import file from "../assets/folder/file.svg"
import { popup ,stack} from "../../recoil"
function Folder(props) {
  const [open, setOpen] = useRecoilState(popup)
 const [stackName, setStackName] = useRecoilState(stack)
  const Setvalues = () => {
    setStackName(props.name)
    setOpen(true)
  }

  return (

<div onClick={Setvalues}>
    <div className=" relative flex justify-end items-end scale-75 cursor-pointer group max-md:scale-[0.66] max-sm:scale-x-75">
    <img className="absolute -top-9 z-10 transition-transform transform group-hover:scale-110 max-md:-top-7" src={coverback} alt="file" />
    <img className="absolute z-20  scale-90 origin-bottom-right transition-transform transform group-hover:rotate-12  max-md:scale-90" src={file} alt="file" />
    <img className="z-30 transition-transform transform group-hover:scale-110 max-md:scale-10" src={coverfront} alt="file" />
  </div>
  <p className="text-white text-center font-semibold max-sm:text-[10px]">{props.name}</p>
  </div>
  
  )
}

export default Folder