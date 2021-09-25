
import React, { useState } from 'react';
import styled from 'styled-components';
import Boton from './componentes/Boton';
import Resultado from './componentes/Resultado';

function App() {
  const [resultado, setResultado] = useState('');
  
  const operacion=()=>{

  }
  const marcaNumero=(numero)=>{
    setResultado(numero);
  }
  return (
    <>
      <Contenedor >
        <Resultado resultado={resultado} />
        <Botonera>
          <Boton numero={"%"}  resultado={resultado} setResultado={setResultado}></Boton>
          <Boton numero={"X^"}   resultado={resultado} setResultado={setResultado}></Boton>
          <Boton numero={"Raiz"}   resultado={resultado} setResultado={setResultado}></Boton>
          <Boton numero={'C'}   resultado={resultado} setResultado={setResultado}></Boton>
        </Botonera>
        <Botonera>
          <Boton numero={7}  resultado={resultado} setResultado={setResultado}></Boton>
          <Boton numero={8}  resultado={resultado} setResultado={setResultado}></Boton>
          <Boton numero={9}   resultado={resultado} setResultado={setResultado}></Boton>
          <Boton numero={'*'}   resultado={resultado} setResultado={setResultado}></Boton>
        </Botonera>
        <Botonera>
          <Boton numero={4}   resultado={resultado} setResultado={setResultado}></Boton>
          <Boton numero={5}   resultado={resultado} setResultado={setResultado}></Boton>
          <Boton numero={6}   resultado={resultado} setResultado={setResultado}></Boton>
          <Boton numero={'-'}   resultado={resultado} setResultado={setResultado}></Boton>
        </Botonera>
        <Botonera>
          <Boton numero={1}   resultado={resultado} setResultado={setResultado}></Boton>
          <Boton numero={2}   resultado={resultado} setResultado={setResultado}></Boton>
          <Boton numero={3}   resultado={resultado} setResultado={setResultado}></Boton>
          <Boton numero={'+'}   resultado={resultado} setResultado={setResultado}></Boton>
        </Botonera>
        <Botonera>
          <Boton numero={'/'}   resultado={resultado} setResultado={setResultado}></Boton>
          <Boton numero={0}   resultado={resultado} setResultado={setResultado}></Boton>
          <Boton disabled="disabled" numero={''}   resultado={resultado} setResultado={setResultado}></Boton>
          <Boton numero={"="}   resultado={resultado} setResultado={setResultado} ></Boton>
        </Botonera>
      </Contenedor>  </>
  );

}
const Contenedor = styled.div`
  width:40%;
  margin:150px auto;
  background:gray;
  box-shadow:0px 0px 5px black;
  padding:10px;
`
const Botonera=styled.div`
display:flex;

`
export default App;
