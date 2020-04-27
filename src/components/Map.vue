<template>
  <div>
    <GmapMap :center="center" :zoom="zoom" ref="map" :style="styleMap" :options="optionsMaps">
      <GmapCircle
        :center="center"
        :radius="1000"
        :visible="true"
        :options="{fillColor:'yellow',fillOpacity:0.3}"
        v-if="location"
      ></GmapCircle>
      <GmapMarker
        :position="center"
        :draggable="true"
      />
    </GmapMap>
    <button class="location-icon" aria-label="Get Position" @click="getCenter" v-show="!gettingLocation && !location">
      <img src="../assets/gps.png" alt="center map"/>
    </button>
  </div>
</template>

<script>
import Vue from 'vue'

export default {
  name: 'Map',
  props: {
    msg: String
  },
  beforeMount() {
    this.styleMap.height = `${window.innerHeight - 60}px`;
  },
  data() {
    return {
      zoom: 10,
      optionsMaps: {
        zoomControl: true,
        mapTypeControl: true,
        scaleControl: false,
        streetViewControl: false,
        rotateControl: true,
        fullscreenControl: false,
        disableDefaultUI: false
      },
      heightCus: window.innerHeight,
      center: { lat: 6.2441988, lng: -75.6512521 },
      markers: [
        { Id: 1, name: "Oslo", position: { lat: 59.923043, lng: 10.752839 } },
        { Id: 2, name: "Stockholm", position: { lat: 59.339025, lng: 18.065818 } },
        { Id: 3,  name: "Copenhagen", position: { lat: 55.675507, lng: 12.574227 }},
        { Id: 4, name: "Berlin", position: { lat: 52.521248, lng: 13.399038 } },
        { Id: 5, name: "Paris", position: { lat: 48.856127, lng: 2.346525 } }
      ],
      gettingLocation: false,
      location: null,
      styleMap: {
        height: '766px',
        width: '100%',
      }
    };
  },
  methods: {
    async getCenter() {
      this.gettingLocation = true;
      this.styleMap.height = this.heightCus
      try {
        this.gettingLocation = false;
        this.location = await this.getLocation();

        const {latitude, longitude} = this.location.coords;
        this.center = { lat: latitude, lng: longitude };
        this.zoom = 15;

        setTimeout(() => {
          Vue.$toast.info('Si piensas salir, recuerda tomar todas las medidas de precaución.', {
            position: 'top-right',
            duration: 30000
          })
        }, 2000)
      } catch(e) {
        Vue.$toast.error('No tienes habilitado la ubicación por GPS, intenta habilitar los permisos de ubicación.', {
          position: 'top-right',
          duration: 5000
        })
        this.gettingLocation = false;
        this.errorStr = e.message;
      }
    },
    async getLocation() {
      
      return new Promise((resolve, reject) => {

        if(!("geolocation" in navigator)) {
          Vue.$toast.error('No tienes disponible ubicación por GPS, intenta con otro dispositivo.', {
            position: 'top-right',
            duration: 5000
          })
          reject(new Error('Geolocation is not available.'));
        }

        navigator.geolocation.getCurrentPosition(pos => {
          resolve(pos);
        }, err => {
          reject(err);
        }, {enableHighAccuracy: true});

      });
    }
  }
}
</script>

<style scoped>

  .location-icon {
    /* Icons made by <a href="https://www.flaticon.com/authors/smashicons" title="Smashicons">Smashicons</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a> */
    height: 50px;
    width: 50px;
    background-color: white;
    position: absolute;
    bottom: 250px;
    right: 10px;
    border-radius: 50px;
    padding: 5px;
    box-shadow: 0 0 3px black;
    cursor: pointer;
  }

  img {
    width: 100%;
    height: 100%;
  }
</style>
