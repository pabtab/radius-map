<template>
  <div>
    <GmapMap :center="center" :zoom="zoom" ref="map" style="width: 100%; height: 92vh">
      <GmapCircle
        :center="center"
        :radius="1000"
        :visible="true"
        :options="{fillColor:'yellow',fillOpacity:0.3}"
        v-if="location"
      ></GmapCircle>
    </GmapMap>
    <button class="location-icon" aria-label="Get Position" @click="getCenter" v-show="!gettingLocation && !location">
      <img src="../assets/gps.png" alt="center map"/>
    </button>
  </div>
</template>

<script>
export default {
  name: 'Map',
  props: {
    msg: String
  },
  data() {
    return {
      zoom: 10,
      center: { lat: 6.2441988, lng: -75.6512521 },
      markers: [
        { Id: 1, name: "Oslo", position: { lat: 59.923043, lng: 10.752839 } },
        { Id: 2, name: "Stockholm", position: { lat: 59.339025, lng: 18.065818 } },
        { Id: 3,  name: "Copenhagen", position: { lat: 55.675507, lng: 12.574227 }},
        { Id: 4, name: "Berlin", position: { lat: 52.521248, lng: 13.399038 } },
        { Id: 5, name: "Paris", position: { lat: 48.856127, lng: 2.346525 } }
      ],
      gettingLocation: false,
      location: null
    };
  },
  methods: {
    async getCenter() {
      this.gettingLocation = true;
      try {
        this.gettingLocation = false;
        this.location = await this.getLocation();
        const {latitude, longitude} = this.location.coords;
        this.center = { lat: latitude, lng: longitude };
        this.zoom = 15;
        console.log(this.location)
      } catch(e) {
        this.gettingLocation = false;
        this.errorStr = e.message;
      }
    },
    async getLocation() {
      
      return new Promise((resolve, reject) => {

        if(!("geolocation" in navigator)) {
          reject(new Error('Geolocation is not available.'));
        }

        navigator.geolocation.getCurrentPosition(pos => {
          console.log(pos)
          resolve(pos);
        }, err => {
          reject(err);
        });

      });
    }
  }
}
</script>

<style scoped>
  .Map {
    width: 100%;
    height: 100%;
  }

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
