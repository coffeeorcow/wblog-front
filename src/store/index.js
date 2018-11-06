import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        user: {
            id: 0,
            userName: '',
            email: '',
            avatar: '',
            gender: 0 
        }
    },
    mutations: {
        setInfo(state, user) {
            state.user.id = user.id;
            state.user.userName = user.userName;
            state.user.email = user.email;
            state.user.avatar = user.avatar;
            state.user.gender = user.gender;
        },
        clearInfo(state) {
            state.user.id = 0;
            state.user.userName = '';
            state.user.email = '';
            state.user.avatar = '';
            state.user.gender = 0;
        }
    }
});