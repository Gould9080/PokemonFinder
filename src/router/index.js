import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PokemonList from '../views/PokemonList.vue'
import PokemonDetails from '../views/PokemonDetails.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/pokemon',
    name: 'Pokemon',
    component: PokemonList
  },
  {
    path: '/pokemon/:id',
    name: 'PokemonDetails',
    component: PokemonDetails
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
