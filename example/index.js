import Vue from 'vue';
import ripple from '../src/ripple';

new Vue({
  el: 'body',
  components: { 
    'vue-haru-ripple': ripple 
  },
  data: {
    randomColor: '#'+(0x1000000+(Math.random())*0xffffff).toString(16).substr(1,6)
  }
});