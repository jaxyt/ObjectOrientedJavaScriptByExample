class Token {
    constructor(index, owner){
        this.owner = owner;
        this.id = `token-${index}-${owner.id}`;
        this.dropped = false;
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
}