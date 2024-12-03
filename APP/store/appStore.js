export const store = Vuex.createStore({
    state() {
        return {
            contador: 0
        };
    },
    mutations: {
        incrementar(state) {
            state.contador++;
        }
    },
    actions: {
        incrementar({ commit }) {
            commit('incrementar');
        }
    },
    getters: {
        contador: state => state.contador
    }
});
