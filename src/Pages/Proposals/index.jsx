import React from 'react';
import { Link } from 'react-router-dom';
import * as S from './style';
import CardOne from '../../Components/Cards/CardOne'
import CardTwo from '../../Components/Cards/CardTwo'
import CardThree from '../../Components/Cards/CardThree'
import CardFour from '../../Components/Cards/CardFour'
import CardFive from '../../Components/Cards/CardFive'
import CardSix from '../../Components/Cards/CardSix'

export default function Proposals() {

    return (
        <S.Proposals>
            <button>
                <Link to='/'> &larr; Home</Link>
            </button>
            <S.Section>
                <S.Title>Como as Nações Unidas apoiam os Objetivos de Desenvolvimento Sustentável no Brasil</S.Title>
                <S.P>A ONU e seus parceiros no Brasil estão trabalhando para atingir os Objetivos de Desenvolvimento Sustentável. Para os bairros de Uberlândia são 6 objetivos ambiciosos e interconectados que abordam os principais desafios de desenvolvimento enfrentados por pessoas aqui na região.</S.P>
            </S.Section>
            <S.Section>
                <S.Title>Os Objetivos de Desenvolvimento Sustentável em Uberlândia</S.Title>
                <S.P>Os Objetivos de Desenvolvimento Sustentável são um apelo global à ação para acabar com a pobreza, proteger o meio ambiente e o clima e garantir que as pessoas, em todos os lugares, possam desfrutar de paz e de prosperidade. Estes são os objetivos para os quais as Nações Unidas estão contribuindo a fim de que possamos atingir a Agenda 2030 no Brasil.</S.P>
                <S.P>Para conhecer nossas propostas, basta clicar no card correspondente e ver como você pode contribuir seja com o nosso projeto, ou mesmo levando ele para outras regiões.</S.P>
            </S.Section>
            <S.Container>
                <CardOne />
                <CardTwo />
                <CardThree />
                <CardFour />
                <CardFive />
                <CardSix />
            </S.Container>

        </S.Proposals>
    )
}