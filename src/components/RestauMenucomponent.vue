<script lang="ts">
  import menuResT from './MenuComponent.vue'
  import axios from 'axios'
import MenuComponent from './MenuComponent.vue';
  export default {
  components: { MenuComponent },
    name : 'RestauManucomponent',
    mounted() {
      // this.AllRestauInRow();
    },
    props:{
        data_menu : Array
    },
    
    setup(){
        console.log('token ',localStorage.getItem('token'));
    },
    
    methods:{}

  };
</script>

<template>
  <div class="restauRow">
    <!-- <h2 class="title"> Restaurants à proximité</h2> -->
    <div class="wrapperCard">
        <menu-component  v-for="(datass, index) in data_menu" :_menu="datass" :key="index"/>
    </div>   
  </div>
</template>



<style>
    .restauRow {
        .wrapperCard{
            display: flex;
            align-items: center;
            justify-content: space-between;
        }

        .title{
            font-size: 2.5rem;
        }
    }
</style>