<template>
    <div>
        <h2>Lista dei frutti!</h2>
        <ul>
            <li v-for="(frutto, index) in frutti" :key="index"> {{ frutto }}</li>
        </ul>
    </div>    
</template>

<script>
export default {
    name: "ListaFrutti",
    data() {
        return {
            frutti: ['Mela', 'Pera', 'Banana', 'Kiwi', 'Ananas']
        }
    }    
}
</script>