import React, { useState } from 'react'
import * as S from './style'
import Modal from 'react-modal'
import Image05 from '../../../assets/05.png'

export default function Card({ children }) {
    const [status, setStatus] = useState(false)

    function handleModal() {
        setStatus(!status)
    }

    return (
        <S.Card onClick={() => { handleModal() }}>
            <S.TextBox>
                <S.Title>5</S.Title>
                <S.P>Arborização</S.P>
            </S.TextBox>
            <S.Image src={Image05} alt='proposta05' />

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
                    backgroundColor: '#32CD32',
                    boxShadow: '5px 5px 10px #000'
                }
            }}>
                <S.TextBox>
                    <S.ModalTitle>5</S.ModalTitle>
                    <S.ModalSubtitle>Arborização</S.ModalSubtitle>
                </S.TextBox>
                <S.ModalP>Por ser um local de vegetação típica do cerrado mas ter sofrido com ações humanas, há grandes espaços abertos apenas com campina rasteira. A proposta seria investir em arborização, com plantas nativas da região melhorando assim o aspecto do bairro tanto visualmente, quanto na qualidade do ar, visto que a altitude do bairro é alta e o clima tende a ser mais seco.</S.ModalP>
            </Modal>

            {children}
        </S.Card>
    )
}