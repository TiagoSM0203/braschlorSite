import { useEffect, useState } from "react";
import { FaWhatsapp } from "react-icons/fa6";
import { Link, useLocation } from "react-router-dom";
import { headerSellerLink, navigationLinks } from "../../data/navigation";
import {
  DesktopButton,
  HeaderBar,
  LinkItem,
  Links,
  MenuButton,
  MobileButton,
  Nav,
} from "./styles";

import logo from "../../assets/imgs/logo_braschlor.webp";

const HEADER_COMPACT_BREAKPOINT = 1024;

const Header = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCompactView, setIsCompactView] = useState(
    () => window.innerWidth <= HEADER_COMPACT_BREAKPOINT,
  );

  useEffect(() => {
    const handleResize = () => {
      const compactView = window.innerWidth <= HEADER_COMPACT_BREAKPOINT;

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
  const isLinkActive = (to: string, end?: boolean) => {
    const [pathname, hashFragment] = to.split("#");
    const targetPathname = pathname || "/";

    if (hashFragment) {
      return (
        location.pathname === targetPathname &&
        location.hash === `#${hashFragment}`
      );
    }

    if (end) {
      return location.pathname === targetPathname && location.hash === "";
    }

    return (
      location.pathname === targetPathname ||
      location.pathname.startsWith(`${targetPathname}/`)
    );
  };

  return (
    <HeaderBar>
      <Link to="/" aria-label="Braschlor" onClick={closeMenu}>
        <img
          src={logo}
          alt="Braschlor Logo"
          loading="eager"
          decoding="async"
          fetchPriority="high"
        />
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

      <Nav $isMenuOpen={isMenuOpen} aria-label="Navega\u00E7\u00E3o principal">
        <Links>
          {navigationLinks.map(({ to, label, end }) => (
            <LinkItem key={to}>
              <Link
                to={to}
                onClick={closeMenu}
                className={isLinkActive(to, end) ? "is-active" : undefined}
                aria-current={isLinkActive(to, end) ? "page" : undefined}
              >
                {label}
              </Link>
            </LinkItem>
          ))}
        </Links>
        {isCompactView && (
          <MobileButton
            href={headerSellerLink.href}
            target="_blank"
            rel="noreferrer"
            aria-label={headerSellerLink.label}
            title={headerSellerLink.label}
            onClick={closeMenu}
          >
            <FaWhatsapp aria-hidden="true" />
          </MobileButton>
        )}
      </Nav>

      {!isCompactView && (
        <DesktopButton
          href={headerSellerLink.href}
          target="_blank"
          rel="noreferrer"
          aria-label={headerSellerLink.label}
          title={headerSellerLink.label}
        >
          <FaWhatsapp aria-hidden="true" />
        </DesktopButton>
      )}
    </HeaderBar>
  );
};

export default Header;

