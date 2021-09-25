import React from 'react';
import styled from 'styled-components';


const Boton = ({numero}) => {
    return (
        <>
        <Botont>
        {numero}
        </Botont>
        
        </>
      );
}
 const Botont=styled.button`
 font-size:1.3em;
 border-radius:5px;
 width:30%;
 height:90px;
 `;

export default Boton;