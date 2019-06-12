class Space {
    constructor(x, y){
        this.x = x;
        this.y = y;
        this.id = `space-${this.x}-${this.y}`;
        this.token = null;
    }
}