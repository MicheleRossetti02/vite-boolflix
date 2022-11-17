<script>
import { store } from '../store'
export default {
    name: 'cardFilm',
    props: {
        film: Object
    },
    data() {
        return {
            store
        }
    }

}

</script>

<template>

    <ul>
        <li>
            {{ film.title }}
        </li>
        <li>
            {{ film.original_title }}
        </li>
        <li v-if="film.original_language === 'en'">
            <img src="../assets/img/en.png" alt="">
        </li>
        <li v-else="film.original_language === 'ja'">
            <img src="../assets/img/ja.png" alt="">
        </li>
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
    width: 20px;
}

.yellow {
    color: rgb(234, 234, 33);

}

.grey {
    color: rgb(167, 160, 160);
}
</style>