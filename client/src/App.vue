<template>
  <div>
  <v-app id="app">
    <div class="content-wrap">
      <router-view/>
    </div>
  </v-app>
  </div>
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    //HelloWorld
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
  margin-top: 60px;
  background-color: #171423;
}

.content-wrap {
  padding: 0%;
}

</style>
