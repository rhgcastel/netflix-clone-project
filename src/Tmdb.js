const api_key = '';
const api_base = 'https://api.themoviedb.org/3';

const basicFetch = async (endpoint) => {
    const req = await fetch(`${api_base}${endpoint}`);
    const json = await req.json();
    return json;
}

export const getHomeList = async () => {
    return [
        {
            slug: 'originals',
            title: 'Netflix Originals',
            items: await basicFetch(`/discover/tv?with_network=213&api_key=${api_key}`),
        },
        {
            slug: 'trending',
            title: 'Trending Now',
            items: await basicFetch(`/trending/all/week?api_key=${api_key}`),
        },
        {
            slug: 'topRated',
            title: 'Top Rated',
            items: await basicFetch(`/movie/top_rated?api_key=${api_key}`),
        },
        {
            slug: 'action',
            title: 'Action',
            items: await basicFetch(`/discover/movie?with_genres=28&api_key=${api_key}`),
        },
        {
            slug: 'comedy',
            title: 'Comedy',
            items: await basicFetch(`/discover/movie?with_genres=35&api_key=${api_key}`),
        },
        {
            slug: 'horror',
            title: 'Horror',
            items: await basicFetch(`/discover/movie?with_genres=27&api_key=${api_key}`),
        },
        {
            slug: 'romance',
            title: 'Romance',
            items: await basicFetch(`/discover/movie?with_genres=10749&api_key=${api_key}`),
        },
        {
            slug: 'animation',
            title: 'Animation',
            items: await basicFetch(`/discover/movie?with_genres=16&api_key=${api_key}`),
        },
    ];
}
export const getMovieInfo= async (movieId, type) => {
    let info = {};

    if (movieId) {
        switch (type) {
            case 'movie':
                info = await basicFetch(`/movie/${movieId}?api_key=${api_key}`);
                break;
            case 'tv':
                info = await basicFetch(`/tv/${movieId}?api_key=${api_key}`);
                break;
            default:
                info = null;
                break;
        }
        return info;
    }
};
