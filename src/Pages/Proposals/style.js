import styled from "styled-components";

export const Proposals = styled.main`
    width: 100%;
`
export const Container = styled.section`
    width: 90%;
    padding: 1rem;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-wrap: wrap;
    margin: 0 auto;
`
export const TextBox = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between; 
    align-items: flex-start;
`
export const Number = styled.h2`
    margin-right: 10px;
    font-size: 2rem;
    color: #000;
`
export const Subtitle = styled.h3`
    text-align: right;
    font-size: 1rem;
    color: #000;
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