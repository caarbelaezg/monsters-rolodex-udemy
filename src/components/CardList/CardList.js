import React from 'react';
import Card from '../Card';

import './CardList.css';

function CardList({ monsters }) {
  return (
    <div className='card-list'>
      {monsters.map(({ id, email, name }) => {
        return <Card key={id} id={id} email={email} name={name} />;
      })}
    </div>
  );
}

export default CardList;
