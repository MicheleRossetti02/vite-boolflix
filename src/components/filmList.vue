<script>
import cardFilm from './cardFilm.vue'
import { store } from '../store.js'

export default {
    name: 'filmList',
    components: {
        cardFilm
    },
    data() {
        return {
            store
        }
    },
    mounted() {
        console.log(this.store.films)
    }
}

</script>

<template>

    <div class=" row row-cols-5">
        <cardFilm :film=film v-for="film in store.films"></cardFilm>
    </div>

</template>

<script scoped>

</script>