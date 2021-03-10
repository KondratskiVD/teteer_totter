import Vue from 'vue'
import Vuex from 'vuex'
import {
  SET_TEETER_TOTTER_POSITION
} from '../constants'
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    TeeterTotterPosition: null,
  },
  getters: {

  },
  mutations: {
    [SET_TEETER_TOTTER_POSITION](state, payload){
      state.TeeterTotterPosition = payload
    }
  },
  actions: {

  },
  strict: process.env.NODE_ENV !== 'production'
})
