import React, { useState } from 'react';
import styled, { css } from "styled-components";
import estilos from "./boton.css";


const Boton = ({ numero, resultado, setResultado, disabled }) => {

  //Devuelve el resultado de operaciones pasandole un array con los numeros y operacion
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

  //Devuelve el resultado de las operaciones
  const devolver = (e) => {
    //si se pulsa igual se hace el calculo 
    //y si se preciona c se borra el contenido de la pantalla del resultado
    //y si no se concatenan los numeros sin mas
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