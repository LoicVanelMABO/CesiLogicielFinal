<template>
  <div class="tempo">
    <section class=" gradient-custom">
      <!-- vh-100 -->
      <div class=" p-5 h-100">
      <!-- <div class="container py-5 h-100"> -->
        <div class="row d-flex justify-content-center align-items-center h-100">
          <div class="col-12 col-md-8 col-lg-6 col-xl-5">
            <div class="card bg-dark text-white" style="border-radius: 1rem;">
              <div class="card-body p-5 text-center">

                <div class="mb-md-5 mt-md-4 pb-5">
                  <img alt="Vue logo" class="logoC border rounded" src="@/assets/logoCesiLiciouis.png" width="125" height="125" />
                  <h2 class="fw-bold mb-2 text-uppercase">CREATION DE COMPTE</h2>
                  <p class="text-white-50 mb-5">(les Champs avec * sont obligatoire)</p>
                  <form @submit.prevent="createAccount">                
                    <div style="display: flex;" class="form-outline form-white mb-4">
                        <label  class="fw-bold" for="surname">Êtes-vous parrainné par un ami ? <span class="text-danger fw-bold">*</span></label>                      
                      <!-- Default radio -->
                      <div class="" style="margin: auto; padding: auto;">
                        <input @change="radioButtunFunction" class="form-check-input" type="radio" name="parrain" id="YesRadio" value="1"/>
                        <label class="form-check-label" for="flexRadioDefault1"> Oui </label>
                      </div>
                      <!-- Default checked radio -->
                      <div class="" style="margin: auto; padding: auto;">
                        <input @change="radioButtunFunction" class="form-check-input" type="radio" name="parrain" id="NoRadio" value="0" checked/>
                        <label class="form-check-label" for="flexRadioDefault2"> Non </label>
                      </div>
                    </div>
                    <div class="form-outline form-white mb-4">
                      <input type="name" id="name" name="nom" v-model="name" required class="form-control form-control-lg input"  placeholder="Entrez votre nom*">
                    </div>
                    <div class="form-outline form-white mb-4">
                      <!-- <label for="surname">Prénom :</label> -->
                      <input type="surname" id="surname" name="surname" v-model="surname" class="form-control form-control-lg input"  placeholder="Entrez votre prénom*" required>
                    </div>
                    <div class="form-outline form-white mb-4">
                      <!-- <label for="Adress">Adresse :</label> -->
                      <input type="Adress" id="Adress" name="Adress" v-model="Adress" class="form-control form-control-lg input"  placeholder="Entrez votre adresse*" required>
                    </div>
                    <!-- <div class="form-outline form-white mb-4">
                      <select name="role" id="role" class="form-control form-control-lg input"  placeholder="Choisissez votre rôle*" required>
                        <option value="">Rôle*</option>
                        <option value="Utilisateur">Utilsateur final</option>
                        <option value="Livreur">Livreur</option>
                        <option value="Restaurateur">Restaurateur</option>
                      </select>
                    </div> -->
                    <div class="form-outline form-white mb-4">
                      <input type="email" id="codeParrainU" name="codeParrain" class="form-control form-control-lg input d-none" placeholder="Entrez le code de parrainage*"  />
                    </div>
                    <div class="form-outline form-white mb-4">
                      <input type="email" id="typeEmailX" name="typeEmailX" class="form-control form-control-lg input" v-model="emailf" placeholder="Entrez votre mail*" required />
                    </div>

                    <div class="form-outline form-white mb-4">
                      <input type="password" id="typePasswordX" name="typePasswordX" class="form-control form-control-lg" v-model="password" placeholder="Entrez votre mot de passe" required/>
                    </div>

                    <div class="form-outline form-white mb-4">
                      <input type="password" id="typePasswordY" class="form-control form-control-lg" name="typePasswordY" v-model="passwordd" placeholder="Confirmez votre mot de passe*" required/>
                    </div>

                    <div class="div-btn row">
                      <div class="col-md-6 mb-4">
                        <button class="btn btn-outline-light btn-warning btn-lg px-5 btn-cancel" type="reset">Annuler</button>
                      </div>
                      <div class="col-md-6 mb-4">
                        <button class="btn btn-outline-light btn-success btn-lg px-5 btn-create" type="submit">Confirmer</button>
                        <button @click="showAlert">sweet</button>
                      </div>          
                    </div>     
                  </form>
                </div>            
                  <p v-if="error" class="has-text-danger bold">{{ error }}</p> 
                <div>
                  <p class="mb-0">Vous avez déjà un compte CesiLicious ? Connectez vous <RouterLink class="text-white-50 fw-bold" to="/">ici</RouterLink></p> 
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
  
