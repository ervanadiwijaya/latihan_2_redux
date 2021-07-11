import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    data: [],
    status: 'idle',
    error: null
};
export const fetchNotes = createAsyncThunk('notes/fetchNotes', async () => {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/posts`);
    const data = await response.json();
    return data;
});
const notesSlice = createSlice({
    name: 'notes',
    initialState,
    reducers: {},
    extraReducers: {
        [fetchNotes.pending]: (state, action) => {
            state.status = 'loading';
        },
        [fetchNotes.fulfilled]: (state, action) => {
            state.status = 'succeeded';
            state.data = action.payload;
        },
        [fetchNotes.rejected]: (state, action) => {
            state.status = 'failed';
            state.error = action.error.message;
        }
    }
});

export const getAllNotes = (state) => state.notes;

export const { noteAdded } = notesSlice.actions;

export default notesSlice.reducer;