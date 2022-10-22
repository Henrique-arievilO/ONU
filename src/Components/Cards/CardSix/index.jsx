import React, { useState } from 'react'
import * as S from './style'
import Modal from 'react-modal'
import Image06 from '../../../assets/06.png'

export default function Card({ children }) {
    const [status, setStatus] = useState(false)

    function handleModal() {
        setStatus(!status)
    }

    return (
        <S.Card onClick={() => { handleModal() }}>
            <S.TextBox>
                <S.Title>6</S.Title>
                <S.P>Estimular o comércio local</S.P>
            </S.TextBox>
            <S.Image src={Image06} alt='proposta06' />

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
                    backgroundColor: '#fad605',
                    boxShadow: '5px 5px 10px #000'
                }
            }}>
                <S.TextBox>
                    <S.ModalTitle>6</S.ModalTitle>
                    <S.ModalSubtitle>Estimular o comércio local</S.ModalSubtitle>
                </S.TextBox>
                <S.ModalP>Por último, mas não menos importante, investir no comércio local. Há vários pontos de comércio no bairro mas que nem sempre conseguem atender às demandas dos moradores sendo estes obrigados a recorrer a outros locais muitas vezes até afastados. Investindo em um programa de aprimoramento de mercado, os comerciantes seriam capazes de se adaptar às necessidades do público alvo, novos comércios de nicho poderiam ser abertos até mesmo gerando novas oportunidades de emprego na região.</S.ModalP>
            </Modal>

            {children}
        </S.Card>
    )
}