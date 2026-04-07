import { Link } from "react-router-dom";
import styled, { css } from "styled-components";
import { cores } from "../../styles";

export const SidebarToggleBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  flex-wrap: wrap;
`;

export const SidebarToggleButton = styled.button`
  min-height: 52px;
  padding: 0 20px;
  border: none;
  border-radius: 18px;
  background: linear-gradient(135deg, ${cores.blueDark} 0%, ${cores.blueLight} 100%);
  color: ${cores.white};
  display: inline-flex;
  align-items: center;
  gap: 10px;
  font-size: 15px;
  font-weight: 700;
  cursor: pointer;
  box-shadow: 0 18px 36px rgba(34, 60, 159, 0.18);
  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease;

  svg {
    width: 18px;
    height: 18px;
  }

  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 22px 42px rgba(34, 60, 159, 0.22);
  }
`;

export const SidebarSummary = styled.div`
  padding: 14px 18px;
  border: 1px solid rgba(34, 60, 159, 0.1);
  border-radius: 20px;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.96), rgba(248, 251, 255, 0.92));
  color: ${cores.black};
  display: grid;
  gap: 4px;
  min-width: 190px;

  strong {
    font-size: 24px;
    line-height: 1;
  }

  span {
    font-size: 13px;
    font-weight: 700;
    letter-spacing: 0.04em;
    text-transform: uppercase;
    color: ${cores.blueDark};
  }

  small {
    color: ${cores.gray};
    font-size: 13px;
    line-height: 1.5;
  }
`;

export const CategoriasSidebarBackdrop = styled.button<{ $open: boolean }>`
  position: fixed;
  inset: 0;
  border: none;
  background-color: rgba(20, 28, 63, 0.32);
  opacity: ${({ $open }) => ($open ? 1 : 0)};
  pointer-events: ${({ $open }) => ($open ? "auto" : "none")};
  transition: opacity 0.24s ease;
  z-index: 18;

  @media (min-width: 901px) {
    display: none;
  }
`;

export const ProdutosLayout = styled.div<{ $sidebarOpen: boolean }>`
  margin-top: 24px;
  display: grid;
  grid-template-columns: ${({ $sidebarOpen }) =>
    $sidebarOpen ? "minmax(280px, 320px) minmax(0, 1fr)" : "0 minmax(0, 1fr)"};
  gap: 24px;
  align-items: start;
  transition: grid-template-columns 0.28s ease;

  @media (max-width: 900px) {
    display: block;
  }
`;

export const CategoriasSidebar = styled.aside<{ $open: boolean }>`
  min-width: 0;

  @media (min-width: 901px) {
    position: sticky;
    top: 16px;
    align-self: start;
    width: 100%;
    height: fit-content;
    opacity: ${({ $open }) => ($open ? 1 : 0)};
    pointer-events: ${({ $open }) => ($open ? "auto" : "none")};
    transform: ${({ $open }) => ($open ? "translateX(0)" : "translateX(-18px)")};
    transition:
      opacity 0.24s ease,
      transform 0.24s ease;
  }

  @media (max-width: 900px) {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    width: min(92vw, 400px);
    z-index: 19;
    transform: ${({ $open }) => ($open ? "translateX(0)" : "translateX(-105%)")};
    transition: transform 0.28s ease;
  }
`;

export const CategoriasSidebarPanel = styled.div`
  display: grid;
  align-content: start;
  gap: 14px;
  padding: 18px;
  border: 1px solid rgba(34, 60, 159, 0.1);
  border-radius: 28px;

  @media (max-width: 900px) {
    height: 100%;
    max-height: none;
    border-radius: 0 26px 26px 0;
    padding-top: 22px;
    padding-bottom: 22px;
    overflow-y: auto;
  }
`;

export const CategoriasSidebarHeader = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 12px;
`;

