import styled from 'styled-components';

export const Card = styled.div`
    width: 10rem;
    height: 15rem;
    padding: 15px;
    margin: 1rem .5rem;
    box-shadow: 2px 2px 8px 2px #000;
    transition: all .5s;
    background-color: var(--grey500);
    cursor: pointer;

    &:hover{
        background-color: red;
    }
`
