<template>
    <div class="containers col-lg-6 col-lg-offset-1">
      <h1>Modifier votre compte</h1>
      <form style="margin-bottom: 3%;" @submit.prevent="updatePhotoUser">
        <fieldset class="form-group border p-3 d-none">
          <legend class="w-auto">Photo de profil</legend>
          <div class="imgP">
            <img class="border imgP2" style="border-radius: 50%;  " src="@/assets/bouf1.jpeg" alt="profil">
          </div>

          <div style="display: flex; " class="mb-3 ">
            <label for="photo" class="form-label">Changer photo ?</label>
            <input type="file" id="photo" @change="handlePhotoChange" accept="image/*" class="form-control" required>
          </div>
          <div class="mb-3">

          </div>
          <button type="submit" class="btn btn-primary text-light">Changer photo</button>
        </fieldset>        
      </form>
      <form @submit.prevent="updateInfosUser">
        <fieldset class="form-group border p-3">
          <legend class="w-auto">Vos Informations</legend>
          <div class="mb-3">
            <label for="surnameU" class="form-label">Nom :</label>
            <input type="text" id="nameU" class="form-control" required>
          </div>
          <div class="mb-3">
            <label for="nameU" class="form-label">Prénom :</label>
            <input type="text" id="surnameU"  class="form-control" required>
          </div>
          <div class="mb-3">
            <label for="email" class="form-label">Adresse :</label>
            <input type="adresse" id="adresseU"  class="form-control" required>
          </div>
          <div class="mb-3">
            <label for="email" class="form-label">Adresse E-mail</label>
            <input type="email" id="emailU" class="form-control" required>
          </div>

          
          <button type="submit" class="btn btn-primary text-light">Enregistrer</button>
        </fieldset>
      </form>
    </div>
  </template>
  
  <script >
  import axios from 'axios'
  export default { 
    data() {
      return {
        user: {
          name: '',
          email: '',
          photo: null,
          drawer: null,
          valeurNomU:'',
          valeurprenomU:'',
          valeurIdU:''
        },
      };
    },
    mounted() {
      this.valeurNomU = localStorage.getItem('nom');
      this.valeurprenomU = localStorage.getItem('prenom');
      this.valeurIdU = localStorage.getItem('ID');
      axios.get('http://192.168.186.174:3003/user/'+this.valeurIdU+'/').then(function(response){

        console.log('aa TT', response.data);
        document.getElementById("nameU").value = response.data.name;
        document.getElementById("surnameU").value = response.data.surname;
        document.getElementById("adresseU").value = response.data.address;
        document.getElementById("emailU").value = response.data.email;
        }).catch(function(error){
        console.log("It's not good");
        console.log(error);
        }).finally(function(){
        console.log('tjrs');
        });
    },

    methods: {
      updateInfosUser() {     
        var nomU, prenomU,adresse,EmailXU;
        nomU = document.getElementById('nameU').value; 
        prenomU = document.getElementById('surnameU').value; 
        EmailXU = document.getElementById('emailU').value; 
        console.log(prenomU);
        console.log(nomU);
        console.log(EmailXU);
        adresse = document.getElementById('adresseU').value;
        console.log(adresse); 
        axios.put('http://192.168.186.174:3003/user/'+this.valeurIdU+'/', {
          name: nomU,
          surname: prenomU,
          email: EmailXU,
          address: adresse,
        })
        .then(response => {
          localStorage.setItem('prenom', response.data.surname);
          localStorage.setItem('nom', response.data.name);
          localStorage.setItem('ID', response.data.id);
          localStorage.setItem('email', response.data.email);

          this.$swal({
            title: 'modification réussie',
            text: 'Authentification éffectuée avec success',
            icon: 'success',
            confirmButtonText: 'OK'
          });
          this.$router.push('/editAccount/'+this.valeurIdU+'/'); 
        })
        .catch(error => {
          this.$swal({
            title: 'Erreur de modification',
            text: 'Erreur du serveur',
            icon: 'error',
            confirmButtonText: 'OK'
          });
          
          console.error(error);
        });
      },
      
      handlePhotoChange(event) {
        const file = event.target.files[0];
        // alert(file.size);
        console.log(file);
        if (file) {
          const reader = new FileReader();
          reader.onload = (e) => {
            this.user.photo = e.target.result;
          };
          reader.readAsDataURL(file);
        }
      },
      updatePhotoUser() {
        const file = event.target.files[0];
        // alert(file.size);
        // Logique pour mettre à jour les informations de l'utilisateur
        if (!file) {
          console.error('Aucun fichier sélectionné');
          return;
        }

        const downloadLink = document.createElement('@/assets/profiles/');
        downloadLink.href = URL.createObjectURL(this.file);
        downloadLink.download = this.file.name;
        downloadLink.click();
        URL.revokeObjectURL(downloadLink.href);
        console.log('Informations utilisateur mises à jour :', this.user);
        // alert('bien uploadé');
      },
    },
  };
  </script>

  <style>
  .containers {
    max-width: 100%;
    margin: 0 auto;
    padding: 20px;
  }
  .imgP {
    margin-left:auto;
    margin-right: auto;
    margin-top: auto;
    margin-bottom: 4%;
  }
  .imgP2 {
    margin-left:5%;
    margin-right: auto;
    margin-top: auto;
    margin-bottom: auto;
    height: 180px;
    width: 180px;
  }
  </style>
  