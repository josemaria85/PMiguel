import React, { useState } from 'react';
import styled, { css } from "styled-components";
import estilos from "./boton.css";


const Boton = ({ numero, resultado, setResultado, disabled }) => {

  const resultados = (numeros) => {


    let num1 = parseInt(numeros[0]);
    let num2 = parseInt(numeros[2]);
    let operacion = numeros[1];
    switch (operacion) {
      case "+":
        setResultado(num1 + num2);
        break;
      case "-":
        setResultado(num1 - num2);
        break; case "*":
        setResultado(num1 * num2);
        break; case "/":
        setResultado(num1 / num2);
        break;
        break; case "%":
        setResultado(num1 * 100 / num2);
        break;
      case "X^":
        let res = Math.pow(num1, num2);
        setResultado(res);
        break;
      case "Raiz":
        let res2 = Math.sqrt(num1);
        setResultado(res2);
        break;
      default:
        setResultado("Error");
        break;
    }
  }
  const devolver = (e) => {

    if (e.target.value == "=") {
      let numeros = resultado.split(/([+\-*/%]+|[X^]+|[Raiz]+)/g);
      resultados(numeros);
    } else if (e.target.value == "C") {
      setResultado('');
    } else {
      setResultado(resultado + "" + e.target.value);
    }

  }
  return (
    <>
      {disabled == "disabled" ?
        <Botont className="disabled" value={numero} onClick={(e) => { devolver(e) }}>
          {numero}
        </Botont> : <Botont value={numero} onClick={(e) => { devolver(e) }}>
          {numero}
        </Botont>
      }
    </>
  );
}
const Botont = styled.button`
 font-size:1.3em;
 border-radius:5px;
 width:30%;
 height:90px;
 
 `;

export default Boton;