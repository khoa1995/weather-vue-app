<template lang='pug'>
  .demo-wrapper
    a.btn-increment(href='#' @click='add({amount: 2})') Increment 2
    br
    a.btn-increment(href='#' @click='increment') Increment 1
    h1 {{ count }}
    h1 {{ countAlias }}
    h1 {{ countPlusLocalState }}
    h1 Todo Count: {{ doneTodosCount }}
    h1 Todo item: {{ getById(2) }}
    ul.todos-list(v-if='doneTodos')
      li.todos-item(v-for='(item, index) in doneTodos' :key='index') {{ item.text }}
</template>

<script>
import { mapState,
  // mapGetters,
  mapMutations,
  mapActions,
  createNamespacedHelpers } from 'vuex'

const { mapGetters } = createNamespacedHelpers('b')

export default {
  name: 'demo',
  data () {
    return {
      localCount: 2
    }
  },
  computed: {
    localComputed () {
      return {
        localCount: 1
      }
    },
    ...mapState([
      'count'
    ]),
    ...mapState({
      count: state => state.a.count,
      countAlias: 'count',
      countPlusLocalState (state) {
        return state.a.count + this.localCount + this.localComputed.localCount
      }
    }),
    ...mapGetters([
      'doneTodos',
      'doneTodosCount',
      'getTodoById'
    ]),
    ...mapGetters({
      done: 'doneTodos',
      doneCount: 'doneTodosCount',
      getById: 'getTodoById'
    })
  },
  methods: {
    myIncrement () {
      // this.$store.commit('incrementWithPayload', { amount: 2 })

      // this.$store.commit({
      //   type: 'incrementWithPayload',
      //   amount: 2,
      //   amountt: 3
      // })

      // this.$store.dispatch('incrementAsync', { amount: 2 })

      // this.$store.dispatch({
      //   type: 'incrementWithPayload',
      //   amount: 1
      // })
    },
    ...mapMutations([
      'incrementWithPayload'
    ]),
    ...mapMutations({
      add: 'a/incrementWithPayload'
    }),
    ...mapActions([
      'increment'
    ]),
    ...mapActions({
      increment: 'a/increment',
      incrementAsync: 'a/incrementAsync'
    })
  }
}
</script>

<style lang='scss' scoped>
  .todos-list {
    text-align: left;
  }
</style>
