import axios from 'axios';

const baseURL = 'https://pokeapi.co/api/v2/pokemon/';

export default {
    getPokemon(pokemonName) {
        return axios.get(baseURL + pokemonName);
    },
    getAllPokemon() {
        return axios.get(baseURL);
    }
}