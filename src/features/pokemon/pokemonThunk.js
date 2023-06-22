import { createAsyncThunk } from '@reduxjs/toolkit'
import PokemonService from "../../services/pokemon.service";
import { setPokemons } from './pokemonSlice'

export const getPokemons = createAsyncThunk(
    'pokemon/getPokemon',
    async (urls, { rejectWithValue, dispatch }) => {  
        try {
            const pokemonsPromise = urls.map((url) => PokemonService.get(url))
            Promise.all(pokemonsPromise).then((values) => {
                dispatch(setPokemons(values))
            });
        } catch (error) {
            return rejectWithValue('Erreur')
        }
    }
)
