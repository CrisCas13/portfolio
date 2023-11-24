import 'react';
import Gallery from './Gallery.jsx';
import galleriesData from './galleriesData.js';
import PropTypes from 'prop-types';
import '../App.css';

function ProjectsMenu({
  setSelectedGallery,
  openGallery,
  showGallery,
  selectedGallery,
}) {
  const openGalleryInApp = (galleryData, index) => {
    setSelectedGallery(index);
    openGallery(galleryData);
  };

  return (
    <div className="menus">
      <div className="background-opacity" />
      <nav id="menu-projects">
        <ul className="menu-left">
          {galleriesData.slice(0, 3).map((gallery) => (
            <MenuItem
              key={gallery.subtitle}
              text={gallery.subtitle}
              onClick={() => openGalleryInApp(gallery)}
            />
          ))}
        </ul>
        <ul className="menu-right">
          {galleriesData.slice(3, 6).map((gallery) => (
            <MenuItem
              key={gallery.subtitle}
              text={gallery.subtitle}
              onClick={() => openGalleryInApp(gallery)}
            />
          ))}
        </ul>
      </nav>
      {showGallery && selectedGallery && (
        <Gallery galleryData={selectedGallery} />
      )}
    </div>
  );
}

ProjectsMenu.propTypes = {
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
  openGallery: PropTypes.func.isRequired,
  showGallery: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]),
};

function MenuItem({ text, onClick }) {
  return <li onClick={onClick}>{text}</li>;
}

MenuItem.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ProjectsMenu;
