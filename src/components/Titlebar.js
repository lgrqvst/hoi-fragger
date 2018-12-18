import React from 'react';

import styled from 'styled-components';

const Titlebar = styled.div`
  background: black;
  color: white;
  padding: 0.5em 0;
  text-align: center;
  box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.25);
`;

const titlebar = () => <Titlebar>Hoi, fragger!</Titlebar>;

export default titlebar;
