import React, { useRef, memo } from 'react';
import PropTypes from 'prop-types';
import OwlCarousel from 'react-owl-carousel';  
import 'owl.carousel/dist/assets/owl.carousel.css';  
import 'owl.carousel/dist/assets/owl.theme.default.css';  
import Folder from './Folder';
import "../index.css";

const Carousel = memo(({ onValueChange }) => {
  const currentIndexRef = useRef(0);

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
        onTranslated={(event) => {
          currentIndexRef.current = event.item.index;
          const centeredItemIndex = currentIndexRef.current;
          if (centeredItemIndex === 0) {
            onValueChange(0.33);
          }
          else if (centeredItemIndex === 1) {
            onValueChange(0.66);
          }
          else if (centeredItemIndex === 2) {
            onValueChange(1);
          }
        }}
      >
        <div className='item slider-card'>
          <Folder name='Generative Ai' />
        </div>
        <div className='item slider-card'>
          <Folder name='Augmented Reality' />
        </div>
        <div className='item slider-card'>
          <Folder name='Game Development' />
        </div>
      </OwlCarousel>
    </div>
  );
});

Carousel.displayName = 'Carousel';

Carousel.propTypes = {
  onValueChange: PropTypes.func.isRequired,
};

export default Carousel;