<script >
import axios from "axios";
import searchbar from './searchbar.vue';
import filmList from "./filmList.vue";
import serieList from "./serieList.vue";
import { store } from '../store';
export default {
    name: 'AppMain',
    components: {
        searchbar,
        filmList,
        serieList
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

            this.store.apiFilm = `${this.store.API_URL}?api_key=${this.store.api_key}&language=en-US&page=${this.store.page}&include_adult=false&query=${this.store.searchText}`
            this.store.apiSerie = `${this.store.API_URL_SERIE}?api_key=${this.store.api_key}&language=en-US&page=${this.store.page}&include_adult=false&query=${this.store.searchText}`
            console.log(this.store.apiFilm);
            // this.callApi(this.store.apiFilm);
            axios.get(this.store.apiFilm)
                .then(response => {
                    this.store.films = response.data.results
                    console.log(this.store.films);
                })

            axios.get(this.store.apiSerie)
                .then(response => {
                    this.store.series = response.data.results
                    console.log(this.store.series);
                })
        }
    },
    //    &language=en-US&page=1&include_adult=false&query=tom


}

</script>

<template>

    <searchbar @searchFunction="searchFilms" />
    <filmList />
    <serieList />


</template>

<style scoped>

</style>
