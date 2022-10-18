import styled from 'styled-components';

export const Card = styled.div`
    width: 10rem;
    height: 15rem;
    padding: 15px;
    margin: 1rem .5rem;
    box-shadow: 2px 2px 8px 2px #000;
    transition: all .5s;
    cursor: pointer;
    background-color: #9400D3;
`
export const TextBox = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between; 
    align-items: center;
`
export const Title = styled.h1`
    margin: 1rem auto;
    color: #000;
`
export const P = styled.p`
    margin-left: 1rem;
    color: #000;
`
export const Image = styled.img`
    width: 100%;
    margin-top: 1rem;
`
export const ModalTitle = styled.h1`
    color: #000;
`
export const ModalSubtitle = styled.h2`
    color: #000;
`
export const ModalP = styled.p`
    color: #000;
    margin-top: 2rem;
`