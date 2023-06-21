const API_URL = 'https://pokeapi.co/api/v2/pokemon'

const PokemonService = () => {
    const getPokemons = async () => {
        try {
            return fetch('https://pokeapi.co/api/v2/pokemon')
                .then(response => response.json())
        } catch (err) {
            console.log(err)
        }
    }

    const getSpecies = async () => {
        try {
            return fetch('https://pokeapi.co/api/v2/pokemon-species/aegislash')
                .then(response => response.json())
        } catch (err) {
            console.log(err)
        }
    }

    const get = async url => {
        try {
            return fetch(url)
                .then(response => response.json())
        } catch (err) {
            console.log(err)
        }
    }

    return {
        getPokemons,
        getSpecies,
        get,
    }
}

export default PokemonService();