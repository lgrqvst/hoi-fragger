import React from 'react';

import styled from 'styled-components';

import Actor from './Actor';

const ActorList = styled.div`
  position: relative;
  z-index: 10;
  margin: 1rem 0;
`;

const actorList = (props) => {
  let { actors } = props;
  const {
    mode, showInitiativeSpinner, removeActor, editActor, current,
  } = props;

  if (mode !== 'tracking') {
    actors = actors.sort((a, b) => {
      if (a.name.toLowerCase() < b.name.toLowerCase()) return -1;
      if (a.name.toLowerCase() > b.name.toLowerCase()) return 1;
      return 0;
    });
  } else {
    actors = actors
      .sort((a, b) => {
        if (a.initiative > b.initiative) return -1;
        if (a.initiative < b.initiative) return 1;
        return 0;
      })
      .filter(actor => actor.initiative > 0);
  }

  actors = actors.map(el => (
    <Actor
      key={el.id}
      id={el.id}
      name={el.name}
      initiative={el.initiative}
      mode={mode}
      showInitiativeSpinner={showInitiativeSpinner}
      removeActor={removeActor}
      editActor={editActor}
      current={el.initiative === current}
      willgo={el.initiative < current && current !== null}
      went={el.initiative > current && current !== null}
    />
  ));

  return <ActorList>{actors}</ActorList>;
};

export default actorList;
