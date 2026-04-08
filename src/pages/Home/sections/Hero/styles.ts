import styled, { keyframes } from "styled-components";
import { cores } from "../../../../styles";
import { Button } from "../../../../components/header/styles";

const heroReveal = keyframes`
    from {
        opacity: 0;
        transform: translateY(28px) scale(0.96);
    }

    to {
        opacity: 1;
        transform: translateY(0) scale(1);
    }
`;

export const HeroSection = styled.section`
    position: relative;
    min-height: 100vh;
    width: 100%;
    overflow: hidden;
    background-color: ${cores.black};
    color: ${cores.white};
    display: flex;
    align-items: center;
    isolation: isolate;

    @media (max-width: 900px) {
        min-height: 100svh;
    }
`;

const HeroBackgroundMedia = `
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center center;
    pointer-events: none;
    z-index: 0;
`;

const HeroBackgroundVideo = styled.video`
    ${HeroBackgroundMedia}
`;

export const HeroBackgroundImage = styled.img`
    ${HeroBackgroundMedia}
`;

export const DesktopHeroVideo = styled(HeroBackgroundVideo)`
    display: block;
`;

export const MobileHeroVideo = styled(HeroBackgroundVideo)`
    display: none;
    object-position: center center;

    @media (max-width: 900px) {
        display: block;
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
            min-height: 100svh;
            justify-content: center;
            align-items: flex-start;
            padding-top: 96px;
            padding-bottom: 32px;
        }
    }

    @media (max-width: 640px) {
        > div {
            padding-top: 90px;
            padding-bottom: 24px;
        }
    }
`;

export const HeroCard = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    max-width: 800px;

    > * {
        opacity: 0;
        animation: ${heroReveal} 0.75s ease-out forwards;
        will-change: opacity, transform;
    }

    h1 {
        animation-delay: 4s;
    }

    p {
        animation-delay: 4.15s;
    }

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

    @media (prefers-reduced-motion: reduce) {
        > * {
            opacity: 1;
            animation: none;
            transform: none;
        }
    }

    @media (max-width: 1100px) {
        max-width: 640px;

        > * {
            opacity: 1;
            animation: none;
            transform: none;
            will-change: auto;
        }

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
        width: 100%;
        max-width: 420px;
        padding: 0;
        border-radius: 0;
        background: transparent;
        backdrop-filter: none;
        -webkit-backdrop-filter: none;
        box-shadow: none;
        align-items: center;
        text-align: center;
        gap: 12px;

        h1 {
            max-width: 380px;
            font-size: 18px;
            line-height: 1.15;
            letter-spacing: 0.02em;
        }

        span {
            font-size: clamp(60px, 11vw, 82px);
            line-height: 0.88;
            margin-top: 10px;
        }

        p {
            max-width: 360px;
            font-size: 16px;
            line-height: 1.35;
        }
    }

    @media (max-width: 640px) {
        max-width: 320px;
        gap: 10px;

        h1 {
            max-width: 290px;
            font-size: 15px;
            line-height: 1.12;
        }

        span {
            font-size: clamp(46px, 16vw, 64px);
            line-height: 0.9;
        }

        p {
            max-width: 290px;
            font-size: 14px;
            line-height: 1.3;
        }
    }
`;

export const ButtonDiv = styled.div`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 16px;
    margin-top: 36px;
    animation-delay: 4.3s;

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

    @media (max-width: 900px) {
        width: 100%;
        max-width: 320px;
        flex-direction: column;
        margin-top: 14px;
        gap: 10px;

        ${Button},
        .botao {
            width: 100%;
            min-height: 46px;
            padding: 11px 18px;
            font-size: 14px;
        }
    }

    @media (max-width: 640px) {
        width: 100%;
        max-width: 280px;
        flex-direction: column;
        margin-top: 12px;

        ${Button},
        .botao {
            width: 100%;
            min-height: 42px;
            padding: 10px 16px;
            font-size: 13px;
        }
    }
`;
