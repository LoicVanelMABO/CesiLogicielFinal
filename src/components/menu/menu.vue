<template>
  <head>
    <title>Vue Project</title>

    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />

    <link rel="icon" href="./assets/img/vueLogo.png" />
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.2/css/all.css"/>
    <link href="./assets/style/style.css" rel="stylesheet" />
  </head>

  <!-- Nav -->
  <nav class="justify-content-between nav-bar-custom navbar navbar-expand-md navbar-light">
    <a style="margin-left: 2%;" href="/dashboard"><img alt="Vue logo" class="logoC border rounded" src="@/assets/logoCesiLiciouis.png" width="75" height="75" /></a>
    <button style="margin-right: 2%;" type="button" class="navbar-toggler " data-toggle="collapse" data-target="#nav">
        <!-- <span class="navbar-toggler-icon"></span> -->
        <div style="margin-right: 2%;" class="d-flex justify-center align-center h-100">
            <v-btn color="primary" @click.stop="drawer = !drawer">
                 Menu
            </v-btn>
        </div>
    </button>
    <div class="collapse navbar-collapse justify-content-between"  id="nav">    
        <ul class="navbar nav">
            <li class="nav-item"><RouterLink class="nav-link text-50 fw-bold text-white text-uppercase px-4" to="/dashboard">Accueil</RouterLink></li>
            <li class="nav-item"><RouterLink class="nav-link text-50 fw-bold text-light text-uppercase px-4" to="/CommandesList">Commandes</RouterLink></li>
            <li class="nav-item dropdown">
                <RouterLink class="nav-link text-50 fw-bold text-white text-uppercase px-4" data-toggle="dropdown" :to="'/Sponsoring/'+parseInt(valeurIdU)">Parrainage</RouterLink>
            </li>
            <li class="nav-item"><RouterLink class="nav-link text-50 fw-bold text-white text-uppercase px-4" to="">Contact</RouterLink></li>
            <li class="nav-item">
                <div class="d-flex justify-center align-center h-100">
                    <v-btn color="primary" @click.stop="drawer = !drawer">
                        Menu
                    </v-btn>
                </div>
            </li>
            <router-link class="pull-right" to="/basket">
              <v-btn class="pull-right" color="primary">Voir le panier</v-btn>
             </router-link>
        </ul>
        <RouterLink style="text-decoration:none;margin-right: 3%; " class="fw-bold text-light text-uppercase" :to="'/editAccount/'+parseInt(valeurIdU)"><i style="margin-right :5px;" class="fa fa-user-circle" aria-hidden="true"></i>Mon Compte</RouterLink>
    </div>    
    <form style="display: center;" class="form-inline">
            <div class="input-group">
                <input v-model="user_search" type="text" class="form-control" placeholder="Rechercher un restaurant">
                <div class="input-group-append">
                    <button class="btn bg-light" type="button">
                        <font-awesome-icon icon="search" />
                    </button>
                </div>
            </div>        
        </form>
  </nav>
  <!-- on teste le menu -->
<v-card>
      <v-layout>
        <v-navigation-drawer  v-model="drawer" temporary>
            <div class="photo text-light ">
                <v-list-item  prepend-avatar="https://randomuser.me/api/portraits/men/78.jpg" title=""><span class="text-uppercase">{{valeurprenomU}}</span></v-list-item>
                <v-divider></v-divider> 
            </div> 
          <v-list density="compact" nav>
            <RouterLink class="nav-link text-50 fw-bold text-uppercase" to="/dashboard">
                <v-list-item prepend-icon="mdi-view-dashboard" title="ACCUEIL" value="Accueil">
                </v-list-item>
            </RouterLink>            
            
            <RouterLink class="nav-link text-50 fw-bold text-uppercase" to="/CommandesList">
                <v-list-item class="text-uppercase" prepend-icon="mdi-view-dashboard" title="COMMANDES" value="Commandes">
                </v-list-item>
            </RouterLink>
            <RouterLink class="nav-link text-50 fw-bold text-uppercase" data-toggle="dropdown" :to="'/Sponsoring/'+parseInt(valeurIdU)">                
                <v-list-item prepend-icon="mdi-view-dashboard" title="PARAINNAGE" value="Parrainage"></v-list-item>
            </RouterLink>
            <RouterLink style="text-decoration:none;" class="nav-link text-50 fw-bold text-uppercase" :to="'/editAccount/'+parseInt(valeurIdU)">
                <v-list-item prepend-icon="mdi-forum" title="MON COMPTE" value="COMPTE"></v-list-item>
            </RouterLink>
            <router-link style="text-decoration:none;" class="nav-link text-50 fw-bold text-uppercase" to="/basket">
              <!-- <v-btn >Voir le panier</v-btn> -->
              <v-list-item prepend-icon="mdi-forum" title="VOIR LE PANIER" value="panier"></v-list-item>
            </router-link>
          </v-list>          
          <template v-slot:append>
            <div class="pa-2 deconnecter">
                <v-btn @click="disconnect" block class="deconnecter">
                Se déconnecter
                </v-btn>
            </div>
          </template>
        </v-navigation-drawer>
        </v-layout>
        </v-card>
  <!-- End Nav -->
</template>
<script>

export default {
      data () {
        return {
          drawer: null,
          valeurNomU:'',
          valeurprenomU:'',
          valeurIdU:''
        }
      },  
      mounted() {
        this.valeurNomU = localStorage.getItem('nom');
        // console.log('vU ',localStorage.getItem('nom'));
        this.valeurprenomU = localStorage.getItem('prenom');
        this.valeurIdU = localStorage.getItem('ID');
      },
      computed: {
        valeurNomU() {
          return localStorage.getItem('surname'); // Récupération du paramètre de la route
        }
      },
      methods:{
        disconnect(){
          // alert('bjr')
          localStorage.removeItem('token');
          localStorage.removeItem('nom');
          localStorage.removeItem('prenom');
          localStorage.removeItem('ID');
          this.$swal({
            title: 'deconnexion réussie',
            text: 'déconnexion éffectuée avec success',
            icon: 'success',
            confirmButtonText: 'OK'
          });
          this.$router.push('/');
        }
      }
    }
</script>

<style>
    .nav-bar-custom { 
      background: #6a11cb;

      background: -webkit-linear-gradient(to right, rgba(106, 17, 203, 1), rgba(37, 117, 252, 1));

      background: linear-gradient(to right, rgba(106, 17, 203, 1), rgba(37, 117, 252, 1))
    }
    .deconnecter{ 
      background: #6a11cb;

      background: -webkit-linear-gradient(to right, rgba(106, 17, 203, 1), rgba(37, 117, 252, 1));

      background: linear-gradient(to right, rgba(106, 17, 203, 1), rgba(37, 117, 252, 1))
    }
    .photo {
      background: #6a11cb;

      background: -webkit-linear-gradient(to right, rgba(106, 17, 203, 1), rgba(37, 117, 252, 1));

      background: linear-gradient(to right, rgba(106, 17, 203, 1), rgba(37, 117, 252, 1))
    }
</style>