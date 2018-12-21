import React, { Component } from 'react';

import styled, { css } from 'styled-components';
import Actors from './components/Actors';
import Titlebar from './components/Titlebar';
import Controls from './components/Controls';
import Prompt from './components/Prompt';
import Splash from './components/Splash';
import InitiativeSpinner from './components/InitiativeSpinner';

const transitionTiming = '0.5s cubic-bezier(1, 0, 0.17, 1.4)';

const AppContainer = styled.div`
  position: relative;
  height: 100vh;
  overflow: hidden;
  overflow-y: auto;
  padding: 0 0 3rem;
  background-color: #abe9cd;;
  background-image: linear-gradient(-20deg, 
      rgba(255,255,255,0) 33%, 
      rgba(255,255,255,0.2) 33%, 
      rgba(255,255,255,0) 67%, 
      rgba(255,255,255,0) 67%), 
    linear-gradient(160deg, 
      rgba(0,0,0,0) 15%, 
      rgba(0,0,0,0.1) 15%, 
      rgba(0,0,0,0) 67%), 
    linear-gradient(315deg, #abe9cd 0%, #3eadcf 74%);
  transition: background 1s;
  
  &:before, &:after {
    content: "";
    position: fixed;
    z-index: 1;
    top: 0;
    width: 100vw;
    height: 100vh;
    transition: left ${transitionTiming}, right ${transitionTiming};
  }

  &:after {
    background-color: #fc9842;
    background-image: linear-gradient(-20deg, 
        rgba(255,255,255,0) 33%, 
        rgba(255,255,255,0.2) 33%, 
        rgba(255,255,255,0) 67%, 
        rgba(255,255,255,0) 67%), 
      linear-gradient(160deg, 
        rgba(0,0,0,0) 15%, 
        rgba(0,0,0,0.1) 15%, 
        rgba(0,0,0,0) 67%), 
      linear-gradient(315deg, 
          #fc9842 0%, 
          #fe5f75 74%);
  }

  &:before {
    background-color: #bf3a30;
    background-image: linear-gradient(-20deg, 
        rgba(255,255,255,0) 33%, 
        rgba(255,255,255,0.2) 33%, 
        rgba(255,255,255,0) 67%, 
        rgba(255,255,255,0) 67%), 
      linear-gradient(160deg, 
        rgba(0,0,0,0) 15%, 
        rgba(0,0,0,0.1) 15%, 
        rgba(0,0,0,0) 67%), 
      linear-gradient(315deg, 
          #bf3a30 0%, 
          #864ba2 74%);
  }

  ${props => props.mode === 'input'
    && css`
      &:before {
        left: -100%;
      }
      &:after {
        right: -100%;
      }
    `}

  ${props => props.mode === 'edit'
    && css`
      background: black;
      &:before {
        left: 0;
      }
      &:after {
        right: -100%;
      }
    `}
    
  ${props => props.mode === 'tracking'
    && css`
      background: black;
      &:before {
        left: -100%;
      }
      &:after {
        right: 0;
      }
    `}
`;

class App extends Component {
  state = {
    actors: [],
    addingNewActor: false,
    settingInitiative: false,
    settingInitiativeOf: null,
    current: null,
    mode: 'input',
  };

  setMode(mode) {
    let current = null;
    if (mode === 'tracking' && this.state.actors.length > 0) {
      const actors = [...this.state.actors].sort((a, b) => {
        if (a.initiative < b.initiative) return 1;
        if (a.initiative > b.initiative) return -1;
        return 0;
      });
      current = actors[0].initiative;
    }
    this.setState({
      mode,
      current,
    });
  }

  handleReset = () => {
    const actors = [];
    this.setState({
      actors,
    });
  };

  handleSoftReset = () => {
    const actors = [...this.state.actors].map((actor) => {
      const a = { ...actor };
      a.initiative = 0;
      return a;
    });
    this.setState({
      actors,
      mode: 'input',
      current: null,
    });
  };

  handleLoadDefaultActors = () => {
    const actors = [
      {
        id: 1,
        name: 'Bad Guys',
        initiative: 0,
      },
      {
        id: 2,
        name: 'Chrome Blue',
        initiative: 0,
      },
      {
        id: 3,
        name: 'Edge',
        initiative: 0,
      },
      {
        id: 4,
        name: 'Flick',
        initiative: 0,
      },
      {
        id: 5,
        name: 'Plug',
        initiative: 0,
      },
      {
        id: 6,
        name: 'Pomph',
        initiative: 0,
      },
      {
        id: 7,
        name: 'vand4l',
        initiative: 0,
      },
    ];
    this.setState({ actors });
  };

  handleShowHideAddActor = () => {
    this.setState(prevState => ({
      addingNewActor: !prevState.addingNewActor,
    }));
  };

  handleAddActor = (e) => {
    e.preventDefault();
    this.handleShowHideAddActor();
    const actor = {
      id: Date.now(),
      name: e.target.promptInput.value,
      initiative: 0,
    };
    const actors = [...this.state.actors];
    actors.push(actor);
    this.setState({
      actors,
    });
  };

