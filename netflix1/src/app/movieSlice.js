import { createSlice } from '@reduxjs/toolkit'
const initialState = {
    upcoming: null,
    nowPlaying: null,
    popular: null,
    topRated: null,
}

export const movieSlice = createSlice({
    name: 'movies',
    initialState,
    reducers: {
        getUpcoming: (state, action) => {
            state.upcoming = action.payload;
        },
        getNowPlaying: (state, action) => {
            state.nowPlaying = action.payload;
        },
        getPopular: (state, action) => {
            state.popular = action.payload;
        },
        getTopRated: (state, action) => {
            state.topRated = action.payload;
        },
    },
})

export const { getNowPlaying, getPopular, getTopRated, getUpcoming } = movieSlice.actions
export default movieSlice.reducer