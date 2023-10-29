import { useEffect, useRef, useState } from "react";
import { Button } from "..";
import "./Navbar.css";
import classNames from "classnames";

export interface NavbarProps {
  setIsSidebarVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

const Navbar = ({ setIsSidebarVisible }: NavbarProps) => {
  const navRef = useRef<HTMLElement | undefined>();
  const [isNavLogHidden, setIsNavLogHidden] = useState(true);
  useEffect(() => {
    document.addEventListener("scroll", () => {
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
      className={classNames("nav", { ["nav_on-scroll"]: !isNavLogHidden })}
    >
      <div className="container">
        <div className="nav__content">
          <div className="nav__logo">
            <a href="#top">
              <img src="/icons/dodo-square-logo.png" alt="" />
            </a>
          </div>
          <ul className="nav__list">
            <li className="nav__item">
              <a href="#">Пицца</a>
            </li>
            <li className="nav__item">
              <a href="#">Закуски</a>
            </li>
            <li className="nav__item">
              <a href="#">Десерты</a>
            </li>
            <li className="nav__item">
              <a href="#">Напитки</a>
            </li>
            <li className="nav__item">
              <a href="#">Кофе</a>
            </li>
            <li className="nav__item">
              <a href="#">Коктейли</a>
            </li>
            <li className="nav__item">
              <a href="#">Соусы</a>
            </li>
            <li className="nav__item">
              <a href="#">Другие товары</a>
            </li>
            <li className="nav__item">
              <a href="#">Акции</a>
            </li>
          </ul>
          <div className="nav__btn">
            <Button
              type="primary-btn"
              size="medium-btn"
              text="Корзина"
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
