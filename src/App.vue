<template>
  <div id="app">
    <Header />
    <Map />
    <footer>
      <p>By: <a href="https://pablotabares.co" target="_blank" rel="Pablo Tabares">pablotabares.co</a></p>
    </footer>
  </div>
</template>

<script>
import Map from './components/Map.vue'
import Header from './components/Header'
import Vue from 'vue'

export default {
  name: 'App',
  components: {
    Map,
    Header
  },
  created() {
    if( !(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) ) {
      Vue.$toast.warning('La ubicación en computadores puede ser inexacta', {
        position: 'top-right',
        duration: 20000
      })
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

footer {
  position: absolute;
  bottom: 10px;
  color: rgb(68, 68, 68);
  background-color: rgb(245, 245, 245);
  left: 45%;
  font-size: 14px;
}
</style>
