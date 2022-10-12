import styled from "styled-components";

export const Home = styled.main`
    width: 100%;
`
export const Section = styled.section`
    width: 55%;
    margin: 0 auto;

    @media screen and (min-width: 500px) and (max-width: 800px){
        width: 75%;
    }
    @media screen and (min-width: 320px) and (max-width: 499px){
        width: 90%;
    }
`
export const Title = styled.h1`
    margin: 1rem auto;
`
export const P = styled.p`
    margin: 1rem auto;
`
export const Figure = styled.figure`
    width: 100%;
    
`
export const Image = styled.img`
    width: 100%;
`
export const Figcaption = styled.figcaption`
    
`