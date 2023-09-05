import React, { useState, useEffect } from 'react';
import PokemonCard from './card';

const PokemonList = () => {
  const [pokemonData, setPokemonData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        const { results } = data;
        setPokemonData(results);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
      {pokemonData.map((pokemon) => (
        <PokemonCard key={pokemon.name} name={pokemon.name} />
      ))}
    </div>
  );
};

export default PokemonList;
