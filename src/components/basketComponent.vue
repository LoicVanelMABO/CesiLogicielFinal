<template >
   
        <div v-for="b in baskett" :key="b.id" class="restaurantCard">
        <div class="restaurantImage border rounded" style="display: flex; justify-content: center; align-items: center;" >
                <img style="height: 100%; width: 60%;margin: auto;" :src="b.picture" alt="Image du produit" class="">
        </div>
        <RouterLink style="text-decoration:none;" to=''>
            <div class="restauInfos text-dark">
                <div class="nomNote">
                    <p class="name">{{ b.name }}</p>
                    <!-- <button @click="getData" :V="b" class="btn bg-light" type="button">
                        <font-awesome-icon icon="shopping-cart" />
                    </button> -->
                </div>
            <p class="time">Price : {{ b.price }} €</p>
            </div>          
        </RouterLink>
        </div>
        <p>Montant total : <span class="fw-bold text-danger">{{ Montant }} €</span></p>
        <button @click="sendCmd" :V="b" class="btn bg-success" type="button">
            Valider la commande<font-awesome-icon icon="shopping-cart" />
        </button>
  </template>
  
  <script>  
  import Swal from 'sweetalert2' 
  import axios from 'axios';
  // import
//   import { Component, Vue } from 'vue-property-decorator';
  import {computed} from 'vue'
  export default {
    data(){
        return{
            baskett:'',
            Montant:'',
        }
    },
    mounted(){        
        // je recupère le basket et Id restau
        const ID = localStorage.getItem('ID');
        const storedBasket = localStorage.getItem('basket');
        const idRestau = localStorage.getItem('idRestau');
        //je converti le basket en tab manipulable
        const basket = JSON.parse(storedBasket);
        this.baskett = basket;
        console.log('fn 1 ',storedBasket);
        console.log('fn 2 ',basket);
        var prix = 0;
        for (const b of basket) {
            console.log(b.price);
            prix = prix + b.price;
        }
        console.log('price = ',prix)
        this.Montant = prix;
        this.idRestau = idRestau;
        this.ID = ID;
    },
    methods:{
        sendCmd(){
            // alert(this.baskett)
            if(this.baskett != ""){ 
                axios.post('http://192.168.186.174:3001/orders/', {
                userId: this.ID,
                restaurantId: this.idRestau,
                ordersDetails: this.baskett,
                price: this.Montant,
                orderPayment: 'Card',
                orderDate: new Date(),
                })
                .then(response => {
                // Traitement réussi
                console.log(response.data);
                // showAlert()
                this.$swal({
                    title: 'Commande',
                    text: 'Commande passée avec success!',
                    icon: 'success',
                    confirmButtonText: 'OK'
                });
                const myArray = [];
                localStorage.setItem('basket', JSON.stringify(myArray));
                localStorage.setItem('idRestau', '');
                this.$router.push('/basket');
                })
                .catch(error => {
                // Traitement des erreurs
                console.error(error);
                });
            }
            else{
                this.$swal({
                    title: 'Commande',
                    text: 'La Commande ne peut pas être passée car le panier est vide !',
                    icon: 'error',
                    confirmButtonText: 'OK'
                });
                this.$router.push('/dashboard');
            }
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

      #bam{
        justify-content: space-between;
      }
  </style>