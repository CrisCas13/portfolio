import { useRef, useState } from 'react';
import galleriesData from './galleriesData.js';
import {
  SlControlForward,
  SlControlRewind,
  SlHome,
  SlControlEnd,
  SlControlStart,
} from 'react-icons/sl';
import PropTypes from 'prop-types';
import './Gallery.css';

function Gallery({ closeGallery, selectedGallery, setSelectedGallery }) {
  const galleryRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [imageLoaded, setImageLoaded] = useState(false);


  // Navegación entre galerías
  const handleNextGallery = () => {
    const currentIndex = galleriesData.findIndex(
      (gallery) => gallery === selectedGallery
    );

    if (currentIndex < galleriesData.length - 1) {
      setSelectedGallery(galleriesData[currentIndex + 1]);
    } else {
      setSelectedGallery(galleriesData[0]);
    }
    setCurrentIndex(0);
  };

  const handlePrevGallery = () => {
    const currentIndex = galleriesData.findIndex(
      (gallery) => gallery === selectedGallery
    );

    if (currentIndex > 0) {
      setSelectedGallery(galleriesData[currentIndex - 1]);
    } else {
      setSelectedGallery(galleriesData[5]);
    }
    setCurrentIndex(0);
  };

  // Navegación entre wrappers
  const handleNextWrapper = () => {
    if (currentIndex < 3) {
      setCurrentIndex(currentIndex + 1);
    } else if (currentIndex === 3 && selectedGallery !== galleriesData[galleriesData.length - 1]) {
      handleNextGallery();
    } else {
      // No hacer nada
    }
  };
  
  const handlePrevWrapper = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    } else if (currentIndex === 0 && selectedGallery !== galleriesData[0]) {
      handlePrevGallery();
    } else {
      // No hacer nada
    }
  };

  // Cerrar gallería
  const handleHome = () => {
    closeGallery();
  };

  return (
    <div className="gallery" ref={galleryRef}>
      <div className="wrapper-gallery">
        <div
          className="wrapper-subtitle"
          style={{ display: currentIndex === 0 && imageLoaded ? 'flex' : 'none' }}
        >
          <img
            src={selectedGallery.images[0].src}
            alt={selectedGallery.images[0].alt}
            onLoad={() => setImageLoaded(true)}
          />
          <h4>{selectedGallery.subtitle}</h4>
        </div>
        <div
          className="wrapper-text"
          style={{ display: currentIndex === 1 ? 'block' : 'none' }}
        >
          <img
            src={selectedGallery.images[1].src}
            alt={selectedGallery.images[1].alt}
          />
          <p>{selectedGallery.texts[0]}</p>
        </div>
        <div
          className="wrapper-text"
          style={{ display: currentIndex === 2 ? 'block' : 'none' }}
        >
          <img
            src={selectedGallery.images[2].src}
            alt={selectedGallery.images[2].alt}
          />
          <p>{selectedGallery.texts[1]}</p>
        </div>
        <div
          className="wrapper-text"
          style={{ display: currentIndex === 3 ? 'block' : 'none' }}
        >
          <img
            src={selectedGallery.images[3].src}
            alt={selectedGallery.images[3].alt}
          />
          <p>{selectedGallery.texts[2]}</p>
        </div>
      </div>
      
      <div className="controls">
        <SlControlStart
          className="icon-controls"
          title="Anterior Galería"
          onClick={handlePrevGallery}
        />
        <SlControlRewind
          className="icon-controls"
          title="Anterior Wrapper"
          onClick={handlePrevWrapper}
        />
        <SlHome className="icon-controls" title="Home" onClick={handleHome} />
        <SlControlForward
          className="icon-controls"
          title="Siguiente Wrapper"
          onClick={handleNextWrapper}
        />
        <SlControlEnd
          className="icon-controls"
          title="Siguiente Galería"
          onClick={handleNextGallery}
        />
      </div>
    </div>
  );
}

Gallery.propTypes = {
  selectedGallery: PropTypes.shape({
    subtitle: PropTypes.string.isRequired,
    texts: PropTypes.arrayOf(PropTypes.string).isRequired,
    images: PropTypes.arrayOf(
      PropTypes.shape({
        src: PropTypes.string.isRequired,
        alt: PropTypes.string.isRequired,
      })
    ).isRequired,
  }),
  setSelectedGallery: PropTypes.func.isRequired,
  closeGallery: PropTypes.func.isRequired,
};

export default Gallery;
