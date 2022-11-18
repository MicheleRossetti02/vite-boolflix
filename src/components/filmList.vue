<script>
import CardFilm from './CardFilm.vue'
import { store } from '../store.js'

export default {
    name: 'FilmList',
    components: {
        CardFilm
    },
    data() {
        return {
            store
        }
    },

}

</script>

<template>

    <div class=" row row-cols-5">
        <CardFilm :film=film v-for="film in store.films"></CardFilm>
    </div>

</template>

<script scoped>

</script>