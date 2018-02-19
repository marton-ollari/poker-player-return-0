class Player {
  static get VERSION() {
    return '0.1';
  }

  static betRequest(gameState, bet) {
    var in_action = gameState.in_action;

    var card1 = gameState.players[in_action].hole_cards[0];
    var card2 = gameState.players[in_action].hole_cards[1];

    card1 = Player.cardRankValue(card1);
    card2 = Player.cardRankValue(card2);


    var max_our_Money = gameState.players[in_action].stack;
    if(card1.rank == card2.rank){
      bet(max_our_Money);
    } else if (gameState.orbits = 0) {
      //bet(parseint(max_our_Money));
      bet(0);
    } else if (parseInt(card1.rank + card2.rank) < 16) {
      bet(0);
    } else {
      var max = 0;
      for (var i = 0; i < gameState.players.length; i++) {
        if (gameState.players[i].bet > max) {
          max = gameState.players[i].bet;
        }
      }
      max += gameState.minimum_raise;
      console.log("-----------------------------------------");
      console.log(max);
      console.log("-----------------------------------------");
      bet(max);
    }
  }


  static showdown(gameState) {
  }

  static cardRankValue(card) {
    switch (card.rank) {

      case '2' :
        card.rank = 2;
        break;
      case '3' :
        card.rank = 3;
        break;
      case '4' :
        card.rank = 4;
        break;
      case '5' :
        card.rank = 5;
        break;
      case '6' :
        card.rank = 6;
        break;
      case '7' :
        card.rank = 7;
        break;
      case '8' :
        card.rank = 8;
        break;
      case '9' :
        card.rank = 9;
        break;
      case '10' :
        card.rank = 10;
        break;
      case 'J' :
        card.rank = 11;
        break;
      case 'Q' :
        card.rank = 12;
        break;
      case 'K' :
        card.rank = 13;
        break;
      case 'A' :
        card.rank = 14;
        break;
    }
    return card;
  }
}


module.exports = Player;
