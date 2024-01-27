import OwlCarousel from 'react-owl-carousel';  
import 'owl.carousel/dist/assets/owl.carousel.css';  
import 'owl.carousel/dist/assets/owl.theme.default.css';  
import Folder from './Folder';
import"../index.css"
import ProgressBar from './ProgressBar';
import { useRecoilState } from 'recoil';
import { progress } from '../../recoil';


function Carousel() {
 // const [value, setValue] = useRecoilState(progress);
    return (
      <div className='w-full slider'>
        <OwlCarousel
          className='flex relative '  // Add Tailwind CSS classes for styling
          loop={false}
          center={true}
          items={3}
          slideBy={1}
          mouseDrag={true}
          touchDrag={true}
          pullDrag={true}
          dotData={true}

        >
          <div className='item slider-card'>
            <Folder name='Generative Ai' />
          </div>
          <div className='item slider-card'>
            <Folder name='Augmented Reality'/>
          </div>
          <div className='item slider-card'>
            <Folder name='Game Development'/>
          </div>
        </OwlCarousel>
        
        <div className=' mt-36 flex w-full justify-center -z-20'><ProgressBar className='w-4/5' value={0.5} /></div>
      </div>  
    );
  }
  

export default Carousel
