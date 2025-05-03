* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: Arial, sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f4f4f4;
}

.container {
  text-align: center;
}

#gameInfo {
  margin-bottom: 20px;
}

#turnText {
  font-size: 18px;
}

#chessboard {
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-template-rows: repeat(8, 1fr);
  width: 80vmin;
  height: 80vmin;
  border: 2px solid #333;
}

#controls {
  margin-top: 20px;
}

button {
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
}

/* Chessboard squares */
.square {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  border: 1px solid #bbb;
  transition: background-color 0.2s ease;
}

.square:nth-child(odd) {
  background-color: #f0d9b5;
}

.square:nth-child(even) {
  background-color: #b58863;
}

.square.highlight {
  background-color: rgba(255, 255, 0, 0.5);
}

/* Dark and light pieces */
.white-piece {
  color: white;
}

.black-piece {
  color: black;
}

/* For accessibility: colors for colorblind users */
.white-square {
  background-color: #f0d9b5;
}

.black-square {
  background-color: #b58863;
}

#chessboard {
  margin: auto;
}

#controls {
  text-align: center;
}
