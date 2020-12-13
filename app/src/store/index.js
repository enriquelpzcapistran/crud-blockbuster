import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    movies:[],
    genre:[],
  },
  mutations: {
    SET_MOVIES(state,movies){
      state.movies = movies
    },
    SET_GENEROS(state, genre){
      state.genre = genre
    }
  },
  actions: {
    setMovie({commit}){
      axios.get('http://localhost:3000/Movies')
      .then(response=>{
        commit('SET_MOVIES',response.data)
      })
    },
    setGenero({commit}){
      axios.get('http://localhost:3000/Genres')
      .then(response=>{
        commit('SET_GENEROS',response.data)
      })
    },
    addMovie(obj,{params,onComplete,onError}){
      axios.post('http://localhost:3000/Movies',params)
      .then(onComplete)
      .then(onError)
    },
    addGenero(obj,{params,onComplete,onError}){
      axios.post('http://localhost:3000/Genres',params)
      .then(onComplete)
      .then(onError)
    },
    deleteGenre(obj,{id,onComplete,onError}){
      axios.delete(`http://localhost:3000/Genres/${id}`)
      .then(onComplete)
      .catch(onError)
    }
  },
  getters:{
    allMovies: state=>{
      return state.movies
    },
    allGeneros: state =>{
      return state.genre
    }
  }
  
})
