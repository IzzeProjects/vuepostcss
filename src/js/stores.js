import Vue from 'vue'
import Vuex from 'vuex'
import store from './components/store'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        storeModule: store,
    }
})