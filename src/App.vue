<template>
  <div id="app">
    <Header />
    <Map />
    <Modal />
    <footer>
      <p>By: <a href="https://pablotabares.co" target="_blank" rel="Pablo Tabares">pablotabares.co</a></p>
    </footer>
  </div>
</template>

<script>
import Map from './components/Map.vue'
import Header from './components/Header'
import Modal from './components/Modal'
import Vue from 'vue'

export default {
  name: 'App',
  components: {
    Map,
    Header,
    Modal
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
body {
  margin: 0
}

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
  font-size: 14px;
  width: 100%;
}

footer > p {
  color: rgb(68, 68, 68);
  background-color: rgb(245, 245, 245);
  width: fit-content;
  margin: 0 auto;
  padding: 5px;
}
</style>
