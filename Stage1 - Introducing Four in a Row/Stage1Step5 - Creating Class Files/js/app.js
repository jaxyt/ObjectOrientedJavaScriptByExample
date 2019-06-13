const game = new Game();

/**
* Listens for click on `#begin-game` and calls startGame() on game object
*/
document.getElementById('begin-game').addEventListener('click', (e)=>{
    game.startGame();
    e.target.style.display = 'none';
    document.getElementById('play-area').style.opacity = '1';
})