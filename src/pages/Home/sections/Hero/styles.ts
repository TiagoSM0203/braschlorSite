import styled from "styled-components";
import heroImg from "../../../../assets/imgs/hero2.png";
import { cores } from "../../../../styles";
import { Button } from "../../../../components/header/styles";

export const HeroSection = styled.section`
    position: relative;
    min-height: 100vh;
    width: 100%;
    background: url(${heroImg}) center/cover no-repeat;
    color: ${cores.white};
    display: flex;
    align-items: center;
    isolation: isolate;

    @media (max-width: 900px) {
        min-height: auto;
        background-position: 72% center;
    }

    @media (max-width: 640px) {
        background-position: 74% center;
    }
`;

export const HeroContent = styled.div`
    position: relative;
    z-index: 1;
    width: 100%;

    > div {
        min-height: 100vh;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        padding-top: 132px;
        padding-bottom: 72px;
    }

    @media (max-width: 1100px) {
        > div {
            padding-top: 148px;
            padding-bottom: 60px;
        }
    }

    @media (max-width: 900px) {
        > div {
            min-height: auto;
            justify-content: center;
            padding-top: 140px;
            padding-bottom: 64px;
        }
    }

    @media (max-width: 640px) {
        > div {
            padding-top: 124px;
            padding-bottom: 48px;
        }
    }
`;

export const HeroCard = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    max-width: 800px;

    h1 {
        max-width: 800px;
        font-size: clamp(34px, 6vw, 24px);
        text-transform: uppercase;
        line-height: 2.1;
        letter-spacing: 0.03em;
        color: ${cores.green};
    }

    span {
        display: block;
        font-size: clamp(88px, 15vw, 150px);
        line-height: 0.9;
    }

    p {
        font-size: clamp(18px, 2.6vw, 24px);
        line-height: 1.5;
        max-width: 620px;
        color: ${cores.green};
    }

    @media (max-width: 1100px) {
        max-width: 640px;

        h1 {
            font-size: 24px;
            max-width: 640px;
        }

        span {
            font-size: 105px;
        }

        p {
            max-width: 450px;
        }
    }

    @media (max-width: 900px) {
        max-width: 560px;
        padding: 28px;
        border-radius: 28px;
        background: rgba(0, 0, 0, 0.21);
        backdrop-filter: blur(4px);
        -webkit-backdrop-filter: blur(4px);
        box-shadow: 0 20px 40px rgba(0, 0, 0, 0.12);

        h1 {
            max-width: 560px;
        }
    }

    @media (max-width: 640px) {
        align-items: center;
        text-align: center;
        gap: 16px;
        padding: 22px 18px;
        border-radius: 24px;

        h1 {
            font-size: clamp(28px, 10vw, 20px);
            line-height: 1;
        }

        span {
            font-size: clamp(62px, 20vw, 88px);
        }

        p {
            font-size: 16px;
            max-width: 100%;
        }
    }
`;

export const ButtonDiv = styled.div`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 16px;
    margin-top: 36px;

    ${Button} {
        border: 2px solid ${cores.green};
    }

    .botao {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        border: 2px solid ${cores.green};
        padding: 15px 32px;
        border-radius: 50px;
        color: ${cores.green};
        font-weight: bold;
        transition: background-color 0.2s ease, color 0.2s ease;

        &:hover {
            background-color: ${cores.green};
            color: ${cores.white};
        }
    }

    @media (max-width: 1100px) {
        margin-top: 28px;
        width: 50vw;
        display: flex;

        ${Button},
        .botao {
            width: 100%;
        }
    }

    @media (max-width: 640px) {
        width: 100%;
        flex-direction: column;
        margin-top: 24px;

        ${Button},
        .botao {
            width: 100%;
        }
    }
`;
