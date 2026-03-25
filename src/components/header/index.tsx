import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { contactLink, navigationLinks } from "../../data/navigation";
import {
  HeaderBar,
  Links,
  LinkItem,
  DesktopButton,
  MobileButton,
  MenuButton,
  Nav,
} from "./styles";

import logo from "../../assets/imgs/logo_braschlor.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCompactView, setIsCompactView] = useState(() => window.innerWidth <= 900);

  useEffect(() => {
    const handleResize = () => {
      const compactView = window.innerWidth <= 900;

      setIsCompactView(compactView);

      if (!compactView) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleMenu = () => setIsMenuOpen((currentState) => !currentState);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <HeaderBar>
      <Link to="/" aria-label="Braschlor" onClick={closeMenu}>
        <img src={logo} alt="Braschlor Logo" />
      </Link>

      {isCompactView && (
        <MenuButton
          type="button"
          aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={isMenuOpen}
          onClick={toggleMenu}
          $isMenuOpen={isMenuOpen}
        >
          <span />
          <span />
          <span />
        </MenuButton>
      )}

      <Nav $isMenuOpen={isMenuOpen} aria-label="Navegacao principal">
        <Links>
          {navigationLinks.map(({ to, label, end }) => (
            <LinkItem key={to}>
              <NavLink
                to={to}
                end={end}
                onClick={closeMenu}
                className={({ isActive }) => (isActive ? "is-active" : undefined)}
              >
                {label}
              </NavLink>
            </LinkItem>
          ))}
        </Links>
        {isCompactView && (
          <MobileButton to={contactLink.to} onClick={closeMenu}>
            {contactLink.label}
          </MobileButton>
        )}
      </Nav>

      {!isCompactView && <DesktopButton to={contactLink.to}>{contactLink.label}</DesktopButton>}
    </HeaderBar>
  );
};

export default Header;
