import { configureStore } from '@reduxjs/toolkit';

import notesReducer from './features/noteSlice';

export default configureStore({
    reducer: {
        notes: notesReducer
    }
});

