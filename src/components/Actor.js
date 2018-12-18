import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';

import styled from 'styled-components';

const ActorRow = styled.div`
  position: relative;
  left: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0.5rem 0;
  padding: 0.5rem;
  background: #efefef;
  border-radius: 0.25rem;
  transition: 0.25s;

  .App--edit & {
    left: 2rem;
  }
`;

const ButtonRemoveActor = styled.button`
  position: absolute;
  top: 50%;
  left: -1rem;
  opacity: 0;
  transform: translateY(-50%);
  transition: left 0.25s, opacity 0.25s;
  color: red;

  .App--edit & {
    left: -2.5rem;
    opacity: 1;
  }
`;

const ActorName = styled.input`
  background: transparent;
  color: black;
  border: 1px solid transparent;
  transition: 0.25s;
  padding: 0.25rem;
  border-radius: 0.25rem;

  .App--edit & {
    background: rgba(255, 255, 255, 0.5);
    border: 1px solid rgba(0, 0, 0, 0.5);
  }
`;

const ActorInitiative = styled.div`
  font-size: 1.25rem;
`;

const ButtonSetInitiative = styled.button`
  position: absolute;
  overflow: hidden;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  span {
    position: absolute;
    bottom: 110%;
    right: 110%;
  }
`;

const actor = (props) => {
  const {
    mode, name, id, initiative, setInitiative, editActor, removeActor,
  } = props;

  const disabled = mode !== 'edit' ? { disabled: 'disabled' } : {};

  return (
    <ActorRow>
      {mode === 'edit' && (
        <ButtonRemoveActor type="button" onClick={() => removeActor(id)}>
          <FontAwesomeIcon icon={faTimesCircle} />
        </ButtonRemoveActor>
      )}

      <ActorName type="text" {...disabled} value={name} onChange={event => editActor(event, id)} />

      <ActorInitiative>
        <span>{initiative}</span>
      </ActorInitiative>

      {mode === 'input' && (
        <ButtonSetInitiative type="button" onClick={() => setInitiative(id)}>
          <span>Set initiative</span>
        </ButtonSetInitiative>
      )}
    </ActorRow>
  );
};

export default actor;
