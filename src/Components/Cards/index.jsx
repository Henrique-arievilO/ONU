import React, { useState } from 'react'
import * as S from './style'
import Modal from 'react-modal'

export default function Card({ children }) {
    const [status, setStatus] = useState(false)

    function handleModal() {
        setStatus(!status)
    }

    return (
        <S.Card onClick={() => { handleModal() }}>
            <Modal onRequestClose={handleModal} isOpen={status}>
                <h1>Eu sou um modal</h1>
            </Modal>
            {children}
        </S.Card>
    )
}