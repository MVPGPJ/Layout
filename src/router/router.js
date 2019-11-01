import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'Home',
            component: resolve => require(['../views/Home/index.vue'], resolve)
        },
        {
            path: '/test',
            name: 'Test',
            component: resolve => require(['../views/Test/index.vue'], resolve)
        }
    ]
})
