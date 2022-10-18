import React, { useState } from 'react'
import * as S from './style'
import Modal from 'react-modal'
import Image02 from '../../../assets/02.png'

export default function Card({ children }) {
    const [status, setStatus] = useState(false)

    function handleModal() {
        setStatus(!status)
    }

    return (
        <S.Card onClick={() => { handleModal() }}>
            <S.TextBox>
                <S.Title>2</S.Title>
                <S.P>Acessibilidade</S.P>
            </S.TextBox>
            <S.Image src={Image02} alt='proposta02' />

            <Modal onRequestClose={handleModal} isOpen={status} style={{
                overlay: {
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }, content: {
                    height: 'fit-content',
                    margin: '0 auto',
                    padding: '3rem',
                    borderRadius: '15px',
                    backgroundColor: '#9400D3',
                    boxShadow: '5px 5px 10px #000'
                }
            }}>
                <S.TextBox>
                    <S.ModalTitle>2</S.ModalTitle>
                    <S.ModalSubtitle>Acessibilidade</S.ModalSubtitle>
                </S.TextBox>
                <S.ModalP>Muitas das calçadas são estreitas e assim como as ruas não possuem sinalização adequada. Minha proposta seria fazer um levantamento das vias de maior tráfego tanto de veículos quanto de pedestres e readequar conforme as normas de acessibilidade inserindo rampas para cadeirantes, faixas-guia para pessoas com deficiência visual, etc.</S.ModalP>
            </Modal>

            {children}
        </S.Card>
    )
}