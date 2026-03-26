import { Link } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import { cores } from "../../styles";

const heroPagesReveal = keyframes`
    from {
        opacity: 0;
        transform: translateY(20px) scale(0.985);
    }

    to {
        opacity: 1;
        transform: translateY(0) scale(1);
    }
`

export const HeroPagesSection = styled.section`
    background: radial-gradient(circle, rgba(42, 71, 177, 1) 0%, rgba(0, 24, 114, 1) 100%);
    color: ${cores.white};
    padding: 156px 0 92px;

    @media (max-width: 640px) {
        padding: 126px 0 72px;
    }
`

export const HeroPagesContent = styled.div`
    min-height: 220px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    opacity: 0;
    animation: ${heroPagesReveal} 0.7s ease-out 0.08s forwards;
    will-change: opacity, transform;

    @media (prefers-reduced-motion: reduce) {
        opacity: 1;
        animation: none;
        transform: none;
    }
`

export const HeroPagesTitle = styled.h1`
    font-size: clamp(42px, 7vw, 68px);
    font-weight: 700;
    line-height: 1.05;
`

export const HeroPagesBreadcrumb = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 12px;
    margin-top: 18px;
    font-size: 20px;
    font-weight: 500;
    flex-wrap: wrap;

    @media (max-width: 640px) {
        font-size: 17px;
    }
`

export const HeroPagesHomeLink = styled(Link)`
    color: rgba(255, 255, 255, 0.9);
    transition: color 0.2s ease;

    &:hover {
        color: ${cores.greenLight};
    }
`

export const HeroPagesDot = styled.span`
    color: rgba(255, 255, 255, 0.72);
`

export const HeroPagesCurrent = styled.span`
    color: ${cores.white};
    font-weight: 700;
`
