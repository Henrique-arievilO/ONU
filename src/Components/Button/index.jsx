import React from 'react';
import * as S from './style'

export default function Themes() {
    return (
        <>
            <S.Switch>
                <S.Label>
                    <S.Checkbox type={'checkbox'} />
                </S.Label>
            </S.Switch>
        </>
    )
}