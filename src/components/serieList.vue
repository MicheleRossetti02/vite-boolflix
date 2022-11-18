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

}

</script>

<template>
    <div class=" row row-cols-5">
        <CardSerie :serie=serie v-for="serie in store.series"></CardSerie>
    </div>

</template>

<script scoped>

</script>