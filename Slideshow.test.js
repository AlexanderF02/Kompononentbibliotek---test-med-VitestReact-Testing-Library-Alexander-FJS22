import React from 'react';
import { render } from '@testing-library/react';
import Slideshow from './Slideshow';

describe('Slideshow', () => {
  it('should render the slideshow component', () => {
    const images = ['image1.jpg', 'image2.jpg', 'image3.jpg'];
    render(<Slideshow images={images} />);
    // Add your assertions here based on the expected behavior of the component
  });
});