  handleEditActor = (event, id) => {
    const actors = [...this.state.actors].filter((actor) => {
      if (actor.id === id) {
        actor.name = event.target.value;
      }
      return actor;
    });
    this.setState({
      actors,
    });
  };

  handleRemoveActor = (id) => {
    const actors = [...this.state.actors].filter((actor) => {
      if (actor.id !== id) {
        return actor;
      }
      return false;
    });
    this.setState({
      actors,
    });
  };

  handleShowHideInitiativeSpinner = (id) => {
    this.setState(prevState => ({
      settingInitiative: !prevState.settingInitiative,
      settingInitiativeOf: prevState.settingInitiative ? null : id,
    }));
  };

  setInitiative = (id, initiative) => {
    // console.log(`Setting initiative of ${id} to ${initiative}`);

    const actors = [...this.state.actors].filter((actor) => {
      if (actor.id === id) {
        actor.initiative = initiative;
      }
      return actor;
    });
    this.setState({
      actors,
    });

    this.handleShowHideInitiativeSpinner();
  };

  handleNextActor = () => {
    const { current } = this.state;
    const actors = [...this.state.actors];
    const actorsAbove0 = actors.filter(actor => actor.initiative > 0);
    const validActors = actorsAbove0.filter(actor => actor.initiative < current);

    if (actorsAbove0.length === 0) {
      this.setMode('input');
    }

    if (validActors.length > 0) {
      const next = validActors[0].initiative;
      this.setState({
        current: next,
      });
    } else {
      this.handleNextTurn();
    }
  };

  handlePreviousActor = () => {
    const { current } = this.state;
    const actors = [...this.state.actors];
    const actorsAbove0 = actors.filter(actor => actor.initiative > 0);
    const validActors = actorsAbove0.filter(actor => actor.initiative > current);

    if (actorsAbove0.length === 0) {
      this.setMode('input');
    }

    if (validActors.length > 0) {
      const previous = validActors[validActors.length - 1].initiative;
      console.log(previous);
      this.setState({
        current: previous,
      });
    } else {
      return false;
    }
  };

  handleNextTurn = () => {
    const actors = [...this.state.actors]
      .map((actor) => {
        const a = { ...actor };
        a.initiative -= 10;
        return a;
      })
      .sort((a, b) => {
        if (a.initiative < b.initiative) return 1;
        if (a.initiative > b.initiative) return -1;
        return 0;
      });
    let next = false;
    if (actors.filter(actor => actor.initiative > 0).length > 0) {
      next = actors[0].initiative;
    }

    if (!next) {
      this.setState({
        actors,
      });
      this.setMode('input');
    } else {
      this.setState({
        actors,
        current: next,
      });
    }
  };

  handlePreviousTurn = () => {
    const actors = [...this.state.actors]
      .map((actor) => {
        const a = { ...actor };
        a.initiative += 10;
        return a;
      })
      .sort((a, b) => {
        if (a.initiative < b.initiative) return 1;
        if (a.initiative > b.initiative) return -1;
        return 0;
      });

    const next = actors[0].initiative;

    this.setState({
      actors,
      current: next,
    });
  };

  handleNewTurn = () => {};

  render() {
    const {
      actors,
      mode,
      addingNewActor,
      settingInitiative,
      settingInitiativeOf,
      current,
    } = this.state;

    return (
      <AppContainer mode={mode}>
        <Titlebar />

        {actors.length === 0 && <Splash type="empty" loadDefault={this.handleLoadDefaultActors} />}

        {addingNewActor && (
          <Prompt close={this.handleShowHideAddActor} confirm={this.handleAddActor}>
            Name of actor:
          </Prompt>
        )}

        {actors.filter(actor => actor.initiative > 0).length === 0
        && mode === 'tracking'
        && actors.length > 0 ? (
          <Splash type="allzero" loadDefault={this.handleLoadDefaultActors} />
          ) : (
            <Actors
              actors={actors}
              mode={mode}
              editActor={this.handleEditActor}
              removeActor={this.handleRemoveActor}
              showInitiativeSpinner={this.handleShowHideInitiativeSpinner}
              current={current}
            />
          )}

        {settingInitiative && (
          <InitiativeSpinner
            id={settingInitiativeOf}
            hideInitiativeSpinner={this.handleShowHideInitiativeSpinner}
            setInitiative={this.setInitiative}
            actors={actors}
          />
        )}

        <Controls
          mode={mode}
          setModeInput={() => this.setMode('input')}
          setModeEdit={() => this.setMode('edit')}
          setModeTracking={() => this.setMode('tracking')}
          reset={this.handleReset}
          softReset={this.handleSoftReset}
          addActor={this.handleShowHideAddActor}
          nextActor={this.handleNextActor}
          previousActor={this.handlePreviousActor}
          nextTurn={this.handleNextTurn}
          previousTurn={this.handlePreviousTurn}
        />
      </AppContainer>
    );
  }
}

export default App;
