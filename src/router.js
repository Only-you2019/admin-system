import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Login from './views/Login.vue'
import IndividualOrders from './views/IndividualOrders.vue'
import personalCollection from './views/personalCollection.vue'
import personalInformation from './views/personalInformation.vue'
import booksScience from './views/books-science.vue'
import booksLife from './views/books-life.vue'
import booksEconmic from './views/books-econmic.vue'
import HTChildrensBooks from './views/HTChildrensBooks.vue'
import HTEducationalExamination from './views/HTEducationalExamination.vue'
import HTLiteratureandArt from './views/HTLiteratureandArt.vue'
import HTSocialScience from './views/HTSocialScience.vue'
<<<<<<< HEAD
import Admin from './views/Admin'
=======
import BookList from './views/BookList'
>>>>>>> d49aff5bad11404e617f59e7ad245ee6d119c1d9


Vue.use(Router)
export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/IndividualOrders',
      name: 'IndividualOrders',
      component: IndividualOrders
    },
    {
      path: '/personalCollection',
      name: 'personalCollection',
      component: personalCollection
    },
    {
      path: '/personalInformation',
      name: 'personalInformation',
      component: personalInformation
    },
    {
      path: '/booksScience',
      name: 'books-science',
      component: booksScience
    },
    {
      path: '/booksLife',
      name: 'books-life',
      component: booksLife
    },
    {
      path: '/booksEconmic',
      name: 'books-econmic',
      component: booksEconmic
    },
    {
      path: '/HTChildrensBooks',
      name: 'HTChildrensBooks',
      component: HTChildrensBooks
    },
    {
      path: '/HTEducationalExamination',
      name: 'HTEducationalExamination',
      component: HTEducationalExamination
    },
    {
      path: '/HTLiteratureandArt',
      name: 'HTLiteratureandArt',
      component: HTLiteratureandArt
    },
    {
      path: '/HTSocialScience',
      name: 'HTSocialScience',
      component: HTSocialScience
    },
    {
<<<<<<< HEAD
      path: '/Admin',
      name: 'Admin',
      component: Admin
    },

=======
      path: '/BookList',
      name: 'BookList',
      component: BookList
    }
>>>>>>> d49aff5bad11404e617f59e7ad245ee6d119c1d9



  ]
})
