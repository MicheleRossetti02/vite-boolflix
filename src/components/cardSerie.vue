<script>
import { store } from '../store'
export default {
    name: 'CardSerie',
    props: {
        serie: Object
    },
    data() {
        return {
            store,
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
        infoCard() {

        }
    },

}

</script>

<template>
    <div class="serieCard p-0 position-relative">

        <!-- img card    -->
        <div class="card card-image">

            <img class="col-auto" :src="store.API_IMG + serie.poster_path" alt="">

        </div>

        <div class="card card-info position-absolute">
            <div class=" card-body">


                <!-- title card -->
                <div class="title">
                    <div class="d-flex align-items-center" v-if="serie.name === serie.original_name">

                        <h5><strong>Titolo:</strong></h5>
                        <h5 class="ms-2">{{ serie.name }}</h5>
                    </div>
                    <div v-else>
                        <div class=" d-flex align-items-center">
                            <h5><strong>Titolo:</strong></h5>
                            <h5 class="ms-2">{{ serie.name }}</h5>
                        </div>
                        <div class="original-title d-flex align-items-center">
                            <h5><strong>Titolo originale:</strong></h5>

                            <h5 class="mb-1">
                                {{ serie.original_name }}
                            </h5>
                        </div>

                    </div>
                </div>

                <!-- info -->
                <div class="info-film ">
                    <strong>Trama: </strong>
                    <p>{{ serie.overview }}</p>
                </div>

                <div class="other-info position-absolute">

                    <!-- stelline voto -->
                    <div class=" d-flex voto">
                        <strong class="">Voto: </strong>
                        <div v-for="n in store.voteStar(serie.vote_average)"><i class="fa-solid fa-star yellow"></i>
                        </div>
                        <div v-for="n in 5 - store.voteStar(serie.vote_average)"><i class="fa-solid fa-star grey"></i>
                        </div>
                    </div>
                    <div class="language flag">
                        <!-- language flag -->
                        <strong class="">Lingua: </strong>

                        <img class="icon" v-if="flag(serie.original_language)"
                            :src="generateFlag(serie.original_language)" alt="">
                        <span v-else>{{ serie.original_language }}</span>
                    </div>

                </div>

                <!-- language -->


            </div>
            <!-- language -->


            <!-- stelline voto -->


        </div>




    </div>



</template>

<style lang="scss" scoped>
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
    max-height: 100%;
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

.serieCard {
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