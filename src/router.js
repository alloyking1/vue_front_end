
import Vue from 'vue'
import VueRouter from 'vue-router'
import VueCookie from 'vue-cookie'
Vue.use(VueCookie);

Vue.use(VueRouter)

const router = new VueRouter({
    mode: 'history',
    routes: [
        { path: '/', component: () => import('@/views/dashboard/MerchantSearch.vue') },
        { path: '/login', component: () => import('@/views/auth/Login.vue') },
        { path: '/register', component: () => import('@/views/auth/Register.vue') },
        { path: '/merchant', component: () => import('@/views/dashboard/Merchant.vue') },
        { path: '/profile', component: () => import('@/views/dashboard/Profile.vue') },
        { path: '/password/update', component: () => import('@/views/auth/PasswordUpdate.vue') },
        { path: '/password/reset', component: () => import('@/views/auth/passwordReset.vue') }
    ]
});

router.beforeEach((to, from, next) => {
    const isAuthenticated = VueCookie.get('login');

    if (to.path !== '/') {
        if (to.path !== '/login') {
            if (to.path !== '/register') {
                if (!isAuthenticated) {
                    next({ path: '/login' })
                }
                next()

                if (to.path == '/login' && isAuthenticated) {
                    next({ path: '/profile' })
                }
                next()
            } else next()
        }
        else next()


    }
    else next()
});

export default router;