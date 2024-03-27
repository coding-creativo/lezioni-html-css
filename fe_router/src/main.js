import { createApp } from 'vue'; // Importa la funzione createApp da Vue 3
import App from './App.vue';
import router from './router';

const app = createApp(App); 
// Crea un'istanza dell'applicazione utilizzando la funzione createApp
app.use(router); // Usa il router

app.mount('#app'); 
// Monta l'applicazione nell'elemento con id "app" nel DOM