<script >
import axios from "axios";
import searchbar from './searchbar.vue';
import filmList from "./filmList.vue";
import { store } from '../store';
export default {
    name: 'AppMain',
    components: {
        searchbar,
        filmList
    },
    data() {
        return {
            store
        }
    },
    methods: {
        searchFilms() {
            // console.log(this.store.searchText);

            // console.log(url);
            console.log(store.searchText);

            this.store.completeApi = `${this.store.API_URL}?api_key=${this.store.api_key}&language=en-US&page=1&include_adult=false&query=${this.store.searchText}`

            console.log(this.store.completeApi);
            // this.callApi(this.store.completeApi);
            axios.get(this.store.completeApi)
                .then(response => {
                    this.store.films = response.data.results
                    console.log(this.store.films);
                })
        }
    },


}

</script>

<template>

    <searchbar @searchFunction="searchFilms" />
    <filmList />

</template>

<style scoped>

</style>
