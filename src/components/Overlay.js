import React from 'react';

import styled from 'styled-components';

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.7);
`;

const overlay = (props) => {
  const { click } = props;
  return <Overlay onClick={click} />;
};

export default overlay;
