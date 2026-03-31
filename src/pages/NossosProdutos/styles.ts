import { Link } from "react-router-dom";
import styled, { css } from "styled-components";
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

export const ProdutosEmpty = styled.p`
  grid-column: 1 / -1;
  margin: 0;
  padding: 28px 24px;
  border: 1px solid ${cores.grayLight};
  border-radius: 20px;
  color: ${cores.gray};
  font-size: 16px;
  text-align: center;
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

export const ProdutoAction = styled(Link)`
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
  display: inline-flex;
  align-items: center;
  justify-content: center;
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
  font-size: 18px;
  font-weight: 400;
  line-height: 1.35;
  transition: color 0.2s ease;
`;

export const ProdutoMarketplaceSection = styled.div`
  margin-top: 10px;
  display: grid;
  gap: 10px;
`;

export const ProdutoMarketplaceCaption = styled.p`
  margin: 0;
  color: ${cores.gray};
  font-size: 15px;
  line-height: 1.6;
`;

export const ProdutoMarketplaceRow = styled.div<{ $isSingle?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: ${({ $isSingle }) => ($isSingle ? "center" : "flex-start")};
  gap: 10px;
  flex-wrap: wrap;
`;

const produtoMarketplaceControlStyles = css<{
  $variant: "shopee" | "mercadoLivre";
  $isSingle?: boolean;
}>`
  flex: ${({ $isSingle }) => ($isSingle ? "0 1 240px" : "1 1 0")};
  min-width: 0;
  width: ${({ $isSingle }) => ($isSingle ? "min(100%, 240px)" : "auto")};
  max-width: ${({ $isSingle }) => ($isSingle ? "50%" : "none")};
  min-height: 42px;
  padding: 0 14px;
  border: none;
  border-radius: 12px;
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  background-color: ${({ $variant }) =>
    $variant === "shopee" ? "#ea4416" : "#f1d706"};
  color: ${cores.white};
  transition:
    transform 0.2s ease,
    background-color 0.2s ease;

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

  @media (max-width: 640px) {
    min-height: 40px;
    padding: 0 12px;

    img {
      height: 16px;
    }
  }
`;

export const ProdutoMarketplaceButton = styled.button<{
  $variant: "shopee" | "mercadoLivre";
  $isSingle?: boolean;
}>`
  ${produtoMarketplaceControlStyles}
  cursor: default;

  &:disabled {
    opacity: 1;
  }
`;

export const ProdutoMarketplaceLink = styled.a<{
  $variant: "shopee" | "mercadoLivre";
  $isSingle?: boolean;
}>`
  ${produtoMarketplaceControlStyles}
  cursor: pointer;

  &:hover {
    background-color: ${({ $variant }) =>
      $variant === "shopee" ? "#ed491b" : "#f4d910"};
    transform: translateY(-1px);
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
