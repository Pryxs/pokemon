import { useEffect } from 'react'
import Card from './components/Card'
import Pagination from './components/Pagination'
import getColorFromType from './helpers/getColorFromType'
import { useSelector, useDispatch } from 'react-redux'
import { changePage, changeStartIndex } from './features/pokemon/pokemonSlice'
import { getPokemons } from './features/pokemon/pokemonThunk'

export default function App() {
  const page = useSelector((state) => state.pokemon.page)
  const startIndex = useSelector((state) => state.pokemon.startIndex)
  const pokemons = useSelector((state) => state.pokemon.pokemons)

  const dispatch = useDispatch()

  const elementPerPage = 12;

  useEffect(() => {
    fetchData();
  }, []);

  const generateDataUrl = () => Array.from({ length: 151 }, (v, k) => `https://pokeapi.co/api/v2/pokemon/${k + 1}/`)

  const updatePagination = page => {
    dispatch(changePage(page))
    dispatch(changeStartIndex((page - 1) * elementPerPage))
  }

  const fetchData = async () => {
    const pokemonsUrl = generateDataUrl();
    dispatch(getPokemons(pokemonsUrl))
    // const pokemonsPromise = pokemonsUrl.map((url) => dispatch(getPokemon(url)))
    // console.log(pokemonsPromise)
    //Promise.all(pokemonsPromise);
  }

  return (
    <div>
      {pokemons && (
        <>
          <Pagination
            changePage={updatePagination}
            currentPage={page}
            elementPerPage={elementPerPage}
            length={pokemons.length}
          />

          <div className="grid">
            {pokemons.slice(startIndex, startIndex + elementPerPage).map((pokemon, index) => (
              <Card
                key={index}
                name={pokemon.name}
                image={pokemon.sprites.back_default}
                color={getColorFromType(pokemon.types[0].type.name)}
              />
            ))}
          </div>
        </>
      )}
    </div>
  )
}