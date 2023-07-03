<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import cart from './components/CartRestau.vue'
import compo from './components/fff.vue'
</script>

<script lang="ts">
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
</script>

<template>
    <!-- <compo :restaurants="restaurants" /> -->
    <cart/>

</template>

<style scoped>
 p {
    margin: 0%;
 }
 #app {
    margin: 0px;
    padding: 0px;
 }
</style>
