import Vue from 'vue'
import Vuex from 'vuex'
import { homeModule } from './modules/home'
Vue.use(Vuex)

export default new Vuex.Store({
    state: {},
    mutations: {},
    actions: {},
    modules: {
        [homeModule.name]: homeModule
    }
})
