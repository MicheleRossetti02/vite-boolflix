<script>
import { store } from '../store'

export default {
    name: 'Searchbar',
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

    <div class="input-group mb-3 d-flex">
        <input type="text" class="form-control" placeholder="cerca" aria-label="cerca un film o una serie tv"
            aria-describedby="button-addon2" v-model="store.searchText" @keyup.enter="$emit('searchFunction')">
        <button class="btn btn-light" type="button" id="button-addon2 " @click="$emit('searchFunction')">search</button>
    </div>

</template>
<style>
/* 
.input-group {
    height: 50%;
    align-items: center;
} */
</style>