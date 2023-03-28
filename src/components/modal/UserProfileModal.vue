<template>
    <div v-if="visible" class="modal-container">
        <div class="modal-background" @click="close"></div>
        <div class="modal-content">
            <slot></slot>
        </div>
    </div>
</template>
  

<script>

export default {

};
</script>
  
  