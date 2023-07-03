// panierService.js

const PanierService = {
    panier: [],
  
    ajouterProduit(produit) {
      // Vérifier si le produit est déjà présent dans le panier
      const produitExistant = this.panier.find(item => item.id === produit.id);
  
      if (produitExistant) {
        // Si le produit existe déjà, augmenter la quantité
        produitExistant.quantite += produit.quantite;
      } else {
        // Sinon, ajouter le produit au panier
        this.panier.push(produit);
      }
    },
  
    supprimerProduit(produit) {
      // Trouver l'index du produit dans le panier
      const index = this.panier.findIndex(item => item.id === produit.id);
  
      if (index !== -1) {
        // Si le produit est trouvé, le supprimer du panier
        this.panier.splice(index, 1);
      }
    },
  
    viderPanier() {
      // Vider le panier en réinitialisant le tableau
      this.panier = [];
    },
  
    getPanier() {
      // Renvoyer une copie du panier
      return [...this.panier];
    },
  
    getNombreProduits() {
      // Renvoyer le nombre total de produits dans le panier
      return this.panier.reduce((total, produit) => total + produit.quantite, 0);
    },
  
    getTotal() {
      // Calculer le total du panier
      return this.panier.reduce((total, produit) => total + produit.prix * produit.quantite, 0);
    }
  };
  
  export default PanierService;
  