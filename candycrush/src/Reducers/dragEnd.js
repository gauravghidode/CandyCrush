import { checkForRowOfFour, isColumnOfFour } from "../utils/checkLogic";
import { formulaForColumnOfFour, formulaForColumnOfThree, generateInvalidMoves } from "../utils/formulas";
import { checkForRowOfThree } from "../utils/checkLogic";
import { checkForColumnOfThree } from "../utils/checkLogic";

export const dragEndReducer = (state)=>{
    const newBoard = [...state.board];
    let {boardSize, squareBeingDragged, squareBeingReplaced} = state;
    const squareBeingDraggedId = parseInt(squareBeingDragged?.getAttribute('candy-id'));
    const squareBeingReplacedId = parseInt(squareBeingReplaced?.getAttribute('candy-id'))

    newBoard[squareBeingReplacedId] = squareBeingDragged?.getAttribute("src");
    newBoard[squareBeingDraggedId] = squareBeingReplaced?.getAttribute("src");

    const validMoves = [
        squareBeingDraggedId -1,
        squareBeingDraggedId - boardSize,
        squareBeingDraggedId +1,
        squareBeingDraggedId + boardSize,
    ];

    const validMove = validMoves.includes(squareBeingReplacedId);

    const isAColumnOfFour = isColumnOfFour(newBoard, boardSize, formulaForColumnOfFour(boardSize));

    const isARowOfFour = checkForRowOfFour(newBoard, boardSize, generateInvalidMoves(boardSize, true));

    const isAColumnOfThree = checkForColumnOfThree(newBoard, boardSize, formulaForColumnOfThree(boardSize));

    const isARowOfThree = checkForRowOfThree(newBoard, boardSize, generateInvalidMoves(boardSize));

    if(squareBeingReplacedId && validMove && (isARowOfThree || isARowOfFour || isAColumnOfFour || isAColumnOfThree)){
        squareBeingDragged = undefined;
        squareBeingReplaced = undefined;
    }else{
        newBoard[squareBeingReplacedId] = squareBeingReplaced?.getAttribute("src")
        newBoard[squareBeingDraggedId] = squareBeingDragged?.getAttribute('src')
    }   
    state.board = newBoard;
}

