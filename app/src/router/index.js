import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Movies from '../views/Movies.vue'
import Genres from '../views/Genres.vue'
import AddGenre from '../views/AddGenre.vue'
import AddMovie from '../views/AddMovie.vue'
Vue.use(VueRouter)


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/movies',
    name: 'Movies',
    component: Movies
  },
  {
    path: '/genres',
    name: 'Generos',
    component: Genres
  },
  {
    path: '/add_genre',
    name: 'AddGenre',
    component: AddGenre
  },
  {
    path: '/add_movie',
    name: 'AddMovie',
    component: AddMovie
  }


]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
