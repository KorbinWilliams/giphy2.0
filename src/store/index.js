import Vue from 'vue'
import Vuex from 'vuex'
import Axios from "axios"

let _gifApi = Axios.create({
  baseURL: "https://api.giphy.com/v1/gifs/trending?api_key=igVJdEL8q2aemDa2VeJiAGYS9fb7WvSA&limit=25&rating=PG-13"
})

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    gifs: [],
    activeGif: {}
  },
  mutations: {
    gifResults(state, payload) {
      state.gifs = payload
    }
  },
  actions: {
    async  gifResults({ commit, dispatch }) {
      let res = await _gifApi.get("");
      commit("gifResults", res.data)
    },
  }
})
