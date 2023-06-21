import { useState, useEffect } from 'react'
import PokemonService from "./services/pokemon.service"
import Card from './components/Card'
import Pagination from './components/Pagination'
import getColorFromType from './getColorFromType'

export default function App() {
  const [pokemons, setPokemons] = useState([]);
  const [page, setPage] = useState(1);
  const [startIndex, setStartIndex] = useState(0);

  const elementPerPage = 12;

  useEffect(() => {
    fetchData();
  }, []);

  const generateDataUrl = () => {
    const url = []
    for (let i = 1; i <= 151; i++) {
      url.push(`https://pokeapi.co/api/v2/pokemon/${i}/`);
    }
    return url;
  }

  const changePage = page => {
    console.log(typeof (page))
    setPage(page)
    setStartIndex((page - 1) * elementPerPage)
  }

  const renderList = () => {
    const selected = []
    for (let i = startIndex; i < startIndex + elementPerPage; i++) {
      if (pokemons[i]) {
        selected.push(
          <Card
            key={i}
            name={pokemons[i].name}
            image={pokemons[i].sprites.back_default}
            color={getColorFromType(pokemons[i].types[0].type.name)}
          />
        )
      }
    }
    return selected;
  }

  const fetchData = async () => {
    const pokemonsUrl = generateDataUrl();

    const pokemonsPromise = pokemonsUrl.map((url) => PokemonService.get(url))

    Promise.all(pokemonsPromise).then((values) => {
      setPokemons(values)
    });
  }

  const translateNames = async (pokemonList) => {
    const translationApiKey = 'feRF515ryGE2ljL3JGnrFPyVxibjBInEXoDnycLOnBXQhfUA9v7iLLQvnP26rDdqYUuC45Dp9HKqHkBGjHlQZNXex5z6h0g2qebbn233d6dSzQjvjrYu0pXQQZ2SBc0w';
    const targetLanguage = 'fr';
    const translatedPokemonList = [];

    for (const pokemon of pokemonList) {
      try {
        const translationResponse = await fetch.post(
          `https://translation.googleapis.com/language/translate/v2?key=${translationApiKey}`,
          {
            q: pokemon.name,
            target: targetLanguage,
          }
        );

        const translatedName = translationResponse.data.data.translations[0].translatedText;
        translatedPokemonList.push({ ...pokemon, name: translatedName });
      } catch (error) {
        console.log(error);
        translatedPokemonList.push(pokemon);
      }
    }

    setPokemons(translatedPokemonList);
  };

  return (
    <div>
      <Pagination
        changePage={changePage}
        page={page}
        elementPerPage={elementPerPage}
        length={pokemons.length}
      />

      <div className="grid">
        {pokemons && renderList()}
      </div>
    </div>
  )
}