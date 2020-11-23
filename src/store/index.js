import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    dataList: []
  },
  mutations: {
    getData: (state, payload) => {
      state.dataList = payload;
    }
  },
  actions: {
    getData: context => {
      fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => 
          response.json()
        )
        .then(json => {
          context.commit("getData", json);
        })
      .catch(err => {
        console.error(err);
      });
      
    }
  },
  modules: {}
});
