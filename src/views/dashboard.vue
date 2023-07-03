<script lang="ts">
    import { onMounted, ref,watch } from 'vue'
    import axios from 'axios'
    import menus from '../components/menu/menu.vue'
    import mms from '../components/menu/mm.vue'
    import rowRestau from '../components/RowRestau.vue'
    import footerF from '../components/menu/footer.vue'
    // import { watch } from 'fs/promises'
    export default{
        name:'dashboard',        
        data() {
            return {
                AllRestauInRowObject: []
            };
        },
        mounted() {
            this.AllRestauInRow();
        },
        components : {
            menus,
            rowRestau,
            footerF,
        },
        setup(){
            class Restaus{
                constructor(_id,restaurantName,note,picture,maxDeliveryTime,schedules){
                    this._id = _id;
                    this.restaurantName = restaurantName;
                    this.note = note;
                    this.picture = picture;
                    this.maxDeliveryTime = maxDeliveryTime; 
                    this.schedules = schedules               
                }
            }
            let data_restau = ref([]);
            const AllRestauInRow = () => {
                let three_restau = [];
                axios.get('http://192.168.186.174:3000/restaurants').then(function(response){

                    console.log('aa', response.data);

                    for(const R of response.data){
                        const newR = new Restaus(R._id,R.restaurantName,R.note,R.picture,R.maxDeliveryTime,R.schedules);
                        if(three_restau.length == 2){
                            three_restau.push(newR);
                            data_restau.value.push(three_restau);
                            three_restau = [];
                        }else{
                            three_restau.push(newR);
                        }
                    }
                    console.log('tableau ', data_restau)
                }).catch(function(error){
                    console.log("It's not good");
                    console.log(error);
                }).finally(function(){
                    console.log('tjrs');
                });
            }
            //user search
            let user_search = ref('');
            watch(user_search,(newValue)=>{
                console.log(newValue);
            })


            onMounted(AllRestauInRow);
            //return
            return{
                data_restau,
                user_search,
            }
        },
        methods:{      
            AllRestauInRow() {
            }
        }
    }    
</script>

<template>
  <main>  
    <menus/>
    <!-- <router-link class="pull-right" to="/cart">
      <v-btn class="pull-right" color="primary">Voir le panier</v-btn>
    </router-link> -->
    <!-- <span>{{ data_restau }}</span> -->
    <h2 class="title"> Restaurants à proximité</h2>
    <rowRestau v-for = "(data,i) in data_restau" :key="i" :three_restaurant = "data"/> 
    <!-- <footerF/> -->
  </main>
</template>

<style scoped>
main {
    height: 100%;
}
</style>