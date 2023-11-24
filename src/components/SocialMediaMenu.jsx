import 'react';
import { FaLinkedin, FaGithub, FaInstagram, FaDribbble } from 'react-icons/fa';
import '../App.css';

function SocialMediaMenu() {
  const socialLinks = [
    {
      title: 'GitHub',
      href: 'https://github.com/CrisCas13',
      icon: <FaGithub />,
    },
    {
      title: 'LinkedIn',
      href: 'https://www.linkedin.com/in/cristinacasado',
      icon: <FaLinkedin />,
    },
    {
      title: 'Instagram',
      href: 'https://www.instagram.com/_cristinacasado',
      icon: <FaInstagram />,
    },
    {
      title: 'Dribbble',
      href: 'https://dribbble.com/cristinacasado',
      icon: <FaDribbble />,
    },
  ];

  return (
    <nav id="menu-socialMedia">
      <ul>
        {socialLinks.map((link, index) => (
          <li key={index}>
            <a
              href={link.href}
              title={link.title}
              target="_blank"
              rel="noopener noreferrer"
            >
              {link.icon}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default SocialMediaMenu;
