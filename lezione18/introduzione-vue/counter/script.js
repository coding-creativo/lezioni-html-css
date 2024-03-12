const app = Vue.createApp({
    data() {
        return {
            messaggio: "Hello World!",
            count: 0
        }
    },
    methods: {
        increment() {
            this.count++;
        },
        decrement() {
            if (this.count > 0) {
                this.count--;
            }            
        }
    }
});

app.mount('#app');