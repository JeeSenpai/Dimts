import { createRouter, createWebHistory } from 'vue-router'
import store from '../store';
import UserView from '../views/UserView.vue'
import LoginView from '../views/LoginView.vue'
import RegisterView from '../views/RegisterView.vue'
import Dashboard from '@/components/Parents/Dashboard.vue'
import UserProfile from '@/components/Parents/UserProfile.vue'
import CaseList from '@/components/Parents/CaseList.vue'
import CourtHearings from '@/components/Parents/CourtHearings.vue'
import Proceedings from '@/components/Parents/Proceedings.vue'

const routes = [

  { 
    path: '/admin',
    name: 'admin',
    meta: { routeForAdmin: true },
    component: UserView,
    children: [
      {
        path: '/admin/dashboard',
        component: Dashboard,
        meta: { title: 'Dashboard'},
      },
      {
        path: '/admin/userprofile',
        component: UserProfile,
        meta: { title: 'Profile'} 
      },
      {
        path: '/admin/case-list',
        component: CaseList,
        meta: { title: 'Case List'} 
      },
      {
        path: '/admin/court-hearing',
        component: CourtHearings,
        meta: { title: 'Court Hearings'} 
      },
      {
        path: '/admin/proceedings',
        component: Proceedings,
        meta: { title: 'Proceedings'} 
      }
    ],
  },

  {
    path: '/',
    name: 'login',
    component: LoginView,
    meta: {
      alreadyAuth: true
    }
   },

  {
    path: '/register',
    name: 'register',
    component: RegisterView,
    meta: {
      alreadyAuth: true
    }
  },

  //For Components
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  
  let user = localStorage.getItem('access_token')
  let usertype = store.state.user;

  if (to.matched.some(rec => rec.meta.alreadyAuth)) {
    if (user) {
       if (usertype.userDetails.userType.id == 1){
        next({
          path: '/admin/dashboard'
        })
       }
       else if(usertype.userDetails.userType.id == 2){
        next({
          path: '/office/dashboard'
        })
       }
    } else if (!user) {
        next()
    }
  }
  else if (to.matched.some(record => record.meta.routeForAdmin)) {
      if (!user) {
          next({
              path: '/'
          })
      } else {
          if (usertype.userDetails.userType.id == 1) {
              next()
          } else {
              next({
                  path: '/'
              })
          }
      }
  }
  else if (to.matched.some(record => record.meta.routeForOffice)) {
      if (!user) {
          next({
              path: '/'
          })
      } else {
          if (usertype.userDetails.userType.id == 2) {
              next()
          } else {
              next({
                  path: '/'
              })
          }
      }
  }
  else {
    next({
        path: '/'
    })
  }
})

export default router
