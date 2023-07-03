<script>
import $ from 'jquery';
import { onMounted, ref,watch } from 'vue'
import axios from 'axios'
import menuss from '../components/menu/menu.vue'
import MenuComponent from '../components/MenuComponent.vue';
import BasketComponent from '../components/basketComponent.vue';
export default {
  components: { menuss, BasketComponent, },
}
</script>

<template>
    <menuss/>
  <h2>Votre panier</h2>
  <BasketComponent/>
</template>

<style>

</style>