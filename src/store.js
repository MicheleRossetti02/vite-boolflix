import { reactive } from 'vue'
export const store = reactive({
    API_URL: "https://api.themoviedb.org/3/search/movie",
    films: null,
    searchText: '',
    api_key: '80443d86cca3d27b78ae700406fddecb',
    completeApi: '',
})

// ?api_key=80443d86cca3d27b78ae700406fddecb&language=en-US&page=1&include_adult=false&query=matrix