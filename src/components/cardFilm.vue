<script>
import { store } from '../store'
export default {
    name: 'CardFilm',
    props: {
        film: Object
    },
    data() {
        return {
            store
        }
    },
    methods: {
        generateFlag(lang_code) {
            // console.log(lang_code);
            return new URL(`../assets/img/${lang_code}.png`, import.meta.url).href
        },
        flag(lang_code) {
            if (this.store.flags.includes(lang_code)) {
                return true

            }
            return false

        },
        // infoCard() {
        //     if (store.showCard === true) {
        //         store.showCard = false
        //     }
        //     else {
        //         store.showCard = true
        //     }
        // }

        // },


    }
}
</script>

<template>
    <div class="filmCard p-0 position-relative">

        <!-- img card    -->
        <div class="card card-image">

            <img :src="store.API_IMG + film.poster_path" alt="">

        </div>


        <!-- card info -->
        <div class="card card-info position-absolute">
            <div class=" card-body">

                <!-- title -->
                <div class="title">
                    <div v-if="film.title === film.original_title">
                        <h5>{{ film.title }}</h5>
                    </div>
                    <div v-else>
                        <h4>{{ film.title }}</h4>
                        <p class="mb-1">
                            {{ film.original_title }}
                        </p>
                    </div>
                </div>

                <!-- language -->
                <div class="language flag">
                    <img class="icon" v-if="flag(film.original_language)" :src="generateFlag(film.original_language)"
                        alt="">
                    <span v-else>{{ film.original_language }}</span>
                </div>

                <!-- stelline voto -->
                <div class=" d-flex">
                    <strong class="">Voto: </strong>
                    <div v-for="n in store.voteStar(film.vote_average)"><i class="fa-solid fa-star yellow"></i></div>
                    <div v-for="n in 5 - store.voteStar(film.vote_average)"><i class="fa-solid fa-star grey"></i></div>
                </div>
            </div>
        </div>


    </div>

</template>

<style lang="scss" scoped>
.filmCard {
    /* position: relative; */
    width: calc(100%/12*1.5);
    /* height: 300px; */
    border: 1px solid transparent;
    height: 100%;

    &:hover {
        border: 1px solid black;
        overflow: hidden;
    }

    &:hover .card-info {
        display: block;
    }

    &:hover img {
        filter: opacity(5%);
    }

    .card-info {
        display: none;
        font-size: 0.75rem;
        font-weight: 200;

        .language img {
            filter: opacity(100%);
        }
    }

}



.card-info {
    /* position: relative; */

    /* height: 100%; */
    /* position: absolute; */
    width: 350px;
    height: 540px;
    top: 0;
}

/* 
img {
     width: 90%; 
} */

.icon {
    width: 20px;

}

.yellow {
    color: rgb(234, 234, 33);

}

.grey {
    color: rgb(167, 160, 160);
}
</style>