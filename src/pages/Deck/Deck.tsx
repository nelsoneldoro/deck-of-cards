import React from 'react';
import DeskBox from '../../components/DeskBox';
import {useParams} from 'react-router-dom';
const Deck = () => {
  let {id} = useParams<{id: string}>();

  return (
    <div>
      <DeskBox>
        <p>Deck {id}</p>
      </DeskBox>
    </div>
  );
};

export default Deck;
