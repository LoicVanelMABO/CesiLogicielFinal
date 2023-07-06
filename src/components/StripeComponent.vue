<template>
    <div>
      <button @click="handlePayment">Payer</button>
    </div>
  </template>
  
  <script>
  export default {
    methods: {
      async handlePayment() {
        alert('le payement arrive')
        const stripe = await this.$stripe;
        const { error } = await stripe.redirectToCheckout({
          lineItems: [{ price: 'YOUR_PRODUCT_PRICE_ID', quantity: 1 }],
          mode: 'payment',
          successUrl: 'YOUR_SUCCESS_URL',
          cancelUrl: 'YOUR_CANCEL_URL',
        });
  
        if (error) {
          // Gérer les erreurs
        }
      },
    },
  };
  </script>