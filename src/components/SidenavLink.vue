<template>
  <a :class="{'active': id == selectedSidenav}" @click="changeSelectedSidenav">
    <li>
      <slot></slot>
    </li>
  </a>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    name: 'SidenavLink',
    props: ['link', 'id'],
    
    computed: {
      ...mapGetters({
        selectedSidenav: 'sidenav/selectedSidenav'
      })
    },

    data() {
      return {
        linkRouter: this.link
      }
    },

    methods: {
      changeSelectedSidenav(){      
        if (this.$route.path != this.link){
          this.$router.push(this.linkRouter)  
        }
        
        this.$store.dispatch('sidenav/setSelectedSidenav', this.id);
      }
    },
  }
</script>