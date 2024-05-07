import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import Tile from './Tile';

const Board = () => {
    const board = useSelector((state)=>state.candyCrush.board);
    const boardSize = useSelector((state)=>state.candyCrush.boardSize)
  return (
    <div className='flex flex-wrap rounded-lg' style={{width: `${6.25 * boardSize}rem`, display: 'flex', flexWrap: 'wrap'}}>
        {
            board.map((candy, index)=>(
                <Tile candy={candy} key={index} candyId={index}></Tile>
            ))
        }
    </div>
  )
}

export default Board;