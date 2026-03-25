import { Link } from "react-router-dom";
import styled, { css } from "styled-components";
import { cores } from "../../styles";

const interactiveTextStyles = css`
    color: rgba(255, 255, 255, 0.94);
    transition: color 0.2s ease, opacity 0.2s ease;

    &:hover {
        color: ${cores.greenLight};
    }
`

export const FooterSection = styled.footer`
    margin-top: 64px;
    background: linear-gradient(135deg, ${cores.blueLight} 0%, ${cores.blueDark} 100%);
    color: ${cores.white};
`

export const FooterInner = styled.div`
    padding: 52px 0 28px;
`

export const FooterTop = styled.div`
    display: grid;
    grid-template-columns: minmax(0, 1.05fr) minmax(0, 1fr) minmax(0, 1.25fr);
    gap: 40px;

    @media (max-width: 960px) {
        grid-template-columns: 1fr;
        gap: 28px;
    }
`

export const FooterColumn = styled.div`
    position: relative;
    padding-right: 40px;

    &:not(:last-child)::after {
        content: "";
        position: absolute;
        top: 0;
        right: 0;
        width: 1px;
        height: 100%;
        background-color: rgba(255, 255, 255, 0.12);
    }

    @media (max-width: 960px) {
        padding-right: 0;
        padding-bottom: 28px;

        &:not(:last-child)::after {
            top: auto;
            right: 0;
            bottom: 0;
            width: 100%;
            height: 1px;
        }
    }
`

export const FooterBrandLink = styled(Link)`
    display: inline-flex;
    align-items: center;
    margin-bottom: 28px;
`

export const FooterBrandImage = styled.img`
    width: min(220px, 100%);
    display: block;
`

export const FooterHeading = styled.h3`
    font-size: 30px;
    font-weight: 600;
    line-height: 1.15;
    margin-bottom: 22px;

    @media (max-width: 640px) {
        font-size: 26px;
    }
`

export const SocialList = styled.div`
    display: flex;
    flex-direction: column;
    gap: 14px;
`

export const SocialRow = styled.a`
    ${interactiveTextStyles}
    display: flex;
    align-items: center;
    gap: 12px;
    font-size: 18px;
`

export const SocialIconBox = styled.span`
    width: 24px;
    height: 24px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    color: ${cores.white};

    svg {
        width: 100%;
        height: 100%;
        display: block;
    }
`

export const QuickLinksList = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 12px;

    li {
        display: flex;
        align-items: center;
        gap: 12px;
        font-size: 18px;
    }

    li::before {
        content: "";
        width: 4px;
        height: 4px;
        border-radius: 50%;
        background-color: rgba(255, 255, 255, 0.9);
        flex-shrink: 0;
    }
`

export const FooterRouteLink = styled(Link)`
    ${interactiveTextStyles}
`

export const FooterExternalLink = styled.a`
    ${interactiveTextStyles}
`

export const ContactList = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 22px;
`

export const ContactItem = styled.li`
    display: grid;
    grid-template-columns: 26px 1fr;
    align-items: start;
    gap: 14px;
`

export const ContactIconBox = styled.span`
    width: 26px;
    height: 26px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    color: ${cores.white};

    svg {
        width: 100%;
        height: 100%;
        display: block;
    }
`

export const ContactLink = styled.a`
    ${interactiveTextStyles}
    font-size: 18px;
    line-height: 1.45;
`

export const ContactText = styled.span`
    color: rgba(255, 255, 255, 0.94);
    font-size: 18px;
    line-height: 1.45;
`

export const FooterDivider = styled.div`
    height: 1px;
    background-color: rgba(255, 255, 255, 0.12);
    margin: 40px 0 24px;
`

export const FooterBottom = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 12px;
    text-align: center;
    color: rgba(255, 255, 255, 0.94);
    font-size: 15px;
    line-height: 1.5;

    strong {
        color: ${cores.white};
    }

    svg {
        width: 24px;
        height: 24px;
        flex-shrink: 0;
    }

    @media (max-width: 640px) {
        flex-direction: column;
    }
`