<script>
  import Swal from 'sweetalert2'
  import axios from 'axios'
  // import { defineComponent, Ref } from 'vue';
  export default {
    data() {
      return {
        email: '',
        password: ''
      };
    },

    setup(){},

    methods: {
      createAccount() {
        var YesRadio = document.getElementById('YesRadio');
        var nameU,surnameU,AdressU,roleU,codeParrainU,typeEmailXU,typePasswordXU,typePasswordYU;

        typePasswordXU = document.getElementById('typePasswordX').value;
        // alert('creation d compte 2 pass ',typePasswordXU);
        console.log('pass1 ',typePasswordXU);

        typePasswordYU = document.getElementById('typePasswordY').value; 
        console.log('pass 2',typePasswordYU);  

        if (YesRadio.checked) {
          // EmailParrain.classList.remove('d-none');
          codeParrainU = document.getElementById('codeParrainU').value; 
          console.log('parra ',EmailParrainU)
        }
        if(typePasswordXU === typePasswordYU){
          nameU = document.getElementById('name').value;
          console.log('nameU ',nameU);   
          surnameU = document.getElementById('surname').value;  
          console.log('surnam ',surnameU); 
          AdressU = document.getElementById('Adress').value;
          console.log('adreees ',AdressU);   
          // roleU = document.getElementById('role').value;   
          roleU = 'Utilisateur'   
          console.log('role ',roleU);  
          typeEmailXU = document.getElementById('typeEmailX').value; 
          console.log('mail',typeEmailXU);            
        }
  
        // Exemple d'utilisation d'une requête HTTP avec axios
        axios.post('http://192.168.186.174:3003/user', {
          name: nameU,
          surname: surnameU,
          address: AdressU,
          email: typeEmailXU,
          password: typePasswordXU,
          sponsor_code: codeParrainU,
          role: roleU
          // password: this.password
        })
        .then(response => {
          // Traitement réussi
          console.log(response.data);
          // showAlert()
          this.$swal({
            title: 'Création de compte réussie',
            text: 'Compte crée avec success!',
            icon: 'success',
            confirmButtonText: 'OK'
          });
          this.$router.push('/dashboard');
        })
        .catch(error => {
          // Traitement des erreurs
          console.error(error);
        });
      },    
      showAlert() {
        this.$swal({
          title: 'Succèss',
          text: 'Compte crée avec succèss',
          icon: 'success',
          confirmButtonText: 'OK'
        });
        this.$router.push('/dashboard');
      },
      radioButtunFunction(){        
        //pour les bouttons radio
        var YesRadio = document.getElementById('YesRadio');
        var NoRadio = document.getElementById('NoRadio');
        var EmailParrain = document.getElementById('EmailParrain');

        if (YesRadio.checked) {
          EmailParrain.classList.remove('d-none');
        } else if (NoRadio.checked) {
          EmailParrain.classList.add('d-none');
        } else {
          console.log('Aucune option sélectionnée');
        }
      }
    }
  }
</script>
  
  <style scoped>
  .tempo {
    /* background-image: url('@/assets/bouf1.jpeg'); */
    background-image: url('@/assets/bouf2.jpg');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    /* opacity: 0.7; */
    
  }
    .btn-create{
      /* margin-left: 2%; */
      /* margin-right: 0; */
      width: 100%;
    }
    .btn-cancel{
      margin-right: 2%;
      margin-bottom: 1%;
      width: 100%;
    }
  </style>
  