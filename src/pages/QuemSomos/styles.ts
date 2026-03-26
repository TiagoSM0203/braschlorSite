import styled from "styled-components";
import { Button } from "../../components/header/styles";
import { cores, TitleAndSubtitle } from "../../styles";
import { revealStyles, type RevealMotionProps } from "../Home/scrollRevealStyles";

export const QuemSomosLeadTitle = styled(TitleAndSubtitle)<RevealMotionProps>`
  ${revealStyles}
`

export const NossaHistoriaContent = styled.div<RevealMotionProps>`
  ${revealStyles}
  width: 100%;
  display: grid;
  grid-template-columns: minmax(280px, 460px) minmax(0, 1fr);
  align-items: center;
  gap: clamp(24px, 8vw, 100px);
  margin-bottom: clamp(48px, 7vw, 88px);

  img {
    height: auto;
    display: block;
    justify-self: center;
  }

  @media (max-width: 1100px) {
    grid-template-columns: minmax(240px, 380px) minmax(0, 1fr);
    gap: 28px;

    img {
      width: min(100%, 500px);
    }
  }

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: 28px;

    img {
      width: min(100%, 520px);
    }
  }

  @media (max-width: 640px) {
    gap: 20px;
    margin-bottom: 40px;
  }
`;

export const NossaHistoriaText = styled.div`
  width: 100%;
  max-width: 600px;

  p {
    font-size: clamp(16px, 1.45vw, 20px);
    line-height: 1.7;
    margin-bottom: 20px;
    text-wrap: pretty;
  }

  @media (max-width: 900px) {
    max-width: 100%;
  }

  @media (max-width: 640px) {
    p {
      margin-bottom: 16px;
    }
  }
`;

export const QualidadeReciclagemSection = styled.div<RevealMotionProps>`
  ${revealStyles}
  margin: 40px 0 clamp(56px, 8vw, 96px);
  background-color: ${cores.grayLightOpacity};
  padding: clamp(28px, 4vw, 44px) 0;

  > div {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: clamp(24px, 4vw, 56px);
    align-items: stretch;
  }

  @media (max-width: 900px) {
    > div {
      grid-template-columns: 1fr;
    }
  }
`;

export const QualidadeReciclagem = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 132px minmax(0, 1fr);
  align-items: center;
  gap: 22px;

  img {
    width: min(100%, 132px);
    height: auto;
    display: block;
    margin: 0 auto;
  }

  div {
    max-width: 420px;
  }

  h4 {
    font-size: clamp(20px, 2.2vw, 28px);
    margin-bottom: 12px;
    line-height: 1.15;
  }

  p {
    max-width: none;
    font-size: 16px;
    line-height: 1.65;
    text-wrap: pretty;
  }

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
    gap: 16px;
    justify-items: center;
    text-align: center;

    img {
      width: min(100%, 120px);
    }

    div {
      max-width: 100%;
    }
  }
`;

export const MascasSection = styled.div<RevealMotionProps>`
  ${revealStyles}
  color: ${cores.white};

  h1 {
    text-align: center;
    font-size: clamp(34px, 5.6vw, 64px);
    margin-bottom: 30px;
  }
`;

export const MascasContent = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(260px, 420px);
  align-items: center;
  gap: clamp(24px, 4vw, 56px);

  img {
    width: min(100%, 420px);
    height: auto;
    display: block;
    justify-self: center;
  }

  p {
    font-size: clamp(16px, 1.35vw, 18px);
    max-width: none;
    line-height: 1.7;
    text-wrap: pretty;
  }

  @media (max-width: 960px) {
    grid-template-columns: 1fr;
    gap: 28px;

    img {
      width: min(100%, 340px);
    }
  }

  @media (max-width: 640px) {
    gap: 20px;

    p {
      font-size: 15px;
    }
  }
`;

export const QuerRevenderSection = styled.div<RevealMotionProps>`
  ${revealStyles}
  width: 100%;
  max-width: 860px;
  margin: 0 auto;
  padding-bottom: 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  ${TitleAndSubtitle} {
    margin-top: 0;
    margin-bottom: 32px;
  }

  .texto {
    width: 100%;
    max-width: 800px;
    text-align: center;
    font-size: clamp(16px, 1.4vw, 18px);
    line-height: 1.7;
    text-wrap: pretty;
  }

  @media (max-width: 640px) {
    ${TitleAndSubtitle} {
      margin-bottom: 24px;
    }

    .texto {
      font-size: 15px;
    }
  }
`;

export const QuerRevenderButtons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 16px;
  margin-top: 32px;

  ${Button} {
    border: 2px solid ${cores.green};
  }

  .botao {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-height: 52px;
    padding: 14px 32px;
    border: 2px solid ${cores.green};
    border-radius: 50px;
    color: ${cores.green};
    font-size: 16px;
    font-weight: 700;
    transition: background-color 0.2s ease, color 0.2s ease;

    &:hover {
      background-color: ${cores.green};
      color: ${cores.white};
    }
  }

  @media (max-width: 900px) {
    width: 100%;
    max-width: 360px;
    flex-direction: column;

    ${Button},
    .botao {
      width: 100%;
    }
  }

  @media (max-width: 640px) {
    max-width: 320px;
    gap: 12px;
    margin-top: 24px;

    ${Button},
    .botao {
      min-height: 46px;
      padding: 12px 18px;
      font-size: 14px;
    }
  }
`;

export const EmailDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 28px;

  svg {
    width: 24px;
    height: 24px;
    display: block;
  }

  p {
    font-size: clamp(18px, 2vw, 24px);
    line-height: 1.2;
    text-align: center;
  }

  @media (max-width: 640px) {
    gap: 8px;

    p {
      font-size: 17px;
      overflow-wrap: anywhere;
    }
  }
`;
