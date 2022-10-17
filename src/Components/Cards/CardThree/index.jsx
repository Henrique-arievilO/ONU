import React, { useState } from 'react'
import * as S from './style'
import Modal from 'react-modal'
import Image03 from '../../../assets/03.png'

export default function Card({ children }) {
    const [status, setStatus] = useState(false)

    function handleModal() {
        setStatus(!status)
    }

    return (
        <S.Card onClick={() => { handleModal() }}>
            <S.TextBox>
                <S.Title>3</S.Title>
                <S.P>Segurança</S.P>
            </S.TextBox>
            <S.Image src={Image03} alt='proposta03' />

            <Modal onRequestClose={handleModal} isOpen={status}>
                <S.ModalTitle>3</S.ModalTitle>
                <S.ModalSubtitle>Segurança</S.ModalSubtitle>
                <S.ModalP>Os índices de violência no bairro ainda são altos. Para garantir uma melhor segurança para os moradores, minha proposta seria "reativar" a associação de moradores do bairro, melhoras a iluminação à noite, incluir um posto policial e uma patrulhamento noturno a fim de garantir que todos tenha a liberdade e segurança de sair à noite sem medo.</S.ModalP>
            </Modal>

            {children}
        </S.Card>
    )
}