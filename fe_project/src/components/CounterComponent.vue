<template>
    <div id="counter">
        <h2>Contatore!</h2>
        <span>{{ count }}</span>
        <div>
            <button @click="increment">Incrementa</button>
            <button @click="decrement">Decrementa</button>
        </div>
    </div>   
</template>

<script>
export default {
    name: "CounterComponent",
    data() {
        return {
            count: 0
        }
    },
    methods: {
        increment () {
            this.count++;
        },
        decrement() {
            if (this.count > 0) {
                this.count--;
            }
        }
    }
}
</script>


<style scoped>

#counter {
    background-color: lightcoral;
    padding: 30px 0;
}

</style>