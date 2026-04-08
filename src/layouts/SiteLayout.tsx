import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import styled from "styled-components";
import Footer from "../components/footer";
import Header from "../components/header";
import HeroPages from "../components/hero-pages";
import { navigationLinks } from "../data/navigation";
import { Container, GlobalCss } from "../styles";

const heroGradient =
  "radial-gradient(circle, rgba(42, 71, 177, 1) 0%, rgba(0, 24, 114, 1) 100%)";

const HeaderLayer = styled.div<{ $isOverlay: boolean; $useGradientBackground: boolean }>`
  position: ${({ $isOverlay }) => ($isOverlay ? "absolute" : "relative")};
  top: 0;
  left: 0;
  width: 100%;
  z-index: 3;
  padding-top: 16px;
  padding-bottom: ${({ $useGradientBackground }) => ($useGradientBackground ? "12px" : "0")};
  background: ${({ $useGradientBackground }) =>
    $useGradientBackground ? heroGradient : "transparent"};

  @media (max-width: 900px) {
    padding-top: 12px;
    padding-bottom: ${({ $useGradientBackground }) => ($useGradientBackground ? "10px" : "0")};
  }
`;

const SiteLayout = () => {
  const location = useLocation();
  const currentInternalPage = navigationLinks.find(({ to }) => to !== "/" && to === location.pathname);
  const produtoPathPrefix = "/nossos-produtos/";
  const isProdutoDetalheRoute = location.pathname.startsWith(produtoPathPrefix);
  const heroTitle = currentInternalPage?.label;
  const shouldShowHero = Boolean(heroTitle) && !isProdutoDetalheRoute;

  useEffect(() => {
    if (!location.hash) {
      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
      return;
    }

    const frameId = window.requestAnimationFrame(() => {
      const sectionId = decodeURIComponent(location.hash.slice(1));
      const targetSection = document.getElementById(sectionId);

      if (!targetSection) {
        window.scrollTo({ top: 0, left: 0, behavior: "auto" });
        return;
      }

      targetSection.scrollIntoView({ behavior: "smooth", block: "start" });
    });

    return () => window.cancelAnimationFrame(frameId);
  }, [location.hash, location.pathname]);

  return (
    <>
      <GlobalCss />
      <HeaderLayer
        $isOverlay={!isProdutoDetalheRoute}
        $useGradientBackground={isProdutoDetalheRoute}
      >
        <Container>
          <Header />
        </Container>
      </HeaderLayer>
      {shouldShowHero && heroTitle ? <HeroPages title={heroTitle} /> : null}
      <Outlet />
      <Footer />
    </>
  );
};

export default SiteLayout;
