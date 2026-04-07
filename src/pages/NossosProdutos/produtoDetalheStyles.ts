import { Link } from "react-router-dom";
import styled from "styled-components";
import { cores } from "../../styles";

export const ProdutoDetalheLayout = styled.div<{ $hasMedia: boolean }>`
  display: grid;
  grid-template-columns: ${({ $hasMedia }) =>
    $hasMedia ? "minmax(0, 1fr) minmax(320px, 440px)" : "minmax(0, 1fr)"};
  gap: 48px;
  align-items: start;

  @media (max-width: 960px) {
    grid-template-columns: 1fr;
    gap: 32px;
  }
`;

export const ProdutoDetalheMediaColumn = styled.div`
  display: grid;
  gap: 20px;
`;

export const ProdutoDetalheMedia = styled.div`
  min-height: 520px;
  padding: 32px;
  border: 1px solid ${cores.grayLight};
  border-radius: 32px;
  background-color: ${cores.white};
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: min(100%, 540px);
    height: auto;
    display: block;
    object-fit: contain;
  }

  @media (max-width: 640px) {
    min-height: auto;
    padding: 24px;
    border-radius: 24px;
  }
`;

export const ProdutoDetalheContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const ProdutoDetalheTitle = styled.h1`
  color: ${cores.black};
  font-size: clamp(34px, 5vw, 52px);
  line-height: 1.04;
`;

export const ProdutoDetalheDescription = styled.p`
  color: ${cores.gray};
  font-size: 18px;
  line-height: 1.8;
`;

export const ProdutoDetalheHighlightsCard = styled.div`
  padding: 28px;
  border: 1px solid ${cores.grayLight};
  border-radius: 28px;
  background-color: ${cores.white};

  h2 {
    color: ${cores.black};
    font-size: 24px;
  }

  @media (max-width: 640px) {
    padding: 22px;
    border-radius: 22px;
  }
`;

export const ProdutoDetalheInfoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(1, minmax(0, 1fr));
  gap: 18px;

  @media (max-width: 760px) {
    grid-template-columns: 1fr;
  }
`;

export const ProdutoDetalheInfoCard = styled(ProdutoDetalheHighlightsCard)`
  height: 100%;
`;

export const ProdutoDetalheFragranciasGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 12px;
  margin-top: 20px;

  @media (max-width: 960px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 520px) {
    grid-template-columns: 1fr;
  }
`;

export const ProdutoDetalheFragranciaCard = styled.div`
  min-height: 68px;
  padding: 16px 18px;
  border: 1px solid rgba(37, 74, 206, 0.18);
  border-radius: 18px;
  background: linear-gradient(
    180deg,
    rgba(37, 74, 206, 0.06) 0%,
    rgba(140, 198, 75, 0.08) 100%
  );
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: ${cores.black};
  font-size: 15px;
  font-weight: 700;
  line-height: 1.35;
`;

export const ProdutoDetalheProfessionalCard = styled(ProdutoDetalheHighlightsCard)`
  border-color: rgba(37, 74, 206, 0.24);
  background: linear-gradient(
    180deg,
    rgba(37, 74, 206, 0.08) 0%,
    rgba(140, 198, 75, 0.08) 100%
  );

  strong {
    display: block;
    color: ${cores.blueDark};
    font-size: 12px;
    font-weight: 800;
    letter-spacing: 0.12em;
    text-transform: uppercase;
  }

  p {
    margin-top: 10px;
    color: ${cores.black};
    font-size: 15px;
    line-height: 1.6;
  }
`;

export const ProdutoDetalheHighlightsList = styled.ul`
  display: grid;
  gap: 14px;
  margin-top: 20px;
`;

export const ProdutoDetalheHighlightsItem = styled.li`
  display: grid;
  grid-template-columns: 12px minmax(0, 1fr);
  gap: 14px;
  align-items: start;
  color: ${cores.gray};
  font-size: 16px;
  line-height: 1.6;

  &::before {
    content: "";
    width: 12px;
    height: 12px;
    margin-top: 7px;
    border-radius: 999px;
    background-color: ${cores.green};
  }
`;

export const ProdutoDetalheActions = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
  margin-top: 6px;
`;

export const ProdutoDetalheLink = styled(Link)<{ $variant?: "primary" | "secondary" }>`
  min-height: 52px;
  padding: 0 26px;
  border-radius: 999px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: 1px solid transparent;
  background-color: ${({ $variant }) =>
    $variant === "secondary" ? cores.blueDark : cores.green};
  color: ${cores.white};
  font-size: 16px;
  font-weight: 700;
  transition:
    background-color 0.2s ease,
    transform 0.2s ease;

  &:hover {
    background-color: ${({ $variant }) =>
      $variant === "secondary" ? cores.blueLight : cores.greenLight};
    transform: translateY(-1px);
  }

  @media (max-width: 640px) {
    width: 100%;
  }
`;
