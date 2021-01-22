import Vue from 'vue'
import VueRouter from 'vue-router'

const home = () =>
    import ('views/home/home')
const cart = () =>
    import ('views/cart/cart')
const category = () =>
    import ('views/category/category')
const profile = () =>
    import ('views/profile/profile')

Vue.use(VueRouter);

const router = new VueRouter({
    routes: [{
        path: "",
        redirect: "/home"
    }, {
        path: "/home",
        component: home,
    }, {
        path: "/cart",
        component: cart,
    }, {
        path: "/category",
        component: category,
    }, {
        path: "/profile",
        component: profile,
    }],
    mode: 'history'
})

export default router;