import { Container } from "../../../../styles";
import {
  ButtonDiv,
  HeroCard,
  HeroContent,
  HeroSection,
} from "./styles";
import { Button } from "../../../../components/header/styles";

const Hero = () => (
  <HeroSection>
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
