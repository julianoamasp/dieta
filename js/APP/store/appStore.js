import {UsuarioService} from '../service/UsuarioService.js'
export const store = Vuex.createStore({
    state() {
        return {
            contador: 0,
            logado: null
        };
    },
    mutations: {
        incrementar(state) {
            state.contador++;
        },
        logar(state){
            UsuarioService.DashBoard()
            console.log("sdfsd")
            state.logado = {usu:"teste"};
        }
    },
    actions: {
        incrementar({ commit }) {
            commit('incrementar');
        },
        logar(){
            commit('logar');
        }
    },
    getters: {
        contador: state => state.contador,
        logado: state => state.logado
    }
});
