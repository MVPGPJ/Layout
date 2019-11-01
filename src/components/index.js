import Vue from 'vue'
import Offline from './Offline'
[Offline].forEach(item => {
    Vue.component(item.name, item)
})
