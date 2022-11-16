<script>
export default {
    name: 'cardFilm',
    props: {
        film: Object
    },
}

</script>

<template>

    <ul>
        <li>
            {{ film.title }}
        </li>
        <li>
            {{ film.original_title }}
        </li>
        <li>
            {{ film.original_language }}
        </li>
        <li>
            {{ film.vote_average }}
        </li>

    </ul>


</template>