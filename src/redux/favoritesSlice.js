import { createSlice } from '@reduxjs/toolkit';

const favoritesSlice = createSlice({
    name: 'favorites',
    initialState: [],
    reducers: {
        addFavorite: (state, action) => {
            const exists = state.find(article => article.url === action.payload.url);
            if (!exists) {
                state.push(action.payload);
            }
        },
        removeFavorite: (state, action) => {
            return state.filter(article => article.url !== action.payload.url);
        },
    },
});

export const { addFavorite, removeFavorite } = favoritesSlice.actions;
export default favoritesSlice.reducer;
