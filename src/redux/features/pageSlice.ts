import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type PageState = {
    slug?: string,
    title?: string,
};

const initialState = {
    slug: '/',
    title: 'Home',
} as PageState;

export const page = createSlice({
    name: "page",
    initialState,
    reducers: {
        reset: () => initialState,
        setSlug: (state,action: PayloadAction<string>) => {
            state.slug = action.payload;
        },
        setTitle: (state,action: PayloadAction<string>) => {
            state.title = action.payload;
        },
    },
});

export const {
    reset,
    setTitle,
    setSlug,
} = page.actions;
export default page.reducer;