<template>
  <div class="modal" v-if="opened">
    <div class="modal-overlay"></div>
    <div class="modal-container">
      <div class="title">
        <h2>{{title}}</h2>

        <div class="close" @click="close()"></div>
      </div>

      <div class="modal-content">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['title', 'active'],

    data(){
      return {
        opened: this.active
      }
    },

    watch: {
      active(val){
        this.opened = val;
      }
    },

    methods: {
      close(){
        this.$emit('close')
      }
    }
  }
</script>