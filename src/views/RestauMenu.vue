<script>
import $ from 'jquery';
import { onMounted, ref,watch } from 'vue'
import axios from 'axios'
import menus from '../components/menu/menu.vue'
import RestauMenucomponent from '../components/RestauMenucomponent.vue'
import Menu from '../components/menu/menu.vue'
export default {
  components: { RestauMenucomponent, Menu } ,
  data() {
    return {
      id: ''
    };
  },
  mounted() {
    this.id = this.$route.params.id; // Récupération du paramètre
    console.log('id ',this.id);  
  },
  computed: {
    routeId() {
      return this.$route.params.id; // Récupération du paramètre de la route
    }},
  setup(){
            class Restaus{
                constructor(_id,articles,menus,){
                    this._id = _id;
                    this.articles = articles;
                    this.menus = menus;               
                }
            }
            let data_menu = ref([]);
            const Allmenu = () => {
                //recupération de ID   
                let IdRestau = 0     
                const spanElement = document.getElementById('id_id');
                if (spanElement) {
                    IdRestau = spanElement.getAttribute('typa');

                let three_menu = [];
                axios.get('http://192.168.186.174:3000/restaurants/'+IdRestau+'/').then(function(response){

                    console.log('aa', response.data.menus);
                    data_menu = data_menu.value.push(response.data.menus);
                    // console.log('tableau ', data_menu)
                    //vider le basket
                    //et id du retau
                    const myArray = [];
                    localStorage.setItem('basket', JSON.stringify(myArray));
                    localStorage.setItem('idRestau', IdRestau);
                }).catch(function(error){
                    console.log("It's not good");
                    console.log(error);
                }).finally(function(){
                    console.log('tjrs');
                });
            }
            }
            onMounted(Allmenu);

            //return
            return{
                data_menu,
            }
        },
}
</script>
<template>
    <Menu/> 
    <h2 class="title">Menu </h2>
    <span class="" ref="monSpan" :typa="routeId" id="id_id"></span>
    <RestauMenucomponent v-for = "(datas,i) in data_menu" :key="i" :data_menu = "datas" />
</template>



<style>

</style>