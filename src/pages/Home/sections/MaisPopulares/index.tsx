import { useEffect, useRef, useState } from "react";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import { Container } from "../../../../styles";
import ScrollReveal from "../../scrollReveal";
import {
  MaisPopularesAction,
  MaisPopularesCard,
  MaisPopularesCardContent,
  MaisPopularesCardImage,
  MaisPopularesCarouselOuter,
  MaisPopularesCardText,
  MaisPopularesCarouselDots,
  MaisPopularesCarouselDot,
  MaisPopularesCarouselShell,
  MaisPopularesCarouselSlide,
  MaisPopularesCarouselTrack,
  MaisPopularesCarouselViewport,
  MaisPopularesControlButton,
  MaisPopularesControls,
  MaisPopularesSection,
  MaisPopularesTitle,
} from "./styles";
import percarbonato from "../../../../assets/imgs/percarbonato.webp";
import sabao from "../../../../assets/imgs/sabao-azul.webp";
import aguaSanitaria from "../../../../assets/imgs/agua-sanitaria.webp";
import querosene from "../../../../assets/imgs/querosene.webp";
import silicone from "../../../../assets/imgs/silicone.webp";
import { getProdutoPath } from "../../../NossosProdutos/catalogo";

const maisPopularesItems = [
  {
    slug: "percarbonato",
    image: percarbonato,
    alt: "Percarbonato de sódio",
    title: "Percarbonato de sódio",
    description:
      "Auxilia na remoção de manchas e reforça a lavagem de roupas brancas e coloridas.",
  },
  {
    slug: "sabao-azul",
    image: sabao,
    alt: "Lava-roupas líquido azul",
    title: "Lava-roupas líquido azul",
    description: "Lavagem eficiente para o dia a dia, com boa espuma, perfume e rendimento.",
  },
  {
    slug: "agua-sanitaria-5l-2l",
    image: aguaSanitaria,
    alt: "Água sanitária",
    title: "Água sanitária",
    description: "Branqueia, higieniza e ajuda a eliminar odores na rotina de limpeza.",
  },
  {
    slug: "querosene-5l-2l",
    image: querosene,
    alt: "Sabão querosene",
    title: "Sabão querosene",
    description:
      "Indicado para limpeza pesada de pisos e superfícies com sujeira mais impregnada.",
  },
  {
    slug: "silicone-g-p",
    image: silicone,
    alt: "Silicone em gel",
    title: "Silicone em gel",
    description:
      "Acabamento com brilho para painéis, plásticos e borrachas do veículo.",
  },
];

const MaisPopulares = () => {
  const autoplay = useRef(
    Autoplay({
      delay: 3500,
      stopOnInteraction: false,
      stopOnMouseEnter: true,
      stopOnLastSnap: false,
    }),
  );
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      align: "start",
      loop: true,
    },
    [autoplay.current],
  );
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  useEffect(() => {
    if (!emblaApi) return;

    const updateCarouselState = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
      setScrollSnaps(emblaApi.scrollSnapList());
      setCanScrollPrev(emblaApi.canScrollPrev());
      setCanScrollNext(emblaApi.canScrollNext());
    };

    updateCarouselState();
    emblaApi.on("reInit", updateCarouselState);
    emblaApi.on("select", updateCarouselState);

    return () => {
      emblaApi.off("reInit", updateCarouselState);
      emblaApi.off("select", updateCarouselState);
    };
  }, [emblaApi]);

  return (
    <MaisPopularesSection>
      <Container>
        <ScrollReveal>
          {({ revealProps, revealRef }) => (
            <MaisPopularesTitle ref={revealRef} {...revealProps}>
              <h1>Mais populares</h1>
              <p>Alta performance e rendimento: os favoritos dos nossos clientes.</p>
            </MaisPopularesTitle>
          )}
        </ScrollReveal>
      </Container>

      <MaisPopularesCarouselOuter>
        <MaisPopularesCarouselShell>
          <MaisPopularesCarouselViewport ref={emblaRef}>
            <MaisPopularesCarouselTrack>
              {maisPopularesItems.map(({ image, alt, title, description, slug }, index) => (
                <MaisPopularesCarouselSlide key={title}>
                  <ScrollReveal delay={(index % 3) * 90}>
                    {({ revealProps, revealRef }) => (
                      <MaisPopularesCard ref={revealRef} {...revealProps}>
                        <MaisPopularesCardContent>
                          <MaisPopularesCardImage>
                            <img src={image} alt={alt} loading="lazy" decoding="async" />
                          </MaisPopularesCardImage>

                          <MaisPopularesCardText>
                            <h2>{title}</h2>
                            <p>{description}</p>
                          </MaisPopularesCardText>
                        </MaisPopularesCardContent>

                        <MaisPopularesAction href={getProdutoPath(slug)}>
                          Ver produto
                        </MaisPopularesAction>
                      </MaisPopularesCard>
                    )}
                  </ScrollReveal>
                </MaisPopularesCarouselSlide>
              ))}
            </MaisPopularesCarouselTrack>
          </MaisPopularesCarouselViewport>

          <ScrollReveal delay={180} variant="scale">
            {({ revealProps, revealRef }) => (
              <MaisPopularesControls ref={revealRef} {...revealProps}>
                <MaisPopularesControlButton
                  type="button"
                  onClick={() => {
                    emblaApi?.scrollPrev();
                    autoplay.current.reset();
                  }}
                  disabled={!canScrollPrev}
                  aria-label="Slide anterior"
                >
                  <span aria-hidden="true">&lt;</span>
                </MaisPopularesControlButton>

                <MaisPopularesCarouselDots>
                  {scrollSnaps.map((_, index) => (
                    <MaisPopularesCarouselDot
                      key={index}
                      type="button"
                      onClick={() => {
                        emblaApi?.scrollTo(index);
                        autoplay.current.reset();
                      }}
                      $isActive={index === selectedIndex}
                      aria-label={`Ir para o slide ${index + 1}`}
                    />
                  ))}
                </MaisPopularesCarouselDots>

                <MaisPopularesControlButton
                  type="button"
                  onClick={() => {
                    emblaApi?.scrollNext();
                    autoplay.current.reset();
                  }}
                  disabled={!canScrollNext}
                  aria-label="Próximo slide"
                >
                  <span aria-hidden="true">&gt;</span>
                </MaisPopularesControlButton>
              </MaisPopularesControls>
            )}
          </ScrollReveal>
        </MaisPopularesCarouselShell>
      </MaisPopularesCarouselOuter>
    </MaisPopularesSection>
  );
};

export default MaisPopulares;

