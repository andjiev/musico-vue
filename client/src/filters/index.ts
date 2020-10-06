import Vue from 'vue';

Vue.filter("overflow", str => str.length > 15
    ? str.substring(0, 15) + '...'
    : str);