import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';

import styled, { css } from 'styled-components';

const ActorRow = styled.div`
  position: relative;
  width: 100%;
  margin: 0.5rem 0;
`;

const ActorRowInner = styled.div`
  position: relative;
  left: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 1rem;
  padding: 0.25rem 0.5rem 0.25rem 0.25rem;
  background: #efefef;
  border-radius: 0.25rem;
  opacity: 1;
  transition: 0.25s;

  ${props => props.mode === 'edit'
    && css`
      left: 2rem;
    `}

  ${props => props.current === true
    && css`
      background: orange;
    `}

  ${props => props.willgo === true && css``}

  ${props => props.went === true
    && css`
      opacity: 0.5;
    `}
`;

const ButtonRemoveActor = styled.button`
  position: absolute;
  top: 50%;
  left: -1rem;
  border: 0;
  padding: 0.5rem;
  background: transparent;
  color: red;
  opacity: 1;
  transform: translate(-50%, -50%) scale(1);
  cursor: pointer;
  transition: 0.25s;

  ${props => props.mode === 'edit'
    && css`
      left: 1.5rem;
      opacity: 1;
    `}
`;

const ActorName = styled.input`
  background: transparent;
  // color: black;
  border: 1px solid transparent;
  transition: 0.25s;
  padding: 0.25rem;
  border-radius: 0.25rem;
  box-shadow: none;
  -webkit-appearance: none;

  &[disabled] {
    color: black;
  }

  ${props => props.mode === 'edit'
    && css`
      background: rgba(255, 255, 255, 0.5);
      border: 1px solid rgba(0, 0, 0, 0.5);
    `}
`;

const ActorNameScreen = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  z-index: 10;
  width: 100%;
  height: 100%;
`;

const ActorInitiative = styled.div`
  font-size: 1.25rem;
  font-family: 'Dosis', sans-serif;
`;

const ButtonSetInitiative = styled.button`
  position: absolute;
  z-index: 15;
  overflow: hidden;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: transparent;
  border: 0;

  span {
    position: absolute;
    bottom: 110%;
    right: 110%;
  }
`;

const actor = (props) => {
  const {
    mode,
    name,
    id,
    initiative,
    showInitiativeSpinner,
    editActor,
    removeActor,
    current,
    went,
    willgo,
  } = props;

  return (
    <ActorRow mode={mode}>
      <ButtonRemoveActor type="button" onClick={() => removeActor(id)} mode={mode}>
        <FontAwesomeIcon icon={faTimesCircle} />
      </ButtonRemoveActor>
      <ActorRowInner mode={mode} current={current} willgo={willgo} went={went}>
        <ActorName type="text" value={name} onChange={event => editActor(event, id)} mode={mode} />

        <ActorInitiative>
          <span>{initiative}</span>
        </ActorInitiative>

        {mode !== 'edit' && <ActorNameScreen />}

        {mode === 'input' && (
          <ButtonSetInitiative type="button" onClick={() => showInitiativeSpinner(id)}>
            <span>Set initiative</span>
          </ButtonSetInitiative>
        )}
      </ActorRowInner>
    </ActorRow>
  );
};

export default actor;
