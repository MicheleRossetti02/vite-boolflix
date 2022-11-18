<script>
import { store } from '../store'
export default {
    name: 'CardFilm',
    props: {
        film: Object
    },
    data() {
        return {
            store,

        }
    },
    methods: {
        generateFlag(lang_code) {
            // console.log(lang_code);
            return new URL(`../assets/img/${lang_code}.png`, import.meta.url).href
        },
        flag(lang_code) {
            if (this.store.flags.includes(lang_code)) {
                return true

            }
            return false

        }

    },

}

</script>

<template>

    <div class="card" style="width: 18rem;">

        <img :src="store.API_IMG + film.poster_path" alt="">

        <div v-if="film.title === film.original_title">
            <h5>{{ film.title }}</h5>

        </div>
        <div v-else>
            <h4>{{ film.title }}</h4>
            <p class="mb-1">
                {{ film.original_title }}

            </p>
        </div>
        <img class="icon" v-if="flag(film.original_language)" :src="generateFlag(film.original_language)" alt="">
        <span v-else>{{ film.original_language }}</span>
        <div class=" d-flex">
            <!-- stelline voto -->
            <strong class="">Voto: </strong>
            <div v-for="n in store.voteStar(film.vote_average)"><i class="fa-solid fa-star yellow"></i></div>
            <div v-for="n in 5 - store.voteStar(film.vote_average)"><i class="fa-solid fa-star grey"></i></div>
        </div>

    </div>



</template>

<style scoped>
img {
    width: 100%;
}

.icon {
    width: 20px;

}

.yellow {
    color: rgb(234, 234, 33);

}

.grey {
    color: rgb(167, 160, 160);
}
</style>