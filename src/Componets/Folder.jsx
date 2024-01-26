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
    <div className="relative flex justify-end items-end scale-75 cursor-pointer group">
    <img className="absolute -top-9 z-10 transition-transform transform group-hover:scale-110" src={coverback} alt="file" />
    <img className="absolute z-20 origin-bottom-right transition-transform transform group-hover:rotate-12" src={file} alt="file" />
    <img className="z-30 transition-transform transform group-hover:scale-110" src={coverfront} alt="file" />
  </div>
  <p className="text-white text-center font-semibold">{props.name}</p>
  </div>
  
  )
}

export default Folder