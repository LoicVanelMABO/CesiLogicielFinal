<!-- <script setup lang="ts"> -->
<script lang="ts">
import axios from 'axios';

import { RouterLink, RouterView } from 'vue-router'
import compo from './components/fff.vue'
import cart from './components/CartRestau.vue'

export default {
  name : 'App2',
  components: { 
        cart,
        RouterView
},
}

</script>
<!-- <script lang="ts">
    export default{ components:{
        compo
    },
    data() {
        return {
            restaurants: [
                {
                id: 1,
                name: "Restaurant 1",
                description: "Description du restaurant 1",
                address: "Adresse du restaurant 1",
                phone: "Téléphone du restaurant 1"
                },
                {
                id: 2,
                name: "Restaurant 2",
                description: "Description du restaurant 2",
                address: "Adresse du restaurant 2",
                phone: "Téléphone du restaurant 2"
                },
            ]
        };
    }
    }
</script> -->
<template >
  <div id="App">
    <!-- <div>Coucou</div> -->
    <!-- <div style="flex-grow: 1;"> -->
    <RouterView /> 
<!-- </div> -->
    <!-- <cart /> -->
  </div>
</template>

<style scoped>
    #App {
        /* padding: 1px ; */
        /* 2.5px; */
        height: 100%;
        /* display: flex; */
        /* flex-direction: row; */
    }
</style>
