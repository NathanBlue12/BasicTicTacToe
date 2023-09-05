const cells = document.querySelectorAll('.cell');
let currentPlayer = 'X';
let gameFinished = false;

cells.forEach(cell => {
  cell.addEventListener('click', () => {
    if (cell.textContent === '' && !gameFinished) {
      cell.textContent = currentPlayer;
      if (checkWinner()) {
        displayWinner(currentPlayer);
      } else if ([...cells].every(cell => cell.textContent !== '')) {
        displayDraw();
      } else {
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
      }
    }
  });
});

function checkWinner() {
  const winningCombos = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
    [0, 4, 8], [2, 4, 6] // Diagonals
  ];

  for (const combo of winningCombos) {
    const [a, b, c] = combo;
    if (cells[a].textContent && cells[a].textContent === cells[b].textContent && cells[a].textContent === cells[c].textContent) {
      return true;
    }
  }
  return false;
}

function displayWinner(player) {
  gameFinished = true;
  const winningCombos = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
    [0, 4, 8], [2, 4, 6] // Diagonals
  ];

  for (const combo of winningCombos) {
    const [a, b, c] = combo;
    if (cells[a].textContent && cells[a].textContent === cells[b].textContent && cells[a].textContent === cells[c].textContent) {
      cells[a].classList.add('winner');
      cells[b].classList.add('winner');
      cells[c].classList.add('winner');
      break;
    }
  }

  alert(`${player} is the winner!`);
}

function displayDraw() {
  gameFinished = true;
  alert('The match is a draw.');
}
