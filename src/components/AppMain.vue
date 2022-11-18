<script >
import AppHeader from "./AppHeader.vue";
import FilmList from "./FilmList.vue";
import SerieList from "./SerieList.vue";
export default {
    name: 'AppMain',
    components: {
        FilmList,
        SerieList,
        AppHeader
    },

    //    &language=en-US&page=1&include_adult=false&query=tom


}

</script>

<template>

    <AppHeader />

    <div class="container-fluid">
        <FilmList />
        <SerieList />
    </div>

</template>

<style scoped>
.container-fluid {
    position: relative;
}
</style>
