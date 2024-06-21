import axios from 'axios';

const API_KEY = '9cc5e1d9308449c18a33134b4984e424'; // Replace this with your actual API key
const BASE_URL = 'https://newsapi.org/v2';

export const fetchArticles = (category, query, page) => {
    return axios.get(`${BASE_URL}/top-headlines`, {
        params: {
            category: category || undefined,
            q: query || undefined,
            page,
            apiKey: API_KEY,
        },
    });
};
