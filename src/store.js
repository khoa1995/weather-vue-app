import Vue from 'vue'
import Vuex from 'vuex'
import { INCREMENT, INCREMENT_WITH_PAYLOAD } from './mutation-types'

Vue.use(Vuex)

const moduleA = {
  namespaced: true,
  state: {
    count: 0
  },
  getters: {},
  mutations: {
    [INCREMENT] (state) {
      state.count++
    },
    [INCREMENT_WITH_PAYLOAD] (state, payload) {
      state.count += payload.amount
    }
  },
  actions: {
    increment ({ commit }) {
      commit('increment')
    },
    incrementAsync ({ commit }) {
      setTimeout(() => {
        commit('increment')
      }, 1000)
    },
    incrementWithPayload ({ commit }, payload) {
      commit('incrementWithPayload', { amount: payload.amount })
    }
  }
}

const moduleB = {
  namespaced: true,
  state: {
    todos: [
      { id: 1, text: 'Job 1', done: true },
      { id: 2, text: 'Job 2', done: false },
      { id: 3, text: 'Job 3', done: false },
      { id: 4, text: 'Job 4', done: true }
    ]
  },
  getters: {
    doneTodos: state => {
      return state.todos.filter(todo => todo.done)
    },
    doneTodosCount: (state, getters) => {
      return getters.doneTodos.length
    },
    getTodoById: (state) => (id) => {
      return state.todos.find(todo => todo.id === id)
    }
  },
  actions: {}
}

const moduleForm = {
  namespaced: true,
  state: {
    selected: ''
  },
  mutations: {
    updateSelect (state, value) {
      state.selected = value
    },
    sendData (state) {
      console.log(state.selected)
    }
  },
  actions: {
    send ({ commit }) {
      commit('sendData')
    }
  }
}

const store = new Vuex.Store({
  strict: true,
  modules: {
    a: moduleA,
    b: moduleB,
    form: moduleForm
  }
})

export default store
