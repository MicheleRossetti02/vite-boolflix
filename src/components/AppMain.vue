<script >
import axios from "axios";
import searchbar from './searchbar.vue';
import { store } from '../store';
import { onMounted } from "vue";
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

            this.store.completeApi = `${store.API_URL}?api_key=${store.api_key}&language=en-US&page=1&include_adult=false&query=${this.store.searchText}`
            // console.log(film);
            console.log(this.store.completeApi);
            return this.store.completeApi
        },
        searchFilms(url) {
            console.log(url);
        }
    },
    mounted() {
        this.searchFilms(this.store.completeApi)
    }
}

</script>

<template>


    <searchbar @searchFunction="filmSelector" />

</template>

<style scoped>

</style>
