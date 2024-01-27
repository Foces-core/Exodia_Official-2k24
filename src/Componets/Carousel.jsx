import OwlCarousel from 'react-owl-carousel';  
import 'owl.carousel/dist/assets/owl.carousel.css';  
import 'owl.carousel/dist/assets/owl.theme.default.css';  
import Folder from './Folder';
import "../index.css";
import ProgressBar from './ProgressBar';
import { progress, progressSelector } from '../../recoil';
import { useRecoilState, useRecoilValue } from 'recoil';

function Carousel() {
  const value = useRecoilValue(progressSelector);
  const [selectedIndex, setSelectedIndex] = useRecoilState(progress);

  const handleDrag = (event) => {
    const newIndex = event.item.index;
    console.log("Selected Index:", newIndex);
    setSelectedIndex(newIndex);
    // Do something with the new index value
  };

  const updateProgressBar = () => {
    const end = selectedIndex + 1; // Assuming selectedIndex starts from 0
    const rate = Math.min(end / 3, 1); // Assuming 3 items in the carousel
    console.log("Rate:", rate);
    return rate; // Convert to percentage
  };

  return (
    <div className='w-full slider'>
      <OwlCarousel
        className='flex relative'
        loop={false}
        center={true}
        items={3}
        slideBy={1}
        mouseDrag={true}
        touchDrag={true}
        startPosition={0}
        onChanged={updateProgressBar}
        // onDrag={handleDrag}
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
      
      <div className='flex w-full justify-center -z-20'>
        <ProgressBar value={value} />
      </div>
    </div>  
  );
}

export default Carousel;
