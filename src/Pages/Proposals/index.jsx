import React from 'react';
import { Link } from 'react-router-dom';

export default function Proposals() {
    return (
        <>
            <button>
                <Link to='/'> &larr; Home</Link>
            </button>
            <section>
                <h3>Como as Nações Unidas apoiam os Objetivos de Desenvolvimento Sustentável no Brasil</h3>
                <p>A ONU e seus parceiros no Brasil estão trabalhando para atingir os Objetivos de Desenvolvimento Sustentável. São 17 objetivos ambiciosos e interconectados que abordam os principais desafios de desenvolvimento enfrentados por pessoas no Brasil e no mundo.</p>
            </section>
            <section>
                <h3>Os Objetivos de Desenvolvimento Sustentável no Brasil</h3>
                <p>Os Objetivos de Desenvolvimento Sustentável são um apelo global à ação para acabar com a pobreza, proteger o meio ambiente e o clima e garantir que as pessoas, em todos os lugares, possam desfrutar de paz e de prosperidade. Estes são os objetivos para os quais as Nações Unidas estão contribuindo a fim de que possamos atingir a Agenda 2030 no Brasil.</p>
            </section>

        </>
    )
}