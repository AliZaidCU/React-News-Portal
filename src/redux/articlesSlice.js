import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchArticles } from '../services/api';

export const fetchArticlesAsync = createAsyncThunk(
    'articles/fetchArticles',
    async ({ category, query, page }) => {
        const response = await fetchArticles(category, query, page);
        return response.data;
    }
);

const articlesSlice = createSlice({
    name: 'articles',
    initialState: {
        articles: [],
        status: 'idle',
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchArticlesAsync.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchArticlesAsync.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.articles = action.payload.articles;
            })
            .addCase(fetchArticlesAsync.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    },
});

export default articlesSlice.reducer;
