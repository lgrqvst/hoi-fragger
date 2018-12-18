import React from 'react';

import styled from 'styled-components';

const Splash = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 75vh;
  padding: 0 1rem;
  text-align: center;

  span {
    text-decoration: underline;
  }
`;

const splash = props => (
  <Splash>
    <p>
      Add some actors. Click edit to add one by one, or
      {' '}
      <span onClick={props.loadDefault}>load the default set</span>
.
    </p>
  </Splash>
);

export default splash;
