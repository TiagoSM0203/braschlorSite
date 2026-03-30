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
