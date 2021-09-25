import React from 'react';
import styled from 'styled-components';

const Resultado = ({resultado=0}) => {
    return (
        <>
            <Pantalla>{resultado}</Pantalla>
        </>
    );
}
const Pantalla = styled.div`
    background:white;
    width:100%;
    border:solid 1px black;
    border-radius:5px;
    font-size:1.5em;
    text-align:right;
    padding-right:5px;
 `
export default Resultado;