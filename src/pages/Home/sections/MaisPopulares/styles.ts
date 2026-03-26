import styled from "styled-components";
import { Button } from "../../../../components/header/styles";
import { cores, TitleAndSubtitle } from "../../../../styles";
import { revealStyles, type RevealMotionProps } from "../../scrollRevealStyles";

export const MaisPopularesTitle = styled(TitleAndSubtitle)<RevealMotionProps>`
    ${revealStyles}
`

export const MaisPopularesSection = styled.section`
    padding: 0 0 104px;
    background-color: ${cores.grayLightOpacity};

    @media (max-width: 900px) {
        padding: 80px 0 88px;
    }

    @media (max-width: 640px) {
        padding: 0 0 72px;
    }

    ${MaisPopularesTitle} {
        margin-top: 0;
        padding-top: 80px;
    }
`

export const MaisPopularesCarouselOuter = styled.div`
    position: relative;
    width: 100%;
    overflow: hidden;

    @media (max-width: 640px) {
        overflow: visible;
    }
`

export const MaisPopularesCarouselShell = styled.div`
    --carousel-gap: 24px;
    --carousel-shadow-space: 18px;

    width: 100%;
    max-width: 1480px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 28px;
    padding: 0 24px;

    @media (max-width: 1320px) {
        --carousel-gap: 18px;
    }

    @media (max-width: 1100px) {
        --carousel-gap: 14px;
        padding: 0 16px;
    }

    @media (max-width: 900px) {
        --carousel-gap: 22px;
    }

    @media (max-width: 640px) {
        --carousel-gap: 16px;
        --carousel-shadow-space: 14px;
        padding: 0 16px;
    }
`

export const MaisPopularesCarouselViewport = styled.div`
    width: 100%;
    overflow: hidden;
    padding: var(--carousel-shadow-space) 0;
`

export const MaisPopularesCarouselTrack = styled.div`
    display: flex;
    margin-left: calc(var(--carousel-gap) * -1);
    touch-action: pan-y pinch-zoom;
`

export const MaisPopularesCarouselSlide = styled.div`
    flex: 0 0 calc((100% - (var(--carousel-gap) * 2)) / 3);
    min-width: 0;
    padding-left: var(--carousel-gap);

    @media (max-width: 900px) {
        flex: 0 0 calc((100% - var(--carousel-gap)) / 2);
    }

    @media (max-width: 640px) {
        flex: 0 0 100%;
    }
`

export const MaisPopularesCard = styled.article<RevealMotionProps>`
    ${revealStyles}
    display: flex;
    flex-direction: column;
    gap: 28px;
    min-height: 360px;
    padding: 22px 22px 28px;
    border-radius: 36px;
    background-color: ${cores.white};
    box-shadow: 0 0 6px 3px rgba(0, 0, 0, 0.1);

    @media (max-width: 1320px) {
        gap: 22px;
        min-height: 330px;
        padding: 18px 18px 22px;
        border-radius: 30px;
    }

    @media (max-width: 1100px) {
        min-height: 300px;
        padding: 16px 16px 20px;
        border-radius: 26px;
    }

    @media (max-width: 640px) {
        gap: 22px;
        min-height: auto;
        padding: 18px 18px 22px;
        border-radius: 26px;
    }
`

export const MaisPopularesCardContent = styled.div`
    display: grid;
    grid-template-columns: 132px minmax(0, 1fr);
    align-items: center;
    gap: 22px;
    flex: 1;

    @media (max-width: 1320px) {
        grid-template-columns: 108px minmax(0, 1fr);
        gap: 18px;
    }

    @media (max-width: 1100px) {
        grid-template-columns: 92px minmax(0, 1fr);
        gap: 14px;
    }

    @media (max-width: 640px) {
        grid-template-columns: minmax(0, 1fr);
        gap: 18px;
        justify-items: center;
        text-align: center;
    }
`

export const MaisPopularesCardImage = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 188px;

    img {
        width: 100%;
        max-width: 132px;
        height: auto;
        object-fit: contain;
    }

    @media (max-width: 1320px) {
        min-height: 152px;

        img {
            max-width: 108px;
        }
    }

    @media (max-width: 1100px) {
        min-height: 132px;

        img {
            max-width: 92px;
        }
    }

    @media (max-width: 640px) {
        min-height: auto;

        img {
            max-width: 122px;
        }
    }
`

export const MaisPopularesCardText = styled.div`
    h2 {
        padding-bottom: 16px;
        margin-bottom: 18px;
        border-bottom: 2px solid rgba(0, 0, 0, 0.12);
        font-size: clamp(28px, 3vw, 36px);
        line-height: 1.05;
        color: ${cores.black};
    }

    p {
        max-width: 320px;
        font-size: 16px;
        line-height: 1.55;
        color: ${cores.black};
    }

    @media (max-width: 1320px) {
        h2 {
            padding-bottom: 14px;
            margin-bottom: 14px;
            font-size: clamp(22px, 2.1vw, 30px);
        }

        p {
            font-size: 15px;
            line-height: 1.45;
        }
    }

    @media (max-width: 1100px) {
        h2 {
            padding-bottom: 12px;
            margin-bottom: 12px;
            font-size: clamp(20px, 1.8vw, 26px);
        }

        p {
            font-size: 14px;
        }
    }

    @media (max-width: 640px) {
        width: 100%;

        h2 {
            margin-bottom: 14px;
            padding-bottom: 14px;
            font-size: clamp(24px, 7vw, 32px);
        }

        p {
            max-width: none;
            font-size: 15px;
        }
    }
`

export const MaisPopularesAction = styled(Button)`
    width: 100%;
    font-size: clamp(18px, 2.8vw, 22px);
    font-weight: bold;

    @media (max-width: 1320px) {
        font-size: clamp(16px, 1.8vw, 20px);
    }

    @media (max-width: 640px) {
        font-size: 20px;
    }
`

export const MaisPopularesControls = styled.div<RevealMotionProps>`
    ${revealStyles}
    display: flex;
    align-items: center;
    justify-content: center;
    width: fit-content;
    max-width: 100%;
    margin: 0 auto;
    gap: 18px;
    flex-wrap: wrap;
`

export const MaisPopularesControlButton = styled.button`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 52px;
    height: 52px;
    border: 1px solid rgba(0, 0, 0, 0.05);
    border-radius: 50%;
    background-color: ${cores.white};
    color: ${cores.green};
    font-size: 22px;
    font-weight: bold;
    cursor: pointer;
    transition: transform 0.2s ease, background-color 0.2s ease, color 0.2s ease;

    &:hover:not(:disabled) {
        transform: translateY(-2px);
        background-color: ${cores.greenLight};
        color: ${cores.white};
    }

    &:disabled {
        opacity: 0.45;
        cursor: not-allowed;
    }
`

export const MaisPopularesCarouselDots = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
`

export const MaisPopularesCarouselDot = styled.button<{ $isActive: boolean }>`
    width: ${({ $isActive }) => ($isActive ? "30px" : "10px")};
    height: 10px;
    border: none;
    border-radius: 999px;
    background-color: ${({ $isActive }) =>
      $isActive ? cores.green : "rgba(0, 0, 0, 0.18)"};
    cursor: pointer;
    transition: width 0.2s ease, background-color 0.2s ease;
`
