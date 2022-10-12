import React from 'react';
import Logo from '../../assets/OBI-logo.png'
import * as S from './style'

export default function Home() {
    return (
        <S.Header>
            <S.Figure>
                <S.Image src={Logo} alt="logo do site" />
                <S.Figcaption>Organização dos Bairros Integrados</S.Figcaption>
            </S.Figure>
            <S.Title>Bairros Integrados - Uberlândia</S.Title>
        </S.Header>
    )
}