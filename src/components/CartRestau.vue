<template>
  <div class="restaurantCard">
    <div style="display: flex; justify-content: center; align-items: center;" class="restaurantImage border rounded">
        <img style="height: 100%; width: 65%;margin: auto;" :src="info_restau.picture" alt="Image du produit" class="">
    </div>
    <RouterLink style="text-decoration:none;" :to="'/RestauMenu/'+ info_restau._id">
        <div class="restauInfos text-dark">
            <div class="nomNote">
                <p class="name">{{ info_restau.restaurantName }}</p>
                <p class="note"> 
                    <span>{{ info_restau.note }}</span>
                </p>
            </div>
            <p class="time">time : ({{ info_restau.maxDeliveryTime }})</p>
        </div>
    </RouterLink>
  </div>
</template>

<script lang="ts"> 
// import
import {computed} from 'vue'
export default {
    name:'CartRestau',
    components:{
    },
    props:{
        info_restau : Object
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
}

</script>

<style lang="scss">
    template{
        background-color: red;
    }
    .restaurantCard {
        width:32%;
        height: 40vh;
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