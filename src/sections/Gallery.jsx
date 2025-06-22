import React from 'react';

// It's best practice to keep data separate from the presentation layer.
// And to give assets descriptive names.
import galleryImg1 from '../assets/gallery-1.png';
import galleryImg2 from '../assets/gallery-5.png';
import galleryImg3 from '../assets/gallery-1.png';
import galleryImg4 from '../assets/gallery-1.png';
import galleryImg5 from '../assets/gallery-5.png';

import './Gallery.css';

const galleryImages = [
  { src: galleryImg1, alt: 'Allgrid tool shown from a left angle' },
  { src: galleryImg2, alt: 'Allgrid tool shown from a top-down view' },
  { src: galleryImg3, alt: 'Allgrid tool shown from a right angle' },
  { src: galleryImg4, alt: 'Allgrid tool shown from a low angle' },
  { src: galleryImg5, alt: 'Allgrid tool shown from a side view' },
];

const Gallery = () => {
  return (
    <section className="gallery-section">
      <div className="gallery-container">
        <div className="gallery-grid">
          {galleryImages.map((image, index) => (
            <div className={`gallery-item gallery-item-${index + 1}`} key={index}>
              <img src={image.src} alt={image.alt} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;