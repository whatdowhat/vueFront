<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <Header/>
    <div id ="content" class="content">
        <router-link to="/">home</router-link> |
        <router-link to="/about">about</router-link>
        <router-view></router-view>
    </div>
   
   
  </div>

</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'
import Header from './components/layout/Header.vue'

export default {
  name: 'App',
  components: {
   Header

  }
}
</script>

<style>

</style>
