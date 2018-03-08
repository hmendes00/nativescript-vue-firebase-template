import Vue from 'nativescript-vue';
import Vuex from 'vuex';

import counter from './modules/counter';
import chatlist from './modules/chatlist';

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

const store = new Vuex.Store({
  modules: {
    counter,
    chatlist,
  },
  strict: debug,
});

Vue.prototype.$store = store;

module.exports = store;