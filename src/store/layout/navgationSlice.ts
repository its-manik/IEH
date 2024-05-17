import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface LayoutState {
    sidebarOpen: boolean;
}

const initialState: LayoutState = {
    sidebarOpen: false,
};

const layoutSlice = createSlice({
    name: 'layout',
    initialState,
    reducers: {
        toggleSidebar: (state) => {
            state.sidebarOpen = !state.sidebarOpen;
        },
    },
});

export const { toggleSidebar } = layoutSlice.actions;

export default layoutSlice.reducer;