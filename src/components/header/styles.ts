import { Link } from "react-router-dom";
import styled, { css } from "styled-components";
import { cores } from "../../styles";

export const HeaderBar = styled.header`
    position: relative;
    padding: 10px 0;
    color: ${cores.white};
    display: grid;
    grid-template-columns: auto minmax(0, 1fr) auto;
    align-items: center;
    gap: 24px;

    > a {
        display: flex;
        align-items: center;
    }

    img {
        width: 150px;
        max-width: 100%;
    }

    @media (max-width: 1100px) {
        gap: 20px;

        img {
            width: 132px;
        }
    }

    @media (max-width: 1024px) {
        display: flex;
        justify-content: space-between;
        padding: 18px 0;
    }
`

export const Nav = styled.nav<{ $isMenuOpen: boolean }>`
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 0;

    @media (max-width: 1100px) {
        gap: 20px;
    }

    @media (max-width: 1024px) {
        position: absolute;
        top: calc(100% + 8px);
        left: 0;
        right: 0;
        transform: none;
        margin-left: 0;
        padding: 20px;
        border-radius: 24px;
        background: ${cores.blueDark};
        backdrop-filter: blur(18px);
        display: flex;
        flex-direction: column;
        align-items: stretch;
        gap: 20px;
        width: auto;
        opacity: ${({ $isMenuOpen }) => ($isMenuOpen ? 1 : 0)};
        visibility: ${({ $isMenuOpen }) => ($isMenuOpen ? "visible" : "hidden")};
        pointer-events: ${({ $isMenuOpen }) => ($isMenuOpen ? "auto" : "none")};
        transform: ${({ $isMenuOpen }) =>
          $isMenuOpen ? "translateY(0)" : "translateY(-12px)"};
        transition: opacity 0.25s ease, transform 0.25s ease, visibility 0.25s ease;
        box-shadow: 0 22px 48px rgba(0, 0, 0, 0.22);
    }
`

export const Links = styled.ul`
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 0;
    gap: 25px;

    @media (max-width: 1100px) {
        gap: 18px;
    }

    @media (max-width: 1024px) {
        flex-direction: column;
        align-items: stretch;
        gap: 8px;
    }
`

export const LinkItem = styled.li`
    a {
        color: ${cores.white};
        font-size: 15px;
        font-weight: 500;
        display: block;
        white-space: nowrap;
        transition: color 0.2s ease;

        &:hover {
            color: ${cores.greenLight};
        }

        &.is-active {
            color: ${cores.greenLight};
        }
    }

    @media (max-width: 1024px) {
        a {
            padding: 10px 0;
            white-space: normal;
        }
    }
`

const buttonStyles = css`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 15px 32px;
    background-color: ${cores.green};
    border: none;
    border-radius: 50px;
    color: ${cores.white};
    font-weight: bold;
    font-size: 16px;
    white-space: nowrap;
    transition: background-color 0.2s ease, color 0.2s ease;
    cursor: pointer;

    &:hover {
        background-color: ${cores.greenLight};
    }

    @media (max-width: 1100px) {
        padding: 13px 24px;
        font-size: 15px;
    }

    @media (max-width: 1024px) {
        width: 100%;
    }
`

export const Button = styled.a`
    ${buttonStyles}
`

const RouterButton = styled(Link)`
    ${buttonStyles}
`

export const DesktopButton = styled(RouterButton)`
    display: inline-flex;
    margin-left: 0;

    @media (max-width: 1024px) {
        display: none;
    }
`

export const MobileButton = styled(RouterButton)`
    display: none;

    @media (max-width: 1024px) {
        display: inline-flex;
        width: 100%;
    }
`

export const MenuButton = styled.button<{ $isMenuOpen: boolean }>`
    display: none;
    width: 48px;
    height: 48px;
    border: 1px solid rgba(255, 255, 255, 0.35);
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.12);
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 5px;
    cursor: pointer;
    padding: 0;

    span {
        width: 18px;
        height: 2px;
        border-radius: 999px;
        background-color: ${cores.white};
        transition: transform 0.2s ease, opacity 0.2s ease;
    }

    span:nth-child(1) {
        transform: ${({ $isMenuOpen }) =>
          $isMenuOpen ? "translateY(7px) rotate(45deg)" : "none"};
    }

    span:nth-child(2) {
        opacity: ${({ $isMenuOpen }) => ($isMenuOpen ? 0 : 1)};
    }

    span:nth-child(3) {
        transform: ${({ $isMenuOpen }) =>
          $isMenuOpen ? "translateY(-7px) rotate(-45deg)" : "none"};
    }

    @media (max-width: 1024px) {
        display: inline-flex;
    }
`
