<template>
  <a href="#" :class="{'active': active}">
    <li>
      <slot></slot>
    </li>
  </a>
</template>

<script>
  export default {
    name: 'Sidenav-Link',
    props: ['link', 'active'],
    
    data() {
      return {
        linkRouter: this.link
      }
    }
  }
</script>