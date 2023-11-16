import { Link } from 'react-router-dom';
import { Button } from '..';

import { SECTION_NAVIGATION_LINKS } from '../../constants';
import './Navbar.css';

export interface NavbarProps {
  setIsSidebarVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

const Navbar = ({ setIsSidebarVisible }: NavbarProps) => {
  return (
    <nav className='nav'>
      <div className='container'>
        <div className='nav__content'>
          <div className='nav__logo'>
            <img src='/icons/dodo-square-logo.png' alt='' />
          </div>
          <ul className='nav__list'>
            {SECTION_NAVIGATION_LINKS.map(({ link, title }) => (
              <li className='nav__item' key={link}>
                <Link to={link}>{title}</Link>
              </li>
            ))}
          </ul>
          <div className='nav__btn'>
            <Button
              type='primary-btn'
              size='medium-btn'
              text='Корзина'
              onClick={() => {
                setIsSidebarVisible(true);
              }}
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
