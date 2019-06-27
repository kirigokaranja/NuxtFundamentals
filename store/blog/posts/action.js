import axios from 'axios';

export default {
    nuxtServerInit(vuexContext, context){
        return axios.get('https://nuxt-fundamentals.firebaseio.com/posts.json')
          .then(res => {
            const postsArray = []
            for(const key in res.data){
              postsArray.push({ ...res.data[key], id: key })
            }
            vuexContext.commit('setPosts', postsArray)
          })
          .catch(e => console.log(e))
      },
      setPosts(vuexContext, posts){
        vuexContext.commit('setPosts', posts)
      }
}