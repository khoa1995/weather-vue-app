<template>
  <v-app>
    <div class="home">
      <img src="http://cdn.amaris.com/19883/vue-logo_png">
      <HelloWorld msg="Welcome to Your Vue.js App"/>
    </div>
  </v-app>
</template>

<script>
// @ is an alias to /src
// let devBaseUrl = 'http://localhost/SitesPoint'
// let prodBaseUrl = '/SitesPoint'
import HelloWorld from '@/components/HelloWorld.vue'
export default {
  name: 'home',
  components: {
    HelloWorld
  }
}
</script>
<style lang='scss'>
.post-section {
  margin-top: 20px;
}
.validate-error {
  color: red;
}
</style>
