<template>
  <div>

    <modal name="modal-instructions" width="60%" height="auto">
      <p>
        Presiona el ícono de localización para calcular tu radio.
        <br/>
        <img src="../assets/gps.png" class="locate-icon" />
      </p>
    </modal>
  </div>
</template>

<script>
export default {
  mounted() {
    this.showModal();
  },
  methods: {
    hideModal() {
      this.$modal.hide('dialog');
    },
    showModal() {
      this.$modal.show('modal-instructions')
    }
  }
}
</script>

<style scoped>
  .locate-icon {
    width: 30px;
    height: 30px;
  }

  .modal {
    width: 20%;
    height: 100px;
  }
</style>