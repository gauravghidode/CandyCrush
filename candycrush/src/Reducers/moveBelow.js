import { candies } from "../utils/candyData";
import { formulaForMoveBelow } from "../utils/formulas";

export const moveBelowReducer = (state)=>{
    const newBoard=[...state.board];
    const {boardSize} = state;
    let boardChanges = false;
    const formulaForMove = formulaForMoveBelow(boardSize);
    for(let i=0;i<=formulaForMove;i++){
        const firstRow = Array(boardSize).fill(0).map((value, index)=> index);
        const isFirstRow = firstRow.includes(i);

        if(isFirstRow && newBoard[i]===""){
            let randomNumber = Math.floor(Math.random() * candies.length);
            newBoard[i] = candies[randomNumber];
            boardChanges = true;
        }

        if(newBoard[i+boardSize]===""){
            newBoard[i+boardSize] = newBoard[i];
            newBoard[i] = "";
            boardChanges = true;
        }

        if(boardChanges) state.board = newBoard;
    }
}