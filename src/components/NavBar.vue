<template>
  <vs-navbar collapse v-model="activeItem" class="nabarx">
    <div slot="title">
      <vs-navbar-title>
        Calcula tu Radio
      </vs-navbar-title>
    </div>

    <!-- <vs-navbar-item index="0">
      <a href="#">Home</a>
    </vs-navbar-item>
    <vs-navbar-item index="1">
      <a href="#">News</a>
    </vs-navbar-item>
    <vs-navbar-item index="2">
      <a href="#">Update</a>
    </vs-navbar-item> -->
  </vs-navbar>
</template>
<script>
export default {
  data:()=>({
    activeItem: 0
  })
}
</script>
<style scoped>

</style>