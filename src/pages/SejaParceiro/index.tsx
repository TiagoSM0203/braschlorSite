import fabricaEco from "../../assets/imgs/eco-fabrica.png";
import seloQualidade from "../../assets/imgs/distintivo.png";
import margem from "../../assets/imgs/margem.png";
import produtosLimpeza from "../../assets/imgs/produtos-de-limpeza.png";
import entregaRapida from "../../assets/imgs/entrega-rapida.png";
import atendimento from "../../assets/imgs/suporte-ao-cliente.png";
import mascoteWhatsApp from "../../assets/imgs/mascote-whats-app.png";
import mascoteNegociando from "../../assets/imgs/mascote-negociando.png";
import mascoteProdutos from "../../assets/imgs/mascote-produtos.png";
import mascoteCaminhao from "../../assets/imgs/mascote-caminhao.png";
import { Container, PageSection } from "../../styles";
import ScrollReveal from "../Home/scrollReveal";
import {
  ComoFuncionaActionAnchor,
  ComoFuncionaActionLink,
  ComoFuncionaList,
  ComoFuncionaNumber,
  ComoFuncionaSection,
  ComoFuncionaStep,
  ComoFuncionaStepContent,
  ComoFuncionaStepImage,
  ComoFuncionaTitle,
  FicouInteressadoAction,
  FicouInteressadoSection,
  FicouInteressadoText,
  FicouInteressadoTitle,
  ParaQuemRevendemosCard,
  ParaQuemRevendemosGroup,
  ParaQuemRevendemosSection,
  ParaQuemRevendemosSubtitle,
  ParaQuemRevendemosTitle,
  ParaQuemRevendemosTrack,
  ParaQuemRevendemosViewport,
  PorqueRevenderCard,
  PorqueRevenderSection,
  SejaParceiroLeadTitle,
} from "./styles";

const porqueRevenderItems = [
  {
    image: fabricaEco,
    alt: "F\u00E1brica",
    text: "Produtos direto da f\u00E1brica",
  },
  {
    image: seloQualidade,
    alt: "Selo de qualidade",
    text: "Alto rendimento e qualidade comprovada",
  },
  {
    image: margem,
    alt: "Gr\u00E1ficos de margem de lucro",
    text: "Margem atrativa para revenda",
  },
  {
    image: produtosLimpeza,
    alt: "Produtos de limpeza",
    text: "Linha completa com alta sa\u00EDda",
  },
  {
    image: entregaRapida,
    alt: "Entrega r\u00E1pida",
    text: "Entrega pr\u00F3pria para distribuidores",
  },
  {
    image: atendimento,
    alt: "Atendimento comercial",
    text: "Atendimento direto com um vendedor",
  },
];

const paraQuemRevendemosItems = [
  "Distribuidoras",
  "Revendedores",
  "Mercados",
  "Prestadores de servi\u00E7o",
  "Lojas",
  "Empreendedores",
];

const paraQuemRevendemosCopies = [0, 1, 2];

const comoFuncionaSteps = [
  {
    number: "1",
    image: mascoteWhatsApp,
    alt: "Mascote com celular de WhatsApp",
    description: "Entre em contato com nosso time comercial.",
    imageSize: "small" as const,
    tone: "blue" as const,
    reverse: false,
    action: {
      kind: "external" as const,
      href: "https://wa.me/5511993521508",
      label: "Falar com um vendedor",
    },
  },
  {
    number: "2",
    image: mascoteNegociando,
    alt: "Mascote negociando com cliente",
    description: "Receba orienta\u00E7\u00E3o e condi\u00E7\u00F5es de revenda.",
    imageSize: "default" as const,
    tone: "light" as const,
    reverse: true,
  },
  {
    number: "3",
    image: mascoteProdutos,
    alt: "Mascote com produtos do cat\u00E1logo",
    description: "Escolha os produtos ideais para o seu p\u00FAblico.",
    imageSize: "default" as const,
    tone: "blue" as const,
    reverse: false,
    action: {
      kind: "internal" as const,
      to: "/nossos-produtos",
      label: "Ver cat\u00E1logo",
    },
  },
  {
    number: "4",
    image: mascoteCaminhao,
    alt: "Mascote em caminh\u00E3o de entrega",
    description: "Receba os produtos e comece a vender.",
    imageSize: "default" as const,
    tone: "light" as const,
    reverse: true,
  },
];

