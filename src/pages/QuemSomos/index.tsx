import { useState } from "react";
import { FaRegEnvelope } from "react-icons/fa6";
import { Link } from "react-router-dom";
import marcas from "../../assets/imgs/mascote-marcas.webp";
import nossaHistoria from "../../assets/imgs/nossa-historia.webp";
import qualidade from "../../assets/imgs/mascote-qualidade.webp";
import reciclagem from "../../assets/imgs/mascote-reciclando.webp";
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

const historyTitle = "Nossa história";

const historyParagraphs = [
  "A Braschlor foi fundada em 2006 e consolidou sua atuação em 2010, quando ampliou o portfólio com domissanitários e matérias-primas, fortalecendo seu projeto de indústria e distribuição.",
  "Nossa trajetória é marcada por experiência, dedicação e pelo compromisso de unir química e natureza com responsabilidade, sempre em busca de inovação e desenvolvimento sustentável.",
  "Atuamos em todo o território nacional com foco em qualidade, regularidade no abastecimento e preços competitivos.",
];

const chemistryTitle = "Química aliada à natureza";
const chemistryText =
  "Unimos alta performance na limpeza com uso consciente no dia a dia. Mais rendimento, mais resultado e mais equilíbrio em cada produto.";
const qualityText =
  "Trabalhamos com padrão e controle em cada etapa para garantir produtos eficientes, com alto rendimento e resultado real no uso diário.";
const brandsText =
  "A Braschlor atua com duas marcas que representam o nosso padrão de qualidade e compromisso com resultado: Branquinho e Lune Blanche. Ambas fazem parte do nosso portfólio, desenvolvido com foco em rendimento, eficiência e confiança no uso diário. Seja para consumo próprio ou para revenda, nossas marcas entregam soluções completas para diferentes necessidades de limpeza.";
const resellerText =
  "Fale com a nossa equipe e escolha os produtos ideais para você. Use um dos botões abaixo ou entre em contato pelo e-mail da empresa para um atendimento rápido.";

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
              <img
                src={nossaHistoria}
                alt={historyTitle}
                loading="eager"
                decoding="async"
              />
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
                <img src={reciclagem} alt="Mascote reciclando" loading="lazy" decoding="async" />
                <div>
                  <h4>{chemistryTitle}</h4>
                  <p>{chemistryText}</p>
                </div>
              </QualidadeReciclagem>

              <QualidadeReciclagem>
                <img src={qualidade} alt="Mascote qualidade" loading="lazy" decoding="async" />
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
                  <img src={marcas} alt="Nossas marcas" loading="lazy" decoding="async" />
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
                <Button href="https://wa.me/5511993521508" target="_blank">Quero revender</Button>
                <Link className="botao" to="/nossos-produtos">
                  Comprar agora
                </Link>
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

