import styled from "styled-components";

export const Switch = styled.div`
    width: 60px;
    height: 30px;
    display: flex;
    border: 2px solid #000;
    border-radius: 30px;
    position: absolute;
    right: 2rem;
    top: 1rem;
    padding: 2px;
`
export const Label = styled.label`
    width: 22px;
    height: 22px;
    border-radius: 50%;
    background: #000;
`
export const Checkbox = styled.input`
    width: 0;
    height: 0;

    :checked{
        transform: translateX(22px);
    }

    :before{
        content: "";
        width: 22px;
        height: 22px;
        border-radius: 50%;
        background: #000;
    }
`