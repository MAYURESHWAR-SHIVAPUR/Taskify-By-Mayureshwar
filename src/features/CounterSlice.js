import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    list: JSON.parse(window.localStorage.getItem("tasks")) || [],
};

const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        ReduxInput: (state, action) => {
            state.list.unshift({
                id: Date.now(),
                text: action.payload,
                completed: false,
                editable: false,
            });
        },

        toggleEdit: (state, action) => {
            const id = action.payload;
            state.list = state.list.map((e) =>
                e.id === id ? { ...e, editable: !e.editable } : e
            );

            window.localStorage.setItem("tasks", JSON.stringify(state.list));
        },

        updateText: (state, action) => {
            const { id, value } = action.payload;
            state.list = state.list.map((e) =>
                e.id === id ? { ...e, text: value } : e
            );

            window.localStorage.setItem("tasks", JSON.stringify(state.list));
        },

        toggleComplete: (state, action) => {
            const id = action.payload;
            state.list = state.list.map((e) =>
                e.id === id ? { ...e, completed: !e.completed } : e
            );

            window.localStorage.setItem("tasks", JSON.stringify(state.list));
        },

        deleteTodo: (state, action) => {
            const id = action.payload;
            state.list = state.list.filter((e) => e.id !== id);

            window.localStorage.setItem("tasks", JSON.stringify(state.list));
        }

    },
});
export const {
    ReduxInput,
    toggleEdit,
    updateText,
    toggleComplete,
    deleteTodo
} = counterSlice.actions;

export default counterSlice.reducer;
