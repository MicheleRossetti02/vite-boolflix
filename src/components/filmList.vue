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
    methods: {
        setActiveIndex(index) {
            // let activeIndex = 0
            this.activeIndex = index + 1
            console.log(this.activeIndex);
            // this.store.push(activeIndex)
            // console.log(this.store.activeIndex); 
        },
    }
}

</script>

<template>

    <div class=" row row-cols-5">
        <CardFilm :film=film v-for="film, index in store.films" @click="setActiveIndex(index)"></CardFilm>
    </div>

</template>

<script scoped>

</script>