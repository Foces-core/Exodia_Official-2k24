import { useRecoilState } from "recoil"
import PropTypes from "prop-types"
import coverback from "../assets/folder/coverBack.svg"
import coverfront from "../assets/folder/coverFront.svg"
import file from "../assets/folder/file.svg"
import { popup, stack } from "../../recoil"
function Folder({ name }) {
  const [, setOpen] = useRecoilState(popup)
  const [, setStackName] = useRecoilState(stack)
  const Setvalues = () => {
    setStackName(name)
    setOpen(true)
  }

  return (

<div onClickCapture={Setvalues }data-aos='fade-up'>
    <div className=" relative flex justify-end items-end scale-75 cursor-pointer group max-md:scale-[0.66] max-sm:scale-x-75">
    <img className="absolute z-10 transition-transform transform -top-9 group-hover:scale-110 max-md:-top-7" src={coverback} alt="file" />
    <img className="absolute z-20 transition-transform origin-bottom-right transform scale-90 group-hover:rotate-12 max-md:scale-90" src={file} alt="file" />
    <img className="z-30 transition-transform transform group-hover:scale-110 max-md:scale-10" src={coverfront} alt="file" />
      </div>
  <p className="text-white text-center font-semibold max-sm:text-[10px]">{name}</p>
  </div>
  
  )
}

Folder.propTypes = {
  name: PropTypes.string.isRequired,
}

export default Folder
