import React, {useEffect, useRef} from 'react';

const loadImage = (url: string): Promise<HTMLImageElement> =>
  new Promise((resolve, reject) => {
    const img = new Image();
    img.addEventListener('load', () => {
      if (img.width > 0) {
        resolve(img);
      }
      reject('Image not found');
    });
    img.addEventListener('error', (err) => reject(err));
    img.src = url;
    img.setAttribute('crossorigin', 'anonymous');
  });

const Photo = (props) => {
  const canvas = useRef(null);
  useEffect(() => {
    const img = loadImage('../resources/pikachu-test.jpg');
    const context = canvas.current.getContext('2d');
    context.drawImage(img, 0, 0);y
  });
  return (
    <canvas ref={canvas}/>
  );
}

export default Photo;