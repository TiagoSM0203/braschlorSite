import { Link } from "react-router-dom";
import cloro from "../../../../assets/imgs/cloro.webp";
import detergentes from "../../../../assets/imgs/detergentes.webp";
import limpezaPesada from "../../../../assets/imgs/limpeza-pesada.webp";
import desinfetantes from "../../../../assets/imgs/desinfetante.webp";
import lavanderia from "../../../../assets/imgs/lavanderia.webp";
import automotivo from "../../../../assets/imgs/automotivo.webp";
import { Button } from "../../../../components/header/styles";
import { Container } from "../../../../styles";
import ScrollReveal from "../../scrollReveal";
import {
  getNossosProdutosPath,
  type CategoriaProduto,
} from "../../../NossosProdutos/catalogo";
import {
  ButtonDiv,
  CatalogoCard,
  CatalogoCards,
  CatalogoSection,
  CatalogoTitle,
} from "./styles";

const catalogoItems = [
  {
    categoria: "Detergentes" as CategoriaProduto,
    image: detergentes,
    alt: "Linha detergentes",
    title: "Detergentes",
    description: "Detergente neutro e detergente cristal.",
  },
  {
    categoria: "Linha Cloro" as CategoriaProduto,
    image: cloro,
    alt: "Linha cloro",
    title: "Linha cloro",
    description: "Água sanitária, cloro líquido 6% e cloro em gel.",
  },
  {
    categoria: "Limpeza pesada" as CategoriaProduto,
    image: limpezaPesada,
    alt: "Linha limpeza pesada",
    title: "Limpeza pesada",
    description: "Sabão querosene, Branquinho e multiuso.",
  },
  {
    categoria: "Desinfetantes" as CategoriaProduto,
    image: desinfetantes,
    alt: "Linha desinfetantes",
    title: "Desinfetantes",
    description: "Casa Limpa, Lavanda, Marine, Talco e Flores do Campo.",
  },
  {
    categoria: "Lavanderia" as CategoriaProduto,
    image: lavanderia,
    alt: "Linha lavanderia",
    title: "Lavanderia",
    description:
      "Lava-roupas líquido, amaciante, percarbonato de sódio e alvejante sem cloro.",
  },
  {
    categoria: "Linha automotiva" as CategoriaProduto,
    image: automotivo,
    alt: "Linha automotiva",
    title: "Linha automotiva",
    description: "Lava-autos, limpa pneu em gel e silicone em gel.",
  },
];

const NossoCatalogo = () => (
  <CatalogoSection>
    <Container>
      <ScrollReveal>
        {({ revealProps, revealRef }) => (
          <CatalogoTitle ref={revealRef} {...revealProps}>
            <h1>Nosso catálogo</h1>
            <p>
              Escolha uma categoria e veja os produtos ideais para sua rotina ou
              para revender.
            </p>
          </CatalogoTitle>
        )}
      </ScrollReveal>

      <CatalogoCards>
        {catalogoItems.map(({ categoria, image, alt, title, description }, index) => (
          <Link to={getNossosProdutosPath([categoria])} key={title}>
            <ScrollReveal delay={index * 90}>
              {({ revealProps, revealRef }) => (
                <CatalogoCard ref={revealRef} {...revealProps}>
                  <img src={image} alt={alt} loading="lazy" decoding="async" />
                  <h2>{title}</h2>
                  <p>{description}</p>
                </CatalogoCard>
              )}
            </ScrollReveal>
          </Link>
        ))}
      </CatalogoCards>

      <ScrollReveal delay={180} variant="scale">
        {({ revealProps, revealRef }) => (
          <ButtonDiv ref={revealRef} {...revealProps}>
            <Button as={Link} to={getNossosProdutosPath()}>
              Ver catálogo completo
            </Button>
          </ButtonDiv>
        )}
      </ScrollReveal>
    </Container>
  </CatalogoSection>
);

export default NossoCatalogo;

