import React from 'react';

import styled from 'styled-components';

import Actor from './Actor';

const ActorList = styled.div`
  margin: 1rem 0;
`;

const actorList = (props) => {
  let { actors } = props;
  const {
    mode, showInitiativeSpinner, removeActor, editActor,
  } = props;

  if (mode !== 'tracking') {
    actors = actors.sort((a, b) => {
      if (a.name.toLowerCase() < b.name.toLowerCase()) return -1;
      if (a.name.toLowerCase() > b.name.toLowerCase()) return 1;
      return 0;
    });
  } else {
    actors = actors.sort((a, b) => {
      if (a.initiative > b.initiative) return -1;
      if (a.initiative < b.initiative) return 1;
      return 0;
    });
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
    />
  ));

  return <ActorList>{actors}</ActorList>;
};

export default actorList;
