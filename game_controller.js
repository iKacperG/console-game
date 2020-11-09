
const construct = require('./construct_board.js')
const render = require('./render_board.js')



let options = {
    mode: 'random'
}

class GameController {

    runGame = () => {
        const board = construct(options)
        render(board)
    }
}

const controller = new GameController()

controller.runGame();