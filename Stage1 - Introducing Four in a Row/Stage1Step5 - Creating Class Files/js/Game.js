class Game {
    constructor(){
        this.board = new Board();
        this.players = this.createPlayers();
        this.ready = false;
    }

    /** 
     * Creates two player objects
     * @return  {Array}    An array of two Player objects.
     */
    createPlayers(){
        const players = [new Player('Player 1', 1, `#e15258`, true), new Player('Player 2', 2, `#e59a13`)];
        return players;
    }

    /**
     * Gets game ready for play
     */
    startGame(){
        this.board.drawHTMLBoard();
        this.activePlayer.activeToken.drawHTMLToken();
        this.ready = true;
    }

    /**
     * Returns active player
     * @return {Object} player - the active player.
     */
    get activePlayer(){
        return this.players.find(player => player.active);
    }

    handleKeyDown(e){
        if(this.ready){
            if (e.key === 'ArrowDown') {
                this.activePlayer.activeToken.drop(76*5, ()=>{
                    
                });
                // const allTokens = [];
                // for (let i = 0; i < this.players.length; i++) {
                //     const player = this.players[i];
                //     for (let k = 0; k < player.tokens.length; k++) {
                //         const token = player.tokens[k];
                //         allTokens.push(token);
                //     }
                // }
                // const tokensOnBoard = allTokens.filter(toke => toke.dropped);
                // if (tokensOnBoard.length == 0) {
                //     this.activePlayer.activeToken.drop(76*5, 'placeholder');
                // } else {
                //     const tokensBeneath = tokensOnBoard.filter(tok => tok.htmlToken.offsetLeft === this.activePlayer.activeToken.offsetLeft);
                //     if (tokensBeneath.length > 0 && tokensBeneath.length < 6) {
                //         this.activePlayer.activeToken.drop(76*tokensBeneath.length, 'placeholder');
                //     } else {
                //         this.activePlayer.activeToken.drop(76*5, 'placeholder');
                //     }
                // }
                
            } else if (e.key === 'ArrowLeft') {
                this.activePlayer.activeToken.moveLeft();
            } else if (e.key === 'ArrowRight') {
                this.activePlayer.activeToken.moveRight(this.board.columns);
            }
        }
    }
}