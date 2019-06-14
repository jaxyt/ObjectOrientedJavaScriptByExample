class Token {
    constructor(index, owner){
        this.owner = owner;
        this.id = `token-${index}-${owner.id}`;
        this.dropped = false;
        this.columnLocation = 0;
    }

    /**
     * Draws new element token
     */
    drawHTMLToken(){
        const token = document.createElement('token');
        document.getElementById('game-board-underlay').appendChild(token);
        token.setAttribute('id', this.id);
        token.setAttribute('class', 'token');
        token.style.backgroundColor = this.owner.color;
    }

    get htmlToken(){
        return document.getElementById(this.id);
    }

    get offsetLeft(){
       return this.htmlToken.offsetLeft
    }

    moveLeft(){
        if (this.columnLocation > 0) {
            this.htmlToken.style.left = this.htmlToken.offsetLeft - 76;
            this.columnLocation -= 1; 
        }
        
    }
    
    moveRight(columns){
        if (this.columnLocation < columns - 1) {
            this.htmlToken.style.left = this.htmlToken.offsetLeft + 76;
            this.columnLocation += 1;
        }
        
    }
}