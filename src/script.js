"use strict";

// TODO - write your code here.

//get random int from 1 to 10
const randomDamage = () => Math.floor(Math.random() * 10) + 1;

const chooseOption = (opt1, opt2) => {
  let randNum = Math.round(Math.random());
  //console.log(randNum);
  return randNum === 0 ? opt1 : opt2;
};

const attackPlayer = function (health) {
  return health - randomDamage();
};

const logHealth = (player, health) =>
  console.log(`${player} health: ${health}`);

const logDeath = (winner, loser) => console.log(`${winner} defeated ${loser}`);

const isDead = (health) => {
  return health <= 0 ? true : false;
};

//console.log(isDead(-10));

function fight(player1, player2, player1Health, player2Health) {
  while (true) {
    //randomly pick who is attacking
    let attacker = chooseOption(player1, player2);
    //console.log(attacker);
    //attacker is player1
    if (attacker === player1) {
      player2Health = attackPlayer(player2Health);
      logHealth(player2, player2Health);
      if (isDead(player2Health)) {
        logDeath(player1, player2);
        break;
      }
    }
    //attacker was player 2
    else {
      player1Health = attackPlayer(player1Health);
      logHealth(player1, player1Health);
      if (isDead(player1Health)) {
        logDeath(player2, player1);
        break;
      }
    }
  }
}

fight("Goliath", "David", 60, 25);
