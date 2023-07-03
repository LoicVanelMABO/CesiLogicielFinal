<script setup lang="ts">
    import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <main>
    <section class="vh-100 gradient-custom">
      <div class="p-5 h-100">
      <!-- <div class="container py-5 h-100"> -->
        <div class="row d-flex justify-content-center align-items-center h-100">
          <div class="col-12 col-md-8 col-lg-6 col-xl-5">
            <div class="card bg-dark text-white" style="border-radius: 1rem;">
              <div class="card-body p-5 text-center">

                <div class="mb-md-5 mt-md-4 pb-5">
                  <img alt="Vue logo" class="logoC border rounded" src="@/assets/logoCesiLiciouis.png" width="125" height="125" />
                  <h2 class="fw-bold mb-2 text-uppercase">Connexion</h2>
                  <p class="text-white-50 mb-5">Veuillez entrer votre email et votre mot de passe</p>
                  <form @submit.prevent="login">
                    <div class="form-outline form-white mb-4">
                      <input type="email" id="typeEmailXUser" class="form-control form-control-lg input" v-model="email" placeholder="Entrez votre mail" required />
                      <!-- <label class="form-label" for="typeEmailX">Email</label> -->
                    </div>

                    <div class="form-outline form-white mb-4">
                      <input type="password" id="typePasswordXUser" class="form-control form-control-lg" v-model="password" placeholder="Entrez votre mot de passe" required/>
                      <!-- <label class="form-label" for="typePasswordX">Password</label> -->
                    </div>
                    <button class="btn btn-outline-light btn-lg px-5 btn-connect" type="submit">Se connecter</button>
                  </form>
                </div>
                
                  <p v-if="error" class="has-text-danger bold">{{ error }}</p> 

                <div>
                  <p class="mb-0">Vous avez pas encore de compte ? Veuillez en créer un <RouterLink to="/account" class="text-white-50 fw-bold">ici</RouterLink></p> 
                  <!-- <p class="mb-0">Vous avez pas encore de compte ? Veuillez en créer un <a href="/account" class="text-white-50 fw-bold">Ici</a></p> -->
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script lang="ts">
import Swal from 'sweetalert2'
import axios from 'axios';

export default {
  data() {
    return {
      username: '',
      password: '',
      error: ''
    };
  },
  methods: {
    login() {      
      var EmailXU,PasswordXU;
      EmailXU = document.getElementById('typeEmailXUser').value; 
      console.log(EmailXU);
      PasswordXU = document.getElementById('typePasswordXUser').value;
      console.log(PasswordXU); 
      // if (this.email === '' || this.password === '') {
      if (EmailXU === '' || PasswordXU === '') {
        this.error = 'Veuillez remplir tous les champs svp.';
      } else {
        axios.post('http://192.168.186.174:3003/login', {
          email: EmailXU,
          password: PasswordXU,
        })
        .then(response => {
          console.log('123456 ',response.data);
          localStorage.setItem('token', response.data[0].token);
          localStorage.setItem('prenom', response.data[1].name);
          localStorage.setItem('nom', response.data[1].surname);
          localStorage.setItem('ID', response.data[1].ID);
          localStorage.setItem('email', response.data[1].email);
          localStorage.setItem('id_sponsor', response.data[1].id_sponsor);
          const myArray = [];
          // localStorage.setItem('myArray', JSON.stringify(myArray));
          localStorage.setItem('basket', JSON.stringify(myArray));

          this.$swal({
            title: 'Connexion réussie',
            text: 'Authentification éffectuée avec success',
            icon: 'success',
            confirmButtonText: 'OK'
          });
          this.$router.push('/dashboard');          
          // this.$router.push('/');
          // console.log('Connexion réussie !');
        })
        .catch(error => {
          this.$swal({
            title: 'Erreur de Connexion',
            text: 'Vérifier votre mail et votre mot de passe; puis réessayez !',
            icon: 'error',
            confirmButtonText: 'OK'
          });
          // Traitement des erreurs
          console.error(error);
        });
      }
    }
  }
};
</script>

<style scoped>
.container {
  /* max-width: 400px; */
  margin: 0 auto;
  padding: 20px;
}
.btn-connect{
  margin-top: 3%;
}

.title {
  text-align: center;
  margin-bottom: 20px;
}

.has-text-danger {
  color: red;
  margin-top: 10px;
}

.logoC {
  margin-bottom: 2%;
}

/* style 2eme auth */
.gradient-custom {
/* fallback for old browsers */
background: #6a11cb;

/* Chrome 10-25, Safari 5.1-6 */
background: -webkit-linear-gradient(to right, rgba(106, 17, 203, 1), rgba(37, 117, 252, 1));

/* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
background: linear-gradient(to right, rgba(106, 17, 203, 1), rgba(37, 117, 252, 1))
}
</style>