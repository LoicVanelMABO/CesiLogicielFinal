<template>
    <main>
        <div class="containers col-lg-6 col-lg-offset-1">
            <h3 style="text-align: center;color: #6a11cb;" class="fw-bold">PARRAINGE</h3>
        <div style="justify-content: space-between; display: flex;" class="">
            <!-- <p>Vous êtes parrainé par <span class="text-success">{{ nomCompletParrain }}</span></p> -->            
            <button @click="addParrain" type="submit" class="btn btn-primary text-light" v-show="typeof maVariable !== 'undefined'">Ajouter parrain</button>

        </div>
            <p>Votre code de parrainage est : <span class="text-success">{{ valeurIdU }}</span></p>
            <h4>Liste de personnes parrainées</h4>
            <div class="">
                <table id="parrainTable" class="table table-striped table-bordered mt-5  table-hover table-sm">
                    <thead>
                        <tr>
                            <th>prénom</th>
                            <th>Nom</th>
                            <!-- <th>email</th> -->
                            <th>addresse</th>
                        </tr>
                    </thead>
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
            valeurid_sponsorIdU:''
        }
    },
    mounted(){        
        this.valeurIdU = localStorage.getItem('ID');
        this.valeurid_sponsorIdU = localStorage.getItem('id_sponsor');
        console.log('valeurid_sponsorIdU ',this.valeurid_sponsorIdU)
        this.getUsers();
    },
    methods:{
        
        addParrain(){
            Swal.fire({
            title: 'Ajout du Parrain',
            html: `
            <input type="email" id="codeParrainage" class="swal2-input" placeholder="Entrer le code de parrainage">
            `,
            confirmButtonText: 'Ajouter',
            showCancelButton: true,
            preConfirm: () => {
                var CodeParrain;
                CodeParrain = document.getElementById('codeParrainage').value;
                // alert(CodeParrain)
                axios.put('http://192.168.186.174:3003/sponsor/'+this.valeurIdU+'/', {
                    id_sponsor: CodeParrain,
                    })
                    .then(response => {
                        console.log('ffff ',response);
                        localStorage.setItem('id_sponsor', response.data.id_sponsor);
                    this.$swal({
                        title: 'Success',
                        text: 'Parrainage réussi',
                        icon: 'success',
                        confirmButtonText: 'OK'
                    });
                    this.$router.push('/Sponsoring/'+this.valeurIdU+'/');          
                    // this.$router.push('/');
                    // console.log('Connexion réussie !');
                    })
                    .catch(error => {
                    this.$swal({
                        title: 'Erreur de parrainage',
                        text: 'Réessayez plus tard',
                        icon: 'error',
                        confirmButtonText: 'OK'
                    });
                    // Traitement des erreurs
                    console.error(error);
                    });
            // const name = Swal.getPopup().querySelector('#name').value;
            const email = Swal.getPopup().querySelector('#email').value;
            // Traitez les données du formulaire ici

            // Pour fermer la boîte de dialogue pop-up après avoir traité le formulaire :
            // Swal.close();
            }
        })
        },
        getUsers(){
            // axios.get('https://jsonplaceholder.typicode.com/posts').then(response =>{
            axios.get('http://192.168.186.174:3003/sponsor/'+this.valeurIdU+'/').then(response =>{
            // console.log(response.data);
            // this.nomCompletParrain = response.data.name +' '+response.data.surname
            console.log('jjhbvh ',response.data);
                $('#parrainTable').DataTable( {
                    // dom:"Bfrtip",
                    // buttons: ["colvis","excel","print","csv"],
                    data: response.data,
                    columns: [
                        { data: 'name' },
                        { data: 'surname' },
                        // { data: 'email' },
                        { data: 'address' }
                    ]
                } );
            }).catch(error =>console.log(error.response))
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
  