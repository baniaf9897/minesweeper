import {GameBoard} from '../gameBoard'



describe('basic unit test of gameBoard',()=>{
    let gameBoard 
    beforeEach(() => {
        gameBoard = new gameBoard(10) 
    })
    test('gameBoard instance correctly initiate',() =>{
        expect(gameBoard).toBeInstanceOf(GameBoard)
    })
 
})





