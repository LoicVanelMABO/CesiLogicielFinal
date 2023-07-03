<script setup lang="ts">
    //import TheWelcome from '../components/TheWelcome.vue'
    import menus from '../components/menu/menu.vue'
    import footerF from '../components/menu/footer.vue'
    import editUsercomponentVue from '../components/user/editUsercomponent.vue'
</script>

<template>
  <main>  
    <menus/>  
     <editUsercomponentVue />
    <!-- <footerF/> -->
  </main>
</template>

<style scoped>
main {
    height: 100%;
}
</style>