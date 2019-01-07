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

const LoadDefault = styled.a`
  text-decoration: underline;
  color: black;
`;

const splash = (props) => {
  const { type } = props;
  let msg = '';
  if (type === 'empty') {
    msg = (
      <p>
        Add some actors. Click edit to add some one by one, or
        {' '}
        <LoadDefault onClick={props.loadDefault}>load the default set.</LoadDefault>
      </p>
    );
  } else if (type === 'allzero') {
    msg = <p>No actors with initiative over 0.</p>;
  }
  return <Splash>{msg}</Splash>;
};

export default splash;
