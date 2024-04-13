import React, { useState, useEffect } from 'react';
import Fish from './Fish'; // Assuming the path is correct
import './style.css';

const Aquarium = () => {
  const [dimensions, setDimensions] = useState({
    height: window.innerHeight,
    width: window.innerWidth
  });

  const handleResize = () => {
    setDimensions({
      height: window.innerHeight,
      width: window.innerWidth
    });
  };

  useEffect(() => {
    handleResize(); 
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); 

  return (
    <div>

      <Fish image='./images/tiny-small-pixel-fish-aquarium-animated-gif-picture-10.gif' aquariumSize={{ minX: dimensions.width / 5, minY: dimensions.width / 5, maxX: dimensions.width, maxY: dimensions.height }} />
    </div>
  );
};

export default Aquarium;