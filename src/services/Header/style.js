import styled from "styled-components";

export const Header = styled.header`
    width: 100%;
    height: 9rem;
    padding: 1rem 0;
    border-bottom: solid 2px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media screen and (min-width: 320px) and (max-width: 499px){
        justify-content: center;
        flex-direction: column;
    }
`;
export const Figure = styled.figure`
    width: 13rem;
    height: 4rem;
    display: flex;
    justify-content: center;
    align-items: center;
`;
export const Image = styled.img`
    width: 4rem;
    height: 100%;
`;
export const Figcaption = styled.figcaption`
    width: fit-content;
    margin-left: 10px;
`;
export const Title = styled.h1`
    width: 50rem;
    font-size: 2rem;
    text-align: right;

    @media screen and (min-width: 500px) and (max-width: 800px){
        width: fit-content;
        font-size: 1.5rem;
    }
    @media screen and (min-width: 320px) and (max-width: 499px){
        font-size: 1.5rem;
        width: fit-content;
        text-align: center;
    }
`;