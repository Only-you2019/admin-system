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
import BookList from './views/BookList'

Vue.use(Router)

 const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
     redirect:'/Home'
    },
    {
      path: '/Home',
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
      path: '/BookList',
      name: 'BookList',
      component: BookList
    }



  ]
})
export default router

router.beforeEach((to,from,next)=>{
  let isLogin=sessionStorage.getItem('user');
  if(isLogin){
    next()
  }else {
    if(to.path=='/login'){
      next()
    }else {
      next('/login')
    }
  }
})
