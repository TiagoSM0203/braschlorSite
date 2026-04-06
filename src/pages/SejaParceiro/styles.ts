import { Link } from "react-router-dom";
import styled, { css, keyframes } from "styled-components";
import { Button } from "../../components/header/styles";
import { cores, TitleAndSubtitle } from "../../styles";
import { revealStyles, type RevealMotionProps } from "../Home/scrollRevealStyles";

type ComoFuncionaTone = "blue" | "light";
type ComoFuncionaStepProps = RevealMotionProps & {
  $reverse: boolean;
  $tone: ComoFuncionaTone;
};

const paraQuemRevendemosMarquee = keyframes`
  from {
    transform: translateX(calc(-100% / 3));
  }

  to {
    transform: translateX(0);
  }
`;

export const PorqueRevenderSection = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 32px;

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 640px) {
    grid-template-columns: minmax(0, 1fr);
    gap: 20px;
  }
`;

export const SejaParceiroLeadTitle = styled(TitleAndSubtitle)<RevealMotionProps>`
  ${revealStyles}
`;

export const PorqueRevenderCard = styled.div<RevealMotionProps>`
  ${revealStyles}
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 22px;
  min-height: 220px;
  background-color: ${cores.white};
  box-shadow: 0 0 6px 3px rgba(0, 0, 0, 0.1);
  border-radius: 36px;
  padding: 36px 28px;
  text-align: center;

  img {
    width: 80px;
  }

  p {
    font-size: 20px;
    color: ${cores.gray};
  }

  @media (max-width: 900px) {
    min-height: 200px;
    padding: 32px 24px;
  }

  @media (max-width: 640px) {
    min-height: auto;
    gap: 18px;
    padding: 28px 22px;

    img {
      width: 72px;
    }

    p {
      font-size: 18px;
    }
  }
`;

export const ParaQuemRevendemosSection = styled.section`
  margin-top: 96px;
  padding: 4px 0 96px;
  background-color: ${cores.grayLightOpacity};

  @media (max-width: 640px) {
    margin-top: 72px;
    padding-bottom: 72px;
  }
`;

export const ParaQuemRevendemosTitle = styled(TitleAndSubtitle)<RevealMotionProps>`
  ${revealStyles}
  max-width: 980px;
  margin-bottom: 36px;

  h1 {
    font-size: clamp(34px, 4.6vw, 54px);
    white-space: nowrap;
  }

  @media (max-width: 900px) {
    max-width: 800px;

    h1 {
      white-space: normal;
    }
  }
`;

export const ParaQuemRevendemosSubtitle = styled.p<RevealMotionProps>`
  ${revealStyles}
  margin-top: 25px;
  text-align: center;
  font-size: clamp(18px, 2.1vw, 24px);
  line-height: 1.5;
  color: ${cores.black};

  @media (max-width: 640px) {
    font-size: 16px;
  }
`;

export const ParaQuemRevendemosViewport = styled.div<RevealMotionProps>`
  ${revealStyles}
  width: 100%;
  max-width: 1700px;
  margin: 0 auto;
  overflow: hidden;
  -webkit-mask-image: linear-gradient(
    to right,
    transparent 0,
    #000 8%,
    #000 92%,
    transparent 100%
  );
  mask-image: linear-gradient(
    to right,
    transparent 0,
    #000 8%,
    #000000 92%,
    transparent 100%
  );
`;

export const ParaQuemRevendemosTrack = styled.div`
  display: flex;
  width: max-content;
  will-change: transform;
  animation: ${paraQuemRevendemosMarquee} 18s linear infinite;
`;

export const ParaQuemRevendemosGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 18px;
  flex-shrink: 0;
  min-width: max-content;
  padding-right: 18px;

  @media (max-width: 640px) {
    gap: 12px;
    padding-right: 12px;
  }
`;

export const ParaQuemRevendemosCard = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  min-width: 216px;
  padding: 16px 30px;
  border-radius: 999px;
  background: linear-gradient(135deg, ${cores.blueDark} 0%, ${cores.blueLight} 100%);
  color: ${cores.white};
  font-size: clamp(18px, 2vw, 22px);
  font-weight: 500;
  line-height: 1.1;
  white-space: nowrap;
  user-select: none;

  @media (max-width: 900px) {
    min-width: 200px;
    padding: 15px 26px;
  }

  @media (max-width: 640px) {
    min-width: 170px;
    padding: 14px 22px;
    font-size: 16px;
  }
`;

export const ComoFuncionaSection = styled.section`
  padding: 45px 0 0;
`;

export const ComoFuncionaTitle = styled(TitleAndSubtitle)<RevealMotionProps>`
  ${revealStyles}
  max-width: 760px;
  margin: 0 auto 36px;

  h1 {
    color: ${cores.black};
  }

  @media (max-width: 640px) {
    margin-bottom: 28px;
  }
`;

export const ComoFuncionaList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 28px;
`;

export const FicouInteressadoSection = styled.section<RevealMotionProps>`
  ${revealStyles}
  width: 100%;
  margin-top: 80px;
  padding: clamp(36px, 5vw, 56px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  @media (max-width: 640px) {
    margin-top: 72px;
    padding: 32px 22px;
  }
`;

export const FicouInteressadoTitle = styled(TitleAndSubtitle)`
  max-width: 720px;
  margin: 0 auto 20px;
`;

export const FicouInteressadoText = styled.p`
  width: 100%;
  max-width: 720px;
  font-size: clamp(17px, 1.6vw, 20px);
  line-height: 1.7;
`;

