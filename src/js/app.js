// Vue main file

import {main} from './moduels'
import Vue from 'vue'
import VueCarousel from 'vue-carousel'
import Clocks from './components/Clocks.vue'

window.onload = () => {
    main()
}

Vue.use(VueCarousel);
Vue.component('clocks', Clocks);

const app = new Vue({
    el: '#app'
});
