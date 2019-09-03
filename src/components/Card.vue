<template>
  <div class="card">
    <div class="title" v-if="title">{{title}}</div>
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'Card',
    props: ['title']
  }
</script>