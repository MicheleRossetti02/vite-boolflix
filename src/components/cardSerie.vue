<script>
import { store } from '../store'
export default {
    name: 'cardSerie',
    props: {
        serie: Object
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
        <img class="col-auto" :src="store.API_IMG + film.poster_path" alt="">

        <li>
            {{ serie.name }}
        </li>
        <li>
            {{ serie.original_name }}
        </li>
        <li v-if="serie.original_language === 'en'">
            <img class="icon" src="../assets/img/en.png" alt="">
        </li>
        <li v-else="serie.original_language === 'ja'">
            <img class="icon" src="../assets/img/ja.png" alt="">
        </li>
        <div class=" d-flex">
            <!-- stelline voto -->
            <strong class="">Voto: </strong>
            <div v-for="n in store.voteStar(serie.vote_average)"><i class="fa-solid fa-star yellow"></i></div>
            <div v-for="n in 5 - store.voteStar(serie.vote_average)"><i class="fa-solid fa-star grey"></i>
            </div>
        </div>

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