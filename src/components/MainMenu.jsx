import 'react';
import PropTypes from 'prop-types';
import '../App.css';

function MainMenu({ openProjectsMenu, openContact }) {
  const reloadApp = () => {
    window.location.reload();
  };

  return (
    <div id="menu-main">
      <ul>
        <li onClick={reloadApp}>Inicio</li>
        <li onClick={openProjectsMenu}>Proyectos</li>
        <li onClick={openContact}>Contacto</li>
      </ul>
    </div>
  );
}

MainMenu.propTypes = {
  openProjectsMenu: PropTypes.func.isRequired,
  openContact: PropTypes.func.isRequired,
};

export default MainMenu;
