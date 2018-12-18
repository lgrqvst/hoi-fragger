import React from 'react';

import styled from 'styled-components';

import Actor from './Actor';

const ActorList = styled.div`
  margin: 1rem;
`;

const actors = (props) => {
  let { actors } = props;
  const {
    mode, setInitiative, removeActor, editActor,
  } = props;

  actors = actors
    .sort((a, b) => {
      if (a.name < b.name) return -1;
      if (a.name > b.name) return 1;
      return 0;
    })
    .map(el => (
      <Actor
        key={el.id}
        id={el.id}
        name={el.name}
        initiative={el.initiative}
        mode={mode}
        setInitiative={setInitiative}
        removeActor={removeActor}
        editActor={editActor}
      />
    ));

  return <ActorList>{actors}</ActorList>;
};

export default actors;
