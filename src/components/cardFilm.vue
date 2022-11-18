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

            <img class="image-poster" :src="store.API_IMG + film.poster_path" alt="">

        </div>


        <!-- card info -->
        <div class="card card-info position-absolute">
            <div class=" card-body">

                <!-- title -->
                <div class="title">
                    <div class="d-flex align-items-center" v-if="film.title === film.original_title">
                        <h5><strong>Titolo:</strong></h5>
                        <h5 class="ms-2">{{ film.title }}</h5>
                    </div>
                    <div v-else>
                        <div class=" d-flex align-items-center">
                            <h5><strong>Titolo:</strong></h5>
                            <h5 class="ms-2">{{ film.title }}</h5>
                        </div>
                        <div class="original-title d-flex align-items-center">
                            <h5><strong>Titolo originale:</strong></h5>

                            <h5 class="mb-1">
                                {{ film.original_title }}
                            </h5>
                        </div>

                    </div>
                </div>
                <!-- info -->
                <div class="info-film ">
                    <h5> <strong>Trama: </strong></h5>
                    <p class="p-0 m-0">{{ film.overview }}</p>
                </div>

                <div class="other-info position-absolute">

                    <!-- stelline voto -->
                    <div class=" d-flex voto align-items-center">

                        <h5 class="pt-2"> <strong class="">Voto: </strong> </h5>
                        <div v-for="n in store.voteStar(film.vote_average)"><i class="fa-solid fa-star yellow"></i>
                        </div>
                        <div v-for="n in 5 - store.voteStar(film.vote_average)"><i class="fa-solid fa-star grey"></i>
                        </div>
                    </div>

                    <!-- language -->
                    <div class="language flag d-flex">
                        <h5> <strong class="">Lingua: </strong></h5>

                        <img class="icon ps-2 " v-if="flag(film.original_language)"
                            :src="generateFlag(film.original_language)" alt="">
                        <h5 class="ps-2" v-else>{{ film.original_language }}</h5>
                    </div>


                </div>
            </div>
        </div>


    </div>

</template>

<style lang="scss" scoped>
// .other-info {
//     // bottom: 90px;
// }
.card-image {
    height: 350px;
}

h5 {
    font-size: 0.8rem;
}

p {
    font-size: 0.7rem;

}

.card-info {
    /* position: relative; */
    // max-height: 355px;
    width: 100%;
    height: 100%;
    /* position: absolute; */
    // width: 359.5px;
    // height: 538.25px;
    top: 0;
    opacity: 0;
    overflow-y: auto;

    // .voto {
    //     position: absolute;
    //     bottom: 10px;
    // }
}

.filmCard {
    /* position: relative; */
    width: calc(100%/12*1.5);
    /* height: 300px; */
    border: 1px solid white;

    // height: 540px;

    img {
        width: 100%;
        height: 100%;

        // object-fit: cover;
    }

    // &:hover .card-image {
    //     // opacity: 100%;
    // }

    &:hover .card-info {
        // display: block;
        font-size: 1rem;
        opacity: (85%);



        .language img {
            // filter: opacity(100%);
            width: 30px;

        }
    }

    // &:hover img {
    //     // filter: opacity(20%);
    // }

}




/* 
img {
     width: 90%; 
} */


.yellow {
    color: rgb(234, 234, 33);

}

.grey {
    color: rgb(167, 160, 160);
}
</style>