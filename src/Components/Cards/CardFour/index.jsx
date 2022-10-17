import React, { useState } from 'react'
import * as S from './style'
import Modal from 'react-modal'
import Image04 from '../../../assets/04.png'

export default function Card({ children }) {
    const [status, setStatus] = useState(false)

    function handleModal() {
        setStatus(!status)
    }

    return (
        <S.Card onClick={() => { handleModal() }}>
            <S.TextBox>
                <S.Title>4</S.Title>
                <S.P>Bairro limpo</S.P>
            </S.TextBox>
            <S.Image src={Image04} alt='proposta04' />

            <Modal onRequestClose={handleModal} isOpen={status}>
                <S.ModalTitle>4</S.ModalTitle>
                <S.ModalSubtitle>Bairro limpo</S.ModalSubtitle>
                <S.ModalP>Seguindo os padrões de Curitiba-PR, incluir em cada esquina uma lixeira e um porta-bitucas a fim de incentivar as pessoas a não descartar lixo nas ruas e calçadas, contribuindo assim com o trabalho dos varredores, além de deixar o bairro mais limpo servindo de exeplo para o resto da cidade. Também incluir em pontos estratégicos de grande fluxo</S.ModalP>
            </Modal>

            {children}
        </S.Card>
    )
}