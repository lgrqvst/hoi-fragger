import React, { Component } from 'react';

import styled from 'styled-components';
import Actors from './components/Actors';
import Titlebar from './components/Titlebar';
import Controls from './components/Controls';
import Prompt from './components/Prompt';
import Splash from './components/Splash';
import InitiativeSpinner from './components/InitiativeSpinner';

const AppContainer = styled.div`
  position: relative;
  height: 100vh;
  overflow: hidden;
  overflow-y: auto;
  padding: 0 0 3rem;
`;

class App extends Component {
  state = {
    actors: [
      {
        id: 0,
        name: 'vand4l',
        initiative: 0,
      },
      {
        id: 1,
        name: 'Flick',
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
        name: 'Plug',
        initiative: 0,
      },
      {
        id: 5,
        name: 'Pomph',
        initiative: 0,
      },
      {
        id: 6,
        name: 'The Enemy',
        initiative: 0,
      },
    ],
    addingNewActor: false,
    settingInitiative: false,
    settingInitiativeOf: null,
    // current: null,
    mode: 'input',
  };

  setMode(mode) {
    this.setState({
      mode,
    });
  }

  handleReset = () => {
    const actors = [];
    this.setState({
      actors,
    });
  };

  handleLoadDefaultActors = () => {
    const actors = [
      {
        id: 0,
        name: 'vand4l',
        initiative: 0,
      },
      {
        id: 1,
        name: 'Flick',
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
        name: 'Plug',
        initiative: 0,
      },
      {
        id: 5,
        name: 'Pomph',
        initiative: 0,
      },
      {
        id: 6,
        name: 'Bad Guys',
        initiative: 0,
      },
    ];
    this.setState({ actors, mode: 'input' });
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
    console.log('Set next actor to current');
  };

  handlePreviousActor = () => {
    console.log('Set previous actor to current');
  };

  handle;

  render() {
    const {
      actors, mode, addingNewActor, settingInitiative, settingInitiativeOf,
    } = this.state;

    const classes = ['App', `App--${mode}`];

    return (
      <AppContainer className={classes.join(' ')}>
        <Titlebar />

        {actors.length === 0 && <Splash loadDefault={this.handleLoadDefaultActors} />}

        {addingNewActor && (
          <Prompt close={this.handleShowHideAddActor} confirm={this.handleAddActor}>
            Name of actor:
          </Prompt>
        )}

        <Actors
          actors={actors}
          mode={mode}
          editActor={this.handleEditActor}
          removeActor={this.handleRemoveActor}
          showInitiativeSpinner={this.handleShowHideInitiativeSpinner}
        />

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
          addActor={this.handleShowHideAddActor}
          nextActor={this.handleNextActor}
          previousActor={this.handlePreviousActor}
        />
      </AppContainer>
    );
  }
}

export default App;
