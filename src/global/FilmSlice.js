import { createSlice } from "@reduxjs/toolkit";
import { API } from "./FetchAPI";

const initialState = {
    films: [],
    shows: [],
    selectFilmsOrShows: [],
    loading: false,
    error: null
};

const FilmSlice = createSlice({
    name: "films",
    initialState: initialState,
    reducers: {
        removeFOS: (state) => {
            state.selectFilmsOrShows = [];
        },
    },
    extraReducers: {
        [API.getFilms.rejected]: (state, action) => {
            state.loading = false,
            state.error = action.payload
        },
        [API.getFilms.pending]: (state) => {
            state.loading = true
        },
        [API.getFilms.fulfilled]: (state, action) => {
            state.loading = false,
            state.films = action.payload
        },
        [API.fetchShows.rejected]: (state, action) => {
            state.loading = false,
            state.error = action.payload
        },
        [API.fetchShows.pending]: (state) => {
            state.loading = true
        },
        [API.fetchShows.fulfilled]: (state, action) => {
            state.loading = false,
            state.shows = action.payload
        },
        [API.fetchFilmOrShow.rejected]: (state, action) => {
            state.loading = false,
            state.error = action.payload
        },
        [API.fetchFilmOrShow.pending]: (state) => {
            state.loading = true
        },
        [API.fetchFilmOrShow.fulfilled]: (state, action) => {
            state.loading = false,
            state.filmsOrShows = action.payload
        },
    },
});

export const FilmActions = FilmSlice.actions;
export const FilmReducer = FilmSlice.reducer;



