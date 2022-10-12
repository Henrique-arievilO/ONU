import React from 'react';
import { Link } from 'react-router-dom';

export default function Proposals() {
    return (
        <>
            <button>
                <Link to='/'> &larr; Home</Link>
            </button>
            <h1>Propostas</h1>
        </>
    )
}