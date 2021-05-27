import React from 'react';
import ReactDOM from 'react-dom';

export default function Hosgeldin(props) {
    return <h1>Hoşgeldin, {props.name}</h1>;
  }
  
  const element = <Hosgeldin name="Melih" />;
  ReactDOM.render(element, document.getElementById('root'));

  