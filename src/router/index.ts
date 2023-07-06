import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import newP from '../views/newP.vue'
import auth from '../views/auth/auth.vue'
import account from '../views/auth/createAccount.vue'
import dashboard from "../views/dashboard.vue"
import editAccount from "../views/editUser.vue"
import Sponsoring from "../views/Sponsoring.vue"
import CmdList from "../views/CmdList.vue"
import RestauMenu from "../views/RestauMenu.vue"
import basket from "../views/basket.vue"

//import route111 from '@/router/route1';

const requireAuth = (to, from, next) => {
  const token = localStorage.getItem('token');
  if (token) {
    // L'utilisateur est authentifié, autorisez la navigation
    next();
  } else {
    // L'utilisateur n'est pas authentifié, redirigez-le vers la page de connexion
    next('/');
  }
};

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Auth',
      component: auth
    },
    //pour le panier
    {
      path: '/basket',
      name: 'basket',
      component: basket,
      // beforeEnter: requireAuth,
    },
    //pour le dashboard après authentification
    {
      path : '/dashboard',
      name : 'dashboard',
      component : dashboard,
      // beforeEnter: requireAuth,
    },
    //liste du menu du restau
    {
      path: '/RestauMenu/:id',
      name: 'RestauMenu',
      component: RestauMenu,
      // beforeEnter: requireAuth
    },
    
    //Creation de compte utilisateur
    {
      path: '/account',
      name: 'Create account',
      component: account
    },
    //gestion des parrains
    {
      path: '/sponsoring/:id',
      name: 'Sponsoring',
      component: Sponsoring,
      // beforeEnter: requireAuth,
    },
    //vue pour modifier le compte user
    {
      path: '/editAccount/:id',
      name: 'editAccount',
      component: editAccount,
      // beforeEnter: requireAuth,
    },
    //gestion des commandes
    {
      path: '/CommandesList',
      name: 'CommandesList',
      component: CmdList,
      // beforeEnter: requireAuth,
    },
  ]
})



export default router
