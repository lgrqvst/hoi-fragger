import React from 'react';

import styled from 'styled-components';

const Titlebar = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 20;
  width: 100vw;
  background: black;
  color: white;
  padding: 0.5em 0;
  text-align: center;
  box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.25);
  font-family: 'Pacifico', cursive;
  font-size: 1.5rem;
  line-height: 1;
`;

const titlebar = () => <Titlebar>Hoi, fragger!</Titlebar>;

export default titlebar;
