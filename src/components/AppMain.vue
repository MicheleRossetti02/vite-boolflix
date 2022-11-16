<script >
import searchbar from './searchbar.vue';
import { store } from '../store'
export default {
    name: 'AppMain',
    components: {
        searchbar
    },
    data() {
        return {
            store
        }
    },
    methods: {
        filmSelector() {
            console.log(this.store.searchText);
            const api_key = '80443d86cca3d27b78ae700406fddecb';
        }

    }
}

</script>

<template>


    <searchbar @searchFunction="filmSelector" />

</template>

<style scoped>

</style>
