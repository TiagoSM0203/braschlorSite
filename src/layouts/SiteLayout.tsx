import { Outlet, useLocation } from "react-router-dom";
import styled from "styled-components";
import Footer from "../components/footer";
import Header from "../components/header";
import HeroPages from "../components/hero-pages";
import { contactLink, navigationLinks } from "../data/navigation";
import { Container, GlobalCss } from "../styles";

const HeaderLayer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 3;
  padding-top: 16px;

  @media (max-width: 900px) {
    padding-top: 12px;
  }
`;

const SiteLayout = () => {
  const location = useLocation();
  const currentInternalPage = [...navigationLinks, contactLink].find(
    ({ to }) => to !== "/" && to === location.pathname,
  );

  return (
    <>
      <GlobalCss />
      <HeaderLayer>
        <Container>
          <Header />
        </Container>
      </HeaderLayer>
      {currentInternalPage && <HeroPages title={currentInternalPage.label} />}
      <Outlet />
      <Footer />
    </>
  );
};

export default SiteLayout;
