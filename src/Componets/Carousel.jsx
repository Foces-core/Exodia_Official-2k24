import { useEffect } from 'react';
import OwlCarousel from 'react-owl-carousel';  
import 'owl.carousel/dist/assets/owl.carousel.css';  
import 'owl.carousel/dist/assets/owl.theme.default.css';  
import Folder from './Folder';
import "../index.css";
import ProgressBar from './ProgressBar';
import { progress } from '../../recoil';
import { useRecoilValue } from 'recoil';


function Carousel() {

  var value;

  function counter(event) {
    if (event && event.item) {
      var items = event.item.count;
      var item = event.item.index + 1;
      var sldPercent =  item / items;
       console.log(sldPercent);
      //  setValue(sldPercent);
      localStorage.setItem('progress',sldPercent);
      // value = localStorage.getItem('progress');
    }
    return 
  }

  useEffect(() => {
    counter(); // Initial call
    value = localStorage.getItem('progress');
  }, []);
console.log(value);
  return (
    <div className='w-full slider'>
      <OwlCarousel
        className='flex relative owl-carousel owl-theme '
        loop={false}
        center={true}
        items={3}
        slideBy={1}
        mouseDrag={true}
        touchDrag={true}
        onInitialized={counter}
        onTranslated={counter}
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
      
     
    </div>  
  );
}

export default Carousel;
