import { store } from './store/appStore.js';
import { router } from './router/router.js';

const App = {

    template: `
            <header class="bg-white shadow-md">
                <div class="container mx-auto px-6 py-4 flex justify-between items-center">
                    <h1 class="text-xl font-semibold text-gray-900">DIETA e ACOMPANHAMENTO</h1>
                    <nav>
                        <ul class="flex space-x-6 text-gray-600">
                            <router-link active-class="active-link" to="/" class="hover:text-gray-900">Home</router-link>
                            <router-link active-class="active-link" to="/informacoes" class="hover:text-gray-900">Informações</router-link>
                        </ul>
                    </nav>
                </div>
            </header>
            <router-view></router-view>
    `,
};

const app = Vue.createApp(App);
app.use(store);
app.use(router);
app.mount('#app');
