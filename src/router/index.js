// Import Methods, Packages, Files
import { createRouter, createWebHistory } from 'vue-router';

/*
 * @Pages
*/
import Error from '../views/pages/Error'

/*
 * @Admin Pages
 * notAuth Admin Pages
 * Auth Admin Pages
*/
import AdminLogin from '../views/admin/notAuth/AdminLogin'
import AdminDashboard from '../views/admin/auth/AdminDashboard'
import ChanceReviews from '../views/admin/auth/ChanceReviews'
import ChancePublish from '../views/admin/auth/ChancePublish'
import ChancesManagement from '../views/admin/auth/ChancesManagement'
import StudentsManagement from '../views/admin/auth/StudentsManagement'
import ContactsManagement from '../views/admin/auth/ContactsManagement'
import AdminManagement from '../views/admin/auth/AdminManagement'
import AdminsManagement from '../views/admin/auth/AdminsManagement'

// Routes
const routes = [
  {
    path: '/',
    name: 'AdminLogin',
    component: AdminLogin
  },
  {
    path: '/dashboard',
    name: 'AdminDashboard',
    component: AdminDashboard
  },
  {
    path: '/chance/reviews/:id',
    name: 'ChanceReviews',
    component: ChanceReviews
  },
  {
    path: '/chance/publish',
    name: 'ChancePublish',
    component: ChancePublish
  },
  {
    path: '/chances/manage',
    name: 'ChancesManagement',
    component: ChancesManagement
  },
  {
    path: '/students/manage',
    name: 'StudentsManagement',
    component: StudentsManagement
  },
  {
    path: '/students/contacts',
    name: 'ContactsManagement',
    component: ContactsManagement
  },
  {
    path: '/admin/manage',
    name: 'AdminManagement',
    component: AdminManagement
  },
  {
    path: '/admins/manage',
    name: 'AdminsManagement',
    component: AdminsManagement
  },
  {
    path: '/:pathMatch(.*)*',
    name: "Error",
    component: Error
  }
];


// Export Router
export const router = createRouter({
  history: createWebHistory(),
  linkActiveClass: 'active',
  routes
});


router.beforeEach((to, from, next) => {
  const Pages = ['/'];
  const pageComponent = Pages.includes(to.path);
  const loggedIn = localStorage.getItem('token');

  if (!pageComponent && !loggedIn) {
    return next('/');
  }

  if (pageComponent && loggedIn) {
    return next('/dashboard');
  }

  next();

})
