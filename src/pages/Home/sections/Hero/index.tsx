import { Container } from "../../../../styles";
import heroDesktopImage from "../../../../assets/imgs/hero2.webp";
import heroMobileImage from "../../../../assets/imgs/hero-mobile.webp";
import {
  ButtonDiv,
  ComprarAgoraButton,
  HeroBackgroundImage,
  HeroBackgroundPicture,
  HeroCard,
  HeroContent,
  HeroSection,
} from "./styles";
import { Button } from "../../../../components/header/styles";

const Hero = () => (
    <HeroSection>
      <HeroBackgroundPicture aria-hidden="true">
        <source srcSet={heroDesktopImage} media="(min-width: 1101px)" />
        <HeroBackgroundImage
          src={heroMobileImage}
          alt=""
          loading="eager"
          decoding="async"
          fetchPriority="high"
        />
      </HeroBackgroundPicture>
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
              <Button href="https://wa.me/5511993521508" target="_blank">Quero revender</Button>
              <ComprarAgoraButton to="/nossos-produtos">Comprar agora</ComprarAgoraButton>
            </ButtonDiv>
          </HeroCard>
        </Container>
      </HeroContent>
    </HeroSection>
  );

export default Hero;
