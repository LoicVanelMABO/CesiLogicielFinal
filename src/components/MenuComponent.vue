

<template >
    <div class="restaurantCard">
      <!-- <img :src="changeBackground" alt=""> -->
      <!-- <p>Tests</p> -->
      <div class="restaurantImage border rounded" style="display: flex; justify-content: center; align-items: center;" >
            <img style="height: 100%; width: 60%;margin: auto;" :src="_menu.picture" alt="Image du produit" class="">
      </div>
      <RouterLink style="text-decoration:none;" to=''>
          <div class="restauInfos text-dark">
              <div class="nomNote">
                  <p class="name">{{ _menu.name }}</p>
                  <button @click="getData" :V="_menu" class="btn bg-light" type="button">
                    <font-awesome-icon icon="shopping-cart" />
                  </button>
              </div>
              <p class="time">Price : {{ _menu.price }} €</p>
          </div>
      </RouterLink>
    </div>
  </template>
  
  <script lang="ts">
  import Swal from 'sweetalert2' 
  // import
  import { Component, Vue } from 'vue-property-decorator';
  import {computed} from 'vue'
  export default {
      name:'CartRestau',
      components:{
      },
      props:{
        _menu : Object
      },
      setup(props){
          // console.log('props ',props.info_restau);
          const changeBackground = computed(() => {
              return {
                  changeBackgroundImage : `url(${props.info_restau.picture})`
              }
          });
          // console.log('changeBackground ', changeBackground)
          return{
              changeBackground
          } 
      },
      methods:{
        getData() {
            var tab = [];
            var b
            // const target = event.target as HTMLElement;
            console.log('objet ',this._menu);          
            
            const storedBasket = localStorage.getItem('basket');
            console.log('vide basket tab 11 ',storedBasket)
            const basket = JSON.parse(storedBasket);
            console.log('vide basket tab ',basket)
            basket.push(this._menu);
            console.log('vide basket tab rempli ',basket)
            console.log('vide basket tab json ',JSON.stringify(basket))
            localStorage.setItem('basket', JSON.stringify(basket));
            const storedBaskett = localStorage.getItem('basket');
            const baskett = JSON.parse(storedBaskett);
            console.log('vide basket tab rempli',baskett)

            this.$swal({
            title: 'Ajout panier',
            text: 'le menu a bien été ajouté dans votre panier',
            icon: 'success',
            confirmButtonText: 'OK'
          });
        }
      }
  }
  
  </script>
  
  <style lang="scss">
      template{
          background-color: red;
      }
      .restaurantCard {
          width:32%;
          height: 35vh;
          // background-color: aquamarine;
          padding: 0px;
  
          p {
              margin: 0px;
              padding: 0px;
          }
          .restaurantImage {
              background-image: #f6f6f6;
              // background-image: url('@/assets/imgRestau/bouf2.jpg');
              height: 50%;
              background-repeat: no-repeat;
              background-size: cover;
              background-position: center;            
          }
  
          .restauInfos{
              
              .nomNote{
                  margin : 10px 0px;
                  display: flex;
                  align-items: center;
                  justify-content: space-between;
  
                  .note{
                      background-color: #eeeeee;
                      height: 30px;
                      width: 30px;
                      border-radius: 50%;
                      display: flex;
                      justify-content: center;
                      align-items: center;
                      font-size: 0.8rem;
                  }
              }
              .time{
                  font-size: 0.9rem;
              }
          }
      }
  </style>