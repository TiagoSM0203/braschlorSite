import styled from "styled-components";
import { cores } from "../../../../styles";

export const PorqueNosEscolherSection = styled.div`
    margin-bottom: 80px;
`

export const PorqueNosEscolherCta = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
    text-align: center;

    p {
        font-size: clamp(24px, 3.4vw, 32px);
        max-width: 900px;
        font-weight: bold;
        line-height: 1.3;
    }

    a {
        font-size: clamp(18px, 2.8vw, 24px);
    }

    @media (max-width: 640px) {
        gap: 18px;

        p {
            font-size: 20px;
            width: 100%;
            text-align: left;
            word-spacing: normal;
            hyphens: none;
            text-wrap: pretty;
        }

        a {
            width: 100%;
        }
    }
`

export const PorqueNosEscolherCard = styled.div`
    display: flex;
    gap: 48px;
    justify-content: center;
    align-items: center;
    margin-bottom: 72px;

    > img {
        width: min(100%, 400px);
        height: auto;
        flex-shrink: 0;
    }

    @media (max-width: 1100px) {
        gap: 32px;

        > img {
            width: min(100%, 340px);
        }
    }

    @media (max-width: 1024px) {
        max-width: 760px;
        margin: 0 auto 56px;
        flex-direction: column;
        gap: 24px;

        &:nth-child(even) {
            flex-direction: column-reverse;
        }

        > img {
            width: min(100%, 320px);
        }
    }

    @media (max-width: 640px) {
        margin-bottom: 48px;
        gap: 20px;

        > img {
            width: min(100%, 260px);
        }
    }
`

export const PorqueNosEscolherContent = styled.div`
    width: 100%;
    max-width: 500px;
    display: flex;
    flex-direction: column;
    gap: 12px;

    h4 {
        font-size: clamp(20px, 2.6vw, 24px);
        color: ${cores.gray};
    }

    p {
        font-size: 18px;
        line-height: 1.6;
    }

    @media (max-width: 1100px) {
        max-width: 460px;
    }

    @media (max-width: 1024px) {
        max-width: 100%;
        align-items: flex-start;

        p {
            width: 100%;
            text-align: left;
            word-spacing: normal;
            text-wrap: pretty;
        }
    }

    @media (max-width: 640px) {
        gap: 10px;
        align-items: stretch;

        h4 {
            font-size: 18px;
            text-align: left;
        }

        p {
            font-size: 16px;
        }
    }
`

export const PorqueNosEscolherContentTitle = styled.div`
    display: flex;
    align-items: center;
    gap: 16px;
    margin-bottom: 10px;
    width: 100%;

    h2 {
        flex: 1;
        font-size: clamp(24px, 4.2vw, 40px);
        line-height: 1.1;
    }

    .number {
        width: 72px;
        height: 72px;
        flex-shrink: 0;
    }

    @media (max-width: 1024px) {
        justify-content: center;

        h2 {
            text-align: left;
            text-wrap: balance;
        }
    }

    @media (max-width: 640px) {
        flex-direction: column;
        gap: 10px;
        margin-bottom: 6px;
        justify-content: flex-start;
        align-items: flex-start;

        h2 {
            width: 100%;
            font-size: 22px;
            text-align: left;
        }

        .number {
            width: 56px;
            height: 56px;
        }
    }
`