export const FicouInteressadoAction = styled(Button)`
  margin-top: 28px;
  min-width: 260px;

  &:hover {
    background-color: ${cores.greenLight};
  }

  @media (max-width: 640px) {
    width: 100%;
    min-width: 0;
    margin-top: 24px;
  }
`;

export const ComoFuncionaStep = styled.article<ComoFuncionaStepProps>`
  ${revealStyles}
  position: relative;
  display: grid;
  grid-template-columns: minmax(260px, 0.92fr) minmax(0, 1.08fr);
  align-items: center;
  gap: clamp(28px, 5vw, 64px);
  min-height: 470px;
  padding: clamp(104px, 9vw, 132px) clamp(36px, 5vw, 56px) clamp(36px, 5vw, 56px);
  border-radius: 44px;
  overflow: hidden;
  background: ${({ $tone }) =>
    $tone === "blue"
      ? `linear-gradient(135deg, ${cores.blueDark} 0%, ${cores.blueLight} 100%)`
      : cores.white};
  box-shadow: ${({ $tone }) =>
    $tone === "blue"
      ? "0 28px 56px rgba(34, 60, 159, 0.22)"
      : "0 16px 36px rgba(0, 0, 0, 0.08)"};

  ${({ $tone }) =>
    $tone === "light"
      ? css`
          border: 1px solid rgba(34, 60, 159, 0.08);
        `
      : ""}

  @media (max-width: 1100px) {
    min-height: 420px;
    grid-template-columns: minmax(220px, 0.84fr) minmax(0, 1.16fr);
  }

  @media (max-width: 900px) {
    grid-template-columns: minmax(0, 1fr);
    min-height: auto;
    gap: 24px;
    padding: 96px 24px 28px;
  }
`;

export const ComoFuncionaNumber = styled.div<{
  $side: "left" | "right";
  $tone: ComoFuncionaTone;
}>`
  position: absolute;
  top: 26px;
  ${({ $side }) => ($side === "left" ? "left: 26px;" : "right: 26px;")}
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: clamp(84px, 8vw, 108px);
  height: clamp(84px, 8vw, 108px);
  border-radius: 50%;
  background-color: ${({ $tone }) =>
    $tone === "blue" ? cores.white : cores.blueLight};
  color: ${({ $tone }) => ($tone === "blue" ? cores.blueLight : cores.white)};
  font-size: clamp(46px, 5vw, 68px);
  font-weight: 800;
  line-height: 1;
  z-index: 1;
  box-shadow: 0 18px 30px rgba(0, 0, 0, 0.12);

  @media (max-width: 900px) {
    top: 16px;
    ${({ $side }) => ($side === "left" ? "left: 16px;" : "right: 16px;")}
    width: 68px;
    height: 68px;
    font-size: 38px;
  }
`;

export const ComoFuncionaStepImage = styled.div<{
  $reverse: boolean;
  $size: "default" | "small";
}>`
  order: ${({ $reverse }) => ($reverse ? 2 : 1)};
  display: flex;
  align-items: center;
  justify-content: ${({ $reverse }) => ($reverse ? "flex-end" : "flex-start")};
  min-width: 0;

  img {
    width: ${({ $size }) => ($size === "small" ? "min(100%, 360px)" : "min(100%, 430px)")};
    height: auto;
    object-fit: contain;
    filter: drop-shadow(0 18px 34px rgba(34, 60, 159, 0.18));
  }

  @media (max-width: 900px) {
    order: 1;
    justify-content: center;
    padding-top: 0;

    img {
      width: ${({ $size }) => ($size === "small" ? "min(100%, 290px)" : "min(100%, 340px)")};
    }
  }
`;

export const ComoFuncionaStepContent = styled.div<{
  $reverse: boolean;
  $tone: ComoFuncionaTone;
}>`
  order: ${({ $reverse }) => ($reverse ? 1 : 2)};
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;
  max-width: 520px;
  color: ${({ $tone }) => ($tone === "blue" ? cores.white : cores.blueLight)};

  h2 {
    font-size: clamp(34px, 4.5vw, 56px);
    font-weight: 500;
    line-height: 1.08;
  }

  @media (max-width: 900px) {
    order: 2;
    max-width: none;
    align-items: center;
    text-align: center;
    gap: 20px;

    h2 {
      font-size: clamp(28px, 8vw, 40px);
    }
  }
`;

const comoFuncionaActionStyles = css<{ $tone: ComoFuncionaTone }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 58px;
  padding: 14px 28px;
  border-radius: 999px;
  background: ${({ $tone }) =>
    $tone === "blue"
      ? cores.white
      : `linear-gradient(135deg, ${cores.blueDark} 0%, ${cores.blueLight} 100%)`};
  color: ${({ $tone }) => ($tone === "blue" ? cores.blueLight : cores.white)};
  font-size: clamp(17px, 2vw, 22px);
  font-weight: 700;
  line-height: 1;
  transition: transform 0.2s ease, box-shadow 0.2s ease, filter 0.2s ease;
  box-shadow: 0 16px 28px rgba(0, 0, 0, 0.14);

  &:hover {
    transform: translateY(-2px);
    filter: brightness(1.03);
  }

  @media (max-width: 640px) {
    width: 100%;
    min-height: 54px;
    padding: 14px 22px;
    font-size: 18px;
  }
`;

export const ComoFuncionaActionAnchor = styled.a<{ $tone: ComoFuncionaTone }>`
  ${comoFuncionaActionStyles}
`;

export const ComoFuncionaActionLink = styled(Link)<{ $tone: ComoFuncionaTone }>`
  ${comoFuncionaActionStyles}
`;
