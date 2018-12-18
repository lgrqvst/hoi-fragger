import React from 'react';

import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle, faCheck } from '@fortawesome/free-solid-svg-icons';
import Overlay from './Overlay';

const Prompt = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  z-index: 1000;
  transform: translate(-50%, -50%);
  width: 80vmin;
  background: white;
  padding: 0 0 1rem 0;
  border-radius: 0.25rem;

  h3 {
    font-size: 1rem;
    font-weight: bold;
    margin: 0 0 1rem;
    padding: 0.5rem;
    background: rgba(0, 0, 0, 0.25);
  }

  input {
    display: block;
    border: 1px solid rgba(0, 0, 0, 0.25);
    width: calc(100% - 2rem);
    margin: 1rem auto;
    padding: 0.5rem;
    text-align: center;
  }

  form button {
    display: block;
    width: 4rem;
    background: rgba(0, 0, 0, 0.25);
    margin: 0 1rem 0 auto;
    padding: 0.5rem;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  display: block;
  top: -0.75rem;
  right: -0.75rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  background: white;
  font-size: 1.5rem;
  padding: 0.25rem;
  width: 2rem;

  &:before {
    content: '';
    display: block;
    width: 100%;
    padding-top: 100%;
  }

  span {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
`;

const prompt = (props) => {
  const { close, confirm, children } = props;
  return (
    <>
      <Overlay click={close} />
      <Prompt>
        <form onSubmit={e => confirm(e)}>
          <h3>{children}</h3>
          <input type="text" name="promptInput" />
          <button type="submit">
            <FontAwesomeIcon icon={faCheck} />
          </button>
        </form>
        <CloseButton type="button" onClick={close}>
          <span>
            <FontAwesomeIcon icon={faTimesCircle} />
          </span>
        </CloseButton>
      </Prompt>
    </>
  );
};

export default prompt;
