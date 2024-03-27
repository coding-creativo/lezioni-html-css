<template>  
  <div>
    <MessaggioWelcome />
    <CounterComponent />
    <ListaFrutti />
    <CambiaClasse />
  </div>
</template>

<script>
import MessaggioWelcome from "./components/MessaggioWelcome.vue";
import CounterComponent from "./components/CounterComponent.vue";
import ListaFrutti from "./components/ListaFrutti.vue";
import CambiaClasse from "./components/CambiaClasse.vue";

export default {
  name: "App",
  components: {
    MessaggioWelcome,
    CounterComponent,
    ListaFrutti,
    CambiaClasse
  },
};
</script>

<style>
* {
  margin:0;
  padding: 0;
  box-sizing: border-box;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
