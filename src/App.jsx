import { useState, useEffect } from 'react'
import PokemonService from "./services/pokemon.service"
import Card from './components/Card'
import Pagination from './components/Pagination'
import getColorFromType from './helpers/getColorFromType'

export default function App() {
  const [pokemons, setPokemons] = useState([]);
  const [page, setPage] = useState(1);
  const [startIndex, setStartIndex] = useState(0);

  const elementPerPage = 12;

  useEffect(() => {
    fetchData();
  }, []);

  const generateDataUrl = () => Array.from({ length: 151 }, (v, k) => `https://pokeapi.co/api/v2/pokemon/${k + 1}/`)

  const changePage = page => {
    setPage(page)
    setStartIndex((page - 1) * elementPerPage)
  }

  const fetchData = async () => {
    const pokemonsUrl = generateDataUrl();
    const pokemonsPromise = pokemonsUrl.map((url) => PokemonService.get(url))

    Promise.all(pokemonsPromise).then((values) => {
      setPokemons(values)
    });
  }

  return (
    <div>
      <Pagination
        changePage={changePage}
        currentPage={page}
        elementPerPage={elementPerPage}
        length={pokemons.length}
      />

      <div className="grid">
        {pokemons && pokemons.slice(startIndex, startIndex + elementPerPage).map((pokemon, index) => (
          <Card
            key={index}
            name={pokemon.name}
            image={pokemon.sprites.back_default}
            color={getColorFromType(pokemon.types[0].type.name)}
          />
        ))}
      </div>
    </div>
  )
}