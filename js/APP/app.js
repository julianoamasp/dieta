import { store } from './store/appStore.js';
import { router } from './router/router.js';
import { CookieService } from './service/CookieService.js'
import {Login} from './component/login/index.js'

const App = {
  data() {
    return {
      _modalLoginAberto: 'hidden',//hidden | flex
      nada: ""
    }
  },
  methods: {
    logar() {
      let cookies = CookieService.cookieExists();
      if(cookies != null){
        store.commit('logar')
      }else{
        console.log("não tem cookies")
      }
    }
  },
  computed: {
    logado() {
      return store.state.logado
    }
  },
  template: `
<login />


            <header class="bg-white shadow-md">
                <div class="container mx-auto px-6 py-4 flex justify-between items-center">
                    <h1 class="text-xl font-semibold text-gray-900">DIETA e ACOMPANHAMENTO</h1>
                    <nav>
                        <ul class="flex space-x-6 text-gray-600">
                        {{logado}}--
                            <router-link active-class="active-link" to="/" class="hover:text-gray-900">Home</router-link>
                            <router-link active-class="active-link" to="/informacoes" class="hover:text-gray-900">Informações</router-link>
                            <div v-if="logado != null">Logado</div>
                            <div v-if="logado == null">Deslogado <button @click="logar()">logar</button></div>
                        </ul>
                    </nav>
                </div>
            </header>
            <router-view></router-view>

             
    <div id="modal" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center " :class="this._modalLoginAberto" >
    <div class="bg-white rounded-lg shadow-lg w-11/12 max-w-md">
      <!-- Header -->
      <div class="flex justify-between items-center border-b p-4">
        <h2 class="text-xl font-semibold">Título do Modal</h2>
        <button 
          id="closeModal" 
          class="text-gray-500 hover:text-gray-700 focus:outline-none">
          &times;
        </button>
      </div>
      <!-- Corpo -->
      <div class="p-4">
        <p class="text-gray-700">Este é o conteúdo do modal. Adicione o que for necessário aqui!</p>
      </div>
      <!-- Footer -->
      <div class="flex justify-end border-t p-4">
        <button id="closeModalFooter" class="bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400">Fechar</button>
        <button @click="logar()" id="closeModalFooter" class="bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400">Entrar</button>
      </div>
    </div>
  </div>
    `,
};

const app = Vue.createApp(App);
app.use(store);
app.use(router);
app.mount('#app');
