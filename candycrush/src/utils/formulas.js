
export const formulaForColumnOfFour = (boardSize)=>boardSize*boardSize - (3 * boardSize) -1;
export const formulaForColumnOfThree = (boardSize)=>boardSize*boardSize - (2 * boardSize) -1;

export const generateInvalidMoves = (boardSize, isFour=false)=>{
    const isInvalidMoves = [];
    for(let i= boardSize;i<=boardSize* boardSize; i=i+boardSize){
        if(isFour) isInvalidMoves.push(i-3);
        isInvalidMoves.push(i-2);
        isInvalidMoves.push(i-1);
        // isInvalidMoves.push(i);
    }
    return isInvalidMoves;
}

export const formulaForMoveBelow = (boardSize)=>{
    return boardSize*boardSize-boardSize-1;
}