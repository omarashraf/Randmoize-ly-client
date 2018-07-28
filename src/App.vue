<template>
  <div id="app">
    <!-- <nav>
        <router-link to="/">Home</router-link> <br>
        <router-link to="/about">About</router-link>
      </nav>
    <router-view/> -->
    <NavBar></NavBar>
    <Home></Home>
    <Footer></Footer>
  </div>
</template>

<script>
import Home from './components/Home.vue'
import NavBar from './components/NavBar.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'app',
  data() {
    return {
      msg: "Hola!"
    }
  },
  components: {
    Home,
    NavBar,
    Footer
  }
}
</script>

<style>
html, body { 
  overflow: hidden;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
