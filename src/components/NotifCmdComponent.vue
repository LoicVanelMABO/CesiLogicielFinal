<template>
  <div class="">
    <h2>Nouvel Commande</h2>
    <p>{{ varrt }}</p>
    <button @click="test" class="btn btn-outline-light btn-lg px-5 btn-connect" type="submit">Détails-  {{ varrt }}</button>
  </div>
</template>

<script lang="ts">
export default {
    props:{
        varrt :{
            type: String,
        }
    },
    methods:{
        test(){
            alert(this.varrt)
        }
    },
    // mounted(){
    //     alert(varr);
    // }
}
</script>

<style>

</style>