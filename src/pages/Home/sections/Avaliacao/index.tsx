import { FaStar } from "react-icons/fa6";
import { Container } from "../../../../styles";
import mascotMobile from "../../../../assets/imgs/mascote-bracos-cruzados.png";
import mascot from "../../../../assets/imgs/mascote-encostado.png";
import ScrollReveal from "../../scrollReveal";
import {
  AvaliacaoBody,
  AvaliacaoCard,
  AvaliacaoCards,
  AvaliacaoMascot,
  AvaliacaoSection,
  AvaliacaoStars,
  AvaliacaoTitle,
} from "./styles";

const avaliacoes = [
  {
    texto:
      "Produto excelente. Minha roupa estava com uma mancha amarela, deixei de molho de um dia para o outro e a mancha saiu. Aprovadíssimo!",
    autor: "Carla Mendes",
  },
  {
    texto:
      "Nossa, os produtos de vocês são demais. Meus clientes amaram. Quero mais desse lava-roupas azul.",
    autor: "Luciene",
  },
  {
    texto:
      "Não entendo muito de lavagem de roupas, comprei esse percarbonato sem muita expectativa e fiquei surpreso com o resultado. Vocês estão de parabéns, vou comprar mais!",
    autor: "Bruno Carvalho",
  },
  {
    texto:
      "Peguei alguns produtos para testar, principalmente o percarbonato e o lava-roupas azul. Vendeu mais rápido do que eu esperava. O pessoal gostou bastante. Parabéns!",
    autor: "Diego Martins",
  },
];

const Avaliacao = () => (
  <Container>
    <AvaliacaoSection>
      <ScrollReveal>
        {({ revealProps, revealRef }) => (
          <AvaliacaoTitle ref={revealRef} {...revealProps}>
            <h1>Confiança construída na prática</h1>
            <p>
              Avaliações reais que comprovam a performance e a qualidade da
              nossa linha.
            </p>
          </AvaliacaoTitle>
        )}
      </ScrollReveal>
      <AvaliacaoBody>
        <ScrollReveal delay={60} variant="left">
          {({ revealProps, revealRef }) => (
            <AvaliacaoMascot ref={revealRef} {...revealProps}>
              <picture>
                <source media="(max-width: 1024px)" srcSet={mascotMobile} />
                <img src={mascot} alt="Mascote apoiado nos cards de avaliação" />
              </picture>
            </AvaliacaoMascot>
          )}
        </ScrollReveal>
        <AvaliacaoCards>
          {avaliacoes.map(({ texto, autor }, index) => (
            <ScrollReveal key={autor} delay={index * 90}>
              {({ revealProps, revealRef }) => (
                <AvaliacaoCard ref={revealRef} {...revealProps}>
                  <AvaliacaoStars aria-label="5 estrelas">
                    {Array.from({ length: 5 }).map((_, index) => (
                      <FaStar key={index} />
                    ))}
                  </AvaliacaoStars>
                  <p>{texto}</p>
                  <h4>{autor}</h4>
                </AvaliacaoCard>
              )}
            </ScrollReveal>
          ))}
        </AvaliacaoCards>
      </AvaliacaoBody>
    </AvaliacaoSection>
  </Container>
);

export default Avaliacao;
