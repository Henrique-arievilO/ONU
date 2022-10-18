import React, { useState } from 'react'
import * as S from './style'
import Modal from 'react-modal'
import Image01 from '../../../assets/01.png'

export default function Card({ children }) {
    const [status, setStatus] = useState(false)

    function handleModal() {
        setStatus(!status)
    }

    return (
        <S.Card onClick={() => { handleModal() }}>
            <S.TextBox>
                <S.Title>1</S.Title>
                <S.P>Alimentação para todos</S.P>
            </S.TextBox>
            <S.Image src={Image01} alt='proposta01' />

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
                    backgroundColor: '#1E90FF',
                    boxShadow: '5px 5px 10px #000'
                }
            }}>
                <S.TextBox>
                    <S.ModalTitle>1</S.ModalTitle>
                    <S.ModalSubtitle>Alimentação</S.ModalSubtitle>
                </S.TextBox>
                <S.ModalP>Garantir que todos os moradores tenham o direito a no mínimo três refeições por dia. Às margens do bairro existem famílias que vivem em uma ocupação e poder garantir que estas pessoas tenham uma alimentação saudádel é de extrema importância.</S.ModalP>
            </Modal>

            {children}
        </S.Card>
    )
}