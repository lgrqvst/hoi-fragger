import React from 'react';

import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import Overlay from './Overlay';

const InitiativeSpinner = styled.div`
  position: absolute;
  z-index: 1000;
  top: 50%;
  left: 0;
  width: 100%;
  padding: 1rem 0;
  background: white;
  text-align: center;
  transform: translateY(-50%);
  font-family: 'Dosis', sans-serif;

  h3 {
    margin: 0 0 1rem;
  }
`;

const ButtonConfirmInitiative = styled.button`
  position: absolute;
  top: calc(100% + 1rem);
  left: 50%;
  width: 4rem;
  padding: 0;
  border: 0;
  border-radius: 100px;
  background: white;
  font-size: 1.25rem;
  transform: translateX(-50%);

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

const Spinner = styled.div`
  position: relative;
  width: 100vw;
`;

const Indicators = styled.div`
  position: absolute;
  z-index: 5;
  top: 0;
  left: 50%;
  width: 75%;
  height: 100%;
  transform: translateX(-50%);
  // border-top: 1px solid black;
  // border-bottom: 1px solid black;

  &:before,
  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 50%;
    width: 0;
    height: 0;
    border-right: 0.25rem solid transparent;
    border-left: 0.25rem solid transparent;
    border-top: 0.25rem solid black;
    transform: translateX(-50%);
  }

  &:after {
    top: auto;
    bottom: 0;
    border-top: 0;
    border-right: 0.25rem solid transparent;
    border-left: 0.25rem solid transparent;
    border-bottom: 0.25rem solid black;
  }
`;

const Track = styled.div`
  position: relative;
  z-index: 10;
  width: 100vw;
  overflow-x: scroll;
  -webkit-overflow-scrolling: touch;
`;

const TrackInner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: calc(101 * 2rem + 100vw);
  padding: 2rem 50vw;
`;

const TrackNumber = styled.div`
  width: 2rem;
`;

const CurrentNumber = styled.div`
  position: absolute;
  z-index: 15;
  left: 50%;
  // top: 50%;
  bottom: 100%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: center;
  align-items: center;
  width: 6rem;
  height: 6rem;
  border-radius: 6rem;
  background: black;
  color: white;
  font-size 1.5rem;
  line-height: 1;
`;

class initiativeSpinner extends React.Component {
  constructor(props) {
    super(props);
    this.scrollRef = React.createRef();
  }

  state = {
    initiative: 0,
  };

  componentDidMount() {
    const { id, actors } = this.props;
    const actor = actors.filter(el => el.id === id)[0];
    this.scrollRef.current.scrollLeft = actor.initiative * 32 + 16;
  }

  storeInitiative = (i) => {
    let initiative = i;
    if (initiative < 0) {
      initiative = 0;
    }
    if (initiative > 100) {
      initiative = 100;
    }
    this.setState({
      initiative,
    });
  };

  render() {
    const { id, hideInitiativeSpinner, setInitiative } = this.props;
    const { initiative } = this.state;

    const tracknumbers = [...Array(101).keys()].map(el => <TrackNumber key={el}>{el}</TrackNumber>);

    return (
      <>
        <Overlay click={hideInitiativeSpinner} />
        <InitiativeSpinner>
          <Spinner>
            <Indicators />
            <CurrentNumber>{initiative}</CurrentNumber>
            <Track
              ref={this.scrollRef}
              onScroll={(e) => {
                this.storeInitiative(Math.floor(e.target.scrollLeft / 32));
              }}
            >
              <TrackInner>{tracknumbers}</TrackInner>
            </Track>
          </Spinner>
          <ButtonConfirmInitiative type="button" onClick={() => setInitiative(id, initiative)}>
            <span>
              <FontAwesomeIcon icon={faCheck} />
            </span>
          </ButtonConfirmInitiative>
        </InitiativeSpinner>
      </>
    );
  }
}

export default initiativeSpinner;
