<script>
import CardSerie from './CardSerie.vue'
import { store } from '../store.js'

export default {
    name: 'SerieList',
    components: {
        CardSerie
    },
    data() {
        return {
            store
        }
    },
    methods: {
        setActiveIndex(index) {
            this.activeIndex = index + 1
            console.log(this.activeIndex);
        },
        // infoCard() {
        //     if (store.showCard === true) {
        //         store.showCard = false

        //     }
        //     else {
        //         store.showCard = true
        //     }
        // }
    }

}

</script>

<template>
    <div class=" row row-cols-5">
        <CardSerie :serie=serie v-for=" serie, index in store.series" @click="setActiveIndex(index)"></CardSerie>
    </div>

</template>

<script scoped>

</script>