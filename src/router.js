import { createRouter, createWebHistory } from 'vue-router'
import DashBoard from "./components/dashboard/DashBoard.vue";
import UserProfile from "./components/form/UserProfile.vue";
import LoginPage from "./components/auth/LoginPage.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/', component: DashBoard, meta: { requiresAuth: true }},
        {path: '/user-profile', component: UserProfile, meta: { requiresAuth: true }},
        {path: '/login', component: LoginPage}
    ]
})

router.beforeEach((to, from, next) => {
    // redirect to login page if not logged in and trying to access a restricted page
    const token = localStorage.getItem('token');
    if (to.matched.some(record => record.meta.requiresAuth) && !token) {
        next('/login');
      } else {
        next();
      }
});

export default router;