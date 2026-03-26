import styled from "styled-components";
import { cores } from "../../../../styles";

export const AvaliacaoSection = styled.div`
    background: #2A47B1;
    background: radial-gradient(circle,rgba(42, 71, 177, 1) 0%, rgba(0, 24, 114, 1) 100%);
    border-radius: 46px;
    padding: 64px;
    margin-bottom: 80px;

    @media (max-width: 900px) {
        padding: 48px 32px;
    }

    @media (max-width: 640px) {
        border-radius: 32px;
        padding: 40px 20px;
    }
`

export const AvaliacaoTitle = styled.div`
    display: flex;
    gap: 20px;
    justify-content: space-between;
    align-items: center;
    color: ${cores.white};

    h1 {
        font-size: clamp(36px, 6vw, 46px);
        width: 50%;
    }

    p {
        font-size: clamp(18px, 2.8vw, 24px);
        width: 50%;
    }

    @media (max-width: 900px) {
        flex-direction: column;
        align-items: flex-start;

        h1,
        p {
            width: 100%;
        }
    }
`

export const AvaliacaoBody = styled.div`
    position: relative;
    width: fit-content;
    margin-top: 36px;
    margin-left: auto;
    margin-right: auto;

    @media (max-width: 920px) {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 20px;
        width: 100%;
    }
`

export const AvaliacaoMascot = styled.div`
    width: clamp(170px, 20vw, 250px);
    position: absolute;
    right: 100%;
    bottom: 0;
    margin-right: -24px;
    z-index: 2;
    flex-shrink: 0;

    img {
        display: block;
        width: 100%;
        height: auto;
    }

    @media (max-width: 1100px) {
        width: clamp(150px, 18vw, 210px);
        margin-right: -12px;
    }

    @media (max-width: 920px) {
        position: static;
        width: clamp(150px, 32vw, 220px);
        margin-right: 0;
    }

    @media (max-width: 640px) {
        width: clamp(140px, 44vw, 200px);
    }
`

export const AvaliacaoCards = styled.div`
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 300px));
    gap: 24px;
    justify-content: center;
    position: relative;
    z-index: 1;
    width: 100%;
    max-width: 624px;
    margin: 0 auto;

    @media (max-width: 760px) {
        grid-template-columns: minmax(0, 320px);
        max-width: 320px;
    }

    @media (max-width: 360px) {
        grid-template-columns: minmax(0, 1fr);
        width: 100%;
        max-width: 100%;
    }
`

export const AvaliacaoStars = styled.div`
    display: flex;
    align-items: center;
    gap: 6px;
    color: ${cores.blueLight};

    svg {
        width: 22px;
        height: 22px;
        display: block;
    }
`

export const AvaliacaoCard = styled.div`
    display: flex;
    flex-direction: column;
    background-color: ${cores.white};
    width: 100%;
    min-height: 220px;
    border-radius: 36px;
    padding: 20px;

    p {
        margin: 12px 0;
        line-height: 1.45;
        overflow-wrap: anywhere;
        text-wrap: pretty;
    }

    h4 {
        margin-top: auto;
        line-height: 1.2;
        overflow-wrap: anywhere;
    }

    @media (max-width: 640px) {
        min-height: auto;
        border-radius: 28px;
        padding: 18px;

        p {
            font-size: 15px;
        }

        h4 {
            font-size: 18px;
        }
    }
`
