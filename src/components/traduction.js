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

export default translateNames;
