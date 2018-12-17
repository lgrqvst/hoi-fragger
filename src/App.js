import React, { Component } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTrashAlt,
  faEdit,
  faPlusSquare,
  faCheckSquare,
  faArrowDown,
  faArrowUp,
  faCaretSquareRight,
  faStop,
} from '@fortawesome/free-solid-svg-icons';
// import { faMinusSquare } from '@fortawesome/free-solid-svg-icons';

import Actor from './components/Actor';

import './App.css';

class App extends Component {
  state = {
    actors: [
      {
        name: 'vand4l',
        initiative: 13,
      },
      {
        name: 'Flick',
        initiative: 12,
      },
      {
        name: 'Chrome Blue',
        initiative: 14,
      },
      {
        name: 'Edge',
        initiative: 27,
      },
      {
        name: 'Plug',
        initiative: 12,
      },
      {
        name: 'Pomph',
        initiative: 13,
      },
    ],
    mode: 'input',
  };

  setMode(mode) {
    this.setState({
      mode,
    });
  }

  handleSetInitiative = (actor) => {
    console.log(`Set initiative of ${actor}!`);
  };

  render() {
    let { actors, mode } = this.state;

    actors = actors
      .sort((a, b) => {
        if (a.name < b.name) return -1;
        if (a.name > b.name) return 1;
        return 0;
      })
      .map(el => (
        <Actor
          key={el.name}
          name={el.name}
          initiative={el.initiative}
          clicked={() => this.handleSetInitiative(el.name)}
        />
      ));

    return (
      <div className="App">
        {actors.length === 0 && <p>Add some actors.</p>}
        <div className="titlebar">Hoi, fragger!</div>
        <ul>{actors}</ul>
        {mode === 'input' && (
          <button type="button" onClick={() => this.setMode('edit')}>
            <FontAwesomeIcon icon={faEdit} />
          </button>
        )}
        {mode === 'input' && (
          <button type="button" onClick={() => this.setMode('tracking')}>
            <FontAwesomeIcon icon={faCaretSquareRight} />
          </button>
        )}

        {mode === 'edit' && (
          <button type="button">
            <FontAwesomeIcon icon={faTrashAlt} />
          </button>
        )}
        {mode === 'edit' && (
          <button type="button">
            <FontAwesomeIcon icon={faPlusSquare} />
          </button>
        )}
        {mode === 'edit' && (
          <button type="button" onClick={() => this.setMode('input')}>
            <FontAwesomeIcon icon={faCheckSquare} />
          </button>
        )}

        {mode === 'tracking' && (
          <button type="button">
            <FontAwesomeIcon icon={faArrowDown} />
          </button>
        )}
        {mode === 'tracking' && (
          <button type="button">
            <FontAwesomeIcon icon={faArrowUp} />
          </button>
        )}
        {mode === 'tracking' && (
          <button type="button" onClick={() => this.setMode('input')}>
            <FontAwesomeIcon icon={faStop} />
          </button>
        )}
      </div>
    );
  }
}

export default App;