export const CategoriasSidebarIntro = styled.div`
  strong {
    display: block;
    color: ${cores.black};
    font-size: 22px;
    line-height: 1.1;
  }

  @media (max-width: 900px) {
    padding: 12px 14px;
    border-radius: 16px;
    background-color: rgba(255, 255, 255, 0.96);
    box-shadow: 0 12px 28px rgba(34, 60, 159, 0.08);
  }
`;

export const CategoriasSidebarDescription = styled.p`
  margin: 8px 0 0;
  color: ${cores.gray};
  font-size: 13px;
  line-height: 1.55;
`;

export const CategoriasSidebarCloseButton = styled.button`
  width: 42px;
  height: 42px;
  border: none;
  border-radius: 14px;
  background-color: rgba(255, 255, 255, 0.9);
  color: ${cores.blueDark};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  flex-shrink: 0;
  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease;

  svg {
    width: 18px;
    height: 18px;
  }

  &:hover {
    transform: translateY(-1px);
  }

  @media (min-width: 901px) {
    display: none;
  }
`;

export const FiltroGhostButton = styled.button`
  min-height: 48px;
  width: 100%;
  padding: 0 18px;
  border: 1px solid rgba(34, 60, 159, 0.14);
  border-radius: 16px;
  background-color: rgba(255, 255, 255, 0.88);
  color: ${cores.blueDark};
  font-size: 15px;
  font-weight: 700;
  cursor: pointer;
  transition:
    transform 0.2s ease,
    border-color 0.2s ease,
    box-shadow 0.2s ease,
    opacity 0.2s ease;

  &:hover:not(:disabled) {
    transform: translateY(-1px);
    border-color: rgba(37, 74, 206, 0.28);
    box-shadow: 0 16px 32px rgba(34, 60, 159, 0.08);
  }

  &:disabled {
    opacity: 0.48;
    cursor: default;
  }
`;

export const CategoriasGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 8px;
`;

export const CategoriaCard = styled.label<{
  $checked: boolean;
  $disabled?: boolean;
}>`
  position: relative;
  min-height: 42px;
  padding: 6px 10px;
  border: 1px solid
    ${({ $checked }) =>
      $checked ? "rgba(37, 74, 206, 0.18)" : "rgba(34, 60, 159, 0.08)"};
  border-radius: 14px;
  background:
    ${({ $checked }) =>
      $checked
        ? "linear-gradient(135deg, rgba(34, 60, 159, 0.98), rgba(37, 74, 206, 0.94))"
        : "linear-gradient(180deg, rgba(255, 255, 255, 0.98), rgba(249, 251, 255, 0.92))"};
  color: ${({ $checked }) => ($checked ? cores.white : cores.black)};
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: ${({ $disabled }) => ($disabled ? "default" : "pointer")};
  opacity: ${({ $disabled, $checked }) => ($disabled && !$checked ? 0.5 : 1)};
  box-shadow: ${({ $checked }) =>
    $checked
      ? "0 16px 30px rgba(34, 60, 159, 0.18)"
      : "0 10px 22px rgba(34, 60, 159, 0.05)"};
  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease,
    border-color 0.2s ease,
    background 0.2s ease,
    opacity 0.2s ease;

  input {
    position: absolute;
    opacity: 0;
    pointer-events: none;
  }

  &:hover {
    transform: ${({ $disabled }) => ($disabled ? "none" : "translateY(-2px)")};
    box-shadow: ${({ $checked, $disabled }) =>
      $disabled
        ? $checked
          ? "0 16px 30px rgba(34, 60, 159, 0.18)"
          : "0 10px 22px rgba(34, 60, 159, 0.05)"
        : $checked
          ? "0 18px 32px rgba(34, 60, 159, 0.22)"
          : "0 14px 26px rgba(34, 60, 159, 0.08)"};
  }
