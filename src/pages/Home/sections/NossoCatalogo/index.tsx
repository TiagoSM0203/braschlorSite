import cloro from "../../../../assets/imgs/cloro.png";
import detergentes from "../../../../assets/imgs/detergentes.png";
import limpezaPesada from "../../../../assets/imgs/limpeza-pesada.png";
import desinfetantes from "../../../../assets/imgs/desinfetante.png";
import lavanderia from "../../../../assets/imgs/lavanderia.png";
import automotivo from "../../../../assets/imgs/automotivo.png";
import { Button } from "../../../../components/header/styles";
import { Container } from "../../../../styles";
import ScrollReveal from "../../scrollReveal";
import {
  ButtonDiv,
  CatalogoCard,
  CatalogoCards,
  CatalogoSection,
  CatalogoTitle,
} from "./styles";

const catalogoItems = [
  {
    image: detergentes,
    alt: "Linha detergentes",
    title: "Detergentes",
    description: "Detergente neutro e detergente cristal.",
  },
  {
    image: cloro,
    alt: "Linha cloro",
    title: "Linha cloro",
    description: "Agua sanitaria, cloro liquido 6% e cloro gel.",
  },
  {
    image: limpezaPesada,
    alt: "Linha limpeza pesada",
    title: "Limpeza pesada",
    description: "Sabao querosene, Branquinho e multiuso.",
  },
  {
    image: desinfetantes,
    alt: "Linha desinfetantes",
    title: "Desinfetantes",
    description: "Casa limpa, lavanda, marine, talco e flores do campo.",
  },
  {
    image: lavanderia,
    alt: "Linha lavanderia",
    title: "Lavanderia",
    description:
      "Lava roupas liquido, amaciante, percarbonato de sodio e alvejante azul.",
  },
  {
    image: automotivo,
    alt: "Linha automotiva",
    title: "Linha automotiva",
    description: "Lava autos, limpa pneu gel e silicone gel.",
  },
];

const NossoCatalogo = () => (
  <CatalogoSection>
    <Container>
      <ScrollReveal>
        {({ revealProps, revealRef }) => (
          <CatalogoTitle ref={revealRef} {...revealProps}>
            <h1>Nosso Catalogo</h1>
            <p>
              Escolha uma categoria e veja os produtos ideais para sua rotina ou
              para revender.
            </p>
          </CatalogoTitle>
        )}
      </ScrollReveal>

      <CatalogoCards>
        {catalogoItems.map(({ image, alt, title, description }, index) => (
          <a href="#" key={title}>
            <ScrollReveal delay={index * 90}>
              {({ revealProps, revealRef }) => (
                <CatalogoCard ref={revealRef} {...revealProps}>
                  <img src={image} alt={alt} />
                  <h2>{title}</h2>
                  <p>{description}</p>
                </CatalogoCard>
              )}
            </ScrollReveal>
          </a>
        ))}
      </CatalogoCards>

      <ScrollReveal delay={180} variant="scale">
        {({ revealProps, revealRef }) => (
          <ButtonDiv ref={revealRef} {...revealProps}>
            <Button href="#">Ver catalogo completo</Button>
          </ButtonDiv>
        )}
      </ScrollReveal>
    </Container>
  </CatalogoSection>
);

export default NossoCatalogo;
