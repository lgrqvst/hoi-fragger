import React from 'react';

import styled from 'styled-components';

const Titlebar = styled.div`
  background: black;
  color: white;
  padding: 0.5em 0;
  text-align: center;
`;

const titlebar = () => <Titlebar>Hoi, fragger!</Titlebar>;

export default titlebar;
