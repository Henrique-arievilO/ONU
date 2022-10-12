import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        text-decoration: none;
        color: #000;
    }
    body{
        width: 100%;
        padding: 1rem 2rem 2rem;
    }
    button{
        border: none;
        background: #0052a4;
        padding: .5rem 1rem;
        box-shadow: 2px 2px 2px #000;
        margin: 1rem 0;

        a{
        color: #fff;
        }
    }
`