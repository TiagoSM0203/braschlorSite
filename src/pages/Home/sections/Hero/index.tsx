import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Container } from "../../../../styles";
import heroDesktopVideo from "../../../../assets/imgs/hero-desktop.mp4";
import heroMobileImage from "../../../../assets/imgs/hero-mobile.webp";
import {
  ButtonDiv,
  HeroBackgroundImage,
  DesktopHeroVideo,
  HeroCard,
  HeroContent,
  HeroSection,
} from "./styles";
import { Button } from "../../../../components/header/styles";

const HERO_DESKTOP_MEDIA_QUERY = "(min-width: 1101px)";

const Hero = () => {
  const [isDesktopViewport, setIsDesktopViewport] = useState(
    () => window.matchMedia(HERO_DESKTOP_MEDIA_QUERY).matches,
  );

  useEffect(() => {
    const mediaQuery = window.matchMedia(HERO_DESKTOP_MEDIA_QUERY);
    const handleViewportChange = (event: MediaQueryListEvent) => {
      setIsDesktopViewport(event.matches);
    };

    setIsDesktopViewport(mediaQuery.matches);
    mediaQuery.addEventListener("change", handleViewportChange);

    return () => mediaQuery.removeEventListener("change", handleViewportChange);
  }, []);

  return (
    <HeroSection>
      {isDesktopViewport ? (
        <DesktopHeroVideo
          autoPlay
          muted
          playsInline
          preload="metadata"
          aria-hidden="true"
        >
          <source src={heroDesktopVideo} type="video/mp4" />
        </DesktopHeroVideo>
      ) : (
        <HeroBackgroundImage
          src={heroMobileImage}
          alt=""
          aria-hidden="true"
          loading="eager"
          decoding="async"
          fetchPriority="high"
        />
      )}
      <HeroContent>
        <Container>
          <HeroCard>
            <h1>
              Produtos de limpeza direto da <span>fábrica</span>
            </h1>
            <p>
              Produtos de limpeza direto da indústria, para uso no dia a dia ou
              para revenda.
            </p>
            <ButtonDiv>
              <Button href="https://wa.me/5511993521508">Quero revender</Button>
              <Link className="botao" to="/nossos-produtos">Comprar agora</Link>
            </ButtonDiv>
          </HeroCard>
        </Container>
      </HeroContent>
    </HeroSection>
  );
};

export default Hero;

