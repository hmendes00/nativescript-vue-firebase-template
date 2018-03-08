const firebase = require("nativescript-plugin-firebase");

firebase.init({
  }).then(
    instance => {
      console.log("firebase.init done");
    },
    error => {
      console.log(`firebase.init error: ${error}`);
    }
  );

const state = {
    messages: [],
};
  
const mutations = {
    showMore (state) {
        // user: db.collection('users').doc(this.$userId)
        // state.messages = db.collection('users').doc('UNf55B8j42HR5P1NHRHI').collection('conversations')
        
    }
};

const actions = {
    showMore: ({commit}) => commit('showMore'),
};

export default {
    state,
    mutations,
    actions,
};
  