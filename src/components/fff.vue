<!-- <script setup lang="ts">
  defineProps<{
    restaurants: [restaurants]
  }>()
  console.log('bonjour');
</script> -->
<!-- <script>
  export default{
    props: {
      restaurants: {
        type: Array
      }
    }
  };
</script> -->
<template>
    <div>
      <h2>Liste des restaurants</h2>
      <ul>
        <li v-for="restaurant in restaurants" :key="restaurant.id">
          <h3>{{ restaurant.name }}</h3>
          <p>{{ restaurant.description }}</p>
          <p>Adresse : {{ restaurant.address }}</p>
          <p>Téléphone : {{ restaurant.phone }}</p>
        </li>
      </ul>
    </div>
  </template>

<script>
export default {
  props: {
    restaurants: {
      type: Array,
      required: true
    }
  }
};
</script>