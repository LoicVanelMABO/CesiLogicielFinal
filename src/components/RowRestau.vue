<script lang="ts">
  import cartRestau from './cartRestau.vue'
  import axios from 'axios'
  export default {
    name : 'RowRestau',
    components: { cartRestau },
    mounted() {
      // this.AllRestauInRow();
    },
    props:{
      three_restaurant : Array
    },
    
    setup(){},
    
    methods:{
      
      // AllRestauInRow() {
      //   let data_restau = [];
      //   let three_restau = [];
      //   class Restaus{
      //     constructor(_id,restaurantName,note,picture,maxDeliveryTime,schedules){
      //       this._id = _id;
      //       this.restaurantName = restaurantName;
      //       this.note = note;
      //       this.picture = picture;
      //       this.maxDeliveryTime = maxDeliveryTime; 
      //       this.schedules = schedules               
      //     }
      //   }
      //   axios.get('http://192.168.186.174:3000/restaurants').then(function (response) {
      //     console.log('aa', response.data);
      //     for(const R of response.data){
      //       const newR = new Restaus(R._id,R.restaurantName,R.note,R.picture,R.maxDeliveryTime,R.schedules);
      //       // console.log('newRRR ', data_restau)
      //       if(three_restau.length == 2){
      //         three_restau.push(newR);
      //         data_restau.push(three_restau);
      //         three_restau = [];
      //       }else{
      //         three_restau.push(newR);
      //       }
      //     }
      //     console.log('tableau ', data_restau)
      //   }).catch(function (error) {
      //     console.log("It's not good");
      //     console.log(error);
      //   }).finally(function () {
      //     // always executed
      //   });
      //   return {
      //     data_restau,
      //   } 
      // }
    }

  };
    class CartRestaus{
      Construsctor(name,image,note,drive_time){
        this.name = name
        this.image = image
        this.note = note
        this.drive_time = drive_time
      }
    }
</script>

<template>
  <div class="restauRow">
    <!-- <h2 class="title"> Restaurants à proximité</h2> -->
    <div class="wrapperCard">
        <cart-restau v-for="(card, index) in three_restaurant" :info_restau="card" :key="index" />
    </div>   
  </div>
</template>



<style>
    .restauRow {
        .wrapperCard{
            display: flex;
            align-items: center;
            justify-content: space-between;
        }

        .title{
            font-size: 2.5rem;
        }
    }
</style>