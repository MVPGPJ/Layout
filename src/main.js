import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import router from './router/router'
import store from './store/index'
import apis from './api/index'
import { Button, Cell, Toast } from 'vant' // 常用组件
import './components'
import './assets/less/index.less'
import networkListening from './utils/networkListening'
import VueLazyload from 'vue-lazyload'
import * as filter from './utils/filters'
import VConsole from 'vconsole'
import hostConfig from './api/config'

Vue.use(networkListening)
Vue.use(Button)
Vue.use(Cell)
Vue.use(Toast)

// 全局配置Toast
Toast.setDefaultOptions({
    forbidClick: true,
    duration: 1500
})

// 注册VueLazyload
Vue.use(VueLazyload, {
    src: require('./assets/images/logo.png'),
    error: require('./assets/images/imgs/loading.gif'),
    loading: require('./assets/images/imgs/loading.gif'),
    attempt: 1,
    preLoad: 2
})

// 注册全局过滤器
Object.keys(filter).forEach(key => {
    Vue.filter(key, filter[key])
})

// vconsole
hostConfig.vconsole && new VConsole()

// 挂载到Vue身上
Vue.prototype.$Toast = Toast
Vue.prototype.$apis = apis
Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
