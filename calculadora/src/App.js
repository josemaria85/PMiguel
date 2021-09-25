
import React, { useState } from 'react';
import styled from 'styled-components';
import Boton from './componentes/Boton';
import Resultado from './componentes/Resultado';

function App() {
  const [resultado, setResultado] = useState(0);
  return (
    <>
      <Contenedor >
        <Resultado resultado={resultado} setResultado={setResultado}/>
        <Botonera>
          <Boton numero={7}></Boton>
          <Boton numero={8}></Boton>
          <Boton numero={9}></Boton>
          <Boton numero={'*'}></Boton>
        </Botonera>
        <Botonera>
          <Boton numero={4}></Boton>
          <Boton numero={5}></Boton>
          <Boton numero={6}></Boton>
          <Boton numero={'-'}></Boton>
        </Botonera>
        <Botonera>
          <Boton numero={1}></Boton>
          <Boton numero={2}></Boton>
          <Boton numero={3}></Boton>
          <Boton numero={'+'}></Boton>
        </Botonera>
        <Botonera>
          <Boton numero={'/'}></Boton>
          <Boton numero={0}></Boton>
          <Boton numero={'.'}></Boton>
          <Boton numero={"="}></Boton>
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
