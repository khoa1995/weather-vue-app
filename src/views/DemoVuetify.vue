<template lang='pug'>
  v-app
    div
      v-btn(color="success") Success
      v-btn(color="error") Error
      v-btn(color="warning") Warning
      v-btn(color="info") Info
    v-container
      v-layout(row wrap)
        v-flex(xs12 sm6 md4)
        v-flex(xs12 sm6 md4 )
          v-text-field(label="Regular")
      v-layout(row wrap)
        v-flex(xs12 sm6 md4)
        v-flex(xs12 sm6 md4 )
          v-btn(block color="primary" dark @click="snackbar = true") Show Snackbar
          v-snackbar(v-model="snackbar" bottom :timeout=3000)
            | {{ text }}
            v-btn(color="pink" flat @click="snackbar = false")
              | Close
      v-layout(row wrap)
        v-spacer
        v-flex(xs12 sm4)
          v-checkbox(v-model="landscape" hide-details label="Landscape")
        v-flex(xs12 sm4)
          v-checkbox(v-model="reactive" hide-details label="Reactive")
      v-date-picker(v-model="picker" :landscape="landscape" :reactive="reactive")
      v-layout(row wrap)
      v-time-picker(v-model="picker" :landscape="landscape")

</template>
<script>
export default {
  name: 'demo-vuetify',
  data () {
    return {
      snackbar: false,
      text: 'Hello, I\'m a snackbar',
      picker: null,
      landscape: false,
      reactive: false
    }
  }
}
</script>
