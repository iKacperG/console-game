const pickRandom = require('./pick_random')

 const constructBoard = (options) => {
    let board = [];

    for (let rows=0; rows<=63; rows++) {
            board[rows]=[]
        for (let cols = 0; cols<=63; cols++){

            if (rows === 0 || rows === 63 || cols === 0 || cols === 63){
                board[rows][cols]='X'
            }
            else if((board[rows-1][cols]==='X' && board[rows][cols-1] !== 'X') || (board[rows][cols-1]==='X' && board[rows-1][cols]!=='X')){
                board[rows][cols]='X'
            }
            else{
                board[rows][cols]=' '
            }
        }
    }
return board
 }

// (pickRandom(0,1)===1) &&

module.exports = constructBoard
