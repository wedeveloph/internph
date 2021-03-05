<template>
  <div>
  <v-app id="app">
    <div class="content-wrap">
      <Navbar/>
      <router-view/>
    </div>
  </v-app>
  </div>
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'
import Navbar from './components/layout/Navbar.vue';

export default {
  name: 'App',
  components: {
    Navbar
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
  margin-top: 42px;
  background-color: #171423;
}

.content-wrap {
  padding: 0%;
}

</style>
