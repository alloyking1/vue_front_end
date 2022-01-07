
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const router = new VueRouter({
    mode: 'history',
    routes: [
        { path: '/', component: () => import('@/views/page/LandingPage.vue') },
        { path: '/login', component: () => import('@/views/auth/Login.vue') },
        { path: '/register', component: () => import('@/views/auth/Register.vue') },
        { path: '/merchant', component: () => import('@/views/dashboard/Merchant.vue') },
        { path: '/merchant/search', component: () => import('@/views/dashboard/MerchantSearch.vue') },
        { path: '/profile', component: () => import('@/views/dashboard/Profile.vue') }
    ]
});

export default router;