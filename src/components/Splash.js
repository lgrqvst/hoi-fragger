import React from 'react';

import styled from 'styled-components';

const Splash = styled.div`
  position: relative;
  z-index: 10;
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

const splash = (props) => {
  let msg = '';
  if (props.type === 'empty') {
    msg = (
      <p>
        Add some actors. Click edit to add some one by one, or
        {' '}
        <span onClick={props.loadDefault}>load the default set.</span>
      </p>
    );
  } else if (props.type === 'allzero') {
    msg = <p>No actors with initiative over 0.</p>;
  }
  return <Splash>{msg}</Splash>;
};

export default splash;
