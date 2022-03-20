import React from 'react';

import './Card.css';

function Card({ id, name, email }) {
  return (
    <div className='card-container'>
      <img
        alt={`monster ${name}`}
        src={`https://robohash.org/${id}?set=set2&size180x180`}
      />
      <h2>{name}</h2>
      <p>{email}</p>
    </div>
  );
}

export default Card;
