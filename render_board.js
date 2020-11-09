

const renderBoard = (board) => {
    board.forEach((row) => {
        console.log(row.join(''));
    })
}

module.exports = renderBoard
