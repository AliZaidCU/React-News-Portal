import { createSlice } from '@reduxjs/toolkit';

const categoriesSlice = createSlice({
    name: 'categories',
    initialState: 'general',
    reducers: {
        setCategory: (state, action) => action.payload,
    },
});

export const { setCategory } = categoriesSlice.actions;
export default categoriesSlice.reducer;
