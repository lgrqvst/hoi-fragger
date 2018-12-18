import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTrashAlt,
  faPen,
  faPlusSquare,
  faCheck,
  faArrowDown,
  faArrowUp,
  faPlay,
  faStop,
} from '@fortawesome/free-solid-svg-icons';

import styled from 'styled-components';

const Controls = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.25rem;
  background: white;
  box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.5);

  button {
    position: relative;
    width: 3rem;
    margin: 0 1rem;
    padding: 0;
    background: black;
    border-radius: 100px
    color: white;

    &:before {
      content: '';
      display: block;
      width: 100%;
      padding-top: 100%;
    }

    span {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
`;

const controls = (props) => {
  const {
    mode,
    setModeEdit,
    setModeTracking,
    setModeInput,
    reset,
    addActor,
    nextActor,
    previousActor,
  } = props;
  return (
    <Controls>
      {mode === 'input' && (
        <button type="button" onClick={setModeEdit}>
          <span>
            <FontAwesomeIcon icon={faPen} />
          </span>
        </button>
      )}
      {mode === 'input' && (
        <button type="button" onClick={setModeTracking}>
          <span>
            <FontAwesomeIcon icon={faPlay} />
          </span>
        </button>
      )}

      {mode === 'edit' && (
        <button type="button">
          <span>
            <FontAwesomeIcon icon={faTrashAlt} onClick={reset} />
          </span>
        </button>
      )}
      {mode === 'edit' && (
        <button type="button">
          <span>
            <FontAwesomeIcon icon={faPlusSquare} onClick={addActor} />
          </span>
        </button>
      )}
      {mode === 'edit' && (
        <button type="button" onClick={setModeInput}>
          <span>
            <FontAwesomeIcon icon={faCheck} />
          </span>
        </button>
      )}

      {mode === 'tracking' && (
        <button type="button">
          <span>
            <FontAwesomeIcon icon={faArrowDown} onClick={nextActor} />
          </span>
        </button>
      )}
      {mode === 'tracking' && (
        <button type="button">
          <span>
            <FontAwesomeIcon icon={faArrowUp} onClick={previousActor} />
          </span>
        </button>
      )}
      {mode === 'tracking' && (
        <button type="button" onClick={setModeInput}>
          <span>
            <FontAwesomeIcon icon={faStop} />
          </span>
        </button>
      )}
    </Controls>
  );
};

export default controls;
