import React from 'react';
import { Link } from 'react-router-dom';
import * as S from './style'
import Bairro from '../../assets/residencial-integracao.jpg'

export default function Home() {
    return (
        <S.Home>
            <button>
                <Link to='Proposals'>Propostas &rarr;</Link>
            </button>
            <S.Section>
                <S.Title>Home page</S.Title>
                <S.P>Esta página tem por objetivo identificar problemas socias, econômicos, ambientais e culturais no bairro afim de propor melhorias mediante um prazo estipulado</S.P>
                <S.P>O objeto de estudo foi o Residencial Integração que é hoje um aglomerado de vários bairros antigos de pequeno porte da Zona Leste de Uberlândia. Residencial Integração é o conjunto formado pelos bairros extintos: Dom Almir, Joana D'Arc, São Francisco, Jardim Prosperidade, Grand Ville, Celebridade e Jardim Sucupira.</S.P>
                <S.Figure>
                    <S.Image src={Bairro} alt='Foto do bairro Residencial Integração' />
                    <S.Figcaption>Residencial Integração</S.Figcaption>
                </S.Figure>
            </S.Section>
        </S.Home>
    )
}