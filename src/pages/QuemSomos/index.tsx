import { useState } from "react";
import { FaRegEnvelope } from "react-icons/fa6";
import marcas from "../../assets/imgs/mascote-marcas.png";
import nossaHistoria from "../../assets/imgs/nossa-historia.png";
import qualidade from "../../assets/imgs/mascote-qualidade.png";
import reciclagem from "../../assets/imgs/mascote-reciclando.png";
import { Button } from "../../components/header/styles";
import { Container, TitleAndSubtitle } from "../../styles";
import { AvaliacaoSection } from "../Home/sections/Avaliacao/styles";
import ScrollReveal from "../Home/scrollReveal";
import {
  EmailDiv,
  MascasContent,
  MascasSection,
  NossaHistoriaContent,
  NossaHistoriaExtra,
  NossaHistoriaText,
  NossaHistoriaToggle,
  QualidadeReciclagem,
  QualidadeReciclagemSection,
  QuemSomosLeadTitle,
  QuerRevenderButtons,
  QuerRevenderSection,
} from "./styles";

const historyTitle = "Nossa hist\u00f3ria";

const historyParagraphs = [
  "A Braschlor foi fundada em 2006, por\u00e9m consolidada em 2010 quando incrementou domissanit\u00e1rios e mat\u00e9rias primas a seu portf\u00f3lio de produtos, dando inicio a um projeto de ind\u00fastria e distribui\u00e7\u00e3o de mat\u00e9rias-primas.",
  "Experi\u00eancia e dedica\u00e7\u00e3o para promover a satisfa\u00e7\u00e3o de nossos clientes com o compromisso de aliar qu\u00edmica a natureza, sempre em busca de inova\u00e7\u00e3o com desenvolvimento sustent\u00e1vel.",
  "Atuamos em todo o territ\u00f3rio Nacional com garantia de entrega, qualidade e pre\u00e7os competitivos.",
];

const chemistryTitle = "Qu\u00edmica aliada \u00e0 natureza";
const chemistryText =
  "Unimos alta performance na limpeza com uso consciente no dia a dia. Mais rendimento, mais resultado e mais equil\u00edbrio em cada produto.";
const qualityText =
  "Trabalhamos com padr\u00e3o e controle em cada etapa para garantir produtos eficientes, com alto rendimento e resultado real no uso di\u00e1rio.";
const brandsText =
  "A Braschlor atua com duas marcas que representam o nosso padr\u00e3o de qualidade e compromisso com resultado: Branquinho e Lune Blanche. Ambas fazem parte do nosso portf\u00f3lio de produtos, desenvolvidos com foco em alto rendimento, efici\u00eancia e confian\u00e7a no uso di\u00e1rio. Seja para consumo pr\u00f3prio ou para revenda, nossas marcas entregam solu\u00e7\u00f5es completas para diferentes necessidades de limpeza, sempre mantendo o cuidado e o desempenho que fazem a diferen\u00e7a.";
const resellerText =
  "Fale com a nossa equipe e escolha os produtos ideais para voc\u00ea. Clique em um dos bot\u00f5es abaixo ou chame no e-mail da empresa para atendimento r\u00e1pido.";

const QuemSomosPage = () => {
  const [isHistoriaExpanded, setIsHistoriaExpanded] = useState(false);

  return (
    <>
      <Container>
        <ScrollReveal>
          {({ revealProps, revealRef }) => (
            <QuemSomosLeadTitle ref={revealRef} {...revealProps}>
              <h1>{historyTitle}</h1>
            </QuemSomosLeadTitle>
          )}
        </ScrollReveal>

        <ScrollReveal delay={80}>
          {({ revealProps, revealRef }) => (
            <NossaHistoriaContent ref={revealRef} {...revealProps}>
              <img src={nossaHistoria} alt={historyTitle} />
              <NossaHistoriaText>
                <p>{historyParagraphs[0]}</p>
                <NossaHistoriaExtra $isExpanded={isHistoriaExpanded}>
                  <div>
                    <p>{historyParagraphs[1]}</p>
                    <p>{historyParagraphs[2]}</p>
                  </div>
                </NossaHistoriaExtra>
                <NossaHistoriaToggle
                  as="button"
                  type="button"
                  onClick={() => setIsHistoriaExpanded((currentState) => !currentState)}
                  aria-expanded={isHistoriaExpanded}
                >
                  {isHistoriaExpanded ? "Ver menos" : "Ver mais"}
                </NossaHistoriaToggle>
              </NossaHistoriaText>
            </NossaHistoriaContent>
          )}
        </ScrollReveal>
      </Container>

      <ScrollReveal>
        {({ revealProps, revealRef }) => (
          <QualidadeReciclagemSection ref={revealRef} {...revealProps}>
            <Container>
              <QualidadeReciclagem>
                <img src={reciclagem} alt="Mascote reciclando" />
                <div>
                  <h4>{chemistryTitle}</h4>
                  <p>{chemistryText}</p>
                </div>
              </QualidadeReciclagem>

              <QualidadeReciclagem>
                <img src={qualidade} alt="Mascote qualidade" />
                <div>
                  <h4>Qualidade</h4>
                  <p>{qualityText}</p>
                </div>
              </QualidadeReciclagem>
            </Container>
          </QualidadeReciclagemSection>
        )}
      </ScrollReveal>

      <Container>
        <AvaliacaoSection>
          <ScrollReveal delay={60}>
            {({ revealProps, revealRef }) => (
              <MascasSection ref={revealRef} {...revealProps}>
                <h1>Nossas marcas</h1>
                <MascasContent>
                  <p>{brandsText}</p>
                  <img src={marcas} alt="Nossas marcas" />
                </MascasContent>
              </MascasSection>
            )}
          </ScrollReveal>
        </AvaliacaoSection>

        <ScrollReveal delay={80} variant="scale">
          {({ revealProps, revealRef }) => (
            <QuerRevenderSection ref={revealRef} {...revealProps}>
              <TitleAndSubtitle>
                <h1>Quer comprar ou revender?</h1>
              </TitleAndSubtitle>
              <p className="texto">{resellerText}</p>
              <QuerRevenderButtons>
                <Button>Quero revender</Button>
                <a className="botao" href="#">
                  Comprar agora
                </a>
              </QuerRevenderButtons>
              <EmailDiv>
                <FaRegEnvelope />
                <p>vendas@braschlor.com.br</p>
              </EmailDiv>
            </QuerRevenderSection>
          )}
        </ScrollReveal>
      </Container>
    </>
  );
};

export default QuemSomosPage;
