<script setup lang="ts">
    //import TheWelcome from '../components/TheWelcome.vue'
    import menus from '../components/menu/menu.vue'
    import footerF from '../components/menu/footer.vue'
    import CmdList from '../components/CmdComponent.vue'
</script>

<template>
  <main>  
    <menus/>  
    <CmdList />
    <!-- <footerF/> -->
  </main>
</template>

<style scoped>
main {
    height: 100%;
}
</style>