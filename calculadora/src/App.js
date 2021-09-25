
import React from 'react';
import styled from 'styled-components';
import Resultado from './componentes/Resultado';

function App() {
  return (
    <>
      <Contenedor>
        <Resultado></Resultado>
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
export default App;
