import React from 'react'
import { useState } from 'react';
export const Task9 = () => {
      const images = [
    'https://picsum.photos/id/1018/800/400',
    'https://picsum.photos/id/1015/800/400',
    'https://picsum.photos/id/1019/800/400',
    'https://picsum.photos/id/1016/800/400'
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };
return (
    <>
    <h1 style={{ textAlign: 'center' }}>Task9</h1>
        <div className="carousel">
            <button onClick={prevSlide}>❮</button>
            <img
                src={images[currentIndex]}
                alt={`Slide ${currentIndex + 1}`}
            />
            <button onClick={nextSlide}>❯</button>
            <div className="indicators">
                {images.map((_, index) => (
                    <span
                        key={index}
                        className={index === currentIndex ? 'active' : ''}
                        onClick={() => setCurrentIndex(index)}
                    >
                        
                    </span>
                ))}
            </div>
        </div>
    </>
)
}
