import { createSlice } from '@reduxjs/toolkit'

export const pokemonSlice = createSlice({
    name: 'pokemon',
    initialState: {
        pokemons:[],
        page: 1,
        startIndex: 0,
    },
    reducers: {
        changePage: (state, action) => {
            state.page = action.payload
        },
        changeStartIndex: (state, action) => {
            state.startIndex = action.payload
        },
        setPokemons: (state, action) => {
            console.log(action.payload)
            state.pokemons = action.payload
        },
    },
})

export const { changePage, changeStartIndex, setPokemons } = pokemonSlice.actions

export default pokemonSlice.reducer