import styled from "styled-components";
import { cores, TitleAndSubtitle } from "../../../../styles";
import { revealStyles, type RevealMotionProps } from "../../scrollReveal";

export const EntreEmContatoTitle = styled(TitleAndSubtitle)<RevealMotionProps>`
    ${revealStyles}
`

export const EntreEmContatoSection = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    gap: 80px;
    padding-bottom: 24px;
    
    h2 {
        text-align: center;
        margin-bottom: 20px;
        font-size: 36px;
        font-weight: 500;
    }

    @media (max-width: 960px) {
        flex-direction: column;
    }
`

export const Perguntas = styled.div<RevealMotionProps>`
    ${revealStyles}
    flex: 1;
    width: 100%;
`

export const PerguntasLista = styled.div`
    display: flex;
    flex-direction: column;
    gap: 18px;
`

export const PerguntaItem = styled.div<{ $aberta: boolean }>`
    background-color: ${cores.white};
    border: 1px solid ${cores.grayLight};
    border-radius: 18px;
    padding: 22px 18px;
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.04);

    p {
        margin-top: 14px;
        padding-right: 28px;
        color: ${cores.gray};
        font-size: 16px;
        line-height: 1.6;
    }
`

export const PerguntaBotao = styled.button`
    width: 100%;
    border: none;
    background: transparent;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 18px;
    cursor: pointer;
    text-align: left;
    color: ${cores.black};

    span:first-child {
        font-size: 20px;
        font-weight: 500;
        line-height: 1.35;
    }

    span:last-child {
        flex-shrink: 0;
        font-size: 34px;
        font-weight: 700;
        line-height: 1;
        margin-top: -2px;
    }
`

export const FaleConoscoColuna = styled.div<RevealMotionProps>`
    ${revealStyles}
    flex: 1;
    width: 100%;

    h2 {
        text-align: center;
        margin-bottom: 20px;
        font-size: 36px;
        font-weight: 500;
    }
`

export const FaleConosco = styled.div`
    background-color: ${cores.white};
    border-radius: 36px;
    padding: 25px 35px;
    box-shadow: 0 0 6px 3px rgba(0, 0, 0, 0.1);

    @media (max-width: 640px) {
        padding: 24px 20px;
    }
`

export const FaleConoscoForm = styled.form`
    display: flex;
    flex-direction: column;
    gap: 12px;

    label {
        font-size: 14px;
        font-weight: bold;
        color: ${cores.black};
    }

    input,
    textarea {
        width: 100%;
        padding: 14px 16px;
        border: 1px solid ${cores.grayLight};
        border-radius: 12px;
        font-size: 16px;
    }

    textarea {
        min-height: 140px;
        resize: none;
    }
`

export const NomeSobrenome = styled.div`
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 16px;
    margin-bottom: 4px;

    div {
        display: flex;
        flex-direction: column;
        gap: 12px;
    }

    @media (max-width: 640px) {
        grid-template-columns: 1fr;
    }
`
