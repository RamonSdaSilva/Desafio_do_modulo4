import PokemonList from './components/container/pokemonList';

const App = () => {
  return (
    <div>
      <h1 style={{ textAlign: 'center', fontSize: '2rem', margin: '16px' }}>
        Pokémon List
      </h1>
      <PokemonList />
    </div>
  );
};

export default App;
