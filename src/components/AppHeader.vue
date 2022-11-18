<script >
import Searchbar from './Searchbar.vue';
import { store } from '../store.js';
import axios from "axios";


export default {
    name: 'AppHeader',
    components: {
        Searchbar
    },
    data() {
        return {
            store
        }

    },
    methods: {
        activeButton() {
            if (store.show === false) {
                store.show = true

            }
            else {
                store.show = false
            }

        },
        searchFilms() {
            // console.log(this.store.searchText);

            // console.log(url);
            console.log(this.store.searchText);

            this.store.apiFilm = `${this.store.API_URL}?api_key=${this.store.api_key}&language=en-US&page=${this.store.page}&include_adult=false&query=${this.store.searchText}`
            this.store.apiSerie = `${this.store.API_URL_SERIE}?api_key=${this.store.api_key}&language=en-US&page=${this.store.page}&include_adult=false&query=${this.store.searchText}`
            // this.store.apiImg = `${this.store.API_IMG}${this.store.films.poster_path}`
            // console.log(this.store.apiFilm);
            console.log(this.store.apiSerie);
            console.log(this.store.apiImg);

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
            this.store.searchText = ''
        }
    },
}

</script>

<template>
    <div class="container-fluid">
        <div class="row align-items-center">
            <div class="col">
                <img src="../assets/img/logoNetflix.png" alt="">
                <a class="px-2" href="">Home</a>
                <a class="px-2" href="">Serie Tv</a>
                <a class="px-2" href="">Film</a>
                <a class="px-2" href="">Nuovi e popolari</a>
                <a class="px-2" href="">La mia lista</a>
                <a class="px-2" href="">Sfoglia per lingua</a>
            </div>
            <div class="col  right-bar">

                <div class="col-1 ">
                    <button type="button" class="btn btn-link" @click="activeButton">
                        <i class="fa-solid fa-magnifying-glass text-white"></i>

                    </button>

                </div>
                <div class=" search  p-0 align-items-center " v-if="store.show">

                    <Searchbar @searchFunction="searchFilms" />

                </div>
            </div>
        </div>

    </div>

</template>

<style scoped>
/* .right-bar {
    flex-direction: row-reverse;
} */
.search {
    width: 350px;
    position: absolute;
    right: 85px;
    top: 25px;
}

.barra {
    width: 100%;
    height: 100%;
}

.container-fluid {
    background-color: black;
    position: absolute;
}

button {
    position: absolute;
    right: 40px;
    top: 22px;

}

img {
    width: 150px;
}

a {
    text-decoration: none;
    color: white;
}
</style>