`;

export const CategoriaCardIcon = styled.span<{
  $checked: boolean;
  $disabled?: boolean;
}>`
  width: 28px;
  height: 28px;
  border-radius: 10px;
  background: ${({ $checked, $disabled }) =>
    $checked
      ? "rgba(255, 255, 255, 0.14)"
      : $disabled
        ? "rgba(34, 60, 159, 0.05)"
        : "rgba(34, 60, 159, 0.08)"};
  color: ${({ $checked, $disabled }) =>
    $checked ? cores.white : $disabled ? cores.gray : cores.blueDark};
  display: inline-flex;
  align-items: center;
  justify-content: center;

  svg {
    width: 14px;
    height: 14px;
  }
`;

export const CategoriaCardContent = styled.div`
  min-width: 0;
  flex: 1;

  strong {
    display: block;
    font-size: 14px;
    line-height: 1.2;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

export const CategoriaCardFooter = styled.div`
  margin-left: auto;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  flex-shrink: 0;
`;

export const CategoriaCardCount = styled.small<{ $checked: boolean }>`
  padding: 4px 8px;
  border-radius: 999px;
  background-color: ${({ $checked }) =>
    $checked ? "rgba(255, 255, 255, 0.16)" : "rgba(34, 60, 159, 0.08)"};
  color: ${({ $checked }) => ($checked ? cores.white : cores.blueDark)};
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.03em;
  text-transform: uppercase;
  line-height: 1;
`;

export const CategoriaCardHint = styled.span<{ $checked: boolean }>`
  color: ${({ $checked }) => ($checked ? cores.white : cores.gray)};
  font-size: 11px;
  font-weight: 700;
  line-height: 1;
`;

export const ProdutosContent = styled.div`
  min-width: 0;
`;

export const ProdutosGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 28px 18px;

  @media (max-width: 640px) {
    gap: 20px;
  }
`;

export const ProdutosEmpty = styled.div`
  grid-column: 1 / -1;
  padding: 34px 24px;
  border: 1px solid rgba(34, 60, 159, 0.12);
  border-radius: 24px;
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.94),
    rgba(248, 251, 255, 0.92)
  );
  text-align: center;
  display: grid;
  justify-items: center;
  gap: 10px;
`;

export const ProdutosEmptyTitle = styled.strong`
  color: ${cores.black};
  font-size: 20px;
  line-height: 1.25;
`;

export const ProdutosEmptyText = styled.p`
  margin: 0;
  max-width: 54ch;
  color: ${cores.gray};
  font-size: 15px;
  line-height: 1.7;
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

export const ProdutoTextoCard = styled.article`
  min-height: 100%;
  padding: 22px;
  border: 1px solid rgba(34, 60, 159, 0.12);
  border-radius: 28px;
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.98) 0%,
    rgba(248, 251, 255, 0.96) 100%
  );
  display: grid;
  align-content: start;
  gap: 14px;
  box-shadow: 0 16px 34px rgba(34, 60, 159, 0.08);
  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease,
    border-color 0.2s ease;

  &:hover,
  &:focus-within {
    transform: translateY(-2px);
    border-color: rgba(37, 74, 206, 0.18);
    box-shadow: 0 20px 38px rgba(34, 60, 159, 0.12);
  }
`;

export const ProdutoTextoTitulo = styled.h3`
  color: ${cores.black};
  font-size: 22px;
  line-height: 1.2;
`;

export const ProdutoTextoDescricao = styled.p`
  margin: 0;
  color: ${cores.gray};
  font-size: 15px;
  line-height: 1.7;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 4;
  overflow: hidden;
`;

export const ProdutoTextoAction = styled(Link)`
  min-height: 46px;
  width: fit-content;
  padding: 0 18px;
  border-radius: 14px;
  background-color: ${cores.blueDark};
  color: ${cores.white};
  font-size: 15px;
  font-weight: 700;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  transition:
    transform 0.2s ease,
    background-color 0.2s ease;

  &:hover {
    transform: translateY(-1px);
    background-color: ${cores.blueLight};
  }
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
