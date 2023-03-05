import "./index.scss";
import { Link, NavLink } from "react-router-dom";
import { v4 as getUid } from "uuid";
import cn from "classnames";

function Header() {
  return (
    <header className="header">
      <Link className="header__logo link-unstyling" to="/">
        V-Time
      </Link>
      <nav className="header__menu">
        <ul className="header__menu-list list-unstyling">
          <li className="header__menu-item" key={getUid()}>
            <NavLink
              to="/"
              className={({ isActive }) =>
                cn("header__menu-link link-unstyling", { "header__menu-link_active": isActive })
              }
            >
              Главная
            </NavLink>
          </li>
          <li className="header__menu-item" key={getUid()}>
            <NavLink
              to="/settings"
              className={({ isActive }) =>
                cn("header__menu-link link-unstyling", { "header__menu-link_active": isActive })
              }
            >
              Настройки
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
