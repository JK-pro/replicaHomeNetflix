const API_KEY = '6ac53819825cbb02d65d288c52528240';
const API_BASE = 'https://api.themoviedb.org/3';

const basicFetch = async (endpoint) => {
    const req = await fetch(`${API_BASE}${endpoint}`);
    const json = await req.json();
    return json;
}

export default {
    getHomeList: async () => {
        return[
            {
                slug: 'originals',
                title: 'Originals of Netflix',
                items: await basicFetch (`/discover/tv?with_network=213&api_key=${API_KEY}`)
            },
            {
                slug: 'trending',
                title: 'Recomends for You',
                items: await basicFetch (`/trending/all/week?api_key=${API_KEY}`)
            },
            {
                slug: 'toprated',
                title: 'On the Rise',
                items: await basicFetch (`/movie/top_rated?api_key=${API_KEY}`)
            },
            {
                slug: 'action',
                title: 'Action',
                items: await basicFetch (`/discover/movie?with_generes=28&api_key=${API_KEY}`)
            },
            {
                slug: 'comedy',
                title: 'Comedy',
                items: await basicFetch (`/discover/movie?with_generes=35&api_key=${API_KEY}`)
            },
            {
                slug: 'horror',
                title: 'Horror',
                items: await basicFetch (`/discover/movie?with_generes=27&api_key=${API_KEY}`)
            },
            {
                slug: 'romance',
                title: 'Romance',
                items: await basicFetch (`/discover/movie?with_generes=10749&api_key=${API_KEY}`)
            },
            {
                slug: 'documentary',
                title: 'Documentary',
                items: await basicFetch (`/discover/movie?with_generes=99&api_key=${API_KEY}`)
            }
        ]
    },
    getMovieInfo: async (movieId, type) => {
        let info = {};

        if(movieId) {
            switch(type) {
                case 'movie':
                    info = await basicFetch(`/movie/${movieId}?language=EN&api_key=${API_KEY}`);
                break;
                case 'tv':
                    info = await basicFetch(`/tv/${movieId}?language=EN&api_key=${API_KEY}`);
                break;
                default:
                    info = null;
                break;
            }
        }

        return info;
    }
}