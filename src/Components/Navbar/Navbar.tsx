import { useEffect, useRef, useState, useContext } from 'react';
// import { Link } from 'react-router-dom';
import classNames from 'classnames';

import { Button, Notification } from '..';

import { SECTION_NAVIGATION_LINKS } from '../../constants';
import { ProductsAmountContext, SidebarContext } from '../../context';
import styles from './Navbar.module.scss';
import { ProductService } from '../../services/product/ProductService';

const Navbar = () => {
  const navRef = useRef<HTMLElement | undefined>();
  const { setIsSidebarVisible } = useContext(SidebarContext);
  const [isNavLogHidden, setIsNavLogHidden] = useState(true);
  const productService = useRef(new ProductService());

  useEffect(() => {
    document.addEventListener('scroll', () => {
      if (navRef.current!.getBoundingClientRect().y === 0) {
        setIsNavLogHidden(false);
      } else {
        setIsNavLogHidden(true);
      }
    });
  }, []);
  const { productsAmount } = useContext(ProductsAmountContext);
  return (
    <nav
      ref={navRef}
      className={classNames(styles.nav, {
        [styles['nav_on-scroll']]: !isNavLogHidden,
      })}
    >
      <div className='container'>
        <div className={styles.nav__content}>
          <div className={styles.nav__logo}>
            <a href='#top'>
              <img src='/icons/dodo-square-logo.png' alt='' />
            </a>
          </div>
          <ul className={styles.nav__list}>
            {SECTION_NAVIGATION_LINKS.map(({ link, title }) => (
              <li className={styles.nav__item} key={link}>
                <a href={link}>{title}</a>
              </li>
            ))}
          </ul>
          <div className={styles.nav__btn}>
            <Button
              type='primary-btn'
              size='medium-btn'
              onClick={() => {
                setIsSidebarVisible(true);

                const productIDs = localStorage.getItem('orders')?.split(',');
                if (productIDs && productIDs?.length !== 0) {
                  productService.current.searchProducts(productIDs);
                }
              }}
            >
              <span>Корзина</span>
              <>
                {Boolean(productsAmount) && (
                  <>
                    <div className={styles.nav__stick}></div>
                    <p id='quantity' className={styles.nav__quantity}>
                      {productsAmount}
                    </p>
                    <img
                      id='nav-arrow-right'
                      className={styles.nav__arrow}
                      src='/icons/arrow-right.svg'
                      alt=''
                    />
                  </>
                )}
              </>
            </Button>
          </div>
        </div>
        <div style={{ position: 'absolute', right: '0px', top: '76px' }}>
          {/* <Notification
            title='Слоеные палочки с ананасами и брусникой'
            amount={8}
          />
          <Notification title='Пепперони фреш' amount={30} /> */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
