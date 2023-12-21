export const state = () => ({
    counter: 5
  })
  
  export const getters = {
    getCounter(state) {
      return state.counter
    }
  }
  
  export const mutations = {
    increment(state) {
      state.counter++
    }
  }
  
  export const actions = {
    async fetchCounter({ commit }) {
      commit('increment')
    }
  }