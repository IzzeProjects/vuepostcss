// Vue main file

import {main} from './moduels'
import Vue from 'vue'
import Clocks from './components/Clocks.vue'
import BackgroundSlider from './components/BackgroundSlider.vue'
import TitleAnimation from './components/TitleAnimation.vue'

window.onload = () => {
    main()
}

// ----------------------use-section-------------------------------------------->

// ----------------------------------------------------------------------------->


// ----------------------component-section-------------------------------------->

Vue.component('clocks', Clocks);
Vue.component('bg-slider', BackgroundSlider);
Vue.component('t-animation', TitleAnimation);

// ----------------------------------------------------------------------------->


// ---------------------Main-instance-of-Vue------------------------------------>

const app = new Vue({
    el: '#app'
});

// -------------------------Instances-of-Vue------------------------------------>

// ----------------------------------------------------------------------------->