const SejaParceiroPage = () => (
  <PageSection>
    <Container>
      <ScrollReveal>
        {({ revealProps, revealRef }) => (
          <SejaParceiroLeadTitle ref={revealRef} {...revealProps}>
            <h1>Por que revender nossos produtos?</h1>
          </SejaParceiroLeadTitle>
        )}
      </ScrollReveal>

      <PorqueRevenderSection>
        {porqueRevenderItems.map(({ alt, image, text }, index) => (
          <ScrollReveal key={text} delay={(index % 3) * 90}>
            {({ revealProps, revealRef }) => (
              <PorqueRevenderCard ref={revealRef} {...revealProps}>
                <img src={image} alt={alt} />
                <p>{text}</p>
              </PorqueRevenderCard>
            )}
          </ScrollReveal>
        ))}
      </PorqueRevenderSection>
    </Container>

    <ParaQuemRevendemosSection>
      <Container>
        <ScrollReveal>
          {({ revealProps, revealRef }) => (
            <ParaQuemRevendemosTitle ref={revealRef} {...revealProps}>
              <h1>{"Quem pode revender nossos produtos?"}</h1>
            </ParaQuemRevendemosTitle>
          )}
        </ScrollReveal>
      </Container>

      <ScrollReveal delay={70} variant="scale">
        {({ revealProps, revealRef }) => (
          <ParaQuemRevendemosViewport ref={revealRef} {...revealProps}>
            <ParaQuemRevendemosTrack>
              {paraQuemRevendemosCopies.map((copyIndex) => (
                <ParaQuemRevendemosGroup
                  key={copyIndex}
                  aria-hidden={copyIndex === 0 ? undefined : "true"}
                >
                  {paraQuemRevendemosItems.map((item) => (
                    <ParaQuemRevendemosCard key={`${copyIndex}-${item}`}>
                      {item}
                    </ParaQuemRevendemosCard>
                  ))}
                </ParaQuemRevendemosGroup>
              ))}
            </ParaQuemRevendemosTrack>
          </ParaQuemRevendemosViewport>
        )}
      </ScrollReveal>

      <Container>
        <ScrollReveal delay={120}>
          {({ revealProps, revealRef }) => (
            <ParaQuemRevendemosSubtitle ref={revealRef} {...revealProps}>
              {
                "Ideal para quem deseja iniciar ou ampliar a atua\u00E7\u00E3o no segmento de produtos de limpeza."
              }
            </ParaQuemRevendemosSubtitle>
          )}
        </ScrollReveal>
      </Container>
    </ParaQuemRevendemosSection>

    <Container>
      <ComoFuncionaSection>
        <ScrollReveal>
          {({ revealProps, revealRef }) => (
            <ComoFuncionaTitle ref={revealRef} {...revealProps}>
              <h1>Como funciona?</h1>
            </ComoFuncionaTitle>
          )}
        </ScrollReveal>

        <ComoFuncionaList>
          {comoFuncionaSteps.map(
            (
              {
                action,
                alt,
                description,
                image,
                imageSize,
                number,
                reverse,
                tone,
              },
              index,
            ) => (
              <ScrollReveal
                key={number}
                delay={index * 80}
                variant={reverse ? "right" : "left"}
              >
                {({ revealProps, revealRef }) => (
                  <ComoFuncionaStep
                    ref={revealRef}
                    {...revealProps}
                    $reverse={reverse}
                    $tone={tone}
                  >
                    <ComoFuncionaNumber
                      $side={reverse ? "left" : "right"}
                      $tone={tone}
                    >
                      {number}
                    </ComoFuncionaNumber>

                    <ComoFuncionaStepImage $reverse={reverse} $size={imageSize}>
                      <img src={image} alt={alt} />
                    </ComoFuncionaStepImage>

                    <ComoFuncionaStepContent $reverse={reverse} $tone={tone}>
                      <h2>{description}</h2>

                      {action?.kind === "external" ? (
                        <ComoFuncionaActionAnchor
                          href={action.href}
                          target="_blank"
                          rel="noreferrer"
                          $tone={tone}
                        >
                          {action.label}
                        </ComoFuncionaActionAnchor>
                      ) : null}

                      {action?.kind === "internal" ? (
                        <ComoFuncionaActionLink to={action.to} $tone={tone}>
                          {action.label}
                        </ComoFuncionaActionLink>
                      ) : null}
                    </ComoFuncionaStepContent>
                  </ComoFuncionaStep>
                )}
              </ScrollReveal>
            ),
          )}
        </ComoFuncionaList>
      </ComoFuncionaSection>

      <ScrollReveal delay={90} variant="scale">
        {({ revealProps, revealRef }) => (
          <FicouInteressadoSection ref={revealRef} {...revealProps}>
            <FicouInteressadoTitle>
              <h1>Ficou interessado?</h1>
            </FicouInteressadoTitle>

            <FicouInteressadoText>
              {
                "Fale com um de nossos vendedores e receba todas as informa\u00E7\u00F5es para iniciar seu neg\u00F3cio com seguran\u00E7a."
              }
            </FicouInteressadoText>

            <FicouInteressadoAction
              href="https://wa.me/5511993521508"
              target="_blank"
              rel="noreferrer"
            >
              Falar com um vendedor
            </FicouInteressadoAction>
          </FicouInteressadoSection>
        )}
      </ScrollReveal>
    </Container>
  </PageSection>
);

export default SejaParceiroPage;
