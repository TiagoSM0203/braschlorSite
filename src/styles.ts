import styled, { createGlobalStyle } from "styled-components";

export const cores = {
    white: "#FFFFFF",
    green: "#8CC64B",
    greenLight: "#9ad951ff",
    black: "#000000",
    gray: "#787878",
    blueLight: "#0082DB",
    blueDark: "#223c9f",
    grayLight: "#d9d9d9",
    grayLightOpacity: "#d9d9d930"
}

export const GlobalCss = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: "Outfit", sans-serif;
        list-style: none;
        text-decoration: none;
    }

    html,
    body,
    #root {
        width: 100%;
        max-width: 100%;
        overflow-x: hidden;
    }

    body {
        background-color: ${cores.white};
        padding: 0;
        overflow-x: hidden;
    }
`

export const Container = styled.div`
    max-width: 1120px;
    width: 100%;
    margin: 0 auto;
    padding: 0 24px;

    @media (max-width: 640px) {
        padding: 0 16px;
    }
`

export const TitleAndSubtitle = styled.div`
    text-align: center;
    max-width: 800px;
    margin: 80px auto 56px;
    color: ${cores.black};

    h1 {
        font-size: clamp(36px, 6vw, 64px);
    }

    p {
        margin-top: 12px;
        font-size: clamp(18px, 2.8vw, 24px);
    }

    @media (max-width: 900px) {
        margin-bottom: 40px;
    }

    @media (max-width: 640px) {
        margin-bottom: 36px;

        p {
            font-size: 16px;
        }
    }
`

export const PageSection = styled.section`
    min-height: calc(100vh - 110px);
    padding: 72px 0 96px;
`

export const PageEyebrow = styled.span`
    display: inline-block;
    margin-bottom: 18px;
    font-size: 13px;
    font-weight: 700;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    color: ${cores.green};
`

