import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

import { Button } from '..';

import { SECTION_NAVIGATION_LINKS } from '../../constants';
import './Navbar.css';

export interface NavbarProps {
  setIsSidebarVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

const Navbar = ({ setIsSidebarVisible }: NavbarProps) => {
  const navRef = useRef<HTMLElement | undefined>();
  const [isNavLogHidden, setIsNavLogHidden] = useState(true);
  useEffect(() => {
    document.addEventListener('scroll', () => {
      if (navRef.current!.getBoundingClientRect().y === 0) {
        setIsNavLogHidden(false);
      } else {
        setIsNavLogHidden(true);
      }
      console.log(navRef);
    });
  }, []);

  return (
    <nav
      ref={navRef}
      className={classNames('nav', { ['nav_on-scroll']: !isNavLogHidden })}
    >
      <div className='container'>
        <div className='nav__content'>
          <div className='nav__logo'>
            <a href='#top'>
              <img src='/icons/dodo-square-logo.png' alt='' />
            </a>
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
