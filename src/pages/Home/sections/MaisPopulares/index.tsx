import { useEffect, useRef, useState } from "react";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import { Container, TitleAndSubtitle } from "../../../../styles";
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
} from "./styles";
import percarbonato from "../../../../assets/imgs/percarbonato.png";
import sabao from "../../../../assets/imgs/sabao-azul.png";
import aguaSanitaria from "../../../../assets/imgs/agua-sanitaria.png";
import querosene from "../../../../assets/imgs/querosene.png";
import silicone from "../../../../assets/imgs/silicone.png";

const maisPopularesItems = [
  {
    image: percarbonato,
    alt: "Percarbonato de sodio",
    title: "Percarbonato de sodio",
    description:
      "Branqueador poderoso para roupas brancas e coloridas.",
  },
  {
    image: sabao,
    alt: "Lava roupas liquido azul",
    title: "Lava roupas liquido azul",
    description: "Limpeza profunda com perfume duradouro e alto rendimento.",
  },
  {
    image: aguaSanitaria,
    alt: "Agua sanitaria",
    title: "Agua sanitaria",
    description: "Branqueia, desinfeta e ajuda a eliminar odores no dia a dia.",
  },
  {
    image: querosene,
    alt: "Sabao querosene",
    title: "Sabao querosene",
    description:
      "Ideal para limpeza pesada, gordura dificil e brilho renovado.",
  },
  {
    image: silicone,
    alt: "Silicone gel",
    title: "Silicone gel",
    description:
      "Brilho intenso para paineis e plasticos com acabamento duradouro.",
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
        <TitleAndSubtitle>
          <h1>Mais Populares</h1>
          <p>Alta performance e rendimento: os favoritos dos nossos clientes.</p>
        </TitleAndSubtitle>
      </Container>

      <MaisPopularesCarouselOuter>
        <MaisPopularesCarouselShell>
          <MaisPopularesCarouselViewport ref={emblaRef}>
            <MaisPopularesCarouselTrack>
              {maisPopularesItems.map(({ image, alt, title, description }) => (
                <MaisPopularesCarouselSlide key={title}>
                  <MaisPopularesCard>
                    <MaisPopularesCardContent>
                      <MaisPopularesCardImage>
                        <img src={image} alt={alt} />
                      </MaisPopularesCardImage>

                      <MaisPopularesCardText>
                        <h2>{title}</h2>
                        <p>{description}</p>
                      </MaisPopularesCardText>
                    </MaisPopularesCardContent>

                    <MaisPopularesAction href="#">Veja mais</MaisPopularesAction>
                  </MaisPopularesCard>
                </MaisPopularesCarouselSlide>
              ))}
            </MaisPopularesCarouselTrack>
          </MaisPopularesCarouselViewport>

          <MaisPopularesControls>
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
              aria-label="Proximo slide"
            >
              <span aria-hidden="true">&gt;</span>
            </MaisPopularesControlButton>
          </MaisPopularesControls>
        </MaisPopularesCarouselShell>
      </MaisPopularesCarouselOuter>
    </MaisPopularesSection>
  );
};

export default MaisPopulares;
