import styled from "styled-components";
import { cores } from "../../styles";

export const ProdutosToolbar = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  flex-wrap: wrap;
`;

const controlBase = `
  width: 100%;
  height: 58px;
  border: 1px solid ${cores.grayLight};
  border-radius: 999px;
  background-color: ${cores.white};
  color: ${cores.black};
  font-size: 16px;
  outline: none;
  transition:
    border-color 0.2s ease,
    box-shadow 0.2s ease;

  &:focus {
    border-color: ${cores.gray};
  }
`;

export const BuscaWrapper = styled.label`
  position: relative;
  width: min(100%, 340px);
  display: block;

  input {
    ${controlBase}
    padding: 0 56px 0 18px;
  }

  svg {
    position: absolute;
    top: 50%;
    right: 18px;
    width: 20px;
    height: 20px;
    color: ${cores.gray};
    transform: translateY(-50%);
    pointer-events: none;
  }

  @media (max-width: 640px) {
    width: 100%;
  }
`;

export const SelectWrapper = styled.label`
  position: relative;
  width: min(100%, 220px);
  display: block;

  select {
    ${controlBase}
    appearance: none;
    cursor: pointer;
    padding: 0 52px 0 18px;
  }

  svg {
    position: absolute;
    top: 50%;
    right: 18px;
    width: 20px;
    height: 20px;
    color: ${cores.gray};
    transform: translateY(-50%);
    pointer-events: none;
  }

  @media (max-width: 640px) {
    width: 100%;
  }
`;

export const ProdutosGrid = styled.div`
  margin-top: 44px;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 28px 18px;

  @media (max-width: 960px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
    gap: 20px;
  }
`;

export const ProdutoImageBox = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 1 / 1;
  display: grid;
  place-items: center;
  border-radius: 6px;
  overflow: hidden;

  img {
    width: min(100%, 90%);
    height: auto;
    display: block;
    border-radius: 16px;
    object-fit: contain;
  }
`;

export const ProdutoAction = styled.button`
  position: absolute;
  left: 50%;
  bottom: 40px;
  width: min(calc(100% - 56px), 164px);
  min-height: 46px;
  padding: 0 18px;
  border: none;
  border-radius: 14px;
  background-color: ${cores.white};
  color: ${cores.black};
  font-size: 16px;
  font-weight: 600;
  opacity: 0;
  pointer-events: none;
  box-shadow: none;
  cursor: pointer;
  text-align: center;
  box-shadow: 0 0 6px 3px rgba(0, 0, 0, 0.1);
  transform: translate(-50%, 10px);
  transition:
    opacity 0.18s ease-in-out,
    background-color 0.2s ease,
    color 0.2s ease,
    transform 0.24s ease-in-out;
`;

export const ProdutoNome = styled.h3`
  margin-top: 16px;
  color: ${cores.gray};
  font-size: 14px;
  font-weight: 400;
  line-height: 1.35;
  transition: color 0.2s ease;
`;

export const ProdutoMarketplaceRow = styled.div`
  margin-top: 8px;
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const ProdutoMarketplaceButton = styled.button<{ $variant: "shopee" | "mercadoLivre" }>`
  flex: 1;
  min-width: 0;
  min-height: 42px;
  padding: 0 14px;
  border: none;
  border-radius: 12px;
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  cursor: pointer;
  background-color: ${({ $variant }) =>
    $variant === "shopee" ? "#e9340f" : "#FFE600"};
  color: ${({ $variant }) =>
    $variant === "shopee" ? cores.white : cores.blueDark};
  transition:
    transform 0.2s ease,
    filter 0.2s ease;

  img {
    display: block;
    height: 18px;
    width: auto;
    max-width: calc(100% - 28px);
    object-fit: contain;
  }

  svg {
    width: 18px;
    height: 18px;
    flex-shrink: 0;
  }

  &:hover {
    transform: translateY(-1px);
    filter: brightness(0.96);
  }

  @media (max-width: 640px) {
    min-height: 40px;
    padding: 0 12px;

    img {
      height: 16px;
    }
  }
`;

export const ProdutoCard = styled.article`
  display: flex;
  flex-direction: column;
  padding: 12px;
  border: 2px solid transparent;
  background-color: ${cores.white};
  transition:
    border-color 0.2s ease,
    box-shadow 0.2s ease,
    transform 0.2s ease;

  &:hover,
  &:focus-within {
    transform: translateY(-2px);
  }

  &:hover ${ProdutoAction},
  &:focus-within ${ProdutoAction} {
    opacity: 1;
    pointer-events: auto;
    box-shadow: 0 0 6px 3px rgba(0, 0, 0, 0.1);
    transform: translate(-50%, 0);
  }

  &:hover ${ProdutoAction}:hover {
    background-color: ${cores.blueLight};
    color: ${cores.white};
    transform: translate(-50%, -1px);
  }

  &:hover ${ProdutoNome},
  &:focus-within ${ProdutoNome} {
    color: ${cores.black};
  }

  @media (hover: none) {
    ${ProdutoAction} {
      opacity: 1;
      pointer-events: auto;
      transform: translate(-50%, 0);
    }
  }
`;
