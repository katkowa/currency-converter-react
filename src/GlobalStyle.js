import {createGlobalStyle} from "styled-components";
import background from "./images/background.png";

export const GlobalStyle = createGlobalStyle`
    html {
    box-sizing: border-box;
    }

    *, ::after, ::before {
    box-sizing: inherit;
    }

    body {
    font-family: 'Lato', sans-serif;
    font-size: 18px;
    background-image: url("${background}");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    }

    #root {
        flex-basis: 600px;
        margin: 20px;
        text-align: center;
        background-color: #fff;
        padding: 10px;
        border-radius: 5px;
    }
`;