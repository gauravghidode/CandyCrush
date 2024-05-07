import {configureStore, createSlice } from '@reduxjs/toolkit'
import { moveBelowReducer } from '../Reducers/moveBelow';
import { dragEndReducer } from '../Reducers/dragEnd';


const initialState = {
    board : [],
    boardSize: 8,
    squareBeingDragged: undefined,
    squareBeingReplaced: undefined,
}

const candyCrushSlice = createSlice({
    name: "candyCrush",
    initialState,
    reducers:{
        updateBoard(state, action){
            state.board = action.payload;
        },
        dragStart: (state, action)=>{
            state.squareBeingDragged = action.payload;
        },
        moveBelow: moveBelowReducer,
        dragDrop: (state, action)=>{
            state.squareBeingReplaced = action.payload;
        },
        dragEnd: dragEndReducer
    }
})

export const {updateBoard, moveBelow, dragDrop, dragEnd, dragStart} = candyCrushSlice.actions;
export const store = configureStore({
    reducer:{
        candyCrush: candyCrushSlice.reducer,
    },
});


