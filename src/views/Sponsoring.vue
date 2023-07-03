<script setup lang="ts">
    //import TheWelcome from '../components/TheWelcome.vue'
    import menus from '../components/menu/menu.vue'
    import footerF from '../components/menu/footer.vue'
    import Sponsoring from '../components/SponsoringComponent.vue'
</script>

<template>
  <main>  
    <menus/>  
    <Sponsoring />
    <!-- <footerF/> -->
  </main>
</template>

<style scoped>
main {
    height: 100%;
}
</style>