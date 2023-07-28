import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    lastId: 2,
    baseImgUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/',
    pokemon: [
      {
        id: 1,
        name: 'Bulbasaur',
        type1: 'Grass',
        type2: 'Poison',
        level: 1,
        evolvesFrom: '',
        evolvesTo: 'Ivysaur',
        active: true
      },
      {
        id: 2,
        name: 'Ivysaur',
        type1: 'Grass',
        type2: 'Poison',
        level: 1,
        evolvesFrom: 'Bulbasaur',
        evolvesTo: 'Venussaur',
        active: true
      },
    ],
    currentPokemon: {}
  },
  getters: {
  },
  mutations: {
    SAVE_POKEMON(state, newPokemon) {
      state.pokemon.push(newPokemon);
    },
    SET_POKEMON(state, pokemonDetails) {
      state.currentPokemon = pokemonDetails;
    },
    SORT_POKEMON_ID(state) {
      state.pokemon.sort((a, b) => a.id - b.id)
    },
    SORT_POKEMON_NAME(state) {
      state.pokemon.sort((a, b) => {
        if (a.name < b.name) {
          return -1;
        }
        if (a.name > b.name) {
          return 1;
        }
        return 0;
      })
    },
    SORT_POKEMON_TYPE(state) {
      state.pokemon.sort((a, b) => {
        if (a.type1 < b.type1) {
          return -1;
        }
        if (a.type1 > b.type1) {
          return 1;
        }
        return 0;
      })
    },
  },
  actions: {
  },
  modules: {
  }
})
