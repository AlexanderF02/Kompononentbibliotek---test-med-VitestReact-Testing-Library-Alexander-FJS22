import React, { useState, useEffect } from 'react';

const Slideshow = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    // Automatic slideshow
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);

    return () => {
      clearInterval(interval);
    };
  }, [images.length]);

  return (
    <div>
      <img src={images[currentImageIndex]} alt="Slideshow" />
    </div>
  );
};

export default Slideshow;
