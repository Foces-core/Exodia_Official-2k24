import OwlCarousel from 'react-owl-carousel';  
import 'owl.carousel/dist/assets/owl.carousel.css';  
import 'owl.carousel/dist/assets/owl.theme.default.css';  
import Folder from './Folder';
import"../index.css"
import ProgressBar from './ProgressBar';
import CircularLoader from './ProgressBar';


function Carousel() {
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
        
        <div className=' -mt-20 flex w-full justify-center -z-20'><CircularLoader size={350} strokeWidth={5} value={0.5} color="#3498db" /></div>
      </div>  
    );
  }
  

export default Carousel
