<template>
    <div id="isActive">       
        <div :class="{active: isActive}">Testo colorato se isActive è true</div>
        <button @click="toggleClass">Cambia Classe</button>
    </div>
    
</template>

<script>
export default {
    name: "CambiaClasse",
    data() {
        return {
            isActive: false
        }
    },
    methods: {
        toggleClass() {
            this.isActive = !this.isActive;
            // if (this.isActive) {
            //     this.isActive = false;
            // } else {
            //     this.isActive = true;
            // }
        }
    }
    
}
</script>

<style scoped>
.active {
    background: lightblue;
}

#isActive {
    padding: 50px 0
}
</style>