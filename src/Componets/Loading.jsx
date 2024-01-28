import { useEffect } from "react";
function Loading()
{
    useEffect(() => {
        // Disable scrolling on mount
        
        document.body.style.overflow = 'hidden';
    
        // Enable scrolling again when the component unmounts
        return () => {
          document.body.style.overflow = 'unset';
        };
      },[]);
    return(
    <>
    <div className="fixed z-50 flex pl-10 max-[350px]:pl-5 items-center justify-center w-full h-[100%]  bg-[#151515]">
    <svg className="loading " version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
     width="560.558px" height="190px" viewBox="0 0 575.558 120" enableBackground="new 0 0 575.558 120" xmlSpace="preserve">
  <defs>
    <pattern id="water" width=".25" height="1.1" patternContentUnits="objectBoundingBox">
      <path fill="#9329FE" d="M0.25,1H0c0,0,0-0.659,0-0.916c0.083-0.303,0.158,0.334,0.25,0C0.25,0.327,0.25,1,0.25,1z"/>
    </pattern>
    
    <text id="text" transform="matrix(1 0 0 1 160.0684 10.7852)" fontSize="60.047" className="theme"> exoDia</text>
    
    <mask id="text_mask">
      <use x="0" y="0" href="#text" opacity="1" fill="#fff"/>
    </mask>
  </defs>
    
  <use x="0" y="0" href="#text" fill="#fff"/>
    
  <rect className="water-fill" mask="url(#text_mask)" fill="url(#water)" x="10" y="100" width="1600" height="120"/>
</svg>
    </div>
    </>
    );
}
export default Loading