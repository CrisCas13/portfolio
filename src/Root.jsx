import React, { useState, useEffect } from 'react';
import Loading from './components/Loading.jsx';
import App from './App.jsx';
import SocialMediaMenu from './components/SocialMediaMenu.jsx';
import backgroundImg from './assets/ai-illustration-CristinaCasado-background-index.png';
import './index.css';

function Root() {
  const [isLoading, setIsLoading] = useState(true);
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const image = new Image();
    image.src = backgroundImg;
    image.onload = () => {
      setImageLoaded(true);
    };
    image.onerror = (error) => {
      console.error('Error loading image:', error);
    };

    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <React.StrictMode>
      <div className="container">
        {isLoading ? (
          <Loading />
        ) : (
          <>
            <header role="banner">
              <div className="logo">
                <h1 aria-level="1">Cristina Casado</h1>
              </div>
              <h2 aria-level="2">FRONT-END DEVELOPER</h2>
              <hr />
              <h3 aria-level="3">ARTE & DISEÑO - DESARROLLO</h3>
            </header>
            {imageLoaded && (
              <>
                <img
                  className="background-img"
                  src={backgroundImg}
                  alt="background-image"
                />
                <div className="wrapper">
                  <App />
                  <footer>
                    <p>by Cristina Casado</p>
                  </footer>
                  <SocialMediaMenu />
                </div>
              </>
            )}
          </>
        )}
      </div>
    </React.StrictMode>
  );
}

export default Root;
