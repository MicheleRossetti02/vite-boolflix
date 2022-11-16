<script>
import { store } from '../store'

export default {
    name: 'searchbar',
    emits: [
        'searchFunction',
        // 'newFilm'
    ],

    data() {
        return {
            store
        }
    }
}

</script>

<template>

    <div class="input-group mb-3">
        <input type="text" class="form-control" placeholder="cerca un film" aria-label="cerca un film"
            aria-describedby="button-addon2" v-model="store.searchText">
        <button class="btn btn-outline-secondary" type="button" id="button-addon2 "
            @click="$emit('searchFunction')">search</button>
    </div>

</template>
