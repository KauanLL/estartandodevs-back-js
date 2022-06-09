const emptyString = '  ';
let countPlayerMovement = 0
const boardData = Array(9).fill(emptyString);
const players = {
  1: 'x',
  2: 'o',
};
let currentPlayer = players[1];

function drawBoard(positions) { 
  console.log(`
    ${positions[0]} | ${positions[1]} | ${positions[2]}
    -----------
    ${positions[3]} | ${positions[4]} | ${positions[5]}
    -----------
    ${positions[6]} | ${positions[7]} | ${positions[8]}
  `);
}

function showTutorial() { 
  console.log(`
  ### Escolha a posiçao que deseja jogar baseado no tabuleiro abaixo ###

     0 | 1 | 2
    -----------
     3 | 4 | 5
    -----------
     6 | 7 | 8

  ######################################################################
  `);
}

function isEmpty(position) {
  return boardData[position] === emptyString;
}

/* function changePlayer() {
  if (currentPlayer === players[1]) {
    currentPlayer = players[2];
  } else {
    currentPlayer = players[1];
  }
} */

function changePlayer() {
    currentPlayer === players[1] ? currentPlayer = players[2] : currentPlayer = players[1];
}

function setPlayerMovement(position) {
  if (isEmpty(position)) {
    boardData[position] = currentPlayer;
    countPlayerMovement += 1
    if (countPlayerMovement === boardData.length) {console.log(`DEU VELHA`)}
    changePlayer();
  } else {
    console.log(`A posição ${position} já foi usada`);
  }
}

// Posiçoes possiveis
//012  345  678 036 147 258 642 048
function winner(position) {
  if (position[0] === players[1] &&
      position[1] === players[1] &&
      position[2] === players[1] ||
      position[3] === players[1] &&
      position[4] === players[1] &&
      position[5] === players[1] ||
      position[6] === players[1] &&
      position[7] === players[1] &&
      position[8] === players[1] ||
      position[0] === players[1] &&
      position[3] === players[1] &&
      position[6] === players[1] ||
      position[1] === players[1] &&
      position[4] === players[1] &&
      position[7] === players[1] ||
      position[2] === players[1] &&
      position[5] === players[1] &&
      position[8] === players[1] ||
      position[6] === players[1] &&
      position[4] === players[1] &&
      position[2] === players[1] ||
      position[0] === players[1] &&
      position[4] === players[1] &&
      position[8] === players[1]) {
    return console.log(`O player 1 ganhou`)
  } else if (position[0] === players[2] &&
    position[1] === players[2] &&
    position[2] === players[2] ||
    position[3] === players[2] &&
    position[4] === players[2] &&
    position[5] === players[2] ||
    position[6] === players[2] &&
    position[7] === players[2] &&
    position[8] === players[2] ||
    position[0] === players[2] &&
    position[3] === players[2] &&
    position[6] === players[2] ||
    position[1] === players[2] &&
    position[4] === players[2] &&
    position[7] === players[2] ||
    position[2] === players[2] &&
    position[5] === players[2] &&
    position[8] === players[2] ||
    position[6] === players[2] &&
    position[4] === players[2] &&
    position[2] === players[2] ||
    position[0] === players[2] &&
    position[4] === players[2] &&
    position[8] === players[2]) {
  return console.log(`O player 2 venceu`)
  }    
}

setPlayerMovement(0);
setPlayerMovement(5);
setPlayerMovement(1);
setPlayerMovement(3);
setPlayerMovement(2);
setPlayerMovement(4);
setPlayerMovement(7);
setPlayerMovement(8);
setPlayerMovement(6);
drawBoard(boardData);
winner(boardData);



/* showTutorial();
const prompt = require('prompt-sync')();
const jogada = prompt('QUal a sjoga');

setPlayerMovement(jogada);
drawBoard(boardData);
winner(boardData);

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question(`Qual a primeira jogada? `, jogada => {
  setPlayerMovement(jogada);
  drawBoard(boardData);
  readline.close();
}); 

setPlayerMovement(jogada);
 */
