# tic-tac-toe

## Tech Used

-HTML
-CSS
-JavaScript

## Planning

-   Here's the planning

HTML

-   crate an empty grid of 3 by 3 in a 'main container'
-   each square of grid to be a seperate cell (div) for later manipulation
-   create a click handler for each grid cell
-   create a start game button
-   player 1
-   player 2

JS

-   when player presses 'start game button' game will begin

-   assign player a random value of X or 0 and store in var
-   using random number generoator assign player value betwwen 0 and 1
-   promt player to choose a cell, this will be stored in a DOM
-   run a loop through cells to add a click handler
-   when a box is clicked
    -   1. put the players tocken in a box
    -   2. switch players
    -   3. check if the game is over
    -   4. mark this box as not clickable (if statement)
-   players will now switch turns
-   computer will then (randomly choose) a cell, this will be stored in a variable
-   promt player to choose another cell... keep this prompt looping till game over
-   after each click players have to swap turns #(how will i code this?)
-   after clicking on a cell the allocated value will show, after this that cell will not be able to be click again for game duration.
-   if 3 cells are filled with corresponding values, that player will win and game will be over.

-   (not sure the procces of coding a winning algorithm) eg..
-   there will be 8 conditionals

# 3 crosses/zeros left to right

# 3 crosses/zeros right to left

# 3 crosses/zeros up and down

# 3 crosses/zeros down and up

# 3 crosses/zeros diagonal up, left to right

# 3 crosses/zeros diagonal up, right to left

# 3 crosses/zeros diagonal down left to right

# 3 crosses/zeros diagonal down right to left

-   show a "game won" alert on screen to victorious player
-   if all cells are filled with no corresponding 3 values both players loose and game will be over
-   show a game over "loose" alert on screen
-   promt player to play again

-   assign 2 values to each cell, 0, X

-   ![alt text](./image
-   Link to page on Github https://marcpllew.github.io/tic-tac-toe/
