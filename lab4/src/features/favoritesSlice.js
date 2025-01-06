import { createSlice } from '@reduxjs/toolkit';

const favoritesSlice = createSlice({
    name: 'favorites',
    initialState: {
        favoriteMovies: [],
    },
    reducers: {
        addToFavorites: (state, action) => {
            if (!state.favoriteMovies.some(movie => movie.id === action.payload.id)) {
                state.favoriteMovies.push(action.payload);
            }
        },
        removeFromFavorites: (state, action) => {
            state.favoriteMovies = state.favoriteMovies.filter(movie => movie.id !== action.payload.id);
        },
    },
});

export const { addToFavorites, removeFromFavorites } = favoritesSlice.actions;
export default favoritesSlice.reducer;

