jest.mock('../gameBoard')
const GameBoard  =  require('./gameBoard')
const game = jest.fn()
GameBoard.mockImplementation(() =>{
    return{
        gameBoard: game
    }
})

const gameBoard = new GameBoard(10)
gameBoard.getLength()


describe('basic unit test of gameBoard',()=>{
    beforeEach(() => {
        gameBoard = new gameBoard(10) 
    })
    test('gameBoard instance correctly initiate',() =>{
        expect(gameBoard).toBeInstanceOf(GameBoard)
    })
 
})





