import { reactive } from 'vue'
export const store = reactive({
    API_URL: "https://api.themoviedb.org/3/search/movie",
    API_URL_SERIE: 'https://api.themoviedb.org/3/search/tv',
    API_IMG: 'https://image.tmdb.org/t/p/w342',
    api_key: '80443d86cca3d27b78ae700406fddecb',
    page: 1,
    films: null,
    series: null,
    searchText: '',
    apiFilm: '',
    apiSerie: '',
    apiImg: '',
    n: 0,
    showBar: false,
    showCard: true,
    activeindex: 0,
    flags: [
        'en',
        'ja',
        'it'

    ],



    voteStar(vote) {
        let newVote = vote / 2;
        const rating = Math.ceil(newVote)
        // console.log(vote);
        // console.log(newVote);
        // console.log(rating);s
        return rating

    }

})

// ?api_key=80443d86cca3d27b78ae700406fddecb&language=en-US&page=1&include_adult=false&query=matrix