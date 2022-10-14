import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Card from '../../Components/Cards';
import * as S from './style';
import Image01 from '../../assets/01.png';
import Image02 from '../../assets/02.png';
import Image03 from '../../assets/03.png';
import Image04 from '../../assets/04.png';
import Image05 from '../../assets/05.png';
import Image06 from '../../assets/06.png';


export default function Proposals() {
    const [objective, setObjective] = useState([
        {
            number1: '',
            proposal1: '',
            logo1: '',
        },
        {
            number2: '',
            proposal2: '',
            logo2: '',
        },
        {
            number3: '',
            proposal3: '',
            logo3: '',
        },
        {
            number4: '',
            proposal4: '',
            logo4: '',
        },
        {
            number5: '',
            proposal5: '',
            logo5: '',
        },
        {
            number6: '',
            proposal6: '',
            logo6: '',
        },
    ])

    useEffect(() => {
        setObjective([
            {
                number1: '1',
                proposal1: 'Alimentação para todos',
                logo1: Image01,
            },
            {
                number2: '2',
                proposal2: 'Vias acessíveis',
                logo2: Image02,
            },
            {
                number3: '3',
                proposal3: 'Segurança',
                logo3: Image03,
            },
            {
                number4: '4',
                proposal4: 'Bairro limpo',
                logo4: Image04,
            },
            {
                number5: '5',
                proposal5: 'Arborização',
                logo5: Image05,
            },
            {
                number6: '6',
                proposal6: 'Estímulo do comércio local',
                logo6: Image06,
            },
        ])
    }, [])

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
            </S.Section>
            <S.Container>
                <Card>
                    <S.TextBox>
                        <S.Number>{objective[0].number1}</S.Number>
                        <S.Subtitle>{objective[0].proposal1}</S.Subtitle>
                    </S.TextBox>
                    <S.Image src={objective[0].logo1} alt={objective[0].proposal1} />
                </Card>
                <Card>
                    <S.TextBox>
                        <S.Number>{objective[1].number2}</S.Number>
                        <S.Subtitle>{objective[1].proposal2}</S.Subtitle>
                    </S.TextBox>
                    <S.Image src={objective[1].logo2} alt={objective[1].proposal2} />
                </Card>
                <Card>
                    <S.TextBox>
                        <S.Number>{objective[2].number3}</S.Number>
                        <S.Subtitle>{objective[2].proposal3}</S.Subtitle>
                    </S.TextBox>
                    <S.Image src={objective[2].logo3} alt={objective[2].proposal3} />
                </Card>
                <Card>
                    <S.TextBox>
                        <S.Number>{objective[3].number4}</S.Number>
                        <S.Subtitle>{objective[3].proposal4}</S.Subtitle>
                    </S.TextBox>
                    <S.Image src={objective[3].logo4} alt={objective[3].proposal4} />
                </Card>
                <Card>
                    <S.TextBox>
                        <S.Number>{objective[4].number5}</S.Number>
                        <S.Subtitle>{objective[4].proposal5}</S.Subtitle>
                    </S.TextBox>
                    <S.Image src={objective[4].logo5} alt={objective[4].proposal5} />
                </Card>
                <Card>
                    <S.TextBox>
                        <S.Number>{objective[5].number6}</S.Number>
                        <S.Subtitle>{objective[5].proposal6}</S.Subtitle>
                    </S.TextBox>
                    <S.Image src={objective[5].logo6} alt={objective[5].proposal6} />
                </Card>
            </S.Container>

        </S.Proposals>
    )
}