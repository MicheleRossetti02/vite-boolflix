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
            console.log(lang_code);
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

    <ul>

        <img class="col-auto" :src="store.API_IMG + film.poster_path" alt="">
        <li>
            {{ film.title }}
        </li>
        <li>
            {{ film.original_title }}
        </li>
        <li>
            <img class="icon" v-if="flag(film.original_language)" :src="generateFlag(film.original_language)" alt="">
            <span v-else>{{ film.original_language }}</span>
        </li>
        <!-- 
        <li v-if="film.original_language === 'en'">
            <img class="icon" src="../assets/img/en.png" alt="">
        </li>
        <li v-else="film.original_language === 'ja'">
            <img class="icon" src="../assets/img/ja.png" alt="">
        </li> -->
        <div class=" d-flex">
            <!-- stelline voto -->
            <strong class="">Voto: </strong>
            <div v-for="n in store.voteStar(film.vote_average)"><i class="fa-solid fa-star yellow"></i></div>
            <div v-for="n in 5 - store.voteStar(film.vote_average)"><i class="fa-solid fa-star grey"></i>
            </div>
        </div>
        <!-- v-for="n in store.voteStar(vote)" -->
    </ul>


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