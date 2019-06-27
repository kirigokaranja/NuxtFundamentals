 
import Vuex from "vuex";

import Posts from './blog/posts';

const createStore = () => {
  return new Vuex.Store({

    namespaced: true,
    modules: {
      posts: Posts
    }
  })
}

export default createStore
