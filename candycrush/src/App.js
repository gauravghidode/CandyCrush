import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createBoard } from "./utils/createBoards";
import Board from "./components/Board.jsx";
import {moveBelow, updateBoard} from './Store/store.js'
import { checkForRowOfFour, checkForRowOfThree, isColumnOfFour, isColumnOfThree } from "./utils/checkLogic.js";
import { formulaForColumnOfFour, formulaForColumnOfThree, generateInvalidMoves } from "./utils/formulas.js";
import { dragDrop, dragEnd, dragStart } from "./Store/store.js";

function App() {

  const dispatch = useDispatch;
  const board = useSelector((state)=>state.candyCrush.board);
  const boardSize = useSelector((state)=>state.candyCrush.boardSize);

  useEffect(()=>{
    dispatch(updateBoard(createBoard(boardSize)));
    // console.log(board)
  }, [dispatch, boardSize]); 

  useEffect(()=>{
    const timeout = setTimeout(()=>{
      const newBoard = [...board];
      isColumnOfFour(newBoard, boardSize, formulaForColumnOfFour(boardSize));
      isColumnOfThree(newBoard, boardSize, formulaForColumnOfThree(boardSize))
      checkForRowOfFour(newBoard, boardSize, generateInvalidMoves(boardSize, true));
      checkForRowOfThree(newBoard, boardSize, generateInvalidMoves(boardSize, true));
      dispatch(updateBoard(newBoard));
      dispatch(moveBelow());
    }, 150);
    return ()=>clearInterval(timeout);
  },[board, boardSize, dispatch]);
  return (
    <div className=" flex items-center justify-center h-screen">
      <Board></Board>
    </div>
  );
}

export default App;
