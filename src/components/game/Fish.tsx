import React, { useState, useEffect } from 'react';

type FishState = {
  x: number;
  xDirection: string;
  xChanceToChangeDirection: number;
  y: number;
  yChanceToChangeDirection: number;
  yDirection: string;
  z: number;
  zChanceToChangeDirection: number;
  zDirection: string; 
};

const Fish: React.FC<{ image: string, aquariumSize: {minX: number, minY: number, maxX: number, maxY: number} }> = ({ image, aquariumSize }) => {
    const { minX, minY, maxX, maxY } = aquariumSize;

    const [fishCoords, setFishCoords] = useState<FishState>({
        x: Math.random() * (maxX - minX) + minX,
        xDirection: 'right',
        xChanceToChangeDirection: Math.random() * 10, 
        y: Math.random() * (maxY - minY) + minY,
        yDirection: 'down',
        yChanceToChangeDirection: Math.random() * 10, 
        z: 0,
        zDirection: 'forward',
        zChanceToChangeDirection: Math.random() * 10, 
    });

    useEffect(() => {
        const intervalId = setInterval(() => {
            setFishCoords(prevProps => ({
                ...prevProps,
                xDirection: Math.random() * 10 < prevProps.xChanceToChangeDirection ? 'left' : 'right',
                yDirection: Math.random() * 10 < prevProps.yChanceToChangeDirection ? 'up' : 'down',
            }));
        }, 1000);
        
        return () => clearInterval(intervalId);
    }, []);

    useEffect(() => {
        const intervalId = setInterval(() => {
            const xSpeed = fishCoords.xDirection === 'right' ? 5 : -5;
            const ySpeed = fishCoords.yDirection === 'down' ? 5 : -5;
            const newX = fishCoords.x + xSpeed;
            const newY = fishCoords.y + ySpeed;

            if (newX < minX || newX > maxX) {
                setFishCoords(prevProps => ({ ...prevProps, xDirection: prevProps.xDirection === 'right' ? 'left' : 'right' }));
            } else {
                setFishCoords(prevProps => ({ ...prevProps, x: newX }));
            }

            if (newY < minY || newY > maxY) {
                setFishCoords(prevProps => ({ ...prevProps, yDirection: prevProps.yDirection === 'down' ? 'up' : 'down' }));
            } else {
                setFishCoords(prevProps => ({ ...prevProps, y: newY }));
            }
        }, 10);
        
        return () => clearInterval(intervalId);
    }, [fishCoords, maxX, maxY, minX, minY]);

    return (
        <img 
            className="fish" 
            src={image} 
            alt="Fish" 
            style={{ 
                position: 'absolute', 
                left: fishCoords.x, 
                top: fishCoords.y, 
                transform: `rotate(${fishCoords.xDirection === "left" ? 180 : 0}deg)` 
            }} 
        />
    );
};

export default Fish;