<template>
  <v-app id="app">
      <Header/>
       <v-content id="content" class="component">
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
import Header from './components/layout/Header'

export default {
  name: 'App',
  components: {
    Header
  }
}
</script>

<style>

</style>
