import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTrashAlt,
  faPen,
  faPlusSquare,
  faArrowDown,
  faArrowUp,
  faPlay,
  faArrowAltCircleRight,
  faEraser,
  faHandPeace,
} from '@fortawesome/free-solid-svg-icons';

import styled, { css } from 'styled-components';
import bulge from '../media/bulge.svg';

const transitionTiming = '0.5s cubic-bezier(1, 0, 0.17, 1.4)';

const ControlBar = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100vw;
  padding: 0.25rem;
  background: black;
  box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.25);

  &:before {
    content: '';
    position: absolute;
    bottom: 100%;
    left: 50%;
    display: block;
    width: calc(100% / 2);
    transform: translateX(-50%);
    height: 1rem;
    background: url(${bulge}) no-repeat bottom/auto;
    transition: left ${transitionTiming};
  }

  ${props => props.mode === 'edit'
    && css`
      &:before {
        left: 17.5%;
      }
    `}
  ${props => props.mode === 'tracking'
    && css`
      &:before {
        left: 82.5%;
      }
    `}
`;

const Button = styled.button`
  apperance: none;
  position: fixed;
  width: 3rem;
  border: 0;
  padding: 0;
  border-radius: 100px;
  background: black;
  color: white;
  outline: none;

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
`;

const ButtonBar = styled(Button)`
  position: relative;
  background: none;
  transition: transform ${transitionTiming};
  &:nth-child(1) {
    ${props => props.mode === 'edit'
      && css`
        transform: scale(1.5);
      `}
  }
  &:nth-child(2) {
    ${props => props.mode === 'input'
      && css`
        transform: scale(1.5);
      `}
  }
  &:nth-child(3) {
    ${props => props.mode === 'tracking'
      && css`
        transform: scale(1.5);
      `}
  }
`;

const ButtonLarge = styled(Button)`
  width: 5rem;
  font-size: 2rem;
`;

const ButtonAddActor = styled(ButtonLarge)`
  left: -5rem;
  bottom: 5rem;
  transform: translateX(-50%);
  transition: left ${transitionTiming};
  ${props => props.mode === 'edit'
    && css`
      left: 50%;
    `}
`;
const ButtonReset = styled(Button)`
  left: -3rem;
  bottom: 5rem;
  transition: left ${transitionTiming};
  ${props => props.mode === 'edit'
    && css`
      left: 1rem;
    `}
`;

const ButtonSoftReset = styled(Button)`
  right: -3rem;
  bottom: 5rem;
  transition: right ${transitionTiming};
  ${props => props.mode === 'input'
    && css`
      right: 1rem;
    `}
`;

const ButtonNextActor = styled(ButtonLarge)`
  left: -5rem;
  bottom: 5rem;
  transform: translateX(-50%);
  transition: left ${transitionTiming};
  ${props => props.mode === 'tracking'
    && css`
      left: 50%;
    `}
`;
const ButtonPreviousActor = styled(Button)`
  left: -3rem;
  bottom: 5rem;
  transition: left ${transitionTiming};
  ${props => props.mode === 'tracking'
    && css`
      left: 2rem;
    `}
`;
const ButtonNextRound = styled(Button)`
  right: -3rem;
  bottom: 5rem;
  transition: right ${transitionTiming};
  ${props => props.mode === 'tracking'
    && css`
      right: 1rem;
    `}
`;

const controls = (props) => {
  const {
    mode,
    setModeEdit,
    setModeTracking,
    setModeInput,
    reset,
    softReset,
    addActor,
    nextActor,
    previousActor,
  } = props;
  return (
    <>
      <ControlBar mode={mode}>
        <ButtonBar type="button" onClick={setModeEdit} mode={mode}>
          <span>
            <FontAwesomeIcon icon={faPen} />
          </span>
        </ButtonBar>

        <ButtonBar type="button" onClick={setModeInput} mode={mode}>
          <span>
            <FontAwesomeIcon icon={faHandPeace} />
          </span>
        </ButtonBar>

        <ButtonBar type="button" onClick={setModeTracking} mode={mode}>
          <span>
            <FontAwesomeIcon icon={faPlay} />
          </span>
        </ButtonBar>
      </ControlBar>

      <ButtonReset type="button" mode={mode}>
        <span>
          <FontAwesomeIcon icon={faTrashAlt} onClick={reset} />
        </span>
      </ButtonReset>
      <ButtonAddActor type="button" mode={mode}>
        <span>
          <FontAwesomeIcon icon={faPlusSquare} onClick={addActor} />
        </span>
      </ButtonAddActor>

      <ButtonSoftReset type="button" mode={mode}>
        <span>
          <FontAwesomeIcon icon={faEraser} onClick={softReset} />
        </span>
      </ButtonSoftReset>

      <ButtonNextActor type="button" mode={mode}>
        <span>
          <FontAwesomeIcon icon={faArrowDown} onClick={nextActor} />
        </span>
      </ButtonNextActor>
      <ButtonPreviousActor type="button" mode={mode}>
        <span>
          <FontAwesomeIcon icon={faArrowUp} onClick={previousActor} />
        </span>
      </ButtonPreviousActor>
      <ButtonNextRound type="button" mode={mode}>
        <span>
          <FontAwesomeIcon icon={faArrowAltCircleRight} onClick={previousActor} />
        </span>
      </ButtonNextRound>
    </>
  );
};

export default controls;
