
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const router = new VueRouter({
    mode: 'history',
    routes: [
        { path: '/', component: () => import('@/views/page/LandingPage.vue') },
        { path: '/login', component: () => import('@/views/auth/Login.vue') },
        { path: '/register', component: () => import('@/views/auth/Register.vue') }
    ]
});

export default router;