import React from 'react';

const actor = props => (
  <li onClick={props.clicked}>
    <div>{props.name}</div>
    <div>{props.initiative}</div>
  </li>
);

export default actor;
