import { Container } from "../../../../styles";
import heroDesktopVideo from "../../../../assets/imgs/hero-desktop.mp4";
import heroMobileVideo from "../../../../assets/imgs/hero-mobile.mp4";
import {
  ButtonDiv,
  DesktopHeroVideo,
  HeroCard,
  HeroContent,
  MobileHeroVideo,
  HeroSection,
} from "./styles";
import { Button } from "../../../../components/header/styles";

const Hero = () => (
  <HeroSection>
    <DesktopHeroVideo
      autoPlay
      muted
      playsInline
      preload="auto"
      aria-hidden="true"
    >
      <source src={heroDesktopVideo} type="video/mp4" />
    </DesktopHeroVideo>
    <MobileHeroVideo
      autoPlay
      muted
      playsInline
      preload="auto"
      aria-hidden="true"
    >
      <source src={heroMobileVideo} type="video/mp4" />
    </MobileHeroVideo>
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
            <a className="botao" href="#">Comprar agora</a>
          </ButtonDiv>
        </HeroCard>
      </Container>
    </HeroContent>
  </HeroSection>
);

export default Hero;
