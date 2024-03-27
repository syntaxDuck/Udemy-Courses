import { useState } from "react";

import Player from "./components/Player/Player";
import GameBoard from "./components/GameBoard/GameBoard";
import Log from "./components/Log/Log";
import GameOver from "./components/GameOver/GameOver";
import { WINNING_COMBINATIONS } from "./winning-combinations.js";

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

function deriveActivePlayer(gameLog) {
  let currentPlayer = "X";

  if (gameLog.length > 0 && gameLog[0].player === "X") {
    currentPlayer = "O";
  }

  return currentPlayer;
}

function App() {
  const [players, setPlayers] = useState({ X: "Player 1", O: "Player 2" });
  const [gameLog, setGameLog] = useState([]);

  const currentPlayer = deriveActivePlayer(gameLog);

  let gameBoard = [...initialGameBoard.map((array) => [...array])];

  for (const turn of gameLog) {
    gameBoard[turn.square.row][turn.square.col] = turn.player;
  }

  let winner = null;

  for (const combination of WINNING_COMBINATIONS) {
    const firstSquareSymbol =
      gameBoard[combination[0].row][combination[0].column];
    const secondSquareSymbol =
      gameBoard[combination[1].row][combination[1].column];
    const thirdSquareSymbol =
      gameBoard[combination[2].row][combination[2].column];

    if (
      firstSquareSymbol &&
      firstSquareSymbol === secondSquareSymbol &&
      firstSquareSymbol === thirdSquareSymbol
    ) {
      winner = players[firstSquareSymbol];
    }
  }

  const hasDraw = !winner && gameLog.length === 9;

  function handleSelectSquare(rowIndex, colIndex) {
    setGameLog((prevLog) => {
      const currentPlayer = deriveActivePlayer(prevLog);

      updatedLog = [
        { square: { row: rowIndex, col: colIndex }, player: currentPlayer },
        ...prevLog,
      ];

      return updatedLog;
    });
  }

  function handleRestart() {
    setGameLog([]);
  }

  function handlePlayerNameChange(symbol, name) {
    setPlayers((prevPlayers) => {
      return {
        ...prevPlayers,
        [symbol]: name,
      };
    });
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            initialName="Player1"
            symbol="X"
            isActive={currentPlayer === "X"}
            onNameChange={handlePlayerNameChange}
          />
          <Player
            initialName="Player2"
            symbol="O"
            isActive={currentPlayer === "O"}
            onNameChange={handlePlayerNameChange}
          />
        </ol>
        {(winner || hasDraw) && (
          <GameOver onRestart={handleRestart} winner={winner} />
        )}
        <GameBoard gameBoard={gameBoard} onSelectSquare={handleSelectSquare} />
      </div>
      <Log gameLog={gameLog} />
    </main>
  );
}

export default App;
