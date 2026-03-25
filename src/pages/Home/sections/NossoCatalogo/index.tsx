import cloro from "../../../../assets/imgs/cloro.png";
import detergentes from "../../../../assets/imgs/detergentes.png";
import limpezaPesada from "../../../../assets/imgs/limpeza-pesada.png";
import desinfetantes from "../../../../assets/imgs/desinfetante.png";
import lavanderia from "../../../../assets/imgs/lavanderia.png";
import automotivo from "../../../../assets/imgs/automotivo.png";
import { Button } from "../../../../components/header/styles";
import { Container, TitleAndSubtitle } from "../../../../styles";
import {
  ButtonDiv,
  CatalogoCard,
  CatalogoCards,
  CatalogoSection,
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
      <TitleAndSubtitle>
        <h1>Nosso Catalogo</h1>
        <p>
          Escolha uma categoria e veja os produtos ideais para sua rotina ou
          para revender.
        </p>
      </TitleAndSubtitle>

      <CatalogoCards>
        {catalogoItems.map(({ image, alt, title, description }) => (
          <a href="#" key={title}>
            <CatalogoCard>
              <img src={image} alt={alt} />
              <h2>{title}</h2>
              <p>{description}</p>
            </CatalogoCard>
          </a>
        ))}
      </CatalogoCards>

      <ButtonDiv>
        <Button href="#">Ver catalogo completo</Button>
      </ButtonDiv>
    </Container>
  </CatalogoSection>
);

export default NossoCatalogo;
