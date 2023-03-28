<template>
    <div class="modal-overlay" @click="closeModal"></div>
    <div class="modal">
        <div class="modal-content">
            <slot></slot>
            <button class="btn btn-primary" @click="closeModal">Close</button>
        </div>
    </div>
</template>

<script>
export default {
  emits: ['close-modal'],
  methods: {
    closeModal() {
      this.$emit('close-modal');
    },
  },
};
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 9998;
}

.modal {
    position: fixed;
    top: 50%;
    left: 50%;
    width: 70%;
    height: auto;
    transform: translate(-50%, -50%);
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9999;
}

.modal-content {
    background-color: white;
    padding: 20px;
    border-radius: 5px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
}
</style>