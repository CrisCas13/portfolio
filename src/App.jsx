import { useState } from 'react';
import MainMenu from './components/MainMenu.jsx';
import ProjectsMenu from './components/ProjectsMenu.jsx';
import ContactForm from './components/ContactForm.jsx';
import Gallery from './components/Gallery.jsx';
import { CgMenu } from 'react-icons/cg';
import { SlClose } from "react-icons/sl";
import './App.css';

function App() {
  const [showMainMenu, setShowMainMenu] = useState(false);
  const [showProjectsMenu, setShowProjectsMenu] = useState(false);
  const [showContact, setShowContact] = useState(false);
  const [showGallery, setShowGallery] = useState(null);
  const [selectedGallery, setSelectedGallery] = useState(null);

  const toggleMainMenu = () => {
    setShowMainMenu(!showMainMenu);
    setShowProjectsMenu(false);
    setShowContact(false);
    setShowGallery(false);
  };

  const openProjectsMenu = () => {
    setShowMainMenu(false);
    setShowProjectsMenu(true);
    setShowContact(false);
    setSelectedGallery(null);
  };

  const openContact = () => {
    setShowMainMenu(false);
    setShowContact(true);
    setShowProjectsMenu(false);
  };

  const closeProjectsMenu = () => {
    setShowProjectsMenu(false);
  };

  const openGallery = (galleryData) => {
    setSelectedGallery(galleryData);
    setShowMainMenu(false);
    setShowGallery(galleryData);
    setShowProjectsMenu(false);
  };

  const closeGallery = () => {
    setShowGallery(false);
  };

  return (
    <div id="app">
      <div className="menus">
        <CgMenu className="icon-menu" onClick={toggleMainMenu} />
        {showMainMenu && (
          <MainMenu
            openProjectsMenu={openProjectsMenu}
            openContact={openContact}
          />
        )}
      </div>

      {showProjectsMenu && (
        <>
          <ProjectsMenu
            setSelectedGallery={setSelectedGallery}
            openGallery={openGallery}
            showGallery={showGallery}
            selectedGallery={selectedGallery}
          />
          <SlClose
            className="icon-close icon-close-menu"
            onClick={closeProjectsMenu}
          />
        </>
      )}

      <div id="contact">
        {showContact && (
          <>
            <ContactForm />
            <SlClose 
              className="icon-close icon-close-form"
              onClick={() => setShowContact(false)}
            />
          </>
        )}
      </div>

      <div id="projects">
        {showGallery && selectedGallery && (
          <>
            <Gallery
              selectedGallery={selectedGallery}
              setSelectedGallery={setSelectedGallery}
              closeGallery={closeGallery}
            />
            <SlClose 
              className="icon-close icon-close-gallery"
              onClick={closeGallery}
            />
          </>
        )}
      </div>
    </div>
  );
}

export default App;
