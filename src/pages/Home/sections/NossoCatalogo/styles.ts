import styled from "styled-components";
import { cores, TitleAndSubtitle } from "../../../../styles";
import { Button } from "../../../../components/header/styles";
import { revealStyles, type RevealMotionProps } from "../../scrollRevealStyles";

export const CatalogoTitle = styled(TitleAndSubtitle)<RevealMotionProps>`
    ${revealStyles}
`

export const CatalogoSection = styled.section`
    padding: 0 0 88px;

    @media (max-width: 900px) {
        padding: 80px 0 72px;
    }

    @media (max-width: 640px) {
        padding: 0 0 56px;
    }
`

export const CatalogoCards = styled.div`
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 60px;
    margin-bottom: 60px;

    a {
        display: block;
        height: 100%;
    }

    @media (hover: hover) and (pointer: fine) {
        a {
            transition: all 0.3s ease;
        }

        a:hover {
            transform: scale(1.05) rotate(0deg) translate(0px, 0px) skewX(0deg);
        }
    }

    @media (max-width: 1100px) {
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: 24px;
    }

    @media (max-width: 640px) {
        grid-template-columns: minmax(0, 1fr);
        gap: 18px;
        margin-bottom: 40px;
    }
`

export const CatalogoCard = styled.div<RevealMotionProps>`
    ${revealStyles}
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    min-height: 440px;
    padding: 36px 28px 32px;
    background-color: ${cores.white};
    box-shadow: 0 0 6px 3px rgba(0, 0, 0, 0.1);
    border-radius: 32px;
    text-align: center;
    overflow: hidden;

    img {
        width: min(100%, 180px);
        height: 180px;
        object-fit: contain;
    }

    h2 {
        margin-bottom: 20px;
        font-size: clamp(24px, 2.8vw, 30px);
        color: ${cores.black};
    }

    p {
        width: 100%;
        font-size: 16px;
        font-weight: bold;
        color: ${cores.gray};
    }

    @media (max-width: 900px) {
        min-height: 400px;
        padding: 30px 22px 28px;
        border-radius: 28px;

        img {
            width: min(100%, 156px);
            height: 156px;
            margin-bottom: 20px;
        }
    }

    @media (max-width: 640px) {
        min-height: auto;
        padding: 26px 20px 24px;
        border-radius: 24px;

        img {
            width: min(100%, 136px);
            height: 136px;
        }

        p {
            font-size: 15px;
        }
    }
`

export const ButtonDiv = styled.div<RevealMotionProps>`
    ${revealStyles}
    display: flex;
    justify-content: center;

    ${Button} {
        font-size: clamp(18px, 2.8vw, 24px);
        text-align: center;
    }

    @media (max-width: 640px) {
        ${Button} {
            width: 100%;
        }
    }
`
