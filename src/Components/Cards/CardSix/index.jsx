import React, { useState } from 'react'
import * as S from './style'
import Modal from 'react-modal'
import Image06 from '../../../assets/06.png'

export default function Card({ children }) {
    const [status, setStatus] = useState(false)

    // {
    //     number2: '2',
    //     trouble2: 'Vias acessíveis',
    //     proposal2: 'Muitas das calçadas são estreitas e assim como as ruas não possuem sinalização adequada. Minha proposta seria fazer um levantamento das vias de maior tráfego tanto de veículos quanto de pedestres e readequar conforme as normas de acessibilidade inserindo rampas para cadeirantes, faixas-guia para pessoas com deficiência visual, etc.',
    // },


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

            <Modal onRequestClose={handleModal} isOpen={status}>
                <S.ModalTitle>6</S.ModalTitle>
                <S.ModalSubtitle>Estimular o comércio local</S.ModalSubtitle>
                <S.ModalP>Por último, mas não menos importante, investir no comércio local. Há vários pontos de comércio no bairro mas que nem sempre conseguem atender às demandas dos moradores sendo estes obrigados a recorrer a outros locais muitas vezes até afastados. Investindo em um programa de aprimoramento de mercado, os comerciantes seriam capazes de se adaptar às necessidades do público alvo, novos comércios de nicho poderiam ser abertos até mesmo gerando novas oportunidades de emprego na região.</S.ModalP>
            </Modal>

            {children}
        </S.Card>
    )
}