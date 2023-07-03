<template>
    <main>
        <div class="containers col-lg-6 col-lg-offset-1">
        <div style="justify-content: space-between; display: flex;" class="">
            <h3 style="text-align: center;color: #6a11cb;" class="fw-bold">Liste de vos Commandes</h3>
            <a type="submit" href="/dashboard/" class="btn btn-primary text-light">Accueil</a>
        </div>
            <h4>Liste de vos Commandes passées</h4>
            <div class="">
                <table id="CmdTable" class="table table-striped table-bordered mt-5  table-hover table-sm">
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>moyen paiement</th>
                            <th>Prix</th>
                            <!-- <th>Etat</th> -->
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <div v-for="b in baskett" :key="b.id" class="restaurantCard"></div>
                        <tr v-for="cmd in dataResponse" :key="cmd._id">
                            <td>{{ cmd.orderDate }}</td>
                            <td>{{ cmd.orderPayment }}</td>
                            <td>{{ cmd.price }} €</td>
                            <!-- <td>cc</td> -->
                            <td>
                                <button val="1" @click="btnCanceled" type="submit" class="btn btn-danger text-light">supprimer</button>
                            </td>
                        </tr>
                    </tbody>
                </table>  
            </div>
            
        </div>
    </main>
  </template>
  
  <script>
  import Swal from 'sweetalert2'
  import axios from 'axios';
  import $ from 'jquery';
  export default {
        data(){
            return{
                valeurIdU:'',
                valeurid_sponsorIdU:'',
                dataResponse:''
            }
        },
    mounted(){
        this.valeurIdU = localStorage.getItem('ID');
        this.valeurid_sponsorIdU = localStorage.getItem('id_sponsor');
        this.getCmd();
        $('#CmdTable').DataTable( {} );
    },
    setup() {
        const users = "dfsfd";
        return {users}
    },
    methods:{        
        btnCanceled(){
            Swal.fire({
                title: 'Êtes-vous sûr ?',
                text: 'Cette action est irréversible.',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Oui, supprimer !',
                cancelButtonText: 'Annuler'
                }).then((result) => {
                if (result.isConfirmed) {
                    alert ("val");
                    var val = $(this).attr("elt");
                    alert ($(this).attr("elt"));
                    console.log(val);
                    // Action à effectuer lorsque l'utilisateur clique sur le bouton de confirmation
                    // Par exemple, supprimer un élément
                }
            });
        },
        getCmd(){     
            axios.get('http://192.168.186.174:3001/users/'+this.valeurIdU+'/').then(response =>{
                console.log('data 14 ',response.data)
                console.log('data 145 ',response.data.orderDate)
                console.log('data 146 ',response.data.price)
                console.log('data 147 ',response.data.orderPayment)
                this.dataResponse = response.data;
                            // $('#CmdTable').DataTable( {
                            //     datas: response.data,
                            //     columns: [
                            //         { datas: 'orderDate' },
                            //         { datas: 'orderPayment' },
                            //         { datas: 'price' }
                            //     ]
                            // } );
                }).catch(error =>console.log(error.response));                  
        },
    }
  };
  </script>

<style>
    .container {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
    }
</style>
  