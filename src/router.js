
import Vue from 'vue'
import VueRouter from 'vue-router'
import VueCookie from 'vue-cookie'
Vue.use(VueCookie);

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

router.beforeEach((to, from, next) => {
    const isAuthenticated = VueCookie.get('login');

    if (to.path !== '/login') {
        next()
        if (to.path !== '/register') {
            if (!isAuthenticated) {
                next({ path: '/login' })
            }
            next()

            if (to.path == '/login' && isAuthenticated) {
                next({ path: '/profile' })
            }
        }

    }
    else next()
});

export default router;