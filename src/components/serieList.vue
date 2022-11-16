<script>
import cardSerie from './cardSerie.vue'
import { store } from '../store.js'

export default {
    name: 'filmList',
    components: {
        cardSerie
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
        <cardSerie :serie=serie v-for="serie in store.series"></cardSerie>
    </div>

</template>

<script scoped>

</script>