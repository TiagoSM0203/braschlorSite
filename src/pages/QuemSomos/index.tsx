import { Container, TitleAndSubtitle } from "../../styles";
import nossaHistoria from "../../assets/imgs/nossa-historia.png";
import reciclagem from "../../assets/imgs/mascote-reciclando.png";
import qualidade from "../../assets/imgs/mascote-qualidade.png";
import marcas from "../../assets/imgs/mascote-marcas.png";
import ScrollReveal from "../Home/scrollReveal";
import { AvaliacaoSection } from "../Home/sections/Avaliacao/styles";
import { Button } from "../../components/header/styles";
import { FaRegEnvelope } from "react-icons/fa6";
import {
  EmailDiv,
  MascasContent,
  MascasSection,
  NossaHistoriaContent,
  NossaHistoriaText,
  QualidadeReciclagem,
  QualidadeReciclagemSection,
  QuemSomosLeadTitle,
  QuerRevenderButtons,
  QuerRevenderSection,
} from "./styles";

const QuemSomosPage = () => (
  <>
    <Container>
      <ScrollReveal>
        {({ revealProps, revealRef }) => (
          <QuemSomosLeadTitle ref={revealRef} {...revealProps}>
            <h1>Nossa história</h1>
          </QuemSomosLeadTitle>
        )}
      </ScrollReveal>

      <ScrollReveal delay={80}>
        {({ revealProps, revealRef }) => (
          <NossaHistoriaContent ref={revealRef} {...revealProps}>
            <img src={nossaHistoria} alt="Nossa História" />
            <NossaHistoriaText>
              <p>
                A Braschlor foi fundada em 2006, porém consolidada em 2010 quando
                incrementou domissanitários e matérias primas a seu portfólio de
                produtos, dando inicio a um projeto de indústria e distribuição de
                matérias-primas.
              </p>
              <p>
                Experiência e dedicação para promover a satisfação de nossos clientes
                com o compromisso de aliar química a natureza, sempre em busca de
                inovação com desenvolvimento sustentável.
              </p>
              <p>
                Atuamos em todo o território Nacional com garantia de entrega,
                qualidade e preços competitivos.
              </p>
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
                <h4>Química aliada à natureza</h4>
                <p>
                  Unimos alta performance na limpeza com uso consciente no dia a dia.
                  Mais rendimento, mais resultado e mais equilíbrio em cada produto.
                </p>
              </div>
            </QualidadeReciclagem>

            <QualidadeReciclagem>
              <img src={qualidade} alt="Mascote qualidade" />
              <div>
                <h4>Qualidade</h4>
                <p>
                  Trabalhamos com padrão e controle em cada etapa para garantir
                  produtos eficientes, com alto rendimento e resultado real no uso
                  diário.
                </p>
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
                <p>
                  A Braschlor atua com duas marcas que representam o nosso padrão de
                  qualidade e compromisso com resultado: Branquinho e Lune Blanche.
                  Ambas fazem parte do nosso portfólio de produtos, desenvolvidos com
                  foco em alto rendimento, eficiência e confiança no uso diário. Seja
                  para consumo próprio ou para revenda, nossas marcas entregam soluções
                  completas para diferentes necessidades de limpeza, sempre mantendo o
                  cuidado e o desempenho que fazem a diferença.
                </p>
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
            <p className="texto">
              Fale com a nossa equipe e escolha os produtos ideais para você. Clique
              em um dos botões abaixo ou chame no e-mail da empresa para atendimento
              rápido.
            </p>
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

export default QuemSomosPage;
