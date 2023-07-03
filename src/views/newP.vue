  <template>
    <div class="container">
      <h1 class="title">Page d'authentification</h1>
      <form @submit.prevent="login">
        <div class="field">
          <label class="label">Nom d'utilisateur</label>
          <div class="control">
            <input class="input" type="text" v-model="username" placeholder="Entrez votre nom d'utilisateur">
          </div>
        </div>
        <div class="field">
          <label class="label">Mot de passe</label>
          <div class="control">
            <input class="input" type="password" v-model="password" placeholder="Entrez votre mot de passe">
          </div>
        </div>
        <div class="field">
          <div class="control">
            <button class="button is-primary" type="submit">Se connecter</button>
          </div>
        </div>
      </form>
      <p v-if="error" class="has-text-danger">{{ error }}</p>   
    
      <fff />
    </div>
  </template>
  
  <script lang="ts">
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
        // Ici, vous pouvez implémenter la logique d'authentification
        // par exemple, faire une requête API pour vérifier les informations d'identification
        // Dans cet exemple, nous vérifions simplement si les champs sont vides
        if (this.username === '' || this.password === '') {
          this.error = 'Veuillez remplir tous les champs.';
        } else {
          // Réinitialiser l'erreur
          this.error = '';
          
          // Effectuer les actions de connexion réussie, par exemple, rediriger vers une autre page
          console.log('Connexion réussie !');
        }
      }
    }
  };
  </script>
  
  <style scoped>
  .container {
    max-width: 400px;
    margin: 0 auto;
    padding: 20px;
  }
  
  .title {
    text-align: center;
    margin-bottom: 20px;
  }
  
  .has-text-danger {
    color: red;
    margin-top: 10px;
  }
  </style>
  