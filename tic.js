// ==========================================
// 1. PLAYER FACTORY (Reusable blueprint)
// ==========================================
const Player = (name, mark) => {
  return { name, mark };
};

// ==========================================
// 2. GAMEBOARD MODULE (IIFE Singleton)
// ==========================================
const Gameboard = (() => {
  const board = ["", "", "", "", "", "", "", "", ""];

  const getBoard = () => board;

  const setCell = (index, mark) => {
    if (index >= 0 && index < board.length && board[index] === "") {
      board[index] = mark;
      return true;
    }
    return false;
  };

  const resetBoard = () => {
    for (let i = 0; i < board.length; i++) {
      board[i] = "";
    }
  };

  return { getBoard, setCell, resetBoard };
})();

// ==========================================
// 3. GAME CONTROLLER MODULE (IIFE Singleton)
// ==========================================
const gameController = (() => {
  let player1 = Player("Player 1", "X");
  let player2 = Player("Player 2", "O");

  let activePlayer = player1;
  let isGameOver = false;

  const winningCombinations = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
    [0, 4, 8], [2, 4, 6]             // Diagonals
  ];

  const setPlayerNames = (name1, name2) => {
    player1.name = name1.trim() !== "" ? name1 : "Player 1";
    player2.name = name2.trim() !== "" ? name2 : "Player 2";
  };

  const getCurrentPlayer = () => activePlayer;
  const getIsGameOver = () => isGameOver;

  const switchTurn = () => {
    activePlayer = activePlayer === player1 ? player2 : player1;
  };

  const checkWinner = () => {
    const currentBoard = Gameboard.getBoard();

    for (let combination of winningCombinations) {
      const [a, b, c] = combination;
      if (
        currentBoard[a] &&
        currentBoard[a] === currentBoard[b] &&
        currentBoard[a] === currentBoard[c]
      ) {
        return currentBoard[a];
      }
    }

    if (!currentBoard.includes("")) {
      return "Tie";
    }

    return null;
  };

  const playRound = (index) => {
    if (isGameOver) return null;

    const success = Gameboard.setCell(index, activePlayer.mark);
    if (!success) return null;

    const winner = checkWinner();

    if (winner) {
      isGameOver = true;
      return winner;
    }

    switchTurn();
    return null;
  };

  const restartGame = () => {
    Gameboard.resetBoard();
    activePlayer = player1;
    isGameOver = false;
  };

  return {
    playRound,
    getCurrentPlayer,
    getIsGameOver,
    restartGame,
    setPlayerNames,
    getBoard: Gameboard.getBoard
  };
})();

// ==========================================
// 4. DISPLAY CONTROLLER MODULE (IIFE Singleton)
// ==========================================
const displayController = (() => {
  const cellElements = document.querySelectorAll(".cell");
  const statusElement = document.getElementById("status-display");
  const restartBtn = document.getElementById("restart-btn");
  const startBtn = document.getElementById("start-btn");
  const p1Input = document.getElementById("player1-name");
  const p2Input = document.getElementById("player2-name");

  const updateUI = () => {
    const board = Gameboard.getBoard();
    const activePlayer = gameController.getCurrentPlayer();

    cellElements.forEach((cell, index) => {
      cell.textContent = board[index];
      if (board[index] !== "") {
        cell.disabled = true;
      }
    });

    if (!gameController.getIsGameOver()) {
      statusElement.textContent = `TURN: ${activePlayer.name} (${activePlayer.mark})`;
    }
  };

  // Set names event listener
  startBtn.addEventListener("click", () => {
    gameController.setPlayerNames(p1Input.value, p2Input.value);
    if (!gameController.getIsGameOver()) {
      const activePlayer = gameController.getCurrentPlayer();
      statusElement.textContent = `TURN: ${activePlayer.name} (${activePlayer.mark})`;
    }
  });

  // Cell clicks event listener
  cellElements.forEach((cell) => {
    cell.addEventListener("click", (e) => {
      const index = parseInt(e.target.dataset.index);
      const winner = gameController.playRound(index);

      updateUI();

      if (winner) {
        if (winner === "Tie") {
          statusElement.textContent = "DRAW! AGAIN, FROM THE TOP!";
        } else {
          const winnerName = gameController.getCurrentPlayer().name;
          statusElement.textContent = `VICTORY! ${winnerName} (${winner}) CRUSHED IT!`;
        }
        cellElements.forEach((c) => (c.disabled = true));
      }
    });
  });

  // Restart game event listener
  restartBtn.addEventListener("click", () => {
    gameController.restartGame();
    cellElements.forEach((c) => {
      c.disabled = false;
      c.textContent = "";
    });
    const activePlayer = gameController.getCurrentPlayer();
    statusElement.textContent = `TURN: ${activePlayer.name} (${activePlayer.mark})`;
  });

  return { updateUI };
})();