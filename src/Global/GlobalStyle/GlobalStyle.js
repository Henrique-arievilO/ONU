import { createGlobalStyle } from "styled-components";
import styled from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        text-decoration: none;
        color: ${props => props.theme.textColor};
    }
    body{
        width: 100%;
        padding: 1rem 2rem 2rem;
        background-color: ${props => props.theme.primaryColor};
    }
    button{
        width: 130px;
        height: 30px;
        border: none;
        background: #0052a4;
        box-shadow: 2px 2px 2px #000;
        margin: 1rem 0;
        
        a{
            padding: .5rem 1.5rem;
            color: #fff;
        }
    }

    :root{
        //Colors

        --grey100: #f5f5f5;
        --grey200: #d6d6d6;
        --grey300: #b8b8b8;
        --grey400: #999999;
        --grey500: #7a7a7a;
        --grey600: #5c5c5c;
        --grey700: #3d3d3d;
        --grey800: #1f1f1f;
        --grey900: #000000;
    }

    ::-webkit-scrollbar{
        display: none;
    }
`
export const Toggler = styled.label`
    width: 60px;
    height: 30px;
    position: absolute;
    right: 1rem;
    top: 1rem;
    border: none;
    box-shadow: inset 0 0 15px 1px #000, 5px 5px 5px #000;
    border-radius: 30px;
    cursor: pointer;
    transition: 400ms;
    text-align: left;

    @media screen and (min-width: 320px) and (max-width: 499px){
        transform: scale(.75);
        right: .5rem;
        top: .5rem;
    }
`
export const SwitchToggle = styled.input`
    width: 60px;
    height: 30px;
    border: none;
    appearance: none;
    background-color: ${props => props.theme.btnBackground};
    box-shadow: inset 0 0 15px 1px #000;
    border-radius: 30px;
    cursor: pointer;

    &:before{
        content: '';
        width: 26px;
        height: 26px;
        margin: 2px;
        border-radius: 50%;
        background-color: var(--grey500);
        position: absolute;
        box-shadow: inset 0 0 15px 1px;
        transition: 400ms;
    }

    :checked::before{
        transform: translateX(30px);
    }
    `