class Board {
    constructor(){
        this.rows = 6;
        this.columns = 7;
        this.spaces = this.createSpaces();
    }

    /** 
     * Generates 2D array of spaces. 
     * @return  {Array}     An array of space objects
     */
    createSpaces(){
        const spaces = [];
        for (let i = 0; i < this.rows; i++) {
            for (let k = 0; k < this.columns; k++) {
                const space = new Space(k, i);
                spaces.push(space);
            }
        }
        return spaces;
    }
}