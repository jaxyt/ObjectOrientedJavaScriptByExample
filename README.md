# ObjectOrientedJavaScriptByExample


assinment 1:
    1: 
        the board,
            properties,
                rows,
                columns,
                top,
                bottom
                holes
            actions
                stopToken,
                emptyBoard
        the game,
            rules,
                winning
                    vertically
                    horizontally
                    diagonally
                tie
                turns
            actions
                reset 
        the players,
            properties,
                playerNumber (or name)
                amountOfTokens
                tokenColor
                turn
            actions
                pickupToken
                moveLeft
                moveRight
                dropToken
        space,
            physics
                gravity,
                collisions 
        the tokens
            properties,
                color
                position
            actions
                fall 
    2: 
        a)
            two players can play
            players switch turns after every move;
            during a turn a player can pick up a token, move the token left or right, within the bounds of the width of the top of the board, and then drop a token in the desired hole;
            the token can fall until it collides with either the bottom of the board or another token beneath it;
            if the total amount of turns is greater than 7 or less than the with multiplied by the height of the board;
                if four of the same colored tokens are aligned horizontally, vertically, or diagonally;
                    then the player whose color corresponds to the aligned tokens wins;
                otherwise the game is a tie;
            if there is a winner or the game is tied;
                the board will reset;
        b) 
            i already broke down the games components above;
            when the PLAYER DROPS a TOKEN, the TOKEN FALLS, and the PLAYERs SWITCH TURNs;
            when a TOKEN is FALLing, if the next POSITION beneath it is a FILLED HOLE or the BOTTOM of the BOARD, the TOKEN STOPSs
            when a TOKEN STOPs FALLing, if the HOLE above it, below it, or diagonal to it, are FILLED and the TOKEN is the SAMECOLOR, repeat looking until untrue;
            when a PLAYER WINs or there is a TIE, the BOARD EMPTYs;
        c) 
            the logic will be handled in the app.js file;
    3: Player, Token, Hole
