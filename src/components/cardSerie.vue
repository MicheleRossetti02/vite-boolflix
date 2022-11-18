<script>
import { store } from '../store'
export default {
    name: 'CardSerie',
    props: {
        serie: Object
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

        },
        infoCard() {

        }
    },

}

</script>

<template>

    <div class="card" style="width: 18rem;">

        <img class="col-auto" :src="store.API_IMG + serie.poster_path" alt="">

        <!-- title card -->
        <div v-if="serie.name === serie.original_name">
            <h5> {{ serie.name }}</h5>

        </div>
        <div v-else>
            <h4> {{ serie.name }}</h4>

            <p class="mb-1">
                {{ serie.original_name }}
            </p>
        </div>

        <!-- language flag -->
        <img class="icon" v-if="flag(serie.original_language)" :src="generateFlag(serie.original_language)" alt="">
        <span v-else>{{ serie.original_language }}</span>

        <div class=" d-flex">
            <!-- stelline voto -->
            <strong class="">Voto: </strong>
            <div v-for="n in store.voteStar(serie.vote_average)"><i class="fa-solid fa-star yellow"></i></div>
            <div v-for="n in 5 - store.voteStar(serie.vote_average)"><i class="fa-solid fa-star grey"></i></div>
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