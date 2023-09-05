// PokemonCard.js
import React from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 16px;
  margin: 16px;
  width: 200px;
  text-align: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }
`;

const PokemonName = styled.h3`
  font-size: 1.5rem;
  color: #333;
`;

const PokemonCard = ({ name }) => {
  return (
    <CardContainer>
      <PokemonName>{name}</PokemonName>
    </CardContainer>
  );
};

export default PokemonCard;
