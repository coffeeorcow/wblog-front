import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        isLogin: false,
        user: {
            id: 0,
            userName: '',
            email: '',
            avatar: '',
            gender: 0 
        },
        query: '',
        article: {
            id: 0
        }
    },
    mutations: {
        setInfo(state, user) {
            state.isLogin = true;
            state.user.id = user.id;
            state.user.userName = user.userName;
            state.user.email = user.email;
            state.user.avatar = user.avatar;
            state.user.gender = user.gender;
        },

        clearInfo(state) {
            state.isLogin = false;
            state.user.id = 0;
            state.user.userName = '';
            state.user.email = '';
            state.user.avatar = '';
            state.user.gender = 0;
        },

        setQuery(state, query) {
            state.query = query;
        },

        setArticle(state, id) {
            state.article.id = id;
        }
    }
});