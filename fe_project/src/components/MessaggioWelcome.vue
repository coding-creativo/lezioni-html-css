<template>
    <div>
        <div id="saluto">
            <h2>Saluti! {{ message }} </h2>
            <button @click="saluta" class="btn">Saluta</button>
        </div>
        <div id="input">
            <input type="text" v-model="name" placeholder="inserisci il nome">
            <button @click="salutaNome" class="btn">Salutiamo</button>
            <div v-if="saluto">{{ saluto }}</div>
            <div v-else> Ancora devi inserire il nome!</div>
        </div>
    </div>
</template>

<script>
export default {
    name: "MessaggioWelcome",
    data() { // data = function () {}
        return {
            message : "Hello World!",
            name: '',
            saluto: ''
        }
    },
    methods: {
        saluta() {
            alert('Ciao a tutti');
        },
        salutaNome () {
            this.saluto = `Ciao ${this.name}`;
        }
    }
}
</script>

<style scoped>
#saluto {
    background-color: lightblue;
    color: blue;
    padding: 20px 0;
}

.btn {
    background: green;
    padding: 20px;
    border: none;
}

#input {
    padding: 40px 0;
}
</style>