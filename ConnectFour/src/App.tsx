/*
Here’s the extracted text of the problem:  

---

### Connect Four  

You're given a CSS file for a Connect Four game, and you need to implement the component using React.  

Connect Four is a simple 2-player game using a board with 7 columns and 6 rows. Each player takes turns, 
placing one tile at a time. When a tile is placed in a column, it must fall down to the lowest possible 
row visually. The first player to achieve four of their tiles in a row (horizontally, vertically, 
or diagonally) wins.  

When the component first mounts, the board is empty. The board is a `<div>` with the class of `"board"`. 
Inside this `<div>`, there are 7 other `<div>` elements, each with the class of `"column"` to represent one 
column. Each column then contains 6 `<div>` elements, each with the class of `"tile"`, one for each row. 
The first tile corresponds to the top row, while the last tile corresponds to the bottom row.  

This initial output should look like this:  

```html
<div class="board">
  <div class="column">
    <div class="tile"></div>
    ...
    <!-- 6 total tiles -->
    <div class="tile"></div>
  </div>
  ...
  <!-- 7 total columns -->
  <div class="column">
    <div class="tile"></div>
    ...
    <!-- 6 total tiles -->
    <div class="tile"></div>
  </div>
</div>
```

Note that while there are various correct ways to create a board markup for this style of game, 
your solution must follow this format in order for the CSS and tests to work properly.  

When the board is clicked on, a move is played for the current player, starting with player 1. 
A tile is placed in the column that was clicked on, at the lowest possible row. For example, 
clicking on the last column of a new board would make a move for player one, taking the bottom right tile.  

When a player claims a tile, that tile has a `<div>` nested inside of it with the class of `"player"` 
as well as either `"player-1"` or `"player-2"`, depending on who claimed the tile. 
For example, after clicking on the last column of a new board, the last tile would look like this:  

```html
<div class="tile">
  <div class="player player-1"></div>
</div>
```

When a player wins, an `<h1>` is added above the board with the text `"Player 1 Wins"` or `"Player 2 Wins"`,
depending on who won. At this point, the game ends and clicking on the board should no longer make new moves. 
If there are no more tiles remaining, then clicking on the board should no longer have an effect, but no `<h1>` is displayed.  

When the game is over (either by a player winning or the board filling up), a button with the text `"Restart"` 
is added below the board. When this button is clicked, the game completely resets, allowing it to be played 
again.  

Your component has already been rendered to the DOM inside of a `#root` `<div>` directly in the body 
with the CSS imported.  */
import { useState } from "react";
import "./App.css";
import ConnectFour from "./ConnectFour";

function App() {
  return (
    <>
      <ConnectFour />
    </>
  );
}

export default App;
