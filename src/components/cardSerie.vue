<script>
export default {
    name: 'cardSerie',
    props: {
        serie: Object
    },
}

</script>

<template>

    <ul>
        <li>
            {{ serie.name }}
        </li>
        <li>
            {{ serie.original_name }}
        </li>
        <li v-if="serie.original_language === 'en'">
            <img src="../assets/img/en.png" alt="">
        </li>
        <li v-else="serie.original_language === 'ja'">
            <img src="../assets/img/ja.png" alt="">
        </li>
        <li>
            {{ serie.vote_average }}
        </li>

    </ul>


</template>

<style scoped>
img {
    width: 20px;
}
</style>