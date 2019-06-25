// Vue main file

import {main} from './moduels'
import Vue from 'vue'
import Clocks from './components/Clocks.vue'
import BackgroundSlider from './components/BackgroundSlider.vue'

window.onload = () => {
    main()
}

Vue.component('clocks', Clocks);
Vue.component('bg-slider', BackgroundSlider);

const app = new Vue({
    el: '#app'
});
